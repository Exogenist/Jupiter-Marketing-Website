$(document).ready(function () {
    //Variables
    var scroll = 0;

    $(this).scrollTop(0);
    scroll = $(window).scrollTop();
    if (scroll !== 0) {
        $('.navbar-default').css("box-shadow", "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)");
        $('.nav-transition').css("height", "50px");
        $('.navbar-default').css("background-color", "white");
    }
    $(window).scroll(function () {
        scroll = $(window).scrollTop();
        if (scroll === 0) {
            $('.nav-transition').css("height", "70px");
            $('.navbar-default').css("background-color", "rgba(0,0,0,0.0)");
            $('.navbar-default').css("box-shadow", "0 3px 6px rgba(0,0,0,0.0), 0 3px 6px rgba(0,0,0,0.0)");
        } else {
            $('.nav-transition').css("height", "50px");
            $('.navbar-default').css("background-color", "white");
            $('.navbar-default').css("box-shadow", "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)");
        }
        $(".slideanim").each(function () {
            var pos = $(this).offset().top;
            if (pos < scroll + 600) {
                $(this).addClass("slide");
            }
        });
    });
});
