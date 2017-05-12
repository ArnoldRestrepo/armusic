jQuery(function(){
    var menu = jQuery('.navbar-toggle');
   
    menu.on("click", function(){
         var description = jQuery(".Description");
         description.fadeToggle();
    });


    jQuery(".owl-carousel").owlCarousel({
        center: true,
        items:3,
        loop:true,
        nav: true,
        navText: ["Anterior","Siguiente"],
        margin:100,
        stagePadding: 80,
        responsive:{
            1000: {
                items:3
            },
            600:{
                stagePadding: 0,
                margin: 10,
                items:2
            },
            0:{
                stagePadding: 10,                
                items: 1
            }
        }
    });

});

