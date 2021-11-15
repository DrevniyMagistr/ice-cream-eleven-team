function scrollNav() {
  $('.menu__link, .mobile-menu__link, .hero__btn--dark, .hero__btn--light').click(function(){
    $(".active").removeClass("active");     
    $(this).addClass("active");
    
    $('html, body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top - 160
    }, 700);
    return false;
  });
}
scrollNav();

