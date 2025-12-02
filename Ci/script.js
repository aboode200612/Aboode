// رابط تجريبي للاختبار (فيديو Big Buck Bunny)
// استبدل هذا الرابط لاحقاً بروابط القنوات الحقيقية
const testLink = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";

// قائمة القنوات
const channels = [
    // --- قنوات بي إن سبورت ---
    { name: "BeIN Sports News", link: testLink, category: "sport" }, // القناة الإخبارية
    { name: "BeIN Sports 1", link: testLink, category: "sport" },
    { name: "BeIN Sports 2", link: testLink, category: "sport" },
    { name: "BeIN Sports 3", link: testLink, category: "sport" },
    { name: "BeIN Sports 4", link: testLink, category: "sport" },
    { name: "BeIN Sports 5", link: testLink, category: "sport" },
    { name: "BeIN Sports 6", link: testLink, category: "sport" },
    { name: "BeIN Sports 7", link: testLink, category: "sport" },
    { name: "BeIN Sports 8", link: testLink, category: "sport" },
    { name: "BeIN Sports Premium 1", link: testLink, category: "sport" },
    { name: "BeIN Sports Premium 2", link: testLink, category: "sport" },
    { name: "BeIN Sports Xtra 1", link: testLink, category: "sport" },
    { name: "BeIN Sports Xtra 2", link: testLink, category: "sport" },
    
    // --- قنوات أخرى منوعة للتجربة ---
    { name: "MBC 1", link: testLink, category: "ent" },
    { name: "Al Jazeera", link: "https://live-hls-web-aje.getaj.net/AJE/03.m3u8", category: "news" }, // رابط حقيقي
    { name: "Al Arabiya", link: testLink, category: "news" },
    { name: "Rotana Cinema", link: testLink, category: "ent" }
];

// دالة عرض القنوات (بدون صور - نص فقط)
function renderChannels(filter = 'all') {
    const container = document.getElementById('channels-container');
    container.innerHTML = '';

    channels.forEach(channel => {
        if (filter === 'all' || channel.category === filter) {
            const card = `
                <div class="channel-card" onclick="playChannel('${channel.link}')">
                    <h3>${channel.name}</h3>
                    <span class="live-badge">LIVE ●</span>
                </div>
            `;
            container.innerHTML += card;
        }
    });
}

// دالة تش
