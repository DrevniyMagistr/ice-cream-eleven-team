$(function () {
  $(document).scroll(function () {
	  var $nav = $(".header");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});


const smoothAnchors = document.querySelectorAll('.menu__link')
const header= document.querySelector('.header-js')
for (let anchor of smoothAnchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const anchorID = anchor.getAttribute('href')
    const scrollOffset = document.querySelector(anchorID).offsetTop
    window.scrollTo({
      top: scrollOffset - 80,
      behavior: 'smooth',
    })
  })
}
$(window).on('scroll', function () {
  $(header).toggleClass('fixed', $(this).scrollTop() > $('.hero-js').height());
});
