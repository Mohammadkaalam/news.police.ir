$(document).ready(function() {
    $('.menu-toggle').click(function() {
      $('.main-nav').toggleClass('active');
    });
  });
  
  $('.main-nav a').click(function() {
    $('.main-nav').removeClass('active');
  });
  