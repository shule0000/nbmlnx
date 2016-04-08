<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core_rt"%>
<%@ taglib prefix="f" uri="http://java.sun.com/jstl/fmt_rt"%>
<!DOCTYPE HTML>
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
<link href="css/base.css" rel="stylesheet">

<!-- HTML5 Shim 和 Respond.js 用于让 IE8 支持 HTML5元素和媒体查询 -->
<!-- 注意： 如果通过 file://  引入 Respond.js 文件，则该文件无法起效果 -->
<!--[if lt IE 9]>
         <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
         <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
      <![endif]-->
</head>
<body data-spy="scroll" data-target=".navbar">

  <c:forEach items="${headers }" var="hea">
    <header>
      <a href="#"><img src="/docs/upload/${hea.logoImg }" alt="logo"
        class="logo" id="header-logo"></a> <span id="header-label">全国服务热线：<a
        href="tel:0574-83885266">0574-83885266</a> 需求提交/留言
      </span>
    </header>
  </c:forEach>

  <div class="clearfix"></div>

  <nav class="navbar" role="navigation">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse"
        data-target="#index-navbar-collapse">
        <span class="sr-only">网站导航</span> <span class="icon-bar"></span>
        <span class="icon-bar"></span> <span class="icon-bar"></span>
      </button>
    </div>
    <div class="collapse navbar-collapse" id="index-navbar-collapse">
      <ul class="nav navbar-nav" id="nav">
        <c:forEach items="${navigations }" var="nav">
          <li><a href="#page${nav.nid }" class="scroll">${nav.navName
              }</a></li>
        </c:forEach>
      </ul>
    </div>
  </nav>


  <div class="content" id="page1">
    <div id="myCarousel" class="carousel slide">
      <!-- 轮播（Carousel）指标 -->
      <div class="carousel-indicators-mlnx">
        <img src="img/c.png" usemap="#cmap" alt="c" />
        <map name="cmap" id="cmap">
          <area shape="circle" coords="45,45,45" alt="test1"
            onclick="prev()" />
          <area shape="circle" coords="135,45,45" alt="test1"
            onclick="next()" />
        </map>
      </div>
      <!-- 轮播（Carousel）项目 -->
      <div class="carousel-inner">

        <c:forEach items="${banners }" var="ban" varStatus="status">
          <c:if test="${status.first }">
            <div class="item active">
              <img src="/docs/upload/${ban.banImg }" alt="banner_1"
                class="img-responsive" />
            </div>
          </c:if>
          <c:if test="${!status.first }">
            <div class="item">
              <img src="/docs/upload/${ban.banImg }" alt="banner_1"
                class="img-responsive" />
            </div>
          </c:if>
        </c:forEach>



      </div>
    </div>
  </div>
  <div class="center">
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4"">
      <div class="flipWrapper">
        <div class="card ">
          <div class="face front">
            <img src="img/index_intro.png" alt="banner_1"
              class="img-responsive" />
          </div>
          <div class="face back">
            <img src="img/index_intro_back.png" alt="banner_1"
              class="img-responsive" />
          </div>
        </div>
      </div>
    </div>
    <div class="clearfix visible-xs"></div>
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4"">
      <div class="flipWrapper">
        <div class="card ">
          <div class="face front">
            <img src="img/index_value.png" alt="banner_1"
              class="img-responsive" />
          </div>
          <div class="face back">
            <img src="img/index_intro_back.png" alt="banner_1"
              class="img-responsive" />
          </div>
        </div>
      </div>
    </div>
    <div class="clearfix visible-sm"></div>
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4"">
      <div class="flipWrapper">
        <div class="card">
          <div class="face front">
            <img src="img/index_join.png" alt="banner_1"
              class="img-responsive" />
          </div>
          <div class="face back">
            <img src="img/index_intro_back.png" alt="banner_1"
              class="img-responsive" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="clearfix"></div>

  <div id="page2">
    <h1 class="weight-9">公&nbsp;司&nbsp;产&nbsp;品</h1>
    <h6>COMPANY PRODUCTS</h6>
    <div class="line">
      <div id="cursor"></div>
    </div>

    <div id="product" class="carousel slide" data-ride="carousel"
      data-shift="1">
      <div class="carousel-inner">

        <c:forEach items="${finalPdus }" var="pduTeam"
          varStatus="status">
          <c:if test="${status.first }">
            <ul class="row item active">
              <c:forEach items="${pduTeam }" var="pdu">
                <c:if test="${pdu!=null }">
                  <li class="col-xs-3">
                    <div class="mlnx-cover">
                      <img src="img/product_link.png" alt="product_link"
                        class="img-responsive">
                      <h2>${pdu.pduName }</h2>
                      <h4>${pdu.pduName2 }</h4>
                    </div> <img src="/docs/upload/${pdu.pduImg }"
                    alt="product_1" class="img-responsive product">
                    <div class="mlnx-half-cover">
                      <h2>${pdu.pduName }</h2>
                      <h4>${pdu.pduName2 }</h4>
                    </div>
                  </li>
                </c:if>
              </c:forEach>
            </ul>
          </c:if>

          <c:if test="${!status.first }">
            <ul class="row item">
              <c:forEach items="${pduTeam }" var="pdu">
                <c:if test="${pdu!=null }">
                  <li class="col-xs-3">
                    <div class="mlnx-cover">
                      <img src="img/product_link.png" alt="product_link"
                        class="img-responsive">
                      <h2>${pdu.pduName }</h2>
                      <h4>${pdu.pduName2 }</h4>
                    </div> <img src="/docs/upload/${pdu.pduImg }"
                    alt="product_1" class="img-responsive product">
                    <div class="mlnx-half-cover">
                      <h2>${pdu.pduName }</h2>
                      <h4>${pdu.pduName2 }</h4>
                    </div>
                  </li>
                </c:if>
              </c:forEach>
            </ul>
          </c:if>
        </c:forEach>
      </div>
      <a class="carousel-control left" href="#product" data-slide="prev">
        <img src="img/left.png" class="middle" />
      </a> <a class="carousel-control right" href="#product"
        data-slide="next"><img src="img/right.png" class="middle" /></a>
    </div>
  </div>
  <div class="clearfix"></div>
  <img src="img/info.png" alt="info" class="img-responsive">
  <div id="app">
    <img src="img/app_left.png" alt="info" class="img-responsive"
      id="app_left"> <img src="img/app_right.png" alt="info"
      class="img-responsive" id="app_right">
  </div>
  <div class="clearfix"></div>
  <div id="page3">
    <div class="col-md-4 service-center">
      <img src="img/service_hospital.png" alt="service_hospital" />
      <h1>
        医院服务
        </h3>
        <p>爸爸不舒服爸爸的司法不代发发达发达的司法斯蒂芬金卡的说法案件法拉第发的反馈及案例的设计费垃圾堆里附近阿斯蒂芬捡垃圾的浪费阿斯蒂芬爱对方就垃圾收代理费骄傲了</p>
    </div>
    <div class="col-md-4 service-center">
      <img src="img/service_community.png" alt="service_community" />
      <h1>社区服务</h1>
      <p>爸爸不舒服爸爸的司法不代发发达发达的司法斯蒂芬金卡的说法案件法拉第发的反馈及案例的设计费垃圾堆里附近阿斯蒂芬捡垃圾的浪费阿斯蒂芬爱对方就垃圾收代理费骄傲了</p>
    </div>
    <div class="col-md-4 service-center">
      <img src="img/service_welfare.png" alt="service_welfare" />
      <h1>敬老院服务</h1>
      <p>爸爸不舒服爸爸的司法不代发发达发达的司法斯蒂芬金卡的说法案件法拉第发的反馈及案例的设计费垃圾堆里附近阿斯蒂芬捡垃圾的浪费阿斯蒂芬爱对方就垃圾收代理费骄傲了</p>
    </div>
  </div>

  <div id="page4">
    <img src="img/honor_title.png" alt="honor_title"
      class="img-responsive"> <img src="img/honor_body.png"
      alt="honor_body" class="img-responsive">
  </div>

  <div id="page5" role="form">
    <h1 class="white pd-top-50">联系我们</h1>
    <h6>CONTACT US</h6>
    <div id="contact-line">
      <div id="contact-cursor"></div>
    </div>
    <h5>告诉我们你想要的吧！</h5>
    <h2 class="white">
      <img src="img/contact_phone.png" alt="contact_phone" />
      0574-83885266
    </h2>
    <div id="contact-dotted"></div>
    <div id="contact_left">
      <form id="contact" action="" method="POST">
        <div class="form-group">
          <input type="text" class="form-control" name="name" id="name"
            placeholder="您的姓名：" />
        </div>
        <div class="form-group">
          <input type="text" class="form-control" name="phone"
            id="phone" placeholder="您的联系电话：" />
        </div>
        <div class="form-group">
          <textarea type="text" class="form-control" name="message"
            id="message" placeholder="请写下你的需求和建议" rows="4"></textarea>
        </div>
        <button type="button" onclick="leaveMess()"
          class="btn btn-default" id="contact_submit">提交留言</button>
      </form>
    </div>
    <div id="contact_right">
      <div class="pd-top-15">
        <span id="contact-address"></span>地址：宁波市高新区院士路66号创业大厦129室
      </div>
      <div class="pd-top-15">
        <span id="contact-phone"></span>联系电话：0574-83885266（工作时间：08:60-17:30（周一至周五））
      </div>
      <div class="pd-top-15">
        <span id="contact-cooperation"></span>商务合作：hector.pang@nbmlnx.com
      </div>
      <div class="pd-top-15">
        <span id="contact-hr"></span>人才招聘：hr@nbmlnx.cn
      </div>
      <div class="pd-top-15">
        <span id="contact-subway"></span>地铁：1号线福庆北路站转29路创业大厦站下车；810/139科技公园站下车
      </div>
      <div class="pd-top-15">
        <span id="contact-drive"></span>驾车：院士路与凌云路交叉路口，创业大厦（宁波国家留学人员创业园）
      </div>
    </div>
  </div>

  <div></div>

  <!-- jQuery (Bootstrap 的 JavaScript 插件需要引入 jQuery) -->
  <script type="text/javascript" src="js/jquery-2.0.0.min.js"></script>
  <!-- 包括所有已编译的插件 -->
  <script type="text/javascript" src="js/bootstrap.min.js"></script>
  <script type="text/javascript" src="js/index.js"></script>
  <script>
			function prev() {
				$('#myCarousel').carousel('prev')
			}
			function next() {
				$('#myCarousel').carousel('next')
			}
			jQuery(document).ready(function($) {
				$(".scroll").click(function(event) {
					event.preventDefault();
					$('html,body').animate({
						scrollTop : $(this.hash).offset().top
					}, 1000);
				});

				$(window).scroll(function() {
					var winTop = $(window).scrollTop();
					if (winTop >= 30) {
						$('body').addClass('sticky-header');
					} else {
						$('body').removeClass('sticky-header');
					}
				});

				$("#product li").mouseenter(function() {
					var img = $(this).children("img");
					var height = img.height();
					var width = img.width();
					var position = img.position();
					var cover = img.prev();
					var coverImg = new Image();
					coverImg.src = cover.children("img").attr("src");
					var coverImgWidth = coverImg.width;
					var coverImgHeight = coverImg.height;
					cover.children("img").css({
						"margin-left" : -coverImgWidth / 2,
						"margin-right" : -coverImgHeight / 2
					});
					cover.show();
					cover.height(height * 0.97525773);
					cover.width(width * 0.96747967);
					cover.css({
						top : height * 0.98762886,
						left : position.left + width * 0.01626016
					});
					cover.animate({
						top : height * 0.01237113
					}, 300);
				});

				$("#product li").mouseleave(function() {
					var img = $(this).children("img");
					var height = img.height();
					var cover = img.prev();
					cover.animate({
						top : height
					}, 300, function() {
						$(this).hide()
					});
				});
			});
		</script>
  <script type="text/javascript" src="js/my.js"></script>
</body>
</html>