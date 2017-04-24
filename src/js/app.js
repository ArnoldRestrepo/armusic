jQuery(function(){
    var menu = jQuery('.navbar-toggle');
   
    menu.on("click", function(){
         var description = jQuery(".Description");
         description.fadeToggle();
    });
   
});

