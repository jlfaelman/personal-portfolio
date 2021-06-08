$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $("#btn-about").click(function (){
        $('html, body').animate({
            scrollTop: $("#section-about").offset().top
        }, 500);
    });
    $("#btn-work").click(function (){
        $('html, body').animate({
            scrollTop: $("#section-work").offset().top
        }, 500);
    });
    $("#btn-contact").click(function (){
        $('html, body').animate({
            scrollTop: $("#section-contact").offset().top
        }, 500);
    });
});
