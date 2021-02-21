$(document).ready(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 700) {
            $('.arrow-btn').css({
                "opacity": "1",
                "pointer-events": "auto"
            });
        } else {
            $('.arrow-btn').css({
                "opacity": "0",
                "pointer-events": "none"
            });
        }
    });
    $('.arrow-btn').click(function() {
        $('html').animate({ scrollTop: 0 }, 500);

    });
});