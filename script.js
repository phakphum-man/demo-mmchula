const AUTOPLAY_DURATION = 5000;

const swiper = new Swiper('.swiper', {
    loop: true,
    effect: 'fade',
    speed: 1500,
    fadeEffect: {
        crossFade: true // ทำให้รอยต่อการจางสวยขึ้น ไม่เห็นภาพซ้อนกันแปลกๆ
    },
    autoplay: {
        delay: AUTOPLAY_DURATION,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // ทำให้คลิกที่จุดแล้วเปลี่ยนสไลด์ได้
    },
    // บังคับให้ CSS ทำงานใหม่ทุกครั้งที่เปลี่ยนแผ่น
    on: {
        slideChangeTransitionStart: function () {
            // คุณสามารถใส่ Logic เพิ่มเติมที่นี่ได้หากต้องการ
        }
    }
});