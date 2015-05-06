function gotoPage(page) {
	top.location = page;
}

function browserRedirect() {
	var sUserAgent = navigator.userAgent.toLowerCase();
	var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
	var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
	var bIsMidp = sUserAgent.match(/midp/i) == "midp";
	var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
	var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
	var bIsAndroid = sUserAgent.match(/android/i) == "android";
	var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
	var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
	if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid
			|| bIsCE || bIsWM) {
		$(".back-img").css("background-attachment", "scroll");
		$(".back-img-hz").css("background-attachment", "scroll");
		$("#first-pic").css("background-attachment", "scroll");
		$("#second-pic").css("background-attachment", "scroll");
		$("#third-pic").css("background-attachment", "scroll");
	}
}
$("#myCarousel").on("swipeleft", function() {
	$('#myCarousel').carousel('next');
});
$("#myCarousel").on("swiperight", function() {
	$('#myCarousel').carousel('prev');
});

browserRedirect();

addEventListener("load", function() {
	setTimeout(hideURLbar, 0);
}, false);

function hideURLbar() {
	window.scrollTo(0, 1);
}

$(document).ready(function($) {
	$(".scroll").click(function(event) {
		event.preventDefault();
		$('html,body').animate({
			scrollTop : $(this.hash).offset().top
		}, 1000);
	});
	$(".nav>li>a").click(function() {
		$(".nav>li>a").removeClass("active");
		$(this).addClass("active");
	});
	$().UItoTop({
		easingType : 'easeOutQuart'
	});
});

$(window).bind("resize", resizeWindow);

$('#myCarousel').carousel({
	interval : 5000
});

$("#myCarousel").css("height", $(window).height() - 50);
$(".page-box").css("min-height", $(window).height() - 50);

function resizeWindow(e) {
	var newWindowHeight = $(window).height();
	$("#myCarousel").css("height", newWindowHeight - 50);
	$(".page-box").css("min-height", $(window).height() - 50);
}

// Portfolio filter

/* global $:false */
$(window).load(function() {
	var $container = $('.portfolio-wrap');
	var $filter = $('#filter');
	// Initialize isotope
	$container.isotope({
		filter : '*',
		layoutMode : 'fitRows',
		animationOptions : {
			duration : 750,
			easing : 'linear'
		}
	});
	// Filter items when filter link is clicked
	$filter.find('a').click(function() {
		var selector = $(this).attr('data-filter');
		$filter.find('a').removeClass('current');
		$(this).addClass('current');
		$container.isotope({
			filter : selector,
			animationOptions : {
				animationDuration : 750,
				easing : 'linear',
				queue : false,
			}
		});
		return false;
	});
});

// Portfolio Isotope

jQuery(document)
		.ready(
				function($) {

					var container = $('.portfolio-wrap');

					function splitColumns() {
						var winWidth = $(window).width(), columnNumb = 1;

						if (winWidth > 1024) {
							columnNumb = 4;
						} else if (winWidth > 900) {
							columnNumb = 2;
						} else if (winWidth > 479) {
							columnNumb = 2;
						} else if (winWidth < 479) {
							columnNumb = 1;
						}

						return columnNumb;
					}

					function setColumns() {
						var winWidth = $(window).width(), columnNumb = splitColumns(), postWidth = Math
								.floor(winWidth / columnNumb);

						container.find('.portfolio-box').each(function() {
							$(this).css({
								width : postWidth + 'px'
							});
						});
					}

					function setProjects() {
						setColumns();
						container.isotope('reLayout');
					}

					container.imagesLoaded(function() {
						setColumns();
					});

					$(window).bind('resize', function() {
						setProjects();
					});

				});

// Team flip

$(document).ready(function() {
	$('.flipWrapper').click(function() {
		$(this).find('.card').toggleClass('flipped');
		return false;
	});
});

// Switcher CSS
$(document).ready(function() {
	"use strict";
	$("#hide, #show").click(function() {
		if ($("#show").is(":visible")) {

			$("#show").animate({
				"margin -left" : "-300px"
			}, 300, function() {
				$(this).hide();
			});

			$("#switch").animate({
				"margin-left" : "0px"
			}, 300).show();
		} else {
			$("#switch").animate({
				"margin-left" : "-300px"
			}, 300, function() {
				$(this).hide();
			});
			$("#show").show().animate({
				"margin-left" : "0"
			}, 300);
		}
	});

});