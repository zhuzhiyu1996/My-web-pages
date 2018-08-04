// JavaScript Document
/**
 * Response-yellow
 * @authors Your Name (you@example.org)
 * @date    2018-08-02 21:18:00
 * @version $Id$
 */
$(document).ready(function(){
  $(".owl-carousel").owlCarousel(
  	{
  		items:1,
  		loop:true,
  		autoplay:true,
  		autoplayTimeout:3000,
  		autoplayHoverPause:true
  	});
});
$(document).ready(function(){
  $(".owl-carousel2").owlCarousel(
  	{
  		items:3,
  		margin:8,
  		loop:true,
  		autoplay:true,
  		autoplayTimeout:3000,
  		autoplayHoverPause:true
  	});
});