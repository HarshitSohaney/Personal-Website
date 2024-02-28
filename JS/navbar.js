$(document).ready(function() {
  // stick navbar to the top when we reach the element on scroll, make it smooth
    var searchElementPosition = $('#search').offset().top;
    $(window).scroll(function () {
      if ($(window).scrollTop() > searchElementPosition) {
        $('#navbar').addClass('navbar-fixed');
      } else {
        $('#navbar').removeClass('navbar-fixed');
      }
    });
  });