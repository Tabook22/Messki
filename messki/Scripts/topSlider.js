(function($) {
    var owl;
    $(document).ready(function () {
        owl = $("#slider").owlCarousel({
            autoplay: true,
            autoplaySpeed: 300,
            loop: true,
            navSpeed: 300,
            items: 1,
            margin: 2
        });


        $(".slider2").owlCarousel({
            autoPlay: 3000, //Set AutoPlay to 3 seconds
            items: 4,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 3]
        });

    });

})(jQuery);