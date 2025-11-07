// ========================================
// Natural Café LP JavaScript
// ========================================

// スムーズスクロール：ナビクリック時に自然に移動
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});

// フェードイン：スクロールでふんわり表示
const fadeElements = document.querySelectorAll('.fadein');
window.addEventListener('scroll', () => {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (rect < windowHeight - 100) {
            el.classList.add('show');
        }
    });
});
