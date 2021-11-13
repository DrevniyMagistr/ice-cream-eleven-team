function scrollNav() {
  $('.nav__link').click(function(){
    $(".active").removeClass("active");     
    $(this).addClass("active");
    
    $('html, body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top - 160
    }, 700);
    return false;
  });
}
scrollNav();

