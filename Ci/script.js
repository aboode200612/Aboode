// قاعدة بيانات وهمية للأفلام (يمكنك إضافة المزيد هنا)
const moviesData = [
    {
        title: "Oppenheimer",
        image: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        year: "2023",
        rating: "8.6",
        category: "movie"
    },
    {
        title: "John Wick 4",
        image: "https://share.google/MfYKPCfpufrCczVo5",
        year: "2023",
        rating: "7.9",
        category: "movie"
    },
    {
        title: "Game of Thrones",
        image: "https://image.tmdb.org/t/p/w500/1XS1oqL89opfnbGw83trZrcr5bb.jpg",
        year: "2011",
        rating: "9.3",
        category: "series"
    },
    {
        title: "Inception",
        image: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
        year: "2010",
        rating: "8.8",
        category: "movie"
    },
    {
        title: "Stranger Things",
        image: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
        year: "2016",
        rating: "8.7",
        category: "series"
    },
    {
        title: "The Batman",
        image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50x9TfdlnJR.jpg",
        year: "2022",
        rating: "7.7",
        category: "movie"
    }
];

// دالة لعرض الأفلام في الصفحة
function displayMovies() {
    const moviesContainer = document.getElementById('movies-container');
    const seriesContainer = document.getElementById('series-container');

    moviesData.forEach(item => {
        const card = `
            <div class="movie-card">
                <img src="${item.image}" alt="${item.title}">
                <div class="card-info">
                    <h4>${item.title}</h4>
                    <span>${item.year}</span>
                    <div class="rating"><i class="fas fa-star"></i> ${item.rating}</div>
                </div>
            </div>
        `;

        if (item.category === 'movie') {
            moviesContainer.innerHTML += card;
        } else {
            seriesContainer.innerHTML += card;
        }
    });
}

// تشغيل الدالة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', displayMovies);
