$(document).ready(function(){
  
  $(window).on('load scroll',function(){

    if($(window).scrollTop() > 60){
      $('.header').css({'background':'rgb(255, 255, 255)','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
      $('.header .logo img').css({'height':'6rem'});
    }else{
      $('.header').css({'background':'none','box-shadow':'none'});
      $('.header .logo img').css({'height':'9rem'});
    }
  });

  $('.service-smooth-scroll li a ,.service-page span a').on('click', function (e) {
    if (this.hash !== '') {
     e.preventDefault();
 
      const hash = this.hash;
 
      $('html, body')
        .animate({
          scrollTop: $(hash).offset().top
        },800);
    }
  });

});