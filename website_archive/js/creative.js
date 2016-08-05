/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();
	
	// Trying bx image slider
  	//$('.bxslider').bxSlider();
	
})(jQuery); // End of use strict

$(document).ready(function($) {
	$('.bxslider').bxSlider({
		adaptiveHeight: true
	});
});

$("li").click(function(){

    var img = $(this).find('img').attr('src');
    $("ul").children().removeClass('selected');
    $(this).addClass('selected');
    $("#gallery_img").attr("src", img); 
});


$('#prev').click(function(){
    var prev = $(".selected").prev();
    var img = prev.find('img').attr('src');
    $("#gallery_img").attr("src", img); 
    $("ul").children().removeClass('selected');
    prev.addClass('selected'); 
});

$('#next').click(function(){
    var next = $(".selected").next();
    var img = next.find('img').attr('src');
    $("#gallery_img").attr("src", img); 
    $("ul").children().removeClass('selected');
    next.addClass('selected'); 
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}