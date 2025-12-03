// --- إعدادات القنوات ---
// type: "stream"  -> للقنوات التي تنتهي بـ m3u8 أو ts
// type: "iframe"  -> لروابط المواقع (مثل رابط MBC)

const channels = [
    { 
        name: "MBC 1 (ويب)", 
        link: "https://www.elahmad.com/tv/mobiletv/glarb.php?id=mbc1_tv_1", 
        type: "iframe" 
    },
    { 
        name: "قناة اختبارية (فيديو)", 
        link: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", 
        type: "stream" 
    },
    {
        name: "BeIN Sports (تجربة)",
        link: "ضع_رابط_M3U8_الخاص_بك_هنا",
        type: "stream"
    }
];

// --- كود البرمجة ---
const list = document.getElementById('channelList');

channels.forEach(ch => {
    list.innerHTML += `
    <div class="channel-card" onclick="play('${ch.link}', '${ch.type}')">
        <h3>${ch.name}</h3>
        <span class="live-badge">LIVE ●</span>
    </div>`;
});

function play(url, type) {
    const box = document.getElementById('playerContainer');
    const vid = document.getElementById('videoPlayer');
    const web = document.getElementById('webPlayer');

    box.classList.add('show');

    if (type === 'iframe') {
        // تشغيل وضع الصفحة
        vid.pause();
        vid.classList.add('hidden');
        web.classList.remove('hidden');
        web.src = url;
    } else {
        // تشغيل وضع الفيديو المباشر
        web.classList.add('hidden');
        web.src = "";
        vid.classList.remove('hidden');
        
        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(url);
            hls.attachMedia(vid);
            hls.on(Hls.Events.MANIFEST_PARSED, () => vid.play());
        } else if (vid.canPlayType('application/vnd.apple.mpegurl')) {
            vid.src = url;
            vid.play();
        }
    }
}

function closeVideo() {
    const box = document.getElementById('playerContainer');
    const vid = document.getElementById('videoPlayer');
    const web = document.getElementById('webPlayer');
    
    vid.pause();
    vid.src = "";
    web.src = "";
    box.classList.remove('show');
}
