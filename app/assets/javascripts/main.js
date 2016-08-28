// Full page scroll.
$(document).ready(function() {
    $('#fullpage').fullpage({
        slidesNavigation: true,
    });
});

// Humburger icon.
$(document).ready(function(){
    $('#nav-icon1').click(function(){
        $(this).toggleClass('open');
        $('#myNav').toggleClass('ovrHeight');
    });
});

