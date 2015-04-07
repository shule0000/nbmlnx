
var interval = 2500;

$(document).ready(function() {
	var slider1 = $("#ls1").lightSlider({
		item : 1,// 显示的条目
		autoWidth : false,
		slideMove : 1, // slidemove will be 1 if loop is true
		slideMargin : 10,

		addClass : '',
		mode : "slide",
		useCSS : true,
		cssEasing : 'ease', // 'cubic-bezier(0.25, 0, 0.25, 1)',//
		easing : 'linear', // 'for jquery animation',////

		speed : 400, // ms'
		auto : true,// true自动播放
		loop : true,// true循环播放
		slideEndAnimatoin : true,
		pause : interval,

		keyPress : true,
		controls : false,
		prevHtml : '',
		nextHtml : '',

		rtl : false,
		adaptiveHeight : true,

		vertical : false,
		verticalHeight : 500,
		vThumbWidth : 100,

		thumbItem : 10,
		pager : false,
		gallery : false,
		galleryMargin : 5,
		thumbMargin : 5,
		currentPagerPosition : 'middle',

		enableTouch : true,
		enableDrag : true,
		freeMove : true,
		swipeThreshold : 40,

		responsive : [],

		onBeforeStart : function(el) {
		},
		onSliderLoad : function(el) {
		},
		onBeforeSlide : function(el) {
		},
		onAfterSlide : function(el) {
		},
		onBeforeNextSlide : function(el) {
		},
		onBeforePrevSlide : function(el) {
		}
	});

	setInterval(function() {
		slider1.play();
	}, interval);
	
	
	$(window).bind("resize", resizeWindow);
	function resizeWindow( e ) {
	    var newWindowHeight = $(window).height();
	    $(".content").css("height", newWindowHeight);
	}
	$(".content").css("height", $(window).height());
});

Royal_Preloader.config({
	mode : 'text', // 'number', "text" or "logo"
	text : '万润名车',
	timeout : 0,
	showInfo : true,
	opacity : 1,
	background : [ '#000000' ]
});

alert("c1");