var config = {
    style: 'mapbox://styles/mapbox/light-v10', // mapbox://styles/sgmapbox/ck8etv6jr25781jqhhq8clbzc
    accessToken: 'pk.eyJ1Ijoia2VlbW9vbmphbmciLCJhIjoiY2thMjVmM3AxMDFlazNkbDZjeHhqNW5mOCJ9.SEXIf_PjZSG_ycwdGqWJlA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Urban Identity and Regeneration',
    subtitle: 'Measuring temporal changes in identity of cities for urban regeneration projects',
    byline: 'By Kee Moon Jang',
    footer: '',
    chapters: [
        {
            id: 'seoul',
            alignment: 'left',
            hidden: false,
            title: 'Seoul',
            //image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [126.99, 37.545],
                zoom: 10.5,
                pitch: 60,
                bearing: 0
            },
            //mapAnimation: 'flyTo',
            //rotateAnimation: false,
            //callback: '',
            onChapterEnter: [],
            onChapterExit: []   
        },
        {
            id: 'sewoonarcade',
            alignment: 'right',
            hidden: false,
            title: 'Sewoon Arcade',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [126.9955, 37.565],
                zoom: 17,
                pitch: 60,
                bearing: 0
            },
            //mapAnimation: 'flyTo',
            //rotateAnimation: false,
            //callback: '',
            onChapterEnter: [
                {
                    layer: 'keemoonjang.dwhcalus',
                    opacity: 1,
                    //duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'keemoonjang.dwhcalus',
                    opacity: 0
                }
            ]
        },
        {
            id: 'changdeokgung',
            alignment: 'right',
            hidden: false,
            title: 'Changdeokgung',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [126.995, 37.579],
                zoom: 17,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'haebangchon',
            alignment: 'right',
            hidden: false,
            title: 'Haebangchon',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [126.987228, 37.542791],
                zoom: 17,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
