// بيانات القنوات (أمثلة)
const channels = [
    {
        name: "Al Jazeera",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Aljazeera_en.svg/1200px-Aljazeera_en.svg.png",
        link: "https://live-hls-web-aje.getaj.net/AJE/03.m3u8",
        category: "news"
    },
    {
        name: "Spacetoon Go",
        logo: "https://play-lh.googleusercontent.com/Fj5x-cZg8P6qO3-0W_Kqh-KqP5q0Zg4q0Zg4q0Zg4q0Zg4q0Zg4q0Zg4q0Zg4=w240-h480-rw",
        link: "https://sttoon.fly.dev/index.m3u8", // رابط تجريبي
        category: "ent"
    },
    {
        name: "BeIN Sports (Example)",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Bein_Sports_logo.svg/2048px-Bein_Sports_logo.svg.png",
        link: "", // ضع رابطك هنا
        category: "sport"
    },
    {
        name: "SSC",
        logo: "https://www.elahmad.com/tv/ssc-sport-live.php",
        link: "https://www.elahmad.com/tv/live/shahid_shaka.php?id=ssc1",
        category: "sport"
    }
];

// عرض القنوات
function renderChannels(filter = 'all') {
    const container = document.getElementById('channels-container');
    container.innerHTML = '';

    channels.forEach(channel => {
        if (filter === 'all' || channel.category === filter) {
            const card = `
                <div class="channel-card" onclick="playChannel('${channel.link}')">
                    <span class="live-badge">LIVE</span>
                    <img src="${channel.logo}" alt="${channel.name}">
                    <h3>${channel.name}</h3>
                </div>
            `;
            container.innerHTML += card;
        }
    });
}

// تشغيل القناة
function playChannel(url) {
    if (!url) {
        alert("الرابط غير متوفر حالياً للقناة");
        return;
    }

    const playerContainer = document.getElementById('player-container');
    const video = document.getElementById('video');

    playerContainer.classList.remove('hidden');

    if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(url);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function() {
            video.play();
        });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = url;
        video.addEventListener('loadedmetadata', function() {
            video.play();
        });
    }
}

// إغلاق المشغل
function closePlayer() {
    const playerContainer = document.getElementById('player-container');
    const video = document.getElementById('video');
    video.pause();
    video.src = "";
    playerContainer.classList.add('hidden');
}

// تشغيل عند البداية
document.addEventListener('DOMContentLoaded', () => renderChannels());

function filterChannels(cat) {
    // تغيير لون الأزرار
    document.querySelectorAll('.categories button').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    renderChannels(cat);
}
