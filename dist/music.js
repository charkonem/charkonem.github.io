const ap = new APlayer({
    container: document.getElementById('aplayer'),
    audio: [{
        name: '111',
        artist: '222',
        url: '/music/333.mp3',
        cover: '/music/000.jpg',
        theme: '#ebd0c2'
    },
 {
            name: '222',
            artist: '333',
            url: '/music/Hans Zimmer-Up Is Down.wav',
            cover: '/music/000.jpg',
        }
    ]
});