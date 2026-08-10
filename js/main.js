(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    function updateLoggedProfile() {
        const loggedIn = localStorage.getItem('loggedIn') === 'true';
        const user = JSON.parse(localStorage.getItem('user')) || null;

        if (loggedIn && user) {
            $('#loggedProfileBanner').removeClass('d-none');
            $('#userProfile').removeClass('d-none');
            $('#profileGreeting').text(`Bienvenido, ${user.name}`);
            $('#profileSubtext').text(`Cuenta activa como ${user.userType === 'employer' ? 'Employer' : 'Job Seeker'}.`);
            $('#profileName').text(user.name);
            $('#profileRole').text(`Role: ${user.userType === 'employer' ? 'Employer' : 'Job Seeker'}`);
            $('#profileEmail').text(`Email: ${user.email}`);
            $('#profilePhone').text(`Teléfono: ${user.phone}`);
            // Hide Sign In button in navbar
            $('a[href="signIn.html"]').closest('div').addClass('d-none');
        } else {
            $('#loggedProfileBanner').addClass('d-none');
            $('#userProfile').addClass('d-none');
            $('a[href="signIn.html"]').closest('div').removeClass('d-none');
        }
    }

    $('#logoutBtn').click(function () {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('currentUser');
        alert('Sesión cerrada. Regresando a la página principal.');
        window.location.href = 'index.html';
    });

    updateLoggedProfile();

})(jQuery);

