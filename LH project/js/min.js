$(document).ready(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    $(".mains-slide").owlCarousel({
        items:5,
        nav:true,
        dots:true,
        autoplay:true,
        loop:true,
        autoplayTimeout:5000,
        margin:30,
        responsive:{
            0:{
                items:2,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:false
    
            }
        }

    });
    
  });