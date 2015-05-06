<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core_rt"%>
<%@ taglib prefix="f" uri="http://java.sun.com/jstl/fmt_rt"%>
<!DOCTYPE HTML>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport"
  content="width=device-width,inital-scale=1.0,maximum-scale=1.0,use-scalable=no">
<meta name="Description" content="宁波美灵思医疗科技有限公司官网专用">
<link rel="icon" href="images/logo.png">
<title>美灵思医疗</title>
<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="css/style.css" type="text/css" rel="stylesheet" />
</head>
<body>
  <nav class="navbar navbar-fixed-top navbar-mlnx" role="navigation">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse"
        data-target="#index-navbar-collapse">
        <span class="sr-only">网站导航</span> <span class="icon-bar"></span>
        <span class="icon-bar"></span> <span class="icon-bar"></span>
      </button>
      <c:forEach items="${headers }" var="hea">
        <a class="navbar-brand" href="#"> <img
          src="/docs/upload/${hea.logoImg }" alt="logo" height="50px;"
          class="logo">
        </a>
      </c:forEach>
    </div>
    <div class="collapse navbar-collapse" id="index-navbar-collapse">
      <ul class="nav navbar-nav">
        <c:forEach items="${navigations }" var="nav">
          <li><a href="#page${nav.nid }" class="scroll">${nav.navName
              }</a></li>
        </c:forEach>
      </ul>
    </div>
  </nav>


  <div class="content">
    <div id="page1" class="page">
      <hr>
      <div class="wrap">
        <div id="myCarousel" class="carousel slide">
          <!-- 轮播（Carousel）指标 -->
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0"
              class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
          <!-- 轮播（Carousel）项目 -->
          <div class="carousel-inner">
            <div class="item active">
              <div id="first-pic" class="mlnx-banner">
                <div class="mlnx-cover"></div>
                <div class="table">
                  <div class="table-middle">
                    <div class="table-inner table-right">
                      <c:forEach items="${content1 }" var="cnt1">
                        <h1>${cnt1.conTitle }</h1>
                        <p class="mlnx-white">${cnt1.conText }</p>
                      </c:forEach>
                      <div class="btn btn-mlnx scroll"
                        onclick="gotoPage('#page5')">
                        更多<span
                          class="glyphicon glyphicon-hand-right mlnx-gt"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div id="second-pic" class="mlnx-banner">
                <div class="mlnx-cover"></div>
                <div class="table">
                  <div class="table-middle">
                    <div class="table-inner table-center">
                      <c:forEach items="${content2 }" var="cnt2">
                        <h1>${cnt2.conTitle }</h1>
                        <p class="mlnx-white">${cnt2.conText }</p>
                      </c:forEach>
                      <div class="btn btn-mlnx scroll"
                        onclick="gotoPage('#page5')">
                        更多<span
                          class="glyphicon glyphicon-hand-right mlnx-gt"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div id="third-pic" class="mlnx-banner">
                <div class="mlnx-cover"></div>
                <div class="table">
                  <div class="table-middle">
                    <div class="table-inner table-left">
                      <c:forEach items="${content3 }" var="cnt3">
                        <h1>${cnt3.conTitle }</h1>
                        <p class="mlnx-white">${cnt3.conText }</p>
                      </c:forEach>
                      <div class="btn btn-mlnx scroll"
                        onclick="gotoPage('#page5')">
                        更多<span
                          class="glyphicon glyphicon-hand-right mlnx-gt"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="page2" class="page">
      <hr>
      <div class="wrap page-box">
        <div class="container">
          <div class="title">
            <h1>产品展示</h1>
            <br>
            <hr>
            <small><a href="#page5" class="scroll">联系我们</a></small>
          </div>
          <ol class="breadcrumb table-left">
            <li><a href="#">Home</a></li>
            <li><a href="#">产品</a></li>
            <li class="active">硬件产品</li>
          </ol>
        </div>
      </div>
    </div>

    <div class="page back-img">
      <div class="table ht400">
        <div class="table-middle">
          <h3 id="why-us">
            <a href="#page3" class="scroll mlnx-white">为什么选择我们</a>
          </h3>
        </div>
      </div>
      <div class="mlnx-cover ht400"></div>
    </div>


    <div id="page3" class="page">
      <hr>
      <div class="wrap container page-box">
        <div class="title">
          <h1>智能便捷</h1>
          <br>
          <hr>
          <small><a href="#page5" class="scroll">联系我们</a></small>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"
          data-scrollreveal="enter left and move 50px over 1s">
          <div class="center">
            <span>个性化</span>
          </div>
          <div class="flipWrapper">
            <div class="card">
              <c:forEach items="${image1 }" var="img1">
                <div class="face front">
                  <img src="/docs/upload/${img1.imgUrl }" alt=""
                    class="img-responsive" />
                </div>
                <div class="face back">
                  <p class="mlnx-white">
                    <em>足不出户，实现24小时监控</em>
                  </p>
                  <p class="mlnx-white text-left">${img1.imgDetail }</p>
                </div>
              </c:forEach>
            </div>
          </div>
        </div>


        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"
          data-scrollreveal="enter left and move 50px over 1s">
          <div class="center ">
            <span>信息化</span>
          </div>
          <div class="flipWrapper">
            <div class="card">
              <c:forEach items="${image2 }" var="img2">
                <div class="face front">
                  <img src="/docs/upload/${img2.imgUrl }" alt=""
                    class="img-responsive" />
                </div>
                <div class="face back">
                  <p class="mlnx-white">
                    <em>软硬件结合--全套信息服务</em>
                  </p>
                  <p class="mlnx-white text-left">${img2.imgDetail }</p>
                </div>
              </c:forEach>
            </div>
          </div>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"
          data-scrollreveal="enter left and move 50px over 1s">
          <div class="center">
            <span>移动化</span>
          </div>
          <div class="flipWrapper">
            <div class="card">
              <c:forEach items="${image3 }" var="img3">
                <div class="face front">
                  <img src="/docs/upload/${img3.imgUrl }" alt=""
                    class="img-responsive" />
                </div>
                <div class="face back">
                  <p class="mlnx-white">
                    <em>实时移动性</em>
                  </p>
                  <p class="mlnx-white text-left">${img3.imgDetail }</p>
                </div>
              </c:forEach>
            </div>
          </div>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"
          data-scrollreveal="enter left and move 50px over 1s">
          <div class="center">
            <span>全面化</span>
          </div>
          <div class="flipWrapper">
            <div class="card">
              <c:forEach items="${image4 }" var="img4">
                <div class="face front">
                  <img src="/docs/upload/${img4.imgUrl }" alt=""
                    class="img-responsive" />
                </div>
                <div class="face back">
                  <p class="mlnx-white">
                    <em>全面智慧化</em>
                  </p>
                  <p class="mlnx-white text-left">${img4.imgDetail }</p>
                </div>
              </c:forEach>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="page back-img-hz">
      <div class="table ht400">
        <div class="table-middle">
          <h3 id="why-us">
            <a href="#page4" class="scroll mlnx-white"> 跟我们合作？</a>
          </h3>
        </div>
      </div>
      <div class="mlnx-cover ht400"></div>
    </div>



    <div id="page4" class="page">
      <hr>
      <div class="wrap container page-box">
        <div class="title">
          <h1>人才为核心</h1>
          <br>
          <hr>
          <small><a href="#page5" class="scroll"> 联系我们？</a></small>

        </div>

        <div id="portfolio-filter">
          <ul id="filter">
            <li><a href="#page3" class="current" data-filter="*"
              title="">全部</a></li>
            <li><a href="#page3" data-filter=".honour" title="">荣誉资质</a></li>
            <li><a href="#page3" data-filter=".member" title="">研发团队</a></li>
          </ul>

          <ul id="portfolio" class="portfolio-wrap">
            <c:forEach items="${images }" var="img">
              <c:if test="${img.imgType=='证书类' }">
                <li class="portfolio-box honour"><a
                  class="expander" href="javascript:void(0);" title="">
                    <img src="/docs/upload/${img.imgUrl }" alt="" />
                    <div class="mask"></div>
                    <h4>${img.imgDetail }</h4>
                </a></li>
              </c:if>

              <c:if test="${img.imgType=='人员类' }">
                <li class="portfolio-box member"><a
                  class="expander" href="javascript:void(0);" title="">
                    <img src="/docs/upload/${img.imgUrl }" alt="" />
                    <div class="mask"></div>
                    <h4>${img.imgDetail }</h4>
                </a></li>
              </c:if>
            </c:forEach>
          </ul>
        </div>
      </div>
    </div>

    <div class="page back-img">
      <div class="table ht400">
        <div class="table-middle">
          <h3 id="why-us">
            <a href="#page5" class="scroll mlnx-white">如何加入我们？</a>
          </h3>
        </div>
      </div>
      <div class="mlnx-cover ht400"></div>
    </div>

    <div id="page5" class="page">
      <hr>
      <div class="wrap container page-box">
        <div id="product-post">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="heading-section">
                  <h2>免费发信息给我们</h2>
                  <img src="images/under-heading.png" alt="">
                </div>
              </div>
            </div>
            <div id="contact-us">
              <div class="container">
                <div class="row">
                  <div class="product-item col-md-12">
                    <div class="row">
                      <div class="col-md-8">
                        <div class="message-form">

                          <div class="send-message">
                            <div class="row">
                              <div class="name col-md-4">
                                <input type="text" name="name" id="name"
                                  placeholder="姓名" />
                              </div>
                              <div class="email col-md-4">
                                <input type="text" name="email"
                                  id="email" placeholder="邮箱" />
                              </div>
                              <div class="subject col-md-4">
                                <input type="text" name="phone"
                                  id="phone" placeholder="手机号" />
                              </div>
                            </div>

                            <div class="row">
                              <div class="text col-md-12">
                                <textarea name="message" id="message"
                                  placeholder="留言"></textarea>
                              </div>
                            </div>

                            <div class="row top-25">
                              <label class="col-md-4 text-left"
                                for="focusedInput"
                                style="font-size: medium; font-family: 幼圆"><b>请输入验证码：</b></label>
                              <span><input
                                class="input-xlarge focused col-md-4"
                                type="text" id="yzm" name="yzm" /></span> <span
                                class="col-md-4 text-left"><img
                                id="yzmImg" src="yzm.jsp"
                                onclick="changeYzm();"
                                style="cursor: pointer;"></span>
                            </div>

                            <div class="send text-left">
                              <button type="button" onclick="checkYzm()">Send</button>
                              <span id="promptN" hidden="hidden">验证码错误！</span>
                              <span id="promptY" hidden="hidden">留言发送成功！感谢您的支持，请耐心等待回复。</span>
                            </div>

                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="info text-left">
                          <p>发送留言给我们</p>
                          <ul>
                            <c:forEach items="${contact }" var="ct">
                              <li><i
                                class="glyphicon glyphicon-earphone"></i><a
                                href="tel:${ct.ctPhone }">${ct.ctPhone
                                  }</a></li>
                              <li><i
                                class="glyphicon glyphicon-globe"></i><a
                                href="http://j.map.baidu.com/9FV9x"
                                target="_blank">${ct.ctAdress }</a></li>
                              <li><i
                                class="glyphicon glyphicon-envelope"></i><a
                                href="${ct.ctEmail }">${ct.ctEmail }</a></li>
                            </c:forEach>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="heading-section">
                  <h2>Find Us On Map</h2>
                  <img src="images/under-heading.png" alt="">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div id="googleMap" style="height: 420px;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer">
    <div class="col-xs-4 col-xs-offset-2 col-sm-3">
      <c:forEach items="${qrcode1 }" var="qr1">
        <img src="/docs/upload/${qr1.qrImg }" class="img-responsive"
          alt="nbmlnx_service" width="90px" align="bottom">
        <p style="font-size: 11px; margin: 12px;">${qr1.qrName }</p>
      </c:forEach>
    </div>

    <div class="col-xs-4 col-sm-3">
      <c:forEach items="${qrcode2 }" var="qr2">
        <img src="/docs/upload/${qr2.qrImg }" class="img-responsive"
          alt="nbmlnx_service" width="90px" align="bottom">
        <p style="font-size: 11px; margin: 12px;">${qr2.qrName }</p>
      </c:forEach>
    </div>

    <div class="col-xs-12 col-sm-3">
      <address class="hidden-xs">
        <strong style="font-size: 20px;">宁波市美灵思医疗科技有限公司</strong><br>
        <c:forEach items="${contact }" var="ct">
          <i class="glyphicon glyphicon-globe"></i>：<a
            href="http://j.map.baidu.com/9FV9x" target="_blank">${ct.ctAdress
            }</a>
          <br>
          <i class="glyphicon glyphicon-earphone"></i>：<a
            href="tel:${ct.ctPhone }">${ct.ctPhone }</a>
          <br>
          <i class="glyphicon glyphicon-print"></i>：<a
            href="tel:${ct.ctFax }">${ct.ctFax }</a>
          <br>
          <i class="glyphicon glyphicon-envelope"></i>：<a
            href="${ct.ctEmail }">${ct.ctEmail }</a>
          <br>
        </c:forEach>
        <a href="http://weibo.com/u/1950616540" target="_blank"
          style="color: #c19b85">微博关注</a>
      </address>
    </div>

    <div class="center visible-xs">
      <address>
        <strong style="font-size: 20px;">宁波市美灵思医疗科技有限公司</strong><br>
        <c:forEach items="${contact }" var="ct">
          <i class="glyphicon glyphicon-globe"></i>：<a
            href="http://j.map.baidu.com/9FV9x" target="_blank">${ct.ctAdress
            }</a>
          <br>
          <i class="glyphicon glyphicon-earphone"></i>：<a
            href="tel:${ct.ctPhone }">${ct.ctPhone }</a>
          <br>
          <i class="glyphicon glyphicon-print"></i>：<a
            href="tel:${ct.ctFax }">${ct.ctFax }</a>
          <br>
          <i class="glyphicon glyphicon-envelope"></i>：<a
            href="mailto:${ct.ctEmail }">${ct.ctEmail }</a>
          <br>
        </c:forEach>
        <a href="http://weibo.com/u/1950616540" target="_blank"
          style="color: #c19b85">微博关注</a>
      </address>
    </div>

    <div class="col-xs-12">
      <div class="copy">
        <c:forEach items="${copyright }" var="cop">
          <p style="font-size: 10px">
            © 2015 Power by <a href="http://www.nbmlnx.com"
              target="_blank">${cop.cpDetail }</a>
          </p>
        </c:forEach>
      </div>
    </div>
    <a href="#page1" id="toTop" class="scroll" style="display: block;">
      <span id="toTopHover" style="opacity: 1;"> </span>
    </a>
  </div>

  <!-- jQuery (Bootstrap 的 JavaScript 插件需要引入 jQuery) -->
  <script type="text/javascript" src="js/jquery-2.0.0.min.js"></script>
  <!-- 包括所有已编译的插件 -->
  <script type="text/javascript" src="js/bootstrap.min.js"></script>
  <!-- 针对手机的一些功 -->
  <script type='text/javascript' src='js/jquery.mobile.min.js'></script>
  <!-- 图片过滤  -->
  <script type="text/javascript" src="js/plugins.js"></script>
  <!-- 图片翻转  -->
  <script type="text/javascript" src="js/flippy.js"></script>
  <!-- 加载效果  -->
  <script type="text/javascript" src="js/modernizr.custom.js"></script>
  <script type="text/javascript" src="js/royal_preloader.min.js"></script>
  <script type="text/javascript">
			Royal_Preloader.config({
				mode : 'text', // 'number', "text" or "logo"
				text : '宁波美灵思',
				timeout : 0,
				showInfo : true,
				opacity : 1,
				background : [ '#000000' ]
			});
		</script>
  <!-- 返回首页效果  -->
  <script type="text/javascript" src="js/move-top.js"></script>
  <script type="text/javascript" src="js/jquery.easing.js"></script>

  <script type="text/javascript" src="js/reset.js"></script>
  <script type="text/javascript" src="js/my.js"></script>

</body>
</html>
