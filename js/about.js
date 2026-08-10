document.addEventListener("DOMContentLoaded", function () {

    const teamSwiper = new Swiper(".teamSwiper", {

        loop: true,

        speed: 800,

        spaceBetween: 30,

        slidesPerView: 4,

        navigation: {
            nextEl: ".team-next",
            prevEl: ".team-prev",
        },

        pagination: {
            el: ".team-pagination",
            clickable: true,
        },

        breakpoints: {

            0: {
                slidesPerView: 1
            },

            768: {
                slidesPerView: 2
            },

            992: {
                slidesPerView: 4
            }

        }

    });

});