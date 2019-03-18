$(function () {
    $(window).scroll(function () {
        var currentScrollTop = $(window).scrollTop();
        $('#blackoverlay').css('opacity',currentScrollTop/$('#blackoverlay').height());

    });
});
