$(document).ready(function () {
    $(window).on('scroll', function () {

        let scrollValue = $(window).scrollTop();
        console.log(scrollValue);
        if (scrollValue >= 50) {
            $(".sticky").addClass("stickyadd");
        }
        else {
            $(".sticky").removeClass("stickyadd");
        }
    });
    $(window).on('load', function () {
        $('.preloader').addClass('complete')
    });

    let typed = new Typed(".element", {

        strings: ["John Doe", "a Developer", "a Designer", "a Businessman"],
        smartBackspace: true,
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
        loopCount: Infinity,
        startDelay: 1000

    });

    let waypoint = new Waypoint({
        element: document.getElementById('experience'),
        handler: function () {
            let p = document.querySelectorAll(".progress-bar");
            p[0].setAttribute("style", "width:100%;transition:1s all;");
            p[1].setAttribute("style", "width:95%;transition:1.5s all;");
            p[2].setAttribute("style", "width:85%;transition:1.7s all;");
            p[3].setAttribute("style", "width:99%;transition:2s all;");
            p[4].setAttribute("style", "width:85%;transition:2.3s all;");
            p[5].setAttribute("style", "width:95%;transition:2.5s all;");

        },
        offset: '90%'

    });


    $('.owl-carousel').owlCarousel({
        loop: true,
        // margin:10,   // since one item ou can remove it
        nav: false,
        // dots:true,
        autoplay: true,
        autoplayTimeout: 3000,
        items: 1,
        // animateOut : "fadeOut",
        animateIn: "fadeInRight"
    });

    var $child = $('.way-fade-up').children();
    $child.each(function () {
        var self = $(this);
        $(this).waypoint(function () {
            self.addClass('animated fadeInUp');
        }, { offset: '90%' });
    });

    var $child = $('.way-fade-left').children();
    $child.each(function () {
        var self = $(this);
        $(this).waypoint(function () {
            self.addClass('animated fadeInLeft');
        }, { offset: '90%' });
    });

    var $child = $('.way-fade-right').children();
    $child.each(function () {
        var self = $(this);
        $(this).waypoint(function () {
            self.addClass('animated fadeInRight');
        }, { offset: '90%' });
    });

    let filterizd = $('.filter-container').filterizr({
        animationDuration: .5,

    });

    $('a').smoothScroll({
        speed: 2000,
    })
});

