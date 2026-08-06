document.addEventListener("DOMContentLoaded", function () {

    const teamSwiper = new Swiper(".teamSwiper", {

        // General
        loop: true,
        speed: 700,
        grabCursor: true,
        centeredSlides: false,

        // Espacio entre tarjetas
        spaceBetween: 30,

        // Autoplay
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },

        // Flechas
        navigation: {
            nextEl: ".team-next",
            prevEl: ".team-prev",
        },

        // Paginación
        pagination: {
            el: ".team-pagination",
            clickable: true,
        },

        // Responsive
        breakpoints: {

            0: {
                slidesPerView: 1,
                spaceBetween: 20
            },

            576: {
                slidesPerView: 1.2,
                spaceBetween: 20
            },

            768: {
                slidesPerView: 2,
                spaceBetween: 25
            },

            992: {
                slidesPerView: 3,
                spaceBetween: 30
            },

            1200: {
                slidesPerView: 4,
                spaceBetween: 30
            }

        }

    });

});