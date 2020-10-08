import './scss/main.scss';

$(document).ready(function(){
    $('.menu_toggle').click(function(){
      $('nav').toggleClass('active')
    })
  })