$(document).ready(function () {
    //Variables
    var scroll = 0;

    //parallax plugin. Not my code ------------------------------------------------

    /**
     * Author: Heather Corey
     * jQuery Simple Parallax Plugin
     *
     */
    (function ($) {

        $.fn.parallax = function (options) {

            var windowHeight = $(window).height();

            // Establish default settings
            var settings = $.extend({
                speed: 0.15
            }, options);

            // Iterate over each object in collection
            return this.each(function () {

                // Save a reference to the element
                var $this = $(this);

                // Set up Scroll Handler
                $(document).scroll(function () {

                    var scrollTop = $(window).scrollTop();
                    var offset = $this.offset().top;
                    var height = $this.outerHeight();

                    // Check if above or below viewport
                    if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
                        return;
                    }

                    var yBgPosition = Math.round((offset - scrollTop) * settings.speed);

                    // Apply the Y Background Position to Set the Parallax Effect
                    $this.css('background-position', 'center ' + yBgPosition + 'px');

                });
            });
        };
    }(jQuery));
    $('.section-5, .header, .section-3').parallax({
        speed: 0.5
    });
    //-------------------------------------------------- THANK YOU HEATHER!! END

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
            if (pos < scroll + 850) {
                $(this).addClass("slide");
            }
        });
    });
});
