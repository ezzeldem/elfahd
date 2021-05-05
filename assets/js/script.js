$(document).ready(function () {
  // hide lodding page
  setTimeout(function () {
    $('.loder_page').addClass('hiddinTime');
  }, 4200);



    // scrol-buttom
    $('.scrol-buttom-a').click(function () {
      $('html, body').animate({
        scrollTop: $(".about_secion").offset().top
      }, 1000);
    });
  
// scroleBotton

$(window).scroll(function() {
  if($(window).scrollTop() >= 400) {
      $(".scrollBottn").fadeIn(400);
  }else{
      $(".scrollBottn").fadeOut(400);
  }
});

$(".scrollBottn").click(function(){
  $("html, body").animate(
      {
          scrollTop: $(".top-header").offset().top
      },
      600
      );
})


// opne_icon

$('.opne_icon').click(function(){
  $('.nav-box').addClass('opne_menu');
  $('body').addClass('over_lay');
});
$('.exit_icon').click(function(){
  $('.nav-box').removeClass('opne_menu');
  $('body').removeClass('over_lay');
});

// AOS
AOS.init({  duration: 600,});

});
