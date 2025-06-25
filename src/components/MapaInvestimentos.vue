<script setup>
import { ref, onMounted } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { mapFeatures } from '../data/mapFeatures';

const map         = ref(null);
const layers      = ref(mapFeatures);
const layerGroups = ref({});
const showLayers  = ref(false)
const isMobile    = ref(false)
const isDesktop   = ref(true)

function checkScreen() {
    if (window.innerWidth < 768) {
        isMobile.value = true
        isDesktop.value = false
        showLayers.value = false
    } else {
        isMobile.value = false
        isDesktop.value = true
        showLayers.value = false
    }
}


function initMap() {
  map.value = L.map('map', {
    center: [-10.9472, -37.0731],
    zoom: 9,
    minZoom: 7,
  });

  // https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19,
    noWrap: true
  }).addTo(map.value);
}

function initLayers() {
  layers.value.forEach(layer => {
    // Se for um grupo de layers
    if (layer.type === 'group') {
      const parentGroup = L.layerGroup();
      
      layer.layers.forEach(subLayer => {
        const subGroup = L.layerGroup();
        
        subLayer.items.forEach(item => {
          let element = createMapElement(subLayer, item);
          if (element) subGroup.addLayer(element);
        });
        
        layerGroups.value[subLayer.key] = subGroup;
        
        if (subLayer.visible) {
          subGroup.addTo(map.value);
        }
        
        parentGroup.addLayer(subGroup);
      });
      
      layerGroups.value[layer.key] = parentGroup;
      
      if (layer.visible) {
        parentGroup.addTo(map.value);
      }
    } 
    // Se for um layer individual
    else {
      const group = L.layerGroup();
      
      layer.items.forEach(item => {
        let element = createMapElement(layer, item);
        if (element) group.addLayer(element);
      });
      
      layerGroups.value[layer.key] = group;
      
      if (layer.visible) {
        group.addTo(map.value);
      }
    }
  });
}

// Função auxiliar para criar elementos do mapa
function createMapElement(layer, item) {
  let element;
  const options = {
    color: layer.color,
    interactive: true
  };

  if (layer.type === 'polyline') {
    element = L.polyline(item.coords, {
      color: layer.color,
      weight:  1 ,...(item.options || {})
    });
  } 
  else if (layer.type === 'marker') {
    let icon;
    if (layer.key === 'obras') {
      icon = L.icon({
        iconUrl: '/images/construcao.png',
        iconSize: [24, 24],
        popupAnchor: [0, -32],
      });
    } else if (layer.key === 'educacao') {
      icon = L.icon({
        iconUrl: '/images/educacao.png',
        iconSize: [24, 24],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      });
    } else {
      icon = createCustomIcon(layer.color);
    }
    element = L.marker(item.coords, { icon });
  }

  if (element && item.popup) {
    element.bindPopup(item.popup, { 
      autoClose: false,
      className: `${layer.key}-popup`
    });
    
    element.on('click', function(e) {
      this.openPopup(e.latlng);
    });
  }

  return element;
}
const loadMalhasIBGE = async () => {
    try {
        const response = await fetch('https://servicodados.ibge.gov.br/api/v3/malhas/estados/28?formato=application/vnd.geo+json&qualidade=maxima&intrarregiao=municipio');
        const data = await response.json();

        L.geoJSON(data, {
            style: {
                color: '#223D58',
                weight: 0.7,
                fillOpacity: 0.04,
                fillColor: '#223D58'
            },
            interactive: false,
        }).addTo(map.value);
    } catch (error) {
        console.error('Erro ao carregar as malhas do IBGE:', error);
    }
};

function createCustomIcon(color) {
  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="background-color: ${color}; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white"></div>`,
    iconSize: [16, 16]
  });
}

function toggleLayer(key) {
  // Verifica se é um layer principal ou sublayer
  const layer = layerGroups.value[key];
  const layerState = findLayerState(key);
  
  if (!layer || !layerState) return;
  
  if (layerState.visible) {
    layer.addTo(map.value);
  } else {
    map.value.removeLayer(layer);
  }
}

// Função auxiliar para encontrar o estado do layer (principal ou sublayer)
function findLayerState(key) {
  // Procura nos layers principais
  let layer = layers.value.find(l => l.key === key);
  if (layer) return layer;
  
  // Se não encontrou, procura nas subcamadas
  for (const parentLayer of layers.value) {
    if (parentLayer.type === 'group' && parentLayer.layers) {
      const subLayer = parentLayer.layers.find(l => l.key === key);
      if (subLayer) return subLayer;
    }
  }
  return null;
}

onMounted(() => {
  checkScreen()
  window.addEventListener('resize', checkScreen)
  initMap();
  initLayers();
  loadMalhasIBGE();
});
</script>

<template>
    <div class="flex flex-col h-screen">
        <header class="w-full bg-gradient-to-r from-[#223D58] via-[#2b537a] to-[#3a7ca5] text-white py-4 px-6 flex items-center justify-between shadow-md">
            <div class="flex items-center space-x-3">
                    <i class="fas fa-map-marked-alt text-3xl drop-shadow"></i>
                    <h1 class="text-2xl md:text-3xl font-bold tracking-tight drop-shadow">GeoInvest</h1>
            </div>

            <span class="hidden md:block text-md font-medium drop-shadow">Mapa de Investimentos em Sergipe</span>
        </header>

        <!-- Main Content -->
        <div class="flex flex-1 relative">
            <!-- <div class="hidden md:block bg-[#223D58] w-14 px-2 flex-col items-center">
                <button class="text-gray-200 text-lg mt-4 mb-2">
                    <i class="fas fa-bars"></i>
                </button>
            </div> -->

            <!-- Botão flutuante de camadas -->
            <div
                class="absolute top-4 right-4 z-[1000] group"
                @mouseenter="isDesktop && (showLayers = true)"
                @mouseleave="isDesktop && (showLayers = false)"
            >
                <button
                    class="bg-white text-[#223D58] px-5 py-3  rounded-md shadow-lg hover:bg-gray-100 transition-all border border-gray-400"
                    title="Camadas"
                    @click="isMobile && (showLayers = !showLayers)"
                >
                    <i class="fas fa-layer-group text-xl"></i>
                </button>

                <!-- Painel de camadas -->
                <div
                    v-if="showLayers"
                    class="absolute top-16 right-0 md:top-0 md:right-12 bg-white rounded-lg shadow-xl p-4 w-72 md:w-96"
                    @click.stop
                >
                    <div class="space-y-2">
                        <template v-for="layer in layers" :key="layer.key">
                            <!-- Se for um grupo (como energia), mostra o label e as subcamadas -->
                            <div v-if="layer.type === 'group'">
                                <div class="font-semibold text-[#223D58] text-sm mb-1">{{ layer.label }}</div>
                                    <div class="pl-4 space-y-1">
                                        <div
                                            v-for="sublayer in layer.layers"
                                            :key="sublayer.key"
                                            class="flex items-center"
                                        >
                                            <input
                                                type="checkbox"
                                                :id="sublayer.key"
                                                v-model="sublayer.visible"
                                                @change="toggleLayer(sublayer.key)"
                                                class="h-4 w-4 text-[#223D58] rounded focus:ring-blue-500"
                                            >
                                            <span
                                                class="inline-block w-4 h-1 mx-1"
                                                :style="{ backgroundColor: sublayer.color || '#ccc' }"
                                            ></span>
                                            <label :for="sublayer.key" class="text-gray-700 text-xs">{{ sublayer.label }}</label>
                                    </div>
                                </div>
                            </div>

                            <!-- Camadas normais (não são grupos) -->
                            <div v-else class="flex items-center">
                                <input
                                    type="checkbox"
                                    :id="layer.key"
                                    v-model="layer.visible"
                                    @change="toggleLayer(layer.key)"
                                    class="h-4 w-4 text-[#223D58] rounded focus:ring-blue-500"
                                >

                                <template v-if="layer.key === 'obras'">
                                    <img src="/images/construcao.png" alt="Ícone de Obra" class="w-4 h-4 mx-1">
                                </template>

                                <template v-else-if="layer.key === 'educacao'">
                                    <img src="/images/educacao.png" alt="Ícone de Educação" class="w-4 h-4 mx-1">
                                </template>

                                <template v-else>
                                    <span
                                            class="inline-block w-4 h-1 mx-1"
                                            :style="{ backgroundColor: layer.color || '#ccc' }"
                                    ></span>
                                </template>
                                <label :for="layer.key" class="text-gray-700 text-xs">{{ layer.label }}</label>
                            </div>
                        </template>
                    </div>
                </div>
            </div>

            <!-- Mapa -->
            <div id="map" class="flex-1"></div>
        </div>
    </div>
</template>

<style>
    .leaflet-control-zoom-in,
    .leaflet-control-zoom-out {
        font-size: 1.7rem !important;
        width: 48px !important;
        height: 48px !important;
        line-height: 48px !important;
        z-index: 10 !important;
    }
    .leaflet-control-zoom {
        border-radius: 10px !important;
        overflow: hidden;
    }

    @media (max-width: 767px) {
        .leaflet-control-zoom-in,
        .leaflet-control-zoom-out {
            font-size: 1.1rem !important;
            width: 32px !important;
            height: 32px !important;
            line-height: 32px !important;
        }
    }
</style>
