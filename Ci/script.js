// عرض القنوات (بدون صور)
function renderChannels(filter = 'all') {
    const container = document.getElementById('channels-container');
    container.innerHTML = '';

    channels.forEach(channel => {
        if (filter === 'all' || channel.category === filter) {
            // لاحظ هنا: قمت بإزالة سطر الصورة <img>
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
