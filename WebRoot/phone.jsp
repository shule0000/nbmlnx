<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core_rt"%>
<%@ taglib prefix="f" uri="http://java.sun.com/jstl/fmt_rt"%>
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport"
  content="width=device-width,inital-scale=1.0,maximum-scale=1.0,use-scalable=no">
<meta name="Author" content="bruce。bei">
<meta name="Description" content="宁波美灵思医疗科技有限公司官网专用">
<title>美灵思医疗</title>
<link rel="shortcut icon" href="img/favicon.ico">
<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="css/phone.css" rel="stylesheet">
<script src="js/redirectPC.js"></script>
<!-- HTML5 Shim 和 Respond.js 用于让 IE8 支持 HTML5元素和媒体查询 -->
<!-- 注意： 如果通过 file://  引入 Respond.js 文件，则该文件无法起效果 -->
<!--[if lt IE 9]>
         <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
         <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
      <![endif]-->
</head>
<body  data-spy="scroll" data-target=".navbar">
<nav class="navbar navbar-fixed-top" role="navigation">
	<div class="navbar-header">
		<button type="button" class="navbar-toggle" data-toggle="collapse"
		data-target="#index-navbar-collapse">
			<span class="sr-only">网站导航</span> <span class="icon-bar"></span>
			<span class="icon-bar"></span> <span class="icon-bar"></span>
		</button>
		<a class="navbar-brand" href="#">MLNX</a>
	</div>
	<div class="collapse navbar-collapse" id="index-navbar-collapse">
		<ul class="nav navbar-nav" id="nav">
			<li class="active cur"><a href="#page1" class="scroll">公司简介</a></li>
			<li><a href="#page2" class="scroll">产品</a></li>
			<li><a href="#page3" class="scroll">服务</a></li>
			<li><a href="#page4" class="scroll">荣誉</a></li>
			<li><a href="#page5" class="scroll">联系我们</a></li>
		</ul>
	</div>
</nav>

<div class="content" id="page1">
	<div id="myCarousel" class="carousel slide">
	  <!-- 轮播（Carousel）指标 -->
	<ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
   </ol>
	  <!-- 轮播（Carousel）项目 -->
	  <div class="carousel-inner">
		<div class="item active">
			<img src="images/banner_1.png" alt="banner_1" class="img-responsive"/>
		</div>
		<div class="item">
			<img src="images/banner_1.png" alt="banner_1"  class="img-responsive"/>
		</div>
		<div class="item">
			<img src="images/banner_1.png" alt="banner_1"  class="img-responsive"/>
		</div>
	   </div>
	</div>
</div>

<div><img src="images/home.png" alt="" class="img-responsive"/></div>
<div><img src="images/page1.png" alt="" class="img-responsive"/></div>

<div id="page2">
<h1 class="weight-9">公&nbsp;司&nbsp;产&nbsp;品</h1>
<h6>COMPANY PRODUCTS</h6>
<div class="line"><div id="cursor"></div></div>
<div id="product" class="carousel slide" data-ride="carousel" >
    <div class="carousel-inner">
      <ul class="row item active">
        <li class="col-xs-12 one">
          <div class="mlnx-cover"><img src="img/product_link.png" alt="product_link" class="img-responsive"><h3>美灵思心电设备</h3><h6>MLNX EADSFAS SHEBEI</h6></div>
          <img src="img/product_1.png" alt="product_1" class="img-responsive product">
        </li>
        </ul>
        <ul class="row item">
        <li class="col-xs-12 two">
          <div class="mlnx-cover"><img src="img/product_link.png" alt="product_link" class="img-responsive"><h3>美灵思血压设备</h3><h6>MLNX EADSFAS SHEBEI</h6></div>
          <img src="img/product_2.png" alt="product_2" class="img-responsive product">
        </li>
        </ul>
        <ul class="row item">
        <li class="col-xs-12 three">
         <div class="mlnx-cover"><img src="img/product_link.png" alt="product_link" class="img-responsive"><h3>美灵思心电设备</h3><h6>MLNX EADSFAS SHEBEI</h6></div>
          <img src="img/product_3.png" alt="product_3" class="img-responsive product">
        </li> 
        </ul>
        <ul class="row item">
        <li class="col-xs-12 four">
        <div class="mlnx-cover"><img src="img/product_link.png" alt="product_link" class="img-responsive"><h3>美灵思血糖设备</h3><h6>MLNX EADSFAS SHEBEI</h6></div>
          <img src="img/product_4.png" alt="product_4" class="img-responsive product">
        </li>
      </ul>
      <ul class="row item">
       <li class="col-xs-12 ">
          <div class="mlnx-cover"><img src="img/product_link.png" alt="product_link" class="img-responsive product"><h3>美灵思血压设备</h3><h6>MLNX EADSFAS SHEBEI</h6></div>
          <img src="img/product_1.png" class="img-responsive product">

        </li>

      </ul>
	  
<div class="clearfix"></div>
    </div>
        <a class="carousel-control left" href="#product" data-slide="prev">    <img src="img/left.png" class="middle"/></a>
        <a class="carousel-control right" href="#product" data-slide="next"><img src="img/right.png" class="middle"/></a>
    </div>
</div>
</div>

<div class="bg-blue" ><img src="images/23.png" alt="" class="img-responsive out-pic" /></div>
<div id="page3"><img src="images/page3.png" alt="" class="img-responsive"/></div>
<div ><img src="images/page4.png" alt="" class="img-responsive"/></div>
<div id="page4"><img src="images/page5.png" alt="" class="img-responsive"/></div>
<div id="page5"><img src="images/page6.png" alt="" class="img-responsive"/></div>

  <!-- jQuery (Bootstrap 的 JavaScript 插件需要引入 jQuery) -->
  <script type="text/javascript" src="js/jquery-2.0.0.min.js"></script>
  <!-- 包括所有已编译的插件 -->
  <script type="text/javascript" src="js/bootstrap.min.js"></script>
  <!-- 针对手机的一些功 -->
<!--   <script type='text/javascript' src='js/jquery.mobile.min.js'></script> -->
  <script>
	jQuery(document).ready(function($) {
		$(".scroll").click(function(event) {
			event.preventDefault();
			$('html,body').animate({
				scrollTop : $(this.hash).offset().top
			}, 1000);
		});

	    $(window).scroll(function () {
	        var winTop = $(window).scrollTop();
	        if (winTop >= 30) {
	            $('body').addClass('sticky-header');
	        } else {
	            $('body').removeClass('sticky-header');
	        }
	    });
	
		$("#product li").mouseenter(function(){
			var img = $(this).children("img");
			var height = img.height();
			var width = img.width();
			var position = img.position();
			var cover = img.prev(); 
			var coverImg = new Image();
			coverImg.src=cover.children("img").attr("src");
			var coverImgWidth = coverImg.width;
			var coverImgHeight = coverImg.height;
			cover.children("img").css({"margin-left":-coverImgWidth/2,"margin-right":-coverImgHeight/2});
			cover.show();
			cover.height(height*0.97525773);
			cover.width(width*0.96747967);
			cover.css({top:height*0.98762886,left:position.left+width*0.01626016});
			cover.animate({top:height*0.01237113},300);
		});
		
		$("#product li").mouseleave(function(){
			var img = $(this).children("img");
			var height = img.height();
			var cover = img.prev();
			cover.animate({top:height},300,function(){
				$(this).hide()}
			);
		});
	});
  </script>
</body>
</html>