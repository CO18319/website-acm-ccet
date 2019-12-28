$(document).ready(function() {
   
      $('.js-section').waypoint(function(direction) {
          if(direction == "down") {
              $('nav').addClass('sticky');
          }
          else {
              $('nav').removeClass('sticky');
          }
      }, {
          offset:'75%;'
      });
    
    /*Animations
    $('.js-img').waypoint(function(direction) {
        $('.js-img').addClass('animated fadeIn');
    },{
        offset:'10px;'
      });
    */
    
    
    /*Mobile navigation*/
    $('.js-mobile-nav').click(function() {
        var nav = $('.js-main-nav');
        var icon = $('.js-mobile-nav i');
        
        nav.slideToggle(200);
        if(icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        }   
        else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
            nav.css('display','block');
        }
    });
    
});
