$(document).ready(function() {
    $(window).scroll(function() {
        var windowTop = $(window).scrollTop(),
            documentHeight = $(document).height(),
            windowHeight = $(window).height();
        var scroll = (windowTop / (documentHeight - windowHeight)) * 100
        $('.scroll-line').css("width", (scroll + '%'));


    })
})