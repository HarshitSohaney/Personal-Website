$(document).ready(function() {
  
    $(window).scroll(function () {
        //if you hard code, then use console
        //.log to determine when you want the 
        //nav bar to stick.  
        //console.log($(window).scrollTop())
      if ($(window).scrollTop() > 341) {
        $('#navbar').addClass('navbar-fixed');
      }
      if ($(window).scrollTop() < 340) {
        $('#navbar').removeClass('navbar-fixed');
      }
    });
  });