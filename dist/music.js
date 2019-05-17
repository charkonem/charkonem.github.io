const ap = new APlayer({
    container: document.getElementById('aplayer'),
    lrcType: 3,
    audio: [{
        name: 'Up Is Down',
        artist: 'Hans Zimmer',
        url: '/music/Up Is Down.mp3',
        cover: '/music/up is down.jpg',
        theme: '#808080'
    },
    {
        name: 'Red Battle',
        artist: '高橋李依;豊崎愛生',
        url: '/music/Red Battle.mp3',
        cover: '/music/Red Battle.jpg',
        lrc: '/music/Red Battle-高橋李依;豊崎愛生.lrc',
        theme: '#00BFFF'
    },
    {
        name: '笑傲江湖曲',
        artist: '胡伟立',
        url: '/music/笑傲江湖曲.mp3',
        cover: '/music/笑傲江湖曲.jpg',
        theme: '#FF7F50'
    }
    ]
});