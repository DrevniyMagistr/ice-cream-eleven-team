var elem = $('body >header');
var doc = $(document);
function scrolled() {
   var threshold = doc.scrollTop() > 300;
   elem.toggleClass('scrolled-tab', threshold);
   var threshold = doc.scrollTop() > 400;
   elem.toggleClass('scrolled', threshold);
   var threshold = doc.scrollTop() > 600;
   elem.toggleClass('scrolled-desk', threshold);
}
$(window).on({ scroll: scrolled });



