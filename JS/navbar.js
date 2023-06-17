$(document).ready(function() {
  
    $(window).scroll(function () {
      if ($(window).scrollTop() > 341) {
        $('#navbar').addClass('navbar-fixed');
      }
      if ($(window).scrollTop() < 340) {
        $('#navbar').removeClass('navbar-fixed');
      }
    });
  });