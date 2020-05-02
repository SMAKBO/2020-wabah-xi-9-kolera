;(function($) {
    "use strict";

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 300) {
            $(".progress-bar-animate-1").animate({
                width: "80%"
            }, 9000);
        }
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 50) {
            $(".home-1-header").addClass('nav-bar-fixed');
        }
        else{
            $(".home-1-header").removeClass('nav-bar-fixed');
        }
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 200) {
            $(".home-2-nav-1").addClass('home-2-nav-bar-fixed');
        }
        else{
            $(".home-2-nav-1").removeClass('home-2-nav-bar-fixed');
        }
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 300) {
            $(".progress-bar-animate-2").animate({
                width: "90%"
            }, 9000);
        }
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 300) {
            $(".progress-bar-animate-3").animate({
                width: "75%"
            }, 9000);
        }
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 300) {
            $(".progress-bar-animate-4").animate({
                width: "80%"
            }, 9000);
        }
    });

    // inline js list
    
    $(".project").hover3d({
        selector: ".project__card",
        shine: false
    });
    
    //Main Nav
    jQuery("#menuzord").menuzord({
        align: "right",
        effect: "fade",
        animation: "zoom-in"
    });
    
    $(function () {
        $('#product-grid').mixItUp();
    });

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    $("#owl-demo").owlCarousel({
        autoPlay: 3000,
        navigation : false, // Show next and prev buttons
        singleItem:true,
        items : 1,
        itemsDesktop : true,
        itemsDesktopSmall : true,
        itemsTablet: true,
        itemsMobile : true
    });
    
    $("#owl-demo-2").owlCarousel({
        autoPlay: 3000,
        navigation : false, // Show next and prev buttons
        items : 6,
        lazyLoad : true
    });
    
    $(document).ready(function(){
        $("#thing-with-videos").fitVids();
    });
    
    
    $('#banner-fade').bjqs({
        'width':1000,
        'height' : 550,
        'responsive' : true,
        showmarkers:false,
        nexttext : '<i class="fa fa-chevron-right"></i>',
        prevtext : '<i class="fa fa-chevron-left"></i>'
    });
    
    

    //..............................................
    //Sidebar menu JS
    //..............................................

    var open = false;

   $('#myCarousel').carousel({
        interval:   false
    });

    var clickEvent = false;
    $('#myCarousel').on('click', '.nav a', function() {
        clickEvent = true;
        $('.nav li').removeClass('active');
        $(this).parent().addClass('active');
    }).on('slid.bs.carousel', function(e) {
        if(!clickEvent) {
            var count = $('.nav').children().length -1;
            var current = $('.nav li.active');
            current.removeClass('active').next().addClass('active');
            var id = parseInt(current.data('slide-to'));
            if(count == id) {
                $('.nav li').first().addClass('active');
            }
        }
        clickEvent = false;
    });
    //Owl Carousel one
    $('.editor-post .all-post').owlCarousel({
        autoPlay: false,
        pagination: false,
		navigation: true,
        items: 5,
        itemsDesktop: [1024, 4],
        itemsDesktopSmall: [768, 1],
        itemsTablet: [650, 1],
        itemsMobile: 1,
		navigationText: [
		"<i class='fa fa-angle-left'></i>",
		"<i class='fa fa-angle-right'></i>"
		]
    });

    
})(jQuery)