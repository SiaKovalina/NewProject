$(function(){
    

    
    $('.js-wp-2').waypoint(function(direction) {
        $('.js-wp-2').addClass('animated slideInUp');
        
    }, {
        offset: '70%'
    });
    
    $('.js-wp-3').waypoint(function(direction) {
        $('.js-wp-3').addClass('animated fadeIn');
        
    }, {
        offset: '70%'
    });
    
    $('.iphone-btn').delay(2300).animate({bottom: '+=-3'}, 300);
    /*There s 2.3s delay from the page refresh.
    The selected div gets animated to the bottom by 3px after the 2.3s delay and animation duration is 300ms*/
    
    $('.iphone-btn').delay(300).animate({top: '+=-3'}, 300);
    /*This delay takes place after the previous animation is finished*/
});

$(function(){
    
        new WOW().init();
    
});

