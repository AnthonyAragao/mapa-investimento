// mapFeatures.js
export const mapFeatures = [
    {
        key: 'energia',
        label: 'Linhas de Transmissão de Energia',
        visible: true,
        color: '#CD4168',
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
            { coords: [[-10.9500, -37.0800], [-10.9700, -37.0900]], popup: '<b>Linha de Transmissão</b><br>LT Aracaju Sul - Barra dos Coqueiros' }
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
