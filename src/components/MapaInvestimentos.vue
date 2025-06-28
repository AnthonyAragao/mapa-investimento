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

    function initMap() {
        map.value = L.map('map', {
            center: [-10.9472, -37.0731],
            zoom: 9,
            minZoom: 7,
        });

        // https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png
        L.tileLayer('http://tile-{s}.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 19,
            noWrap: true
        }).addTo(map.value);
    }


    function initLayers() {
        layers.value.forEach(layer => {
            // Se for um grupo de layers
            if (layer.type === 'group') 
            {
                const parentGroup = L.layerGroup();
                
                layer.layers.forEach(subLayer => {
                    const subGroup = L.layerGroup();
                    
                    subLayer.items.forEach(item => {
                        let element = createMapElement(subLayer, item);
                        if (element) subGroup.addLayer(element);
                    });
                    
                    layerGroups.value[subLayer.key] = subGroup;
                    
                    if (subLayer.visible) 
                    {
                        subGroup.addTo(map.value);
                    }
                    
                    parentGroup.addLayer(subGroup);
                });
            
                layerGroups.value[layer.key] = parentGroup;
                
                if (layer.visible) 
                {
                    parentGroup.addTo(map.value);
                }
            } 

            // Se for um layer individual
            else 
            {
                const group = L.layerGroup();
                
                layer.items.forEach(item => {
                    let element = createMapElement(layer, item);
                    if (element) group.addLayer(element);
                });
                
                layerGroups.value[layer.key] = group;
                
                if (layer.visible) 
                {
                    group.addTo(map.value);
                }
            }
        });
    }

    const loadMalhasIBGE = async () => {
        try {
            const response = await fetch('https://servicodados.ibge.gov.br/api/v3/malhas/estados/28?formato=application/vnd.geo+json&qualidade=maxima&intrarregiao=municipio');
            const data = await response.json();

            L.geoJSON(data, {
                style: {
                    color: '#083c94',
                    weight: 0.7,
                    fillOpacity: 0.04,
                    fillColor: '#083c94'
                },
                interactive: false,
            }).addTo(map.value);
        } catch (error) {
            console.error('Erro ao carregar as malhas do IBGE:', error);
        }
    };

    
    // Função auxiliar para criar elementos do mapa
    function createMapElement(layer, item) {
        let element;

        const options = {
            color: layer.color,
            interactive: true
        };


        if (layer.type === 'polyline') 
        {
            element = L.polyline(item.coords, {
                color: layer.color,
                weight:  1 ,...(item.options || {})
            });
        } 

        else if (layer.type === 'marker') 
        {
            let icon;

            if (layer.key === 'obras') 
            {
                icon = L.icon({
                    iconUrl: '/images/construcao.png',
                    iconSize: [24, 24],
                    popupAnchor: [0, -32],
                });
            } 
            
            else if (layer.key === 'educacao') 
            {
                icon = L.icon({
                    iconUrl: '/images/educacao.png',
                    iconSize: [24, 24],
                    iconAnchor: [16, 32],
                    popupAnchor: [0, -32],
                });
            } 
            element = L.marker(item.coords, { icon });
        }


        if (element && item.popup) 
        {
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

    
    function toggleLayer(key) {
        // Verifica se é um layer principal ou sublayer
        const layer = layerGroups.value[key];
        const layerState = findLayerState(key);
        
        if (!layer || !layerState) return;
        
        layerState.visible ? layer.addTo(map.value) : map.value.removeLayer(layer);
    }


    // Função auxiliar para encontrar o estado do layer (principal ou sublayer)
    function findLayerState(key) {
        // Procura nos layers principais
        let layer = layers.value.find(l => l.key === key);
        if (layer) return layer;
        
        // Se não encontrou, procura nas subcamadas
        for (const parentLayer of layers.value) {
            if (parentLayer.type === 'group' && parentLayer.layers) 
            {
                const subLayer = parentLayer.layers.find(l => l.key === key);
                if (subLayer) return subLayer;
            }
        }

        return null;
    }

    const checkScreen = () => isMobile.value = window.innerWidth < 768;

    const handleMouseEnter = () => {
        if (isDesktop.value) showLayers.value = true;
    }

    const handleMouseLeave = () => {
        if (isDesktop.value) showLayers.value = false;
    }

    const toggleLayersOnMobile = () => {
        if (isMobile.value) showLayers.value = !showLayers.value;
    }

    onMounted(() => {
        checkScreen()
        initMap();
        initLayers();
        loadMalhasIBGE();
    });
</script>

<template>
    <div class="flex flex-row h-screen">
        <aside class="h-screen w-76 bg-gradient-to-b from-[#083c94] via-[#173f66] to-[#2b5e85] text-white py-6 px-4 flex flex-col justify-between shadow-md">
            <!-- Logo e Título -->
            <div class="flex flex-col items-center">
                <img src="/images/logo-minimalista.png" alt="Logo Desenvolve-se" class="w-24 h-24">
            </div>

            <div class="mt-2 space-y-4 overflow-y-auto pr-1 max-h-[70vh]">
                <template v-for="layer in layers" :key="layer.key">
                    <!-- Accordion para grupos -->
                    <div v-if="layer.type === 'group'" class="bg-white rounded text-gray-800 border shadow-sm">
                        <details class="w-full group">
                            <summary
                            class="cursor-pointer px-4 py-2 font-semibold text-sm flex items-center justify-between hover:bg-gray-100 transition"
                            >
                            {{ layer.label }}
                            <svg
                                class="w-4 h-4 text-[#083c94] transition-transform group-open:rotate-90"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 5l7 7-7 7" />
                            </svg>
                            </summary>
                            <div class="pl-4 py-2 space-y-1 bg-[#f9fafb]">
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
                                    class="h-4 w-4 text-[#083c94] rounded focus:ring-blue-500"
                                    >
                                <span
                                    class="inline-block w-4 h-1 mx-1"
                                    :style="{ backgroundColor: sublayer.color || '#ccc' }"
                                    ></span>
                                <label :for="sublayer.key" class="text-xs text-gray-800">
                                {{ sublayer.label }}
                                </label>
                            </div>
                            </div>
                        </details>
                    </div>
                    <!-- Layers simples -->
                    <div v-else class="flex items-center">
                        <input
                            type="checkbox"
                            :id="layer.key"
                            v-model="layer.visible"
                            @change="toggleLayer(layer.key)"
                            class="h-4 w-4 text-[#083c94] rounded focus:ring-blue-500"
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
                        <label :for="layer.key" class="text-xs white">
                        {{ layer.label }}
                        </label>
                    </div>
                </template>
                </div>

            <!-- Subtítulo -->
            <span class="hidden md:block text-sm font-medium text-center mt-6 drop-shadow">
                Mapa de Investimentos<br />em Sergipe
            </span>
        </aside>

        <!-- Main Content -->
        <div class="flex flex-1 relative">
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