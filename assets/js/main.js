$(document).ready(function(){

// Menu

$('.img-home').mouseenter(function() {
    $('.menu-container').addClass('img-update-home');
 });

$('.img-home').mouseleave(function() {
    $('.menu-container').removeClass('img-update-home');
  });

$('.img-essay').mouseenter(function() {
    $('.menu-container').addClass('img-update-essay');
 });

$('.img-essay').mouseleave(function() {
    $('.menu-container').removeClass('img-update-essay');
  });

$('.img-buy').mouseenter(function() {
    $('.menu-container').addClass('img-update-buy');
 });

$('.img-buy').mouseleave(function() {
    $('.menu-container').removeClass('img-update-buy');
  });

$('.img-about').mouseenter(function() {
    $('.menu-container').addClass('img-update-about');
 });

$('.img-about').mouseleave(function() {
    $('.menu-container').removeClass('img-update-about');
  });

});

//Home

$(document).ready(function(){

$('.img-change').mouseenter(function() {
    $('.home-container').addClass('img-update');
 });

$('.img-change').mouseleave(function() {
    $('.home-container').removeClass('img-update');
  });

$('.subtitle').mouseenter(function() {
    $('.subtitle').addClass('active');
 });

$('.subtitle').mouseleave(function() {
    $('.subtitle').removeClass('active');
  });

});










