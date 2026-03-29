document.addEventListener('DOMContentLoaded', function() {
    // Hero Swiper Initialization
    if (document.querySelector('.swiper')) {
        const heroSwiper = new Swiper('.swiper', {
            loop: true,
            effect: 'fade',
            speed: 1500,
            fadeEffect: {
                crossFade: true
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            on: {
                slideChangeTransitionStart: function() {
                    // Additional logic can be added here if needed
                }
            }
        });
    }

    // Admission Highlights Animation
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            if (entry.target.classList.contains('admission-highlight-title') || 
                entry.target.classList.contains('admission-highlight-subtitle')) {
                entry.target.classList.add('visible');
            }

            if (entry.target.classList.contains('highlight-card')) {
                entry.target.classList.add('visible');
            }

            if (entry.target.classList.contains('admission-highlight-title')) {
                document.querySelectorAll('.highlight-card').forEach(card => {
                    observer.observe(card);
                });
            }

            observer.unobserve(entry.target);
        });
    }, observerOptions);

    const titleEl = document.querySelector('.admission-highlight-title');
    const subtitleEl = document.querySelector('.admission-highlight-subtitle');

    if (titleEl) observer.observe(titleEl);
    if (subtitleEl) observer.observe(subtitleEl);

    document.querySelectorAll('.highlight-card').forEach(card => {
        observer.observe(card);
    });
});
