// mapFeatures.js
export const mapFeatures = [
    {
        key: 'energia',
        label: 'Linhas de Transmissão de Energia',
        visible: true,
        // color: 'rgb(202, 51, 94)',
        type: 'group',
        layers: [
            {
                key: 'energia_500',
                label: '500kV',
                visible: true,
                color: '#FF0000', // Vermelho para alta tensão
                type: 'polyline',
                items: [
                    {
                    coords: [
                        [-10.3500, -37.2000], // Xingó
                        [-10.7000, -37.0500], // Itabaiana
                        [-11.0500, -37.2500]  // Estância
                    ],
                    popup: '<b>LT Xingó-Aracaju-Estância</b><br>500kV - 150km<br>Capacidade: 2000MW'
                    },
                    {
                    coords: [
                        [-9.9000, -37.8000],  // Paulo Afonso
                        [-10.4000, -37.3000], 
                        [-10.9500, -37.0700]  // Aracaju
                    ],
                    popup: '<b>LT Paulo Afonso-Itabaiana-Aracaju</b><br>500kV - 180km'
                    }
                ]
                },
                {
                key: 'energia_230',
                label: '230kV',
                visible: true,
                color: '#FF4500', // Vermelho-alaranjado
                type: 'polyline',
                items: [
                    {
                    coords: [
                        [-10.0000, -37.5000], // Paulo Afonso
                        [-10.4000, -37.3000], // Itabaiana
                        [-10.9500, -37.0700]  // Aracaju
                    ],
                    popup: '<b>LT Paulo Afonso-Itabaiana-Aracaju</b><br>230kV - 120km'
                    },
                    {
                    coords: [
                        [-10.5000, -36.8000], // Sobradinho
                        [-10.9122, -37.0717], // Aracaju
                        [-11.0705, -37.2072]  // Tobias Barreto
                    ],
                    popup: '<b>LT Sobradinho-Aracaju-Tobias Barreto</b><br>230kV - 200km'
                    },
                    {
                    coords: [
                        [-10.3000, -38.0000], // Nossa Senhora da Glória
                        [-10.3000, -37.4000], 
                        [-10.3000, -36.8500]  // Propriá
                    ],
                    popup: '<b>LT Glória-Propriá</b><br>230kV - 150km'
                    }
                ]
                },
                {
                key: 'energia_138',
                label: '138kV',
                visible: true,
                color: '#FF8C00', // Laranja
                type: 'polyline',
                items: [
                    {
                    coords: [
                        [-10.8000, -36.9000], // Juazeiro
                        [-10.8700, -37.1000], // Lagarto
                        [-11.0100, -37.2500]  // Estância
                    ],
                    popup: '<b>LT Juazeiro-Lagarto-Estância</b><br>138kV - 80km'
                    },
                    {
                    coords: [
                        [-10.7000, -38.1000], // Canindé
                        [-10.7000, -37.6000], 
                        [-10.7000, -37.0500]  // Zona Norte
                    ],
                    popup: '<b>LT Canindé-Zona Norte</b><br>138kV - 90km'
                    },
                    {
                    coords: [
                        [-10.9472, -37.0731], // Barra dos Coqueiros
                        [-11.0101, -37.2042]  // Estância
                    ],
                    popup: '<b>LT Barra-Estância</b><br>138kV - 30km'
                    }
                ]
                },
            {
                key: 'energia_69',
                label: '69kV',
                visible: true,
                color: 'rgb(202, 51, 94)',
                type: 'polyline',
                items: [
                    { coords: [[-10.9122, -37.0717], [-10.6846, -37.4326]], popup: '<b>Linha de Transmissão</b><br>LT Propriá - Aracaju 230kV' },
                    { coords: [[-10.9472, -37.0731], [-11.0101, -37.2042]], popup: '<b>Linha de Transmissão</b><br>LT Barra dos Coqueiros - Estância 138kV' },
                    { coords: [[-10.9122, -37.0717], [-10.5741, -36.9607]], popup: '<b>Linha de Transmissão</b><br>LT Aracaju - Pirambu 69kV' },
                    { coords: [[-11.0500, -37.1900], [-11.0700, -37.2100]], popup: '<b>Linha de Transmissão</b><br>LT Estância - Cristinápolis' },
                    { coords: [[-10.8500, -37.0000], [-10.8700, -37.0200]], popup: '<b>Linha de Transmissão</b><br>LT Itaporanga - Japaratuba' },
                    { coords: [[-10.9000, -37.0300], [-10.9200, -37.0500]], popup: '<b>Linha de Transmissão</b><br>LT Aracaju Norte - Zona Industrial' },
                    { coords: [[-10.8000, -37.1000], [-10.8200, -37.1300]], popup: '<b>Linha de Transmissão</b><br>LT São Cristóvão - Laranjeiras' },
                    { coords: [[-11.0000, -37.1700], [-11.0200, -37.2000]], popup: '<b>Linha de Transmissão</b><br>LT Itabaianinha - Umbaúba' },
                    { coords: [[-10.7800, -37.0500], [-10.7900, -37.0700]], popup: '<b>Linha de Transmissão</b><br>LT Areia Branca - Boquim' },
                    { coords: [[-10.9500, -37.0800], [-10.9700, -37.0900]], popup: '<b>Linha de Transmissão</b><br>LT Aracaju Sul - Barra dos Coqueiros' },
                    { coords: [[-10.3500, -37.2000], [-10.7000, -37.0500], [-11.0500, -37.2500]], popup: '<b>LT Xingó - Aracaju - Estância</b><br>500kV' },
                    { coords: [[-10.0000, -37.5000], [-10.4000, -37.3000], [-10.9500, -37.0700]], popup: '<b>LT Paulo Afonso - Itabaiana</b><br>230kV' },
                    { coords: [[-10.5000, -36.8000], [-10.9122, -37.0717], [-11.0705, -37.2072]], popup: '<b>LT Sobradinho - Aracaju - Tobias Barreto</b><br>230kV' },
                    { coords: [[-10.8000, -36.9000], [-10.8700, -37.1000], [-11.0100, -37.2500]], popup: '<b>LT Juazeiro - Lagarto - Estância</b><br>138kV' },
                    { coords: [[-10.4000, -37.5000], [-10.6000, -37.2000], [-10.9000, -37.0500]], popup: '<b>LT Delmiro Gouveia - Aracaju</b><br>230kV' },
                    { coords: [[-10.9000, -38.0000], [-10.9000, -37.5000], [-10.9000, -37.0000]], popup: '<b>LT Oeste Sergipano - Aracaju</b><br>230kV' },
                    { coords: [[-10.7000, -38.1000], [-10.7000, -37.6000], [-10.7000, -37.0500]], popup: '<b>LT Canindé de São Francisco - Zona Norte</b><br>138kV' },
                    { coords: [[-10.3000, -38.0000], [-10.3000, -37.4000], [-10.3000, -36.8500]], popup: '<b>LT Nossa Senhora da Glória - Propriá</b><br>230kV' },
                    { coords: [[-10.1000, -37.9000], [-10.1000, -37.3000], [-10.1000, -36.7500]], popup: '<b>LT Porto da Folha - Pirambu</b><br>69kV' }
                ]
            }


        ]
    },
    {
        key: 'agua',
        label: 'Rede de Água',
        visible: true,
        color: '#0074D9',
        type: 'polyline',
        items: [
        {
            coords: [[-10.914, -37.071], [-10.921, -37.101], [-10.942, -37.110]],
            popup: 'Adutora do São Francisco - Sistema de Abastecimento de Aracaju'
        },
        {
            coords: [[-10.870, -37.250], [-10.872, -37.190], [-10.879, -37.140]],
            popup: 'Rede de distribuição - Itabaiana'
        }
        ]
    },
    {
        key: 'gas',
        label: 'Rede de Gás Canalizado - Sergás',
        visible: true,
        color: '#FF851B',
        type: 'polyline',
        items: [
        {
            coords: [[-10.900, -37.090], [-10.925, -37.070], [-10.950, -37.060]],
            popup: 'Gasoduto Aracaju-Barra dos Coqueiros'
        },
        {
            coords: [[-10.950, -37.090], [-11.000, -37.100]],
            popup: 'Rede de gás Zona de Expansão - Atalaia'
        }
        ]
    },
    {
        key: 'malha',
        label: 'Malha Viária',
        visible: false,
        color: 'gray',
        type: 'polyline',
        items: [
            { coords: [[-10.9472, -37.0731], [-11.0705, -37.2072]], popup: '<b>Rodovia BR-101</b><br>Aracaju - Estância', options: { dashArray: '5, 5' } },
            { coords: [[-10.9472, -37.0731], [-10.5741, -36.9607]], popup: '<b>Rodovia SE-100</b><br>Aracaju - Pirambu', options: { dashArray: '5, 5' } },
            { coords: [[-10.9472, -37.0731], [-10.6846, -37.4326]], popup: '<b>Rodovia BR-235</b><br>Aracaju - Itabaiana', options: { dashArray: '5, 5' } },
            { coords: [[-11.0100, -37.0900], [-11.0700, -37.2100]], popup: '<b>Rodovia SE-270</b><br>Estância - Tobias Barreto', options: { dashArray: '5, 5' } },
            { coords: [[-10.8600, -37.0600], [-10.8800, -37.0800]], popup: '<b>Rodovia SE-290</b><br>Itaporanga - Porto da Folha', options: { dashArray: '5, 5' } },
            { coords: [[-10.9100, -37.1100], [-10.9200, -37.1500]], popup: '<b>Rodovia SE-050</b><br>Sul Industrial - Poxim', options: { dashArray: '5, 5' } },
            { coords: [[-10.8000, -37.0300], [-10.8200, -37.0500]], popup: '<b>Rodovia SE-240</b><br>Laranjeiras - Riachuelo', options: { dashArray: '5, 5' } },
            { coords: [[-10.9900, -37.1300], [-11.0000, -37.1500]], popup: '<b>Rodovia BR-349</b><br>Zona Norte - Centro', options: { dashArray: '5, 5' } },
            { coords: [[-10.9300, -37.1800], [-10.9500, -37.2000]], popup: '<b>Rodovia SE-100</b><br>Barra dos Coqueiros - Mosqueiro', options: { dashArray: '5, 5' } },
            { coords: [[-10.9700, -37.2100], [-11.0100, -37.2500]], popup: '<b>Rodovia SE-270</b><br>Zona Sul - Estância', options: { dashArray: '5, 5' } }
        ]
    },
    {
        key: 'obras',
        label: 'Obras em andamento',
        visible: true,
        color: 'red',
        type: 'marker',
        items: [
            { coords: [-10.9472, -37.0731], popup: '<b>Obra em Andamento</b><br>Usina Solar Barra dos Coqueiros' },
            { coords: [-11.0705, -37.2072], popup: '<b>Obra em Andamento</b><br>Expansão Portuária de Estância' },
            { coords: [-10.9122, -37.0717], popup: '<b>Obra em Andamento</b><br>Duplicação da Av. Euclides Figueiredo' },
            { coords: [-10.9600, -37.0300], popup: '<b>Obra em Andamento</b><br>Construção de ETE Leste' },
            { coords: [-10.9100, -37.0400], popup: '<b>Obra em Andamento</b><br>Requalificação Viária Zona Norte' },
            { coords: [-10.8900, -37.0800], popup: '<b>Obra em Andamento</b><br>Implantação da Linha Verde' },
            { coords: [-10.9500, -37.1500], popup: '<b>Obra em Andamento</b><br>Nova Ponte sobre o Rio Poxim' },
            { coords: [-10.8700, -37.1000], popup: '<b>Obra em Andamento</b><br>Centro de Convenções Sul' },
            { coords: [-10.9300, -37.0600], popup: '<b>Obra em Andamento</b><br>Habitação Popular - Bairro Novo' },
            { coords: [-10.9900, -37.0700], popup: '<b>Obra em Andamento</b><br>Parque Tecnológico Zona Oeste' }
        ]
    },
    {
        key: 'senai',
        label: 'SENAI / SENAC / SEBRAE / SENAR',
        visible: true,
        color: 'green',
        type: 'marker',
        items: [
            { coords: [-10.9472, -37.0731], popup: '<b>SENAI Aracaju</b><br>Av. Tancredo Neves, 5600' },
            { coords: [-11.0705, -37.2072], popup: '<b>SEBRAE Estância</b><br>Rua Capitão Salomão, 299' },
            { coords: [-10.9000, -37.0500], popup: '<b>SENAI Zona Norte</b><br>Rua Industrial, 123' },
            { coords: [-10.9700, -37.0800], popup: '<b>SEBRAE Centro</b><br>Rua do Comércio, 88' },
            { coords: [-11.0000, -37.1500], popup: '<b>SENAR SE</b><br>Rodovia dos Agricultores, km 5' },
            { coords: [-10.9500, -37.1300], popup: '<b>SENAI Estância</b><br>Rua Industrial, 333' },
            { coords: [-10.8600, -37.0900], popup: '<b>SENAC Itabaiana</b><br>Avenida das Nações, 999' },
            { coords: [-10.9100, -37.1500], popup: '<b>SENAI Lagarto</b><br>Rua do Progresso, 45' },
            { coords: [-10.9800, -37.1200], popup: '<b>SEBRAE Nossa Senhora do Socorro</b><br>Rua Central, 22' }
        ]
    }
];
