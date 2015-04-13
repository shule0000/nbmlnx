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
<!-- 引入 Bootstrap 2种方式-->
<!-- <link
  href="http://apps.bdimg.com/libs/bootstrap/3.3.0/css/bootstrap.min.css"
  rel="stylesheet"> -->
<link href="css/bootstrap.min.css" rel="stylesheet">
<!-- HTML5 Shim 和 Respond.js 用于让 IE8 支持 HTML5元素和媒体查询 -->
<!-- 注意： 如果通过 file://  引入 Respond.js 文件，则该文件无法起效果 -->
<!--[if lt IE 9]>
         <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
         <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
      <![endif]-->
<!-- 引入lightSlider式样，供轮播图片使用  -->
<link href="css/lightSlider.css" type="text/css" rel="stylesheet" />
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
          <li class="active cur"><a href="#${nav.nid }"
            class="scroll">${nav.navName }</a></li>
        </c:forEach>
      </ul>
    </div>
  </nav>


  <div class="content">
    <div id="1" class="page">
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
              <div id="first-pic">
                <div class="table">
                  <div class="table-middle">
                    <div class="table-inner">
                      <c:forEach items="${content1 }" var="cnt1">
                        <h1>${cnt1.conTitle }</h1>
                        <p>${cnt1.conText }</p>
                      </c:forEach>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div id="second-pic">
                <div class="table">
                  <div class="table-middle">
                    <div class="table-inner">
                      <c:forEach items="${content2 }" var="cnt2">
                        <h1>${cnt2.conTitle }</h1>
                        <p>${cnt2.conText }</p>
                      </c:forEach>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div id="third-pic">
                <div class="table">
                  <div class="table-middle">
                    <div class="table-inner">
                      <c:forEach items="${content3 }" var="cnt3">
                        <h1>${cnt3.conTitle }</h1>
                        <p>${cnt3.conText }</p>
                      </c:forEach>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 轮播（Carousel）导航 -->
          <!--           <a class="carousel-control left" href="#myCarousel" -->
          <!--             data-slide="prev">&lsaquo;</a> <a -->
          <!--             class="carousel-control right" href="#myCarousel" -->
          <!--             data-slide="next">&rsaquo;</a> -->
        </div>
      </div>
    </div>

    <div id="2" class="page">
      <hr>
      <div class="wrap">
        <div class="title">
          <h1>我们的服务智能、便捷</h1>
          <br>
          <hr>
          <small><a href="#">想联系我们？</a></small>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"
          data-scrollreveal="enter left and move 50px over 1s">
          <div class="center">
            <span>个人便捷监护服务</span>
          </div>
          <div class="flipWrapper">
            <div class="card">
              <c:forEach items="${image1 }" var="img1">
                <div class="face front">
                  <img src="/docs/upload/${img1.imgUrl }" alt=""
                    class="img-responsive" />
                </div>
                <div class="face back">
                  <p>
                    <small><em>美灵思</em></small>
                  </p>
                  <p>${img1.imgDetail }</p>
                </div>
              </c:forEach>
            </div>
          </div>
        </div>


        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"
          data-scrollreveal="enter left and move 50px over 1s">
          <div class="center ">
            <span>智能化医疗监护服务</span>
          </div>
          <div class="flipWrapper">
            <div class="card">
              <c:forEach items="${image2 }" var="img2">
                <div class="face front">
                  <img src="/docs/upload/${img2.imgUrl }" alt=""
                    class="img-responsive" />
                </div>
                <div class="face back">
                  <p>
                    <small><em>美灵思</em></small>
                  </p>
                  <p>${img2.imgDetail }</p>
                </div>
              </c:forEach>
            </div>
          </div>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"
          data-scrollreveal="enter left and move 50px over 1s">
          <div class="center">
            <span>智能化医疗监护服务</span>
          </div>
          <div class="flipWrapper">
            <div class="card">
              <c:forEach items="${image3 }" var="img3">
                <div class="face front">
                  <img src="/docs/upload/${img3.imgUrl }" alt=""
                    class="img-responsive" />
                </div>
                <div class="face back">
                  <p>
                    <small><em>美灵思</em></small>
                  </p>
                  <p>${img3.imgDetail }</p>
                </div>
              </c:forEach>
            </div>
          </div>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"
          data-scrollreveal="enter left and move 50px over 1s">
          <div class="center">
            <span>智能化医疗监护服务</span>
          </div>
          <div class="flipWrapper">
            <div class="card">
              <c:forEach items="${image4 }" var="img4">
                <div class="face front">
                  <img src="/docs/upload/${img4.imgUrl }" alt=""
                    class="img-responsive" />
                </div>
                <div class="face back">
                  <p>
                    <small><em>美灵思</em></small>
                  </p>
                  <p>${img4.imgDetail }</p>
                </div>
              </c:forEach>
            </div>
          </div>
        </div>


      </div>
    </div>


    <div id="3" class="page">
      <hr>
      <div class="wrap">
        <div class="title">
          <h1>人才为核心</h1>
          <br>
          <hr>
          <small><a href="#">想联系我们？</a></small>

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
                  class="expander" href="#page3" title=""> <img
                    src="/docs/upload/${img.imgUrl }" alt="" />
                    <div class="mask"></div>
                    <h4>${img.imgDetail }</h4>
                </a></li>
              </c:if>

              <c:if test="${img.imgType=='人员类' }">
                <li class="portfolio-box member"><a
                  class="expander" href="#page3" title=""> <img
                    src="/docs/upload/${img.imgUrl }" alt="" />
                    <div class="mask"></div>
                    <h4>${img.imgDetail }</h4>
                </a></li>
              </c:if>
            </c:forEach>
          </ul>
        </div>
      </div>


      <!--         <div class=""> -->
      <!--           <h1>研发团队</h1> -->
      <!--           <dl> -->
      <!--             <dt>索源明</dt> -->
      <!--             <dd>电子工程博士，美国约翰霍普金斯大学 电子工程硕士，美国阿拉巴马大学 电子信息科学与技术学士，中山大学</dd> -->
      <!--             <dt>王慧泉</dt> -->
      <!--             <dd>访问学者，美国约翰霍普金斯大学 生物医学工程博士，生物医学工程学士，天津大学</dd> -->
      <!--             <dt>宁宇</dt> -->
      <!--             <dd>计算机科学硕士，美国约翰霍普金斯大学 计算机科学与技术学士，清华大学 -->
      <!--               担任约翰霍普金斯大学医学院副研究员及软件工程师</dd> -->
      <!--             <dt>展安东</dt> -->
      <!--             <dd>计算机科学博士，美国约翰霍普金斯大学 软件与理论硕士，计算机科学与技术学士，南京大学</dd> -->
      <!--             <dt>冯剑桥</dt> -->
      <!--             <dd>计算机科学博士，美国约翰霍普金斯大学 软件与理论硕士，北京大学 计算机科学与技术学士，山东大学</dd> -->
      <!--             <dt>技术顾问： George</dt> -->
      <!--             <dd>Ma（国籍美国） 机械工程硕士，内布拉斯加州立大学 高级工程师，Ophir Corporation公司 -->
      <!--               执行总裁，Quantum Medical Metrics公司</dd> -->
      <!--             <dt>Thomas J. Beck（国籍美国）</dt> -->
      <!--             <dd>医学博士，约翰霍普金斯大学医学院 约翰霍普金斯医院放射科高级医师 -->
      <!--               约翰霍普金斯大学医学院副教授，博士生导师。 曾在国际知名学术刊物发表论文百余篇，学术著作7部，专利十余项 -->
      <!--               曾获得美国政府及企业科研项目资金三十余项。任美国多家医学杂志评审委员会成员。 曾获得包括美国国家卫生研究院(NIH) -->
      <!--               James A Shannon奖在内的多项大奖。 创立 Quantum Medical -->
      <!--               Metrics公司，任该公司副总裁及技术总监。</dd> -->
      <!--           </dl> -->
      <!--         </div> -->
    </div>

    <!--     <div id="page4" class="page"> -->
    <!--       <hr> -->
    <!--       <div class="wrap"> -->
    <!--         <div id="contact"> -->
    <!--           <div class="just_pattern"></div> -->
    <!--           <div class="just_pattern1"></div> -->
    <!--           <div class="parallax2"></div> -->
    <!--           <div class="container z-index"> -->
    <!--             <div class="sixteen columns" -->
    <!--               data-scrollreveal="enter bottom and move 150px over 1s"> -->
    <!--               <div class="contact-wrap"> -->
    <!--                 <p> -->
    <!--                   <i class="icon-contact1">&#xf095;</i><span>call -->
    <!--                     us:</span> (381) 267-6386 <small><em>Monday–Friday -->
    <!--                       | 9am–5pm (GMT +1)</em></small> -->
    <!--                 </p> -->
    <!--                 <p> -->
    <!--                   <i class="icon-contact1">&#xf041;</i><span>Visit -->
    <!--                     Us:</span> First Street, Sunrise Avenue, New York, USA -->
    <!--                 </p> -->
    <!--                 <h6>contact us:</h6> -->
    <!--                 <form name="ajax-form" id="ajax-form" -->
    <!--                   action="mail-it.php" method="post"> -->
    <!--                   <label for="name">Your Lovely Name: * <span -->
    <!--                     class="error" id="err-name">please enter name</span> -->
    <!--                   </label> <input name="name" id="name" type="text" /> <label -->
    <!--                     for="email">E-Mail: * <span class="error" -->
    <!--                     id="err-email">please enter e-mail</span> <span -->
    <!--                     class="error" id="err-emailvld">e-mail is not -->
    <!--                       a valid format</span> -->
    <!--                   </label> <input name="email" id="email" type="text" /> <label -->
    <!--                     for="message">Tell Us Everything:</label> -->
    <!--                   <textarea name="message" id="message"></textarea> -->
    <!--                   <div id="button-con"> -->
    <!--                     <button class="send_message" id="send">Submit</button> -->
    <!--                   </div> -->
    <!--                   <div class="error text-align-center" id="err-form">There -->
    <!--                     was a problem validating the form please check!</div> -->
    <!--                   <div class="error text-align-center" id="err-timedout">The -->
    <!--                     connection to the server timed out!</div> -->
    <!--                   <div class="error" id="err-state"></div> -->
    <!--                 </form> -->
    <!--                 <div id="ajaxsuccess">Successfully sent!!</div> -->
    <!--               </div> -->
    <!--             </div> -->
    <!--           </div> -->
    <!--           <a class="button-map close-map"><span>Locate Us on -->
    <!--               Map</span></a> -->
    <!--         </div> -->
    <!--       </div> -->
    <!--     </div> -->

  </div>
  <div class="footer">
    <div class="col-xs-4 col-xs-offset-2 col-sm-3">
      <c:forEach items="${qrcode1 }" var="qr1">
        <img src="/docs/upload/${qr1.qrImg }" class="img-responsive"
          alt="nbmlnx_service" width="90px" align="bottom">
        <p style="font-size:11px;margin: 12px;">${qr1.qrName }</p>
      </c:forEach>
    </div>

    <div class="col-xs-4 col-sm-3">
      <c:forEach items="${qrcode2 }" var="qr2">
        <img src="/docs/upload/${qr2.qrImg }" class="img-responsive"
          alt="nbmlnx_service" width="90px" align="bottom">
        <p style="font-size:11px;margin: 12px;">${qr2.qrName }</p>
      </c:forEach>
    </div>

    <div class="col-xs-12 col-sm-3">
      <address class="hidden-xs">
        <strong style="font-size: 20px;">宁波市美灵思医疗科技有限公司</strong><br>
        <c:forEach items="${contact }" var="ct">
        地址：<a href="http://j.map.baidu.com/9FV9x" target="_blank">${ct.ctAdress
            }</a>
          <br>
        电话：<a href="tel:${ct.ctPhone }">${ct.ctPhone }</a>
          <br> 传真：<a href="tel:${ct.ctFax }">${ct.ctFax }</a>
          <br> 邮箱：<a href="${ct.ctEmail }">${ct.ctEmail }</a>
          <br>
        </c:forEach>
        <a href="http://weibo.com/u/1950616540" target="_blank"
          style="color:#c19b85">微博关注</a>
      </address>
    </div>

    <div class="center visible-xs">
      <address>
        <strong style="font-size: 20px;">宁波市美灵思医疗科技有限公司</strong><br>
        <c:forEach items="${contact }" var="ct">
        地址：<a href="http://j.map.baidu.com/9FV9x" target="_blank">${ct.ctAdress
            }</a>
          <br>
        电话：<a href="tel:${ct.ctPhone }">${ct.ctPhone }</a>
          <br> 传真：<a href="tel:${ct.ctFax }">${ct.ctFax }</a>
          <br> 邮箱：<a href="${ct.ctEmail }">${ct.ctEmail }</a>
          <br>
        </c:forEach>
        <a href="http://weibo.com/u/1950616540" target="_blank"
          style="color:#c19b85">微博关注</a>
      </address>
    </div>

    <div class="col-xs-12">
      <div class="copy">
        <c:forEach items="${copyright }" var="cop">
          <p style="font-size:10px">
            © 2015 Power by <a href="http://www.nbmlnx.com"
              target="_blank">${cop.cpDetail }</a>
          </p>
        </c:forEach>
      </div>
    </div>
  </div>
  <!-- jQuery (Bootstrap 的 JavaScript 插件需要引入 jQuery) -->
  <script type="text/javascript" src="js/jquery-2.0.0.min.js"></script>
  <!-- 包括所有已编译的插件 -->
  <script type="text/javascript" src="js/bootstrap.min.js"></script>
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
				//                 logo:           'images/logo.png'
				text : '宁波美灵思',
				timeout : 0,
				showInfo : true,
				opacity : 1,
				background : [ '#000000' ]
			});
		</script>
  <script type="text/javascript" src="js/contact.js"></script>
  <script type="text/javascript" src="js/reset.js"></script>
</body>
</html>
