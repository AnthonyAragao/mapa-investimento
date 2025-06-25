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
                label: 'Linha de transmissão 500kV',
                visible: true,
                color: '#8B0000', // Vermelho para alta tensão
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
                label: 'Linha de transmissão 230kV',
                visible: true,
                color: '#b22222', 
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
                    },

                    { coords: [[-10.4000, -37.5000], [-10.6000, -37.2000], [-10.9000, -37.0500]], popup: '<b>LT Delmiro Gouveia - Aracaju</b><br>230kV' },
                    { coords: [[-10.9000, -38.0000], [-10.9000, -37.5000], [-10.9000, -37.0000]], popup: '<b>LT Oeste Sergipano - Aracaju</b><br>230kV' },
                    { coords: [[-10.9122, -37.0717], [-10.6846, -37.4326]], popup: '<b>Linha de Transmissão</b><br>LT Propriá - Aracaju 230kV' },
                ]
            },
            {
                key: 'energia_138',
                label: 'Linha de transmissão 138kV',
                visible: true,
                color: '#CD5C5C', 
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
                    },
                ]
            },
            {
                key: 'energia_69',
                label: 'Linha de transmissão 69kV',
                visible: true,
                color: '#F08080',
                type: 'polyline',
                items: [
                    { coords: [[-10.9122, -37.0717], [-10.5741, -36.9607]], popup: '<b>Linha de Transmissão</b><br>LT Aracaju - Pirambu 69kV' },
                    { coords: [[-10.1000, -37.9000], [-10.1000, -37.3000], [-10.1000, -36.7500]], popup: '<b>LT Porto da Folha - Pirambu</b><br>69kV' },
                    { coords: [[-11.0500, -37.1900], [-11.0700, -37.2100]], popup: '<b>Linha de Transmissão</b><br>LT Estância - Cristinápolis' },
                    { coords: [[-10.8500, -37.0000], [-10.8700, -37.0200]], popup: '<b>Linha de Transmissão</b><br>LT Itaporanga - Japaratuba' },
                    { coords: [[-10.9000, -37.0300], [-10.9200, -37.0500]], popup: '<b>Linha de Transmissão</b><br>LT Aracaju Norte - Zona Industrial' },
                    { coords: [[-10.8000, -37.1000], [-10.8200, -37.1300]], popup: '<b>Linha de Transmissão</b><br>LT São Cristóvão - Laranjeiras' },
                    { coords: [[-11.0000, -37.1700], [-11.0200, -37.2000]], popup: '<b>Linha de Transmissão</b><br>LT Itabaianinha - Umbaúba' },
                    { coords: [[-10.7800, -37.0500], [-10.7900, -37.0700]], popup: '<b>Linha de Transmissão</b><br>LT Areia Branca - Boquim' },
                    { coords: [[-10.9500, -37.0800], [-10.9700, -37.0900]], popup: '<b>Linha de Transmissão</b><br>LT Aracaju Sul - Barra dos Coqueiros' },
                ]
            }
        ]
    },
    {
        key: 'agua',
        label: 'Sistema de Abastecimento de Água',
        visible: true,
        color: '#1E90FF',
        type: 'polyline',
        items: [
            {
                coords: [
                    [-10.914, -37.071], // Aracaju
                    [-10.921, -37.101], 
                    [-10.942, -37.110]  // Terminal São Francisco
                ],
                popup: `<b>Adutora do São Francisco</b><br>
                        Extensão: 45km<br>
                        Capacidade: 2.500 L/s<br>
                        População atendida: 800.000 hab`
            },
            {
                coords: [
                    [-10.870, -37.250], // Itabaiana
                    [-10.872, -37.190],
                    [-10.879, -37.140]  // Ribeirópolis
                ],
                popup: `<b>Sistema Itabaiana-Ribeirópolis</b><br>
                        Extensão: 32km<br>
                        Diâmetro: 400mm`
            },
            {
                coords: [
                    [-11.050, -37.200], // Estância
                    [-11.020, -37.180],
                    [-10.990, -37.150]  // Santa Luzia
                ],
                popup: `<b>Adutora Estância-Santa Luzia</b><br>
                        Extensão: 25km<br>
                        Material: PVC 300mm`
            },
            {
                coords: [
                    [-10.500, -37.450], // N. S. da Glória
                    [-10.550, -37.400],
                    [-10.600, -37.350]  // Poço Verde
                ],
                popup: `<b>Sistema Glória-Poço Verde</b><br>
                        Extensão: 40km<br>
                        Fonte: Açude Jacaré`
            }
        ]
    },
    {
        key: 'gas',
        label: 'Rede de Gás Canalizado - Sergás',
        visible: true,
        color: '#FF6347',
        type: 'polyline',
        items: [
            {
                coords: [
                    [-10.900, -37.090], // Aracaju
                    [-10.925, -37.070], 
                    [-10.950, -37.060]  // Barra dos Coqueiros
                ],
                popup: `<b>Gasoduto Aracaju-Barra</b><br>
                        Extensão: 15km<br>
                        Diâmetro: 12"<br>
                        Capacidade: 50.000 m³/dia`
            },
            {
                coords: [
                    [-10.950, -37.090], // Aracaju
                    [-11.000, -37.100]  // Atalaia
                ],
                popup: `<b>Ramal Atalaia</b><br>
                        Extensão: 20km<br>
                        Investimento: R$ 35 milhões`
            },
            {
                coords: [
                    [-10.850, -37.100], // São Cristóvão
                    [-10.880, -37.120], 
                    [-10.900, -37.150]  // Laranjeiras
                ],
                popup: `<b>Gasoduto Histórico</b><br>
                        Primeira rede do estado<br>
                        Ano de implantação: 1998`
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
            { coords: [[-10.9700, -37.2100], [-11.0100, -37.2500]], popup: '<b>Rodovia SE-270</b><br>Zona Sul - Estância', options: { dashArray: '5, 5' } },
            {
                coords: [
                    [-10.9472, -37.0731], // Aracaju
                    [-11.0705, -37.2072]  // Estância
                ],
                popup: `<b>BR-101</b><br>
                        Extensão: 75km<br>
                        Concessionária: ARTESP<br>
                        Pedágio: R$ 8,50`,
                options: { dashArray: '5, 5' }
            },
            {
                coords: [
                    [-10.9472, -37.0731], // Aracaju
                    [-10.5741, -36.9607]  // Pirambu
                ],
                popup: `<b>SE-100</b><br>
                        Extensão: 65km<br>
                        Status: Duplicação em andamento`,
                options: { dashArray: '5, 5' }
            },
            {
                coords: [
                    [-10.600, -37.750], // N. S. da Glória
                    [-10.700, -37.500], // Itabaiana
                    [-10.900, -37.100]  // Aracaju
                ],
                popup: `<b>BR-235</b><br>
                        Principal ligação Oeste-Leste<br>
                        Extensão: 220km`,
                options: { dashArray: '5, 5' }
            }
        ]
    },
    {
        key: 'obras',
        label: 'Obras em andamento',
        visible: true,
        color: 'red',
        type: 'marker',
        items: [
            {
                coords: [-10.500, -37.450], // Glória
                popup: `<b>Usina Solar Glória</b><br>
                        Potência: 50MW<br>
                        Investimento: R$ 200 mi<br>
                        Conclusão: Dez/2024`
            },
            {
                coords: [-11.100, -37.250], // Indiaroba
                popup: `<b>Porto Indiaroba</b><br>
                        Área: 150ha<br>
                        Capacidade: 5M ton/ano`
            },
            {
                coords: [-10.750, -37.200], // Lagarto
                popup: `<b>Hospital Regional</b><br>
                        200 leitos<br>
                        Área: 15.000m²`
            },
            {
                coords: [-10.300, -36.900], // Pirambu
                popup: `<b>Polo Aquícola</b><br>
                        50 tanques-rede<br>
                        Geração: 500 empregos`
            },
            {
                coords: [-10.850, -37.100], // São Cristóvão
                popup: `<b>Restauração do Convento</b><br>
                        Patrimônio histórico<br>
                        Investimento: R$ 15 mi`
            }
        ]
    },
    {
        key: 'educacao',
        label: 'Centros de Formação',
        visible: true,
        color: 'green',
        type: 'marker',
        items: [
            {
                coords: [-10.950, -37.100], // Aracaju
                popup: `<b>SENAI CETIND</b><br>
                        Cursos: 25<br>
                        Alunos/ano: 2.500`
            },
            {
                coords: [-10.700, -37.450], // Itabaiana
                popup: `<b>SENAC Itabaiana</b><br>
                        Foco: Comércio e Serviços<br>
                        Laboratórios: 12`
            },
            {
                coords: [-11.000, -37.200], // Estância
                popup: `<b>SENAR Centro</b><br>
                        Cursos agrícolas<br>
                        Área experimental: 10ha`
            },
            {
                coords: [-10.500, -37.300], // Frei Paulo
                popup: `<b>Escola Agrotécnica</b><br>
                        Parceria SENAR<br>
                        Capacitação rural`
            },
            {
                coords: [-10.300, -37.100], // Neópolis
                popup: `<b>Centro de Inovação</b><br>
                        Incubadora de negócios<br>
                        SEBRAE/IEL`
            }
        ]
    }
];
