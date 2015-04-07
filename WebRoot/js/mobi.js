if (typeof Mobi == "undefined") {
	Mobi = {}
}
Mobi.getPreviewWindow = function() {
	var b = Fai.top.document.getElementById("mobiReviewPageFrame");
	var a = !b ? window : b.contentWindow;
	return a
};
Mobi.getPreviewDocument = function() {
	var a = Mobi.getPreviewWindow().document;
	return a
};
Mobi.getPreviewObject = function(a) {
	if (!a) {
		return
	}
	return Mobi.getPreviewDocument().getElementById(a)
};
Mobi.getPreviewObjectClass = function(a) {
	if (!a) {
		return
	}
	return Mobi.getPreviewDocument().getElementsByClassName(a)
};
Mobi.getJQMobi = function() {
	var b = Mobi.getPreviewWindow(), a = b.jm;
	return a
};
Mobi.initSwipe = function(p, d) {
	var j = Mobi.getJQMobi();
	var f = Mobi.getPreviewObject(p);
	if (!f) {
		return
	}
	if (jm._swipehandle) {
		jm._swipehandle.kill()
	}
	var b = f.querySelectorAll(".bannerImageDiv.customBanner"), i = f
			.querySelectorAll(".bannerImageDiv"), m = b.length, g = i.length, l = f.offsetWidth, o = "", h = 0;
	for (var k = 0; k < m; k++) {
		var a = parseInt(b[k].getAttribute("vwidth")), n = parseInt(b[k]
				.getAttribute("vheight")), e = n / a;
		if (e > h) {
			h = e
		}
	}
	if (g === 0) {
		f.querySelector(".defaultBanner").style.height = Math
				.ceil(l * 300 / 640)
				+ "px"
	} else {
		o = g - m > 0 ? (l * h < l * 300 / 640 ? Math.ceil(l * 300 / 640)
				: Math.ceil(l * h)) : Math.ceil(l * h);
		f.style.height = o + "px"
	}
	jm._swipehandle = j("#" + p).swipehandle(f, {
		auto : 3000,
		continuous : true,
		bulletsClick : true,
		callback : function(r) {
			var q = c.length;
			while (q--) {
				c[q].className = " "
			}
			if (!c[r]) {
				c[r - c.length].className = "on"
			} else {
				c[r].className = "on"
			}
		}
	});
	if (!f.querySelector(".bullets")) {
		return
	}
	var c = f.querySelector(".bullets").getElementsByTagName("li")
};
Mobi.unifiedAttrVal = function(b, d, a) {
	var c = b.find(d);
	var e = 0;
	c.each(function() {
		var f = jm(this).css(a);
		f = parseInt(f);
		if (f > e) {
			e = f
		}
	});
	c.each(function() {
		jm(this).css(a, e + "px")
	})
};
Mobi.orientationchange = function() {
	var a = "onorientationchange" in window, b = a ? "orientationchange"
			: "resize";
	window.addEventListener(b, function() {
		Mobi.orientationFunctions()
	}, false)
};
Mobi.orientationFunctions = function() {
	Mobi.logoSizeCompressByMargin();
	Mobi.titlePositionRefreshByLogo()
};
Mobi.createElementByHtml = function(a) {
	var b = document.createElement("div");
	b.innerHTML = a;
	b = b.firstChild;
	b.parentNode.removeChild(b);
	return b
};
Mobi.isNull = function(a) {
	return (typeof a == "undefined") || (a == null)
};
Mobi.addInterval = function(d, c, a) {
	if (Mobi.isNull(Mobi.intervalFunc)) {
		Mobi.intervalFunc = new Array()
	}
	for (var b = 0; b < Mobi.intervalFunc.length; ++b) {
		if (Mobi.intervalFunc[b].id == d) {
			Mobi.intervalFunc.splice(b, 1);
			break
		}
	}
	Mobi.intervalFunc.push({
		id : d,
		func : c,
		interval : a,
		type : 1
	})
};
Mobi.startInterval = function(c) {
	if (Mobi.isNull(Mobi.intervalFunc)) {
		return
	}
	for (var b = 0; b < Mobi.intervalFunc.length; ++b) {
		var a = Mobi.intervalFunc[b];
		if (c == null || a.id == c) {
			if (a.timer) {
				clearInterval(a.timer)
			}
			if (a.type == 1) {
				a.timer = setInterval(a.func, a.interval)
			} else {
				a.timer = setTimeout(a.func, a.interval)
			}
		}
	}
};
Mobi.autoFixGWebTop = function(a) {
	var f = Mobi.topTipMarquee(), c = Mobi.getPreviewObject("g_web"), b = Mobi
			.getPreviewObject("webTop"), e = Mobi
			.getPreviewObject("webBodyBackground"), d = Mobi
			.getPreviewObject("webHeaderBox");
	d.style.top = "";
	b.style.top = "";
	if (a !== 2) {
		c.style.paddingTop = f + "px";
		return
	}
	d.style.top = f + "px";
	b.style.top = f + "px";
	c.style.paddingTop = (d.offsetHeight + f) + "px"
};
Mobi.topTipMarquee = function() {
	if (Fai.top._topTipMarquee) {
		clearInterval(Fai.top._topTipMarquee)
	}
	var f = 0;
	if (!Mobi.getPreviewObject("mobiTipsMarquee")) {
		return f
	}
	var a = Mobi.getPreviewObject("mobiTipsMarquee"), g = Mobi
			.getPreviewObject("webTips").offsetHeight;
	var d = a.querySelectorAll("li"), e = [];
	for (var c = 0; c < d.length; c++) {
		e[c] = d[c].offsetTop
	}
	var b = 0;
	if (d.length > 1) {
		Fai.top._topTipMarquee = setInterval(function() {
			if (b < e.length) {
				jm(a).css("top", -e[b] + "px");
				b++
			} else {
				b = 0
			}
		}, 3000)
	}
	f = g;
	return f
};
Mobi.ing = function(i, h) {
	var e = (i == null || i == "") ? "正在处理..." : i;
	var d = Fai.top.document.body.clientWidth;
	var a = Fai.top.document.body.clientHeight;
	var f = "";
	f = "<div id='mobiIng' class='mobiIng'></div>";
	if (jm("#mobiIng").length == 0) {
		jm(f).appendTo("body")
	}
	var b = jm("#mobiIng");
	var c = parseInt(Math.random() * 10000);
	var g = '<div id="' + c + '" class="mobiTips"><div id="mobiMsg' + c
			+ '" class="mobiMsg">' + e + "</div></div>";
	b.find(".mobiTips").remove();
	jm(g).appendTo(b);
	window.setTimeout(function() {
		b.css("visibility", "hidden");
		b.css("opacity", "0")
	}, 2500);
	window.setTimeout(function() {
		jm("#" + c).remove();
		b.css("visibility", "visible");
		b.css("opacity", "1")
	}, 3000)
};
Mobi.initForms = function() {
	var d = document.querySelector("#webModuleContainer"), c = d
			.querySelectorAll(".form");
	for (var b = 0; b < c.length; b++) {
		var a = c[b], e = a.getAttribute("id");
		if (e) {
			e = e.replace("module", "");
			if (a.getAttribute("_autoHeight") != 1) {
				Mobi.setModuleHeight2(e, a.clientHeight)
			}
		}
	}
};
Mobi.topContentFixedAutoHidden = function(b) {
	if (b == 0 || b == 2) {
		var e = Mobi.getPreviewObject("webHeaderBox"), c = e.style.top, f = document
				.querySelector("#webTips") ? true : false, g = {}, d = Mobi
				.getPreviewObject("g_web"), a = d.style.top;
		e.setAttribute("showNav", "true");
		d.style[jm.feat.cssPrefix + "Transition"] = "top 350ms";
		d.addEventListener("touchstart", function(h) {
			g.y1 = h.touches[0].pageY
		}, false);
		d.addEventListener("touchmove", function(h) {
			g.y2 = h.touches[0].pageY
		}, false);
		d.addEventListener("touchend", function(i) {
			var h = g.y1 - g.y2;
			if (h > 0) {
				if (e.getAttribute("showNav") == "true") {
					e.setAttribute("showNav", "false");
					e.style.opacity = 0;
					e.style.zIndex = -1
				}
			} else {
				if (e.getAttribute("showNav") == "false") {
					e.setAttribute("showNav", "true");
					e.style.opacity = 1;
					e.style.zIndex = 5
				}
			}
		}, false)
	}
};
Mobi.onlineServiceInputWord = function() {
	if (!jm.os.supportsTouch) {
		return
	}
	var f = document.querySelectorAll("input[type='text']"), e = document
			.querySelectorAll("textArea"), d = [], a = document
			.getElementById("webCustomerServiceBox");
	if (!a) {
		return
	}
	for (var c = 0; c < f.length; c++) {
		d.push(f[c])
	}
	for (var b = 0; b < e.length; b++) {
		d.push(e[b])
	}
	for (var c = 0; c < d.length; c++) {
		d[c].addEventListener("blur", function() {
			a.style.display = "block"
		}, false);
		d[c].addEventListener("focus", function() {
			a.style.display = "none"
		}, false)
	}
};
var ajaxDone = true;
Mobi.createFullScreenDiv = function(b, c, a) {
	if (!ajaxDone) {
		return
	}
	if (!c) {
		Mobi.ing(LS.mallStlSubmitError);
		return
	}
	if (!a) {
		Mobi.ing(LS.mallStlSubmitError);
		return
	}
	if (jm("#" + b).length > 0) {
		jm("#" + b).remove()
	}
	jm("#fullScreenDivCotainer")
			.append(
					"<div id='"
							+ b
							+ "'  style='overflow-x:hidden;overflow-y:auto;' class='fullScreenDiv webBackground webContainerBox moduleContent'></div>");
	Mobi.showLoading();
	jm.ajax({
		type : "post",
		url : "ajax/other_h.jsp?cmd=" + c,
		data : a,
		error : function() {
			Mobi.closeLoading();
			Mobi.ing(LS.systemError);
			ajaxDone = true
		},
		success : function(d) {
			var e = jm.parseJSON(d);
			if (e.success) {
				jm("#" + b).append(e.html);
				jm("#" + b).addClass("showFullScreen");
				Mobi.switchJump()
			}
			ajaxDone = true;
			Mobi.closeLoading()
		}
	})
};
Mobi.createInnerScreenDiv = function(a, e, l, c, g) {
	if (!ajaxDone) {
		return
	}
	if (!c) {
		Mobi.ing(LS.mallStlSubmitError);
		return
	}
	if (!g) {
		Mobi.ing(LS.mallStlSubmitError);
		return
	}
	var j = document.getElementById("ngGroupDiv").className;
	var b = new RegExp("ngTag", "g");
	if (j.match(b)) {
		for (var d = 0; d < l; ++d) {
			if (jm("#line" + d).hasClass("ngLine-bg")) {
				jm("#line" + d).removeClass("ngLine-bg");
				break
			}
		}
		for (var d = 0; d < l; ++d) {
			jm("#ngName" + d).css({
				width : "90%"
			});
			jm("#ngMark" + d).css({
				"float" : "right"
			});
			jm("#line" + d).css({
				color : "black"
			})
		}
		jm("#ngGroupDiv").removeClass("ngTag");
		jm("#ngGroupDiv").text("");
		jm("#ngGroupDiv").css({
			"margin-top" : "0px"
		})
	}
	Mobi.showLoading();
	var f = document.getElementById("ngList" + a).offsetHeight;
	jm("#ngGroupDiv").addClass("ngTag");
	setTimeout(function() {
		for (var h = 0; h < l; ++h) {
			jm("#ngName" + h).css({
				width : "34%"
			});
			jm("#ngMark" + h).css({
				"float" : "left"
			});
			if (e == h) {
				jm("#ngMark" + h).css("color", "white")
			} else {
				jm("#line" + h).css({
					color : "#555555"
				});
				jm("#ngMark" + h).css({
					color : "#555555"
				})
			}
		}
	}, 90);
	setTimeout(function() {
		jm("#line" + e).addClass("ngLine-bg");
		jm("#ngGroupDiv").css({
			"min-height" : f + "px",
			"margin-top" : "-" + f + "px"
		})
	}, 100);
	jm.ajax({
		type : "post",
		url : "ajax/other_h.jsp?cmd=" + c,
		data : g,
		error : function() {
			Mobi.closeLoading();
			Mobi.ing(LS.systemError);
			ajaxDone = true
		},
		success : function(h) {
			var i = jm.parseJSON(h);
			if (i.success) {
				jm("#ngGroupDiv").append(i.html)
			}
			ajaxDone = true;
			Mobi.closeLoading()
		}
	})
};
Mobi.getCommentDiv = function(b, d, c) {
	if (!b) {
		Mobi.ing(LS.mallStlSubmitError);
		return
	}
	if (isNaN(d)) {
		Mobi.ing(LS.mallStlSubmitError);
		return
	}
	if (jm("#comemtDiv").length === 0) {
		jm("#fullScreenDivCotainer")
				.append(
						"<div class='fullScreenDiv webBackground webContainerBox moduleContent'  style='overflow-y: scroll;' id='comemtDiv'></div>")
	} else {
		jm("#comemtDiv").html("")
	}
	var a = "id=" + d;
	if (!isNaN(c)) {
		a += ("&pageno=" + c)
	}
	Mobi.mobiHideScroll();
	Mobi.showLoading();
	jm.ajax({
		type : "post",
		url : "ajax/other_h.jsp?cmd=" + b,
		data : a,
		error : function() {
			Mobi.closeLoading();
			Mobi.ing(LS.systemError)
		},
		success : function(e) {
			var f = jm.parseJSON(e);
			if (f.success) {
				jm("#comemtDiv").append(f.html);
				jm("#comemtDiv").addClass("showFullScreen")
			}
			Mobi.closeLoading()
		}
	})
};
Mobi.removeCommentDiv = function() {
	Mobi.mobiShowScroll();
	jm("#comemtDiv").remove();
	window.location.reload()
};
Mobi.productGroupCollapse = function(f) {
	var d = jm("#pgBox");
	var j = jm("#pgBox2");
	var h = Mobi.getPreviewObject("group_" + f);
	var i = jm("#pgBox2_Item" + f);
	var e = jm("#pgSelect");
	var a = parseInt(d.height());
	var g = parseInt(j.height());
	var c = a > g ? a : g;
	jm("#pgBox2").children(".pgBox2Item").removeClass("pgBox2ItemCollapse");
	d.addClass("pgBoxCollapse");
	j.addClass("pgBox2Collapse");
	j.css("height", c + "px");
	i.addClass("pgBox2ItemCollapse");
	var b = parseInt(h.offsetTop) + 4;
	if (e.length > 0) {
		e.css("top", b + "px")
	} else {
		d.prepend("<div id='pgSelect' class='pgSelect' style='top:" + b
				+ "px'></div>")
	}
	setTimeout(function() {
	}, 100)
};
Mobi.disableSafeMode = function() {
	var b = Fai.top.location.href;
	var a = b.indexOf("?");
	if (a != -1) {
		b = b.substring(0, a)
	}
	Fai.top.location.href = b + "?_safeMode=false"
};
Mobi.switchJump = function() {
	var a = jm(".switchJump");
	jm.each(a, function(c, d) {
		if (c === "length") {
			return
		}
		var b = d.getAttribute("_mu") || d.getAttribute("mJUrl");
		if (b == null) {
			return
		}
		d.setAttribute("href", b)
	})
};
Mobi.showNavItemContainer = function() {
	Mobi.hideNavItemContainer();
	var t = Mobi.getPreviewObject("navbarList"), b = Mobi
			.getPreviewObject("navbar"), e = t, r = parseInt(jm(b).width()), k = 0, h = b
			.querySelectorAll(".navItem"), s = b.querySelectorAll(".itemSep");
	for (var w = 0; w < h.length; w++) {
		k += h[w].offsetWidth
	}
	for (var u = 0; u < s.length; u++) {
		k += s[u].offsetWidth
	}
	if (k > r) {
		if (navigator.appVersion.match(/MSIE [\d.]+/)) {
			if (parseInt(navigator.appVersion.match(/MSIE ([\d.]+)/)[1]) === 10) {
				k = k + h.length * 2
			}
		}
		jm(e).css("width", k + "px");
		var y = jm.getCookie("startX") ? parseInt(jm.getCookie("startX")) : 0;
		if (jm.os.supportsTouch) {
			var c = new iScroll(b, {
				x : y,
				scrollX : true,
				scrollY : false,
				mouseWheel : true,
				remarkXCoordinate : true,
				remarkNavLeftRight : x
			});
			x(y, c);
			function x(i, j) {
				var p = j.wrapper.querySelector(".navLeft") ? j.wrapper
						.querySelector(".navLeft") : j.wrapper
						.querySelector(".navTouchLeft"), A = j.wrapper
						.querySelector(".navRight") ? j.wrapper
						.querySelector(".navRight") : j.wrapper
						.querySelector(".navTouchRight");
				p.className = "navTouchLeft";
				A.className = "navTouchRight";
				if (i < 0) {
					p.style.display = "block"
				} else {
					p.style.display = "none"
				}
				if (j.maxScrollX === j.x) {
					A.style.display = "none"
				} else {
					A.style.display = "block"
				}
			}
		} else {
			var o = jm(b).find(".navLeft"), z = jm(b).find(".navRight"), a = jm(
					b).find(".navbarList"), n = null;
			if (y < 0) {
				o.css("display", "block");
				jm(e).css("left", y + "px")
			}
			z.css("display", "block");
			var u = jm.getCookie("startX_p") ? parseInt(jm
					.getCookie("startX_p")) : 0;
			var v = 0;
			var d = 0;
			var f;
			if (jm(s[0]).css("display")) {
				f = 0
			} else {
				f = jm(b).find(".itemSep").width() / 2
			}
			var m = b.offsetLeft;
			var q = [];
			jm(b).find(".navItem").each(function(j) {
				q[j] = this.offsetLeft - m;
				v++
			});
			z.unbind("click");
			o.unbind("click");
			z.on("click", function() {
				g(this, "click")
			});
			o.on("click", function() {
				l(this, "click")
			});
			jm(b).bind("swipeLeft", function(i) {
			}).bind("swipeRight", function(i) {
			});
			function l(p, j) {
				jm(p).unbind(j);
				d = q[u] - q[u - 1];
				if (u == 1) {
					d -= f
				}
				u--;
				if (u < 0) {
					u = 0
				}
				var i = (e.offsetLeft + d);
				if (i > 0) {
					i = 0
				}
				jm(e).css("left", i + "px");
				jm.setCookie("startX", i);
				jm.setCookie("startX_p", u);
				setTimeout(function() {
					if ((Math.abs(e.offsetLeft) + r) < k) {
						z.css("display", "block")
					}
					if (e.offsetLeft >= -1) {
						o.css("display", "none")
					}
					jm(p).bind(j, function() {
						l(this, j)
					})
				}, 600)
			}
			function g(p, j) {
				jm(p).unbind(j);
				d = q[u + 1] - q[u];
				if (u == 0) {
					d -= f
				}
				u++;
				if (u == v) {
					u = v - 1
				}
				var i = (e.offsetLeft - d);
				if (Math.abs(i) + r > k) {
					i = 0 - (k - r)
				}
				jm(e).css("left", i + "px");
				jm.setCookie("startX", i);
				jm.setCookie("startX_p", u);
				setTimeout(function() {
					if (e.offsetLeft < 0) {
						o.css("display", "block")
					}
					if ((Math.abs(e.offsetLeft) + r) >= k) {
						z.css("display", "none")
					}
					jm(p).bind(j, function() {
						g(this, j)
					})
				}, 1000)
			}
		}
	}
};
Mobi.hideNavItemContainer = function() {
	jm(Mobi.getPreviewObject("navbarList")).removeAttr("style");
	jm(Mobi.getPreviewObject("navbar")).find(".navLeft").hide();
	jm(Mobi.getPreviewObject("navbar")).find(".navRight").hide()
};
Mobi.navSwipeMenu = function(a) {
	var c = "navButton";
	e("moveAnimation");
	function e(g) {
		jm("#webHeaderBox").addClass(g);
		jm("#webBannerBox").addClass(g);
		jm("#webContainerBox").addClass(g);
		jm("#customerServiceDiv").addClass(g);
		jm("#webFooter").addClass(g)
	}
	function f(g) {
		jm("#webHeaderBox").removeClass(g);
		jm("#webBannerBox").removeClass(g);
		jm("#webContainerBox").removeClass(g);
		jm("#customerServiceDiv").removeClass(g);
		jm("#webFooter").removeClass(g)
	}
	if (a != 5 && a != 2) {
		Mobi.autoSetNavBarHeight(a)
	}
	if (jm.os.supportsTouch) {
		var d = navigator.userAgent;
		if (jm.os.android) {
			var b = parseFloat(d.slice(d.indexOf("Android") + 8))
		}
		jm("#" + c).unbind("tap");
		jm("#" + c).bind("tap", function() {
			var g = Mobi.getPreviewObject("navbar").className;
			if (g.indexOf("open") !== -1) {
				jm("#navbar").removeClass("open");
				f("moveRight");
				if (a === 2) {
					jm("#webTop").css("height", "")
				}
			} else {
				jm("#navbar").addClass("open");
				e("moveRight");
				if (a === 2) {
					jm("#webTop").css("height", "100%")
				}
			}
		})
	} else {
		jm("#" + c).unbind("click");
		jm("#" + c).bind("click", function() {
			if (jm("#navbar").hasClass("open")) {
				jm("#navbar").removeClass("open");
				f("moveRight");
				if (a === 2) {
					jm("#webTop").css("height", "")
				}
			} else {
				jm("#navbar").addClass("open");
				e("moveRight");
				if (a === 2) {
					jm("#webTop").css("height", "100%")
				}
			}
		})
	}
};
Mobi.getStyle = function(a, b) {
	var c = "";
	if (document.defaultView && document.defaultView.getComputedStyle) {
		c = document.defaultView.getComputedStyle(a, "").getPropertyValue(b)
	} else {
		if (a.currentStyle) {
			b = b.replace(/\-(\w)/g, function(d, e) {
				return e.toUpperCase()
			});
			c = a.currentStyle[b]
		}
	}
	return c
};
Mobi.getFrameHeight = function(d) {
	var c = parseInt(Mobi.getStyle(d, "padding-top").replace("px", ""))
			+ parseInt(Mobi.getStyle(d, "padding-bottom").replace("px", ""));
	var b = parseInt(Mobi.getStyle(d, "margin-top").replace("px", ""))
			+ parseInt(Mobi.getStyle(d, "margin-bottom").replace("px", ""));
	var a = parseInt(Mobi.getStyle(d, "border-top-width").replace("px", ""))
			+ parseInt(Mobi.getStyle(d, "border-bottom-width")
					.replace("px", ""));
	return a + b + c
};
Mobi.setModuleHeight2 = function(a, i) {
	var b = Mobi.getPreviewObject("module" + a);
	if (!b) {
		return
	}
	b.style.height = i / _htmlFontSize + "rem";
	var d = b.querySelector(".formBannerTitle" + a);
	var f = b.querySelector(".formMiddle");
	var g = 0;
	if (d.style.display != "none") {
		g = d.offsetHeight
	}
	var e = i - g - Mobi.getFrameHeight(f);
	f.style.height = e / _htmlFontSize + "rem";
	var h = f.querySelector(".middleCenter");
	e = e - Mobi.getFrameHeight(h);
	var c = f.querySelector(".formMiddleContent");
	e = e - Mobi.getFrameHeight(c);
	c.style.height = e / _htmlFontSize + "rem";
	c.style.overflow = "hidden"
};
Mobi.msgBoardShowMsg = function(a) {
	jm(".notice").show();
	jm(".notice").html(a)
};
Mobi.msgBoardAddMsg = function(k) {
	var a = jm("#reqName").val();
	var g = jm("#reqPhone").val();
	var h = jm("#reqEmail").val();
	var f = jm("#reqContent").val();
	var j = jm("#msgBoardCaptcha").val();
	var b = jm(".notice").show();
	var e = 0;
	jm("input.msg_isMust").each(function() {
		var m = jm(this).attr("id");
		var n = jm(this).attr("placeholder");
		var l = jm(this).val();
		if (l == "" || l == null) {
			b.html(jm.format(LS.msgBoardInputIsEmpty, jm.encodeHtml(n)));
			Mobi.getPreviewObject(m).focus();
			e = 1;
			return false
		}
		if (m == "reqPhone" && !jm.isPhone(l)) {
			b.html(jm.format(LS.msgBoardInputCorrect, jm.encodeHtml(n)));
			Mobi.getPreviewObject(m).focus();
			e = 1;
			return false
		}
		if (m == "reqEmail" && !jm.isEmail(l)) {
			b.html(jm.format(LS.msgBoardInputCorrect, jm.encodeHtml(n)));
			Mobi.getPreviewObject(m).focus();
			e = 1;
			return false
		}
	});
	if (e == 1) {
		return false
	}
	var d = 0;
	jm("input.msg_ipt").each(function() {
		var m = jm(this).attr("id");
		var o = jm(this).attr("placeholder");
		var l = jm(this).val();
		var n = jm(this).attr("maxlength");
		if (l.length > n) {
			b.html(jm.format(LS.msgBoardInputMaxLength, jm.encodeHtml(o), n));
			d = 1;
			return false
		}
		if (m == "reqPhone" && l.length && !jm.isPhone(l)) {
			b.html(jm.format(LS.msgBoardInputCorrect, jm.encodeHtml(o)));
			Mobi.getPreviewObject(m).focus();
			d = 1;
			return false
		}
		if (m == "reqEmail" && l.length && !jm.isEmail(l)) {
			b.html(jm.format(LS.msgBoardInputCorrect, jm.encodeHtml(o)));
			Mobi.getPreviewObject(m).focus();
			d = 1;
			return false
		}
	});
	if (d == 1) {
		return false
	}
	if (f == null || f == "") {
		Mobi.msgBoardShowMsg(LS.msgBoardInputContent);
		Mobi.getPreviewObject("reqContent").focus();
		return
	}
	var c = 200;
	if (f.length > c) {
		Mobi.msgBoardShowMsg(jm.format(LS.msgBoardInputContent2, c));
		Mobi.getPreviewObject("reqContent").focus();
		return
	}
	if (j == null || j == "") {
		Mobi.msgBoardShowMsg(LS.msgBoardInputValidateCode);
		Mobi.getPreviewObject("msgBoardCaptcha").focus();
		return
	}
	Mobi.msgBoardShowMsg(LS.msgBoardDoing);
	var i = {};
	jm("input.msg_ipt").each(function() {
		var m = jm(this).attr("id");
		var l = jm(this).val();
		i[m] = l
	});
	i.reqContent = f;
	jm.ajax({
		type : "post",
		url : "ajax/msgBoard_h.jsp",
		data : "cmd=add&msgBdData=" + jm.encodeUrl(jm.toJSON(i))
				+ "&validateCode=" + jm.encodeUrl(j),
		error : function() {
			Mobi.msgBoardShowMsg(LS.systemError)
		},
		success : function(l) {
			l = jm.parseJSON(l);
			if (l.success) {
				if (k) {
					Mobi.ing(LS.msgBoardSendOkAutoOpen)
				} else {
					Mobi.ing(LS.msgBoardSendOk)
				}
				setTimeout(function() {
					Fai.top.location.reload()
				}, 1500)
			} else {
				if (l.errno == 1) {
					Mobi.msgBoardShowMsg(LS.captchaError)
				} else {
					if (l.errno == 2) {
						Mobi.msgBoardShowMsg(LS.argsError)
					} else {
						if (l.errno == -4) {
							Mobi.msgBoardShowMsg(LS.msgBoardAddCountLimit)
						} else {
							Mobi.msgBoardShowMsg(LS.systemError)
						}
					}
				}
			}
			Mobi.changeValidateCode(jm("#msgBoardCaptchaImg"))
		}
	})
};
Mobi.noticeLeftRightMarquee = function(d, w) {
	var v = {
		direction : "up",
		speed : "normal",
		loop : "infinite",
		moveout : false,
		isScrolling : false
	};
	jm.extend(v, d);
	if (v.speed == "normal") {
		jm.extend(v, {
			speed : 70
		})
	} else {
		if (v.speed == "slow") {
			jm.extend(v, {
				speed : 40
			})
		} else {
			jm.extend(v, {
				speed : 100
			})
		}
	}
	jm("#noticeMarquee" + v.id).data("options", d);
	var k = v.id, s = Mobi.getPreviewObject("noticeMarquee" + k), f = s.offsetHeight, e = s.offsetWidth, n = s
			.querySelector(".noticeMarqueeDiv").clientWidth, b = Mobi
			.getPreviewObject("noticeContainer" + k), c = b.offsetWidth, j = (n > c) ? n
			: c;
	var A = v.direction, y = 0, i = "left", p = v.speed, z = (v.loop != "infinite" || v.loop <= 0) ? 1
			: v.loop, l = false, B = v.isScrolling, u = v.noticeType, x = 20, r = Mobi
			.createElementByHtml("<div id='noticeMarqueeCopy" + k
					+ "' class='noticeMarquee' style='overflow:hidden;width:"
					+ j + "px;' ></div>");
	var h = "<div id='noticeMarqueeNewParent" + k
			+ "' style='position:relative;overflow:hidden;width:" + (j + c)
			+ "px;";
	if (u != 4) {
		h += "'></div>"
	} else {
		h += "'></div>"
	}
	var g = Mobi
			.createElementByHtml("<div style='position: relative;width: 100%;height:30px;line-height:30px;overflow: hidden;"
					+ (u == 4 ? "" : "left: 23px;") + "'></div>");
	var m = Mobi.createElementByHtml(h);
	s.style.width = j + "px";
	function o() {
		b.appendChild(g);
		g.appendChild(m);
		m.appendChild(s);
		m.appendChild(r);
		if (!B) {
			r.style.height = 20 + "px";
			r.style.width = c + "px"
		} else {
			r.appendChild(s.querySelector(".noticeMarqueeDiv").cloneNode(true))
		}
		if (A == "left") {
			y = f
		} else {
			y = 0 - j;
			if (B && !l || !B && !l) {
				y = 0
			}
			if (B && l) {
				y = -j
			}
		}
		if (l) {
			s.style.left = 0 + "px"
		} else {
			s.style.left = y + "px"
		}
		if (A == "left" || A == "right") {
			s.style.top = 0 + "px"
		}
		a(A)
	}
	function a(C) {
		if (C == "left" || C == "right") {
			m.style.position = "relative";
			r.style.top = 0 + "px";
			if (C == "left") {
				if (B && !l) {
					m.style.width = j * 2 + "px";
					s.style.left = 0 + "px";
					r.style.left = j + "px"
				}
				if (B && l) {
				}
				if (!B && !l) {
					s.style.left = e + "px";
					r.style.left = j + c + "px"
				}
				if (!B && l) {
				}
			} else {
				s.style.width = j + "px";
				if (B && !l) {
					m.style.width = j * 2 + "px";
					s.style.paddingLeft = j + "px";
					m.style.left = -(j * 2 - c + 23) + "px"
				}
				if (B && l) {
					m.style.width = j * 2 + "px";
					s.style.paddingLeft = j + "px";
					m.style.left = -(j * 2 - c + 23) + "px"
				}
				if (!B && !l) {
					r.style.left = j + "px";
					m.style.left = -j + "px"
				}
				if (!B && l) {
					m.style.left = -(j + 23) + "px";
					s.style.left = c + "px";
					r.style.left = 0 + "px"
				}
			}
		}
	}
	function t(D, F, G, E) {
		var C;
		if (F == "left") {
			C = G ? "mobi_notice_right_to_left_50"
					: "mobi_notice_right_to_left"
		} else {
			if (F == "right") {
				C = G ? "mobi_notice_left_to_right_50"
						: "mobi_notice_left_to_right"
			}
		}
		return "-webkit-animation: " + C + " " + D / E
				+ "s linear 1s infinite;-moz-animation:    " + C + " " + D / E
				+ "s linear 1s infinite;-o-animation:      " + C + " " + D / E
				+ "s linear 1s infinite;animation:         " + C + " " + D / E
				+ "s linear 1s infinite;"
	}
	function q() {
		if (A == "left") {
			var C = m.scrollLeft;
			C++;
			if (B && !l) {
				m.setAttribute("style", m.getAttribute("style")
						+ t(j + c, A, B, p))
			}
			if (B && l) {
			}
			if (!B && !l) {
				m.setAttribute("style", m.getAttribute("style")
						+ t(j + c, A, B, p))
			}
			if (!B && l) {
				m.className += " mobi_notice_right_to_left";
				setTimeout(function() {
					m.style.left = c + "px"
				}, 15000)
			}
		} else {
			if (A == "right") {
				var C = m.scrollLeft;
				C--;
				if (B && !l) {
					m.setAttribute("style", m.getAttribute("style")
							+ t(j + c, A, B, p))
				}
				if (B && l) {
					m.className += " mobi_notice_left_to_right_50_" + p
				}
				if (!B && !l) {
					m.setAttribute("style", m.getAttribute("style")
							+ t(j + c, A, B, p))
				}
				if (!B && l) {
					m.className += " mobi_notice_left_to_right_" + p;
					setTimeout(function() {
						m.style.left = -(c + j + 23) + "px"
					}, 15000)
				}
			}
		}
	}
	if (d != null) {
		o();
		q()
	}
};
Mobi.saveNoticeMarqueeProps = function(a) {
	if (a != null) {
		jm("#noticeMarquee" + a.id).data("options", a)
	}
	jm("#module" + a.id).on("Fai_onModuleSizeChange", function() {
		Mobi.noticeMarquee(jm("#noticeMarquee" + a.id).data("options"), a.id)
	});
	jm("#module" + a.id).on("Fai_onModulePositionChange", function() {
		Mobi.noticeMarquee(jm("#noticeMarquee" + a.id).data("options"), a.id)
	})
};
Mobi.noticeMarqueeUpDown1 = function(c) {
	var b = {
		direction : "top",
		speed : "normal",
		stopTime : 1000
	};
	jm.extend(b, c);
	if ("fast" === b.speed) {
		jm.extend(b, {
			speed : 500
		})
	} else {
		if ("slow" === b.speed) {
			jm.extend(b, {
				speed : 1100
			})
		} else {
			jm.extend(b, {
				speed : 850
			})
		}
	}
	var g = jm("#noticeScrollbar" + b.id + " li");
	if (g.length == 1) {
		var f = jm(g.get(0));
		var a = "<li class='scrollbarLi'>" + f.html() + "</li>";
		jm(a).insertAfter(f)
	}
	jm("#noticeScrollbar" + b.id).marquee({
		yScroll : b.direction,
		showSpeed : b.speed,
		pauseSpeed : b.stopTime,
		hoverChange : false
	});
	var e = jm("#module" + b.id + " .formMiddleContent");
	e.css("overflow", "hidden");
	e.css("width", "98%");
	var d = jm("#module" + b.id + " .formMiddleCenter");
	d.css("overflow", "hidden")
};
Mobi.noticeMarqueeUpDown = function(e) {
	var b = {
		direction : "top",
		speed : "normal",
		stopTime : 1000
	};
	jm.extend(b, e);
	if ("fast" === b.speed) {
		jm.extend(b, {
			speed : 500
		})
	} else {
		if ("slow" === b.speed) {
			jm.extend(b, {
				speed : 1100
			})
		} else {
			jm.extend(b, {
				speed : 850
			})
		}
	}
	var h = Mobi.getPreviewObject("noticeScrollbar" + b.id);
	noticeScrollbarsLis = h.querySelectorAll("li");
	if (noticeScrollbarsLis.length == 1) {
		var a = "";
		if (noticeScrollbarsLis.length == 1) {
			a = "<li class='scrollbarLi'>" + noticeScrollbarsLis[0].innerHTML
					+ "</li><li class='scrollbarLi'>"
					+ noticeScrollbarsLis[0].innerHTML + "</li>"
		} else {
			for ( var c in noticeScrollbarsLis) {
				a += "<li class='scrollbarLi'>"
						+ noticeScrollbarsLis[c].innerHTML + "</li>"
			}
		}
		jm(h).append(jm(a));
		noticeScrollbarsLis = h.querySelectorAll("li")
	}
	h.style[jm.feat.cssPrefix + "Transition"] = "top " + b.speed + "ms ease";
	h.parentNode.style.height = noticeScrollbarsLis[0].offsetHeight + "px";
	var g = [];
	for (var f = 0; f < noticeScrollbarsLis.length; f++) {
		g[f] = noticeScrollbarsLis[f].offsetTop
	}
	if (b.direction == "top") {
		g.reverse()
	}
	h.style.top = -g[0] + "px";
	var d = 0;
	if (noticeScrollbarsLis.length > 1) {
		setInterval(function() {
			if (d < g.length) {
				h.style.top = -g[d] + "px";
				d++
			} else {
				d = 0
			}
		}, b.stopTime + b.speed)
	}
};
Mobi.noticeUpDownSizeChange = function(d) {
	var b = jm("#noticeMarquee" + d), a = b.height(), c = b.children()
			.children();
	jm.each(c, function(e, f) {
		jm(f).css("top", -(a + 2) + "px")
	});
	jm("#noticeScrollbar" + d).removeData("_innerHeight")
};
Mobi.siteFormAdd = function(a, m, k, d) {
	var f = [];
	var l = k;
	var b = true;
	var h = 100;
	var c = 1000;
	var j = d;
	var i = jm("#M" + a + "F" + m + "siteFormValidateCode");
	var g = i.val();
	if (l.length > 0) {
		jm
				.each(
						l,
						function(x, t) {
							if (t.hide) {
								return true
							}
							var r = t.id;
							var o = t.name;
							var B = t.must;
							var y = t.type;
							var v = {};
							v.id = r;
							if (y == 0) {
								var s = jm(
										"#M" + a + "F" + m + "siteFormInput"
												+ r).val();
								if (B && s == "") {
									Mobi.ing(jm.format(
											LS.siteFormSubmitInputIsEmpty, jm
													.encodeHtml(o)), true);
									b = false;
									return false
								}
								if (s.length > h) {
									Mobi.ing(jm.format(
											LS.siteFormSubmitInputMaxLength, jm
													.encodeHtml(o), h), true);
									b = false;
									return false
								}
								v.val = s
							} else {
								if (y == 1) {
									var q = jm(
											"#M" + a + "F" + m
													+ "siteFormTextArea" + r)
											.val();
									if (B && q == "") {
										Mobi.ing(jm.format(
												LS.siteFormSubmitInputIsEmpty,
												jm.encodeHtml(o)), true);
										b = false;
										return false
									}
									if (q.length > c) {
										Mobi
												.ing(
														jm
																.format(
																		LS.siteFormSubmitInputMaxLength,
																		jm
																				.encodeHtml(o),
																		c),
														true);
										b = false;
										return false
									}
									v.val = q
								} else {
									if (y == 2) {
										var p = document
												.querySelectorAll("input[name='M"
														+ a
														+ "F"
														+ m
														+ "siteFormRadioR"
														+ r
														+ "']:checked");
										if (B && p.length == 0) {
											Mobi
													.ing(
															jm
																	.format(
																			LS.siteFormSubmitCheckIsEmpty,
																			jm
																					.encodeHtml(o)),
															true);
											b = false;
											return false
										}
										if (p.length > 0) {
											v.val = p[0].value
										} else {
											v.val = ""
										}
									} else {
										if (y == 3) {
											var A = document
													.querySelectorAll("input[name='M"
															+ a
															+ "F"
															+ m
															+ "siteFormCheckboxR"
															+ r + "']:checked");
											if (B && A.length == 0) {
												Mobi
														.ing(
																jm
																		.format(
																				LS.siteFormSubmitCheckIsEmpty,
																				jm
																						.encodeHtml(o)),
																true);
												b = false;
												return false
											}
											var w = [];
											for (var x = 0; x < A.length; x++) {
												w.push(A[x].value)
											}
											v.val = w.join("\n")
										} else {
											if (y == 4) {
												var z = document
														.getElementById("M"
																+ a
																+ "F"
																+ m
																+ "siteFormSelect"
																+ r), u = z.options[z.selectedIndex].value;
												if (B && u.length == 0) {
													Mobi
															.ing(
																	jm
																			.format(
																					LS.siteFormSubmitCheckIsEmpty,
																					jm
																							.encodeHtml(o)),
																	true);
													b = false;
													return false
												}
												v.val = u
											} else {
												if (y == 5) {
													return true
												} else {
													if (y == 6) {
														var s = jm(
																"#Mobi"
																		+ a
																		+ "Calendar"
																		+ m
																		+ "Pluginsinput")
																.val();
														if (B && s == "") {
															Mobi
																	.ing(
																			jm
																					.format(
																							LS.siteFormSubmitCheckIsEmpty,
																							jm
																									.encodeHtml(o)),
																			true);
															b = false;
															return false
														}
														v.val = s
													}
												}
											}
										}
									}
								}
							}
							f.push(v)
						})
	}
	if (!b) {
		return false
	}
	if (j && g == "") {
		Mobi.ing(jm.format(LS.siteFormSubmitInputIsEmpty, i.attr("msg")), true);
		b = false;
		return false
	}
	var e = "&submitContentList=" + jm.encodeUrl(jm.toJSON(f));
	Mobi.ing(LS.siteFormSubmitIng);
	jm
			.ajax({
				type : "post",
				url : "ajax/mobiForm_h.jsp",
				data : "cmd=addSubmit&formId=" + m + "&submitContentList="
						+ jm.encodeUrl(jm.toJSON(f)) + "&vCodeId=" + a + m
						+ "&validateCode=" + g,
				error : function() {
					Mobi.ing(LS.systemError)
				},
				success : function(n) {
					n = jm.parseJSON(n);
					if (n.success) {
						Mobi.ing(LS.siteFormSubmitOk);
						jm("#M" + a + "F" + m + "siteFormAddButton").attr(
								"disabled", true);
						location.href = "index.jsp"
					} else {
						if (n.rt == -4) {
							Mobi.ing(LS.siteFormSubmitCountLimit)
						} else {
							if (n.rt == -401) {
								Mobi.ing(LS.siteFormSubmitValidateCodeErr);
								jm("#M" + a + "F" + m + "siteFormValidateCode")
										.val("");
								Mobi.siteFormValidation(m, a)
							} else {
								Mobi.ing(LS.systemError)
							}
						}
					}
				}
			})
};
Mobi.siteFormNotLogin = function(d, c) {
	var b = jm.encodeUrl(Fai.top.location.href);
	var a = LS.siteFormSubmitNotLogin + "<a href='login.jsp?returnUrl=" + b
			+ "'>" + LS.login + "</a>" + LS.period;
	Mobi.ing(a)
};
Mobi.siteFormValidation = function(b, a) {
	jm("#M" + a + "F" + b + "validateCodeImg").attr(
			"src",
			"validateCode.jsp?" + parseInt(Math.random() * 1000) + "&vCodeId="
					+ a + b)
};
Mobi.voidFun = function() {
};
Mobi.codeInsertButtom = function(d) {
	var b = /document.write/g;
	d = d.replace(b, "Mobi.voidFun");
	var a = document.createElement("script");
	a.type = "text/javascript";
	try {
		a.appendChild(document.createTextNode(d))
	} catch (c) {
		a.text = d
	}
	document.body.appendChild(a)
};
Mobi.memberLogin1 = function(a) {
	Fai.top.location.href = "login.jsp?returnUrl="
			+ jm.encodeUrl(jm.getUrlRoot(Fai.top.location.href)) + "&errno="
			+ a
};
Mobi.memberLogin = function(c) {
	var h = jm("#user").val();
	var f = jm("#password").val();
	var a = (jm(".loginCaptchaCtrl").css("display") != "none");
	var b = jm("#loginCaptcha").val();
	if (h == null || h == "") {
		Mobi.showMemberLoginMsg(1, false);
		return
	}
	if (f == null || f == "") {
		Mobi.showMemberLoginMsg(2, false);
		return
	}
	if (a && (b == null || b == "")) {
		Mobi.showMemberLoginMsg(3, false);
		return
	}
	f = jm.md5(f);
	var g = jm(".loginSubmit");
	g.attr("disabled", true);
	jm(".g_botton").removeClass("sendIcon");
	jm(".loginIcon ").show();
	var d = jm("#autoLogin");
	var e = false;
	if (d && d.prop("checked")) {
		e = true
	}
	jm.ajax({
		type : "post",
		url : "ajax/login_h.jsp",
		data : "cmd=loginMember&acct=" + jm.encodeUrl(h) + "&pwd="
				+ jm.encodeUrl(f) + "&captcha=" + jm.encodeUrl(b)
				+ "&autoLogin=" + e,
		error : function() {
			g.removeAttr("disabled");
			Mobi.showMemberLoginMsg(-1)
		},
		success : function(i) {
			g.removeAttr("disabled");
			var i = jm.parseJSON(i);
			if (i.success) {
				Fai.top.location.href = c;
				return
			} else {
				jm(".g_botton").addClass("sendIcon");
				jm(".loginIcon ").hide();
				if (i.active) {
					Mobi.ing(LS.memberLoginMailActivation)
				} else {
					Mobi.showMemberLoginMsg(i.rt, i.captcha)
				}
			}
		}
	})
};
Mobi.showMemberLoginMsg = function(c, b) {
	var d = "";
	if (c == 1) {
		d = LS.memberInputAcct;
		Mobi.getPreviewObject("user").focus()
	} else {
		if (c == 2) {
			d = LS.memberInputPwd;
			Mobi.getPreviewObject("password").focus()
		} else {
			if (c == 3) {
				d = LS.memberInputCaptcha
			} else {
				if (c == 11) {
					d = LS.memberLoginFirst
				} else {
					if (c == 12) {
						d = LS.memberLoginSignup
					} else {
						if (c == 13) {
							d = LS.memberLoginToView
						} else {
							if (c == 14) {
								d = LS.memberLoginNoPermission
							} else {
								if (c == -3) {
									d = LS.memberPwdError
								} else {
									if (c == -301) {
										d = LS.memberCaptchError
									} else {
										if (c == -302) {
											d = LS.memberPwdError
										} else {
											if (c == -303) {
												d = LS.memberNoAuth
											} else {
												d = LS.memberLoginError
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	var a = jm(".loginErrorLine");
	a.show();
	Mobi.ing(d);
	if (b) {
		jm(".loginCaptchaCtrl").show();
		jm("#loginCaptchaImg").attr("src",
				"validateCode.jsp?" + Math.random() * 1000)
	}
	setTimeout(function() {
		a.hide()
	}, 3000)
};
Mobi.changeValidateCode = function(a) {
	jm(a).attr("src", "validateCode.jsp?" + Math.random() * 1000)
};
Mobi.onLogout = function() {
	jm.ajax({
		type : "post",
		url : "ajax/login_h.jsp?cmd=logoutMember",
		error : function() {
		},
		success : function(a) {
			var a = jm.parseJSON(a);
			if (a.success) {
				top.location.href = "index.jsp";
				return
			}
		}
	})
};
Mobi.memberSignupSubmit = function(b) {
	var n = jm("#memberSignupAcct").val();
	if (n == null || n == "") {
		Mobi.ing(LS.memberSignupRegisterAcctEmpty);
		Mobi.getPreviewObject("memberSignupAcct").focus();
		return
	}
	var l = jm("#memberSignupPwd").val();
	if (l == null || l == "") {
		Mobi.ing(LS.memberSignupRegisterPwdEmpty);
		Mobi.getPreviewObject("memberSignupPwd").focus();
		return
	}
	if (l.length < 4) {
		Mobi.ing(LS.memberSignupRegisterPwdMinLength);
		Mobi.getPreviewObject("memberSignupPwd").focus();
		return
	}
	var h = jm("#memberSignupRepwd").val();
	if (l != h) {
		Mobi.ing(LS.memberSignupRegisterPwdNotMatch);
		Mobi.getPreviewObject("memberSignupRepwd").focus();
		return
	}
	var k = "";
	if (jm("#memberSignupRemark").length > 0) {
		k = jm("#memberSignupRemark").val();
		var a = jm("#memberSignupRemark").attr("maxlength");
		if (k.length > a) {
			Mobi.ing(jm.format(LS.memberSignupRegisterRemarkMaxLength, a));
			Mobi.getPreviewObject("memberSignupRemark").focus();
			return
		}
	}
	var d = {};
	d.acct = n;
	d.pwd = jm.md5(l);
	d.remark = k;
	var g = "";
	var c = "";
	var j = "";
	var p = 0;
	var f = "";
	var i = 0;
	jm(".userAddItem").each(function() {
		userAddItemID = jm(this).attr("id");
		j = jm(this).val();
		g = jm(this).attr("name");
		f = jm(this).attr("maxlength");
		d[userAddItemID] = j;
		if (j.length > f) {
			Mobi.ing(jm.format(LS.memberSignupUserAddItemMaxLength, g, f));
			Mobi.getPreviewObject(userAddItemID).focus();
			p = 1;
			return false
		}
		if (userAddItemID == "phone" && j.length > 0) {
			if (!jm.isPhone(j)) {
				Mobi.ing(jm.format(LS.memberSignupUserAddItemCorrect, g));
				Mobi.getPreviewObject(userAddItemID).focus();
				i = 1;
				return false
			}
		}
	});
	if (i == 1) {
		return
	}
	if (p == 1) {
		return
	}
	var e = 0;
	jm(".isCheckUAI").each(function() {
		userAddItemID = jm(this).attr("id");
		j = jm(this).val();
		g = jm(this).attr("name");
		if (j == null || j == "") {
			Mobi.ing(jm.format(LS.memberSignupUserAddItemIsEmpty, g));
			Mobi.getPreviewObject(userAddItemID).focus();
			e = 1;
			return false
		}
		if (userAddItemID == "email" && j.length > 0) {
			if (!jm.isEmail(j)) {
				Mobi.ing(jm.format(LS.memberSignupUserAddItemCorrect, g));
				Mobi.getPreviewObject(userAddItemID).focus();
				e = 1;
				return false
			}
		}
	});
	if (e == 1) {
		return
	}
	var m = jm("#memberSignupCaptcha").val();
	if (m == null || m == "") {
		Mobi.ing(LS.memberSignupRegisterCaptchaEmpty);
		Mobi.getPreviewObject(memberSignupCaptcha).focus();
		return
	}
	var o = jm("#memberAgreePro");
	if (o.length > 0) {
		if (!o.prop("checked")) {
			Mobi.ing(LS.memberAgreeProtocol);
			return
		}
	}
	Mobi.ing(LS.memberSignupRegisterIng);
	jm(".g_button").removeClass("sendIcon");
	jm(".loginIcon ").show();
	jm.ajax({
		type : "post",
		url : "ajax/member_h.jsp?cmd=add",
		data : "info=" + jm.encodeUrl(jm.toJSON(d)) + "&validateCode=" + m,
		error : function() {
			Mobi.ing(LS.memberSignupRegisterError)
		},
		success : function(q) {
			var r = jm.parseJSON(q);
			if (r.success) {
				if (r.active) {
					Mobi.memberActive(d.email, d.acct, b, function() {
					})
				} else {
					setTimeout(function() {
						if (b) {
							Mobi.autoLogin(n, l, b)
						} else {
							Fai.top.location.href = "login.jsp?errno=12"
						}
					}, 3000)
				}
			} else {
				jm(".g_button").addClass("sendIcon");
				jm(".loginIcon ").hide();
				jm("#signupCaptchaImg").attr("src",
						"validateCode.jsp?" + Math.random() * 1000);
				jm("#memberSignupCaptcha").val("");
				if (r.rt == -401) {
					Mobi.ing(LS.memberSignupRegisterCaptchaNotMatch)
				} else {
					if (r.rt == -6) {
						Mobi.ing(LS.memberSignupRegisterExisted)
					} else {
						if (r.rt == -4) {
							Mobi.ing(LS.memberSignupRegisterLimit)
						} else {
							Mobi.ing(LS.memberSignupRegisterError)
						}
					}
				}
			}
		}
	})
};
Mobi.autoLogin = function(c, b, a) {
	jm.ajax({
		type : "post",
		url : "ajax/login_h.jsp",
		data : "cmd=loginMember&acct=" + jm.encodeUrl(c) + "&pwd="
				+ jm.encodeUrl(jm.md5(b)),
		error : function() {
			Mobi.showMemberLoginMsg(-1)
		},
		success : function(d) {
			var d = jm.parseJSON(d);
			if (d.success) {
				Fai.top.location.href = a;
				return
			} else {
				Fai.top.location.href = "login.jsp?returnUrl="
						+ jm.encodeUrl(a)
			}
		}
	})
};
Mobi.memberActive = function(a, c, b) {
	jm
			.ajax({
				type : "post",
				url : "ajax/mail_h.jsp?cmd=sendMemberActiveMail",
				data : "memName=" + jm.encodeUrl(c) + "&memEmail=" + a,
				error : function() {
					Mobi.ing(LS.systemError)
				},
				success : function(d) {
					jm("#profileArea").hide();
					jm(".loginErrorLine").hide();
					var e = Mobi.getEmailCarriersAddress(a);
					jm("#checkEmail").html(
							jm.format(LS.memberSignupMailActivation, a));
					if (e != -1) {
						jm("#emailAddr").attr("href", e.addr);
						jm("#emailAddr").html(
								jm.format(LS.memberSignupMailActivationLink,
										e.name));
						jm("#emailAddr").show()
					}
				}
			})
};
Mobi.getEmailCarriersAddress = function(a) {
	var c = {};
	var b = a.split("@")[1];
	if (b === "qq.com" || b === "vip.qq.com" || b === "foxmail.com") {
		c.name = "QQ";
		c.addr = "https://w.mail.qq.com";
		return c
	} else {
		if (b === "163.com") {
			c.name = "163";
			c.addr = "http://smart.mail.163.com";
			return c
		} else {
			if (b === "126.com") {
				c.name = "126";
				c.addr = "http://smart.mail.126.com";
				return c
			} else {
				if (b === "sina.com" || b === "vip.sina.com") {
					c.name = "sina";
					c.addr = "http://mail.sina.com.cn";
					return c
				} else {
					return -1
				}
			}
		}
	}
};
Mobi.showErrorMsg = function(a) {
	jm(".loginErrorLine").show();
	Mobi.ing(a)
};
Mobi.readBulletin = function() {
	var a = jm("#bulletinTitle"), b = jm("#bulletinTitle").attr("sessionMid");
	jm.ajax({
		type : "post",
		url : "ajax/member_h.jsp",
		data : "cmd=setBulletinReadTime&id=" + b,
		error : function() {
			Mobi.ing("系统错误，请刷新再试")
		},
		success : function(c) {
			var c = jm.parseJSON(c);
			if (c.success) {
				jm("#profile").hide();
				jm("#mBulletinConten").show();
				jm(a).removeClass("newsReminds")
			} else {
				Mobi.ing("系统错误，请刷新再试")
			}
		}
	})
};
Mobi.modifyListener = function() {
	jm(".modifyArea li").click(function() {
		if (jm(this).attr("orderlist") === "0") {
			return
		}
		if (jm(this).attr("orderlist") === "1") {
			Mobi.readBulletin();
			return
		}
		if (jm(this).attr("id") === "password") {
			jm("#profile").hide();
			jm("#modifyPsw").show()
		} else {
			var b = jm(this).find(".itemName").html();
			var a = jm(this).find(".itemText").html();
			jm("#profile").hide();
			jm("#modifyProfile").show();
			jm("#modifyProfile").find(".title").html(b);
			jm("#profileValue").val(jm.decodeHtml(a));
			jm("#profileValue").attr("name", jm(this).attr("id"));
			jm("#profileValue").attr("ismust", jm(this).attr("ismust"))
		}
	})
};
Mobi.memberProfileSubmit = function(h, a) {
	var c = {};
	if (a) {
		var d = jm("#oldPsw").val();
		if (d == null || d == "") {
			Mobi.ing(LS.memberProfileOldPwdEmpty);
			Mobi.getPreviewObject("oldPsw").focus();
			return
		}
		var g = jm("#newPsw").val();
		if (g == null || g == "") {
			Mobi.ing(LS.memberProfilePwdEmpty);
			Mobi.getPreviewObject("newPsw").focus();
			return
		}
		if (g.length < 4) {
			Mobi.ing(LS.memberProfilePwdMinLength);
			Mobi.getPreviewObject("newPsw").focus();
			return
		}
		var e = jm("#confirmPsw").val();
		if (g != e) {
			Mobi.ing(LS.memberProfilePwdNotMatch);
			Mobi.getPreviewObject("confirmPsw").focus();
			return
		}
		c.oldPwd = jm.md5(d);
		c.pwd = jm.md5(g)
	} else {
		var i = jm("#profileValue").attr("maxlength");
		var f = jm("#profileValue").attr("name");
		var b = jm("#profileValue").val();
		c[f] = b;
		if (b.length > i) {
			Mobi.ing(jm.format(LS.memberProfileUserEditItemMaxLength, f, i));
			Mobi.getPreviewObject("profileValue").focus();
			return false
		}
		if (jm("#profileValue").attr("ismust") === "true") {
			if (b == null || b == "") {
				Mobi.ing(jm.format(LS.memberSignupUserAddItemIsEmpty, jm(
						"#modifyProfile").find(".title").html()));
				Mobi.getPreviewObject("profileValue").focus();
				return false
			}
			if (f === "email" && b.length > 0) {
				if (!jm.isEmail(b)) {
					Mobi.ing(jm.format(LS.memberProfileItemCorrect, f));
					Mobi.getPreviewObject("profileValue").focus();
					return false
				}
			}
		}
	}
	Mobi.ing(LS.memberProfileSubmitting);
	jm(".g_button").removeClass("sendIcon");
	jm(".loginIcon ").show();
	jm.ajax({
		type : "post",
		url : "ajax/member_h.jsp?cmd=set",
		data : "id=" + h + "&info=" + jm.encodeUrl(jm.toJSON(c)),
		error : function() {
			Mobi.ing(LS.memberProfileError)
		},
		success : function(j) {
			var k = jm.parseJSON(j);
			if (k.success) {
				Mobi.ing(LS.memberProfileOK);
				document.location.reload()
			} else {
				jm(".g_button").addClass("sendIcon");
				jm(".loginIcon ").hide();
				if (k.rt = -3) {
					Mobi.ing(LS.memberProfileOldPwdIncorrectError)
				} else {
					Mobi.ing(LS.memberProfileError)
				}
			}
		}
	})
};
Mobi.initModulePhotoList = function(t, e, c) {
	if (!t || !c) {
		return
	}
	var m = Mobi.getPreviewObject("photoListDetailShow" + t);
	if (m) {
		m.parentNode.removeChild(m)
	}
	module = "module" + t;
	var j = document.getElementById(module), d = document
			.getElementById("webFooterBox"), u = document.createElement("div"), n = document
			.createElement("div"), g = document.createElement("div"), l = document
			.createElement("div");
	l.className = "photoDetailClose";
	u.appendChild(l);
	n.className = "webPhotoListDetail";
	n.id = "webPhotoListDetail" + t;
	for (var q = 0; q < c.length; q++) {
		var a = document.createElement("div");
		a.className = "photoDetail";
		var h = document.createElement("img");
		var k = document.createElement("span");
		k.className = "imageSpan";
		h.setAttribute("vwidth", c[q].width);
		h.setAttribute("vheight", c[q].height);
		a.appendChild(k);
		a.appendChild(h);
		n.appendChild(a)
	}
	u.appendChild(n);
	g.className = "photoDetailDescription descriptionClose";
	g.id = "photoDetailDescription" + t;
	var o = document.createElement("div");
	o.className = "handleDiv";
	var b = document.createElement("div");
	b.className = "drawer_handle";
	var s = document.createElement("div");
	s.className = "handleIcon handleUp";
	o.appendChild(b);
	o.appendChild(s);
	g.appendChild(o);
	var r = document.createElement("div");
	r.className = "descriptionFilter";
	g.appendChild(r);
	var f = document.createElement("div");
	f.className = "descriptionDom";
	f.id = "descriptionDom" + t;
	g.appendChild(f);
	u.appendChild(g);
	u.className = "photoListDetailShow";
	u.id = "photoListDetailShow" + t;
	d.appendChild(u);
	var p = jm(n).carousel({
		carouselIndex : 3,
		photoAllJson : c,
		preventDefaults : false,
		photoListDetailShowDom : u,
		moduleId : t
	});
	jm("#webModuleContainer")
			.on(
					"click",
					"#" + module + " .photoModule img",
					function() {
						if (this.getAttribute("linkType") != 1) {
							return
						}
						Mobi.getPreviewObject("photoListDetailShow" + t).style.top = "0px";
						var i = parseInt(this.getAttribute("photoIndex"));
						p.onMoveIndex(i, "1ms", c[i]);
						p.photoDetailAjax(c[i])
					});
	jm(n).bind(
			"click",
			function(x) {
				var w = x.target || x.srcElement;
				if (w.className == "prevPhoto" || w.className == "nextPhoto") {
					return
				}
				var v = this.querySelector(".prevPhoto"), i = this
						.querySelector(".nextPhoto");
				if (this.getAttribute("full") == "true") {
					this.setAttribute("full", false);
					l.style.opacity = 1;
					g.style.opacity = 1;
					i.style.opacity = 1;
					v.style.opacity = 1;
					g.style.visibility = "visible";
					l.style.visibility = "visible";
					i.style.visibility = "visible";
					v.style.visibility = "visible";
					if (g.className.indexOf("descriptionClose") === -1) {
						n.className = "webPhotoListDetail photoFilter"
					}
				} else {
					this.setAttribute("full", true);
					l.style.opacity = 0;
					g.style.opacity = 0;
					i.style.opacity = 0;
					v.style.opacity = 0;
					g.style.visibility = "hidden";
					l.style.visibility = "hidden";
					i.style.visibility = "hidden";
					v.style.visibility = "hidden";
					n.className = "webPhotoListDetail"
				}
			});
	jm(g)
			.bind(
					"click",
					function(x) {
						var v = this.querySelector(".handleIcon");
						if (this.className.indexOf("descriptionOpen") === -1) {
							var w = f.offsetHeight, i = Mobi.getPreviewWindow().innerHeight;
							if (jm.os.android) {
								i = Mobi.getPreviewWindow().screen.height
										/ Mobi.getPreviewWindow().devicePixelRatio
										- Mobi.getPreviewWindow().screenTop
							}
							if (i > w) {
								if (f.innerHTML) {
									this.style.bottom = "0px";
									n.className = "webPhotoListDetail photoFilter"
								}
							} else {
								this.style.bottom = i * 0.8 - w + "px";
								n.className = "webPhotoListDetail photoFilter"
							}
							this.className = "photoDetailDescription descriptionOpen";
							if (f.innerHTML) {
								v.className = "handleIcon handleDown"
							}
						} else {
							if (f.innerHTML) {
								this.style.bottom = -(f.offsetHeight - b.offsetHeight)
										+ "px"
							}
							this.className = "photoDetailDescription descriptionClose";
							n.className = "webPhotoListDetail";
							if (f.innerHTML) {
								v.className = "handleIcon handleUp"
							}
						}
					});
	jm(l).bind("click", function() {
		u.style.top = "150%";
		n.className = "webPhotoListDetail"
	})
};
Mobi.clickPhoto = function(a, c) {
	var b = Mobi.getPreviewWindow;
	if (Fai.top.document.getElementById("mobiReviewPageFrame")) {
		Fai.top.document.getElementById("mobiReviewPageFrame").scrolling = "no"
	}
	jm(".imgDetailDiv").show();
	Mobi.getPhotoDetail(a, c)
};
Mobi.exitPhotoDetail = function() {
	if (Fai.top.document.getElementById("mobiReviewPageFrame")) {
		Fai.top.document.getElementById("mobiReviewPageFrame").scrolling = "yes"
	}
	jm(".imgDetailDiv").hide()
};
Mobi.getPhotoDetail = function(a, b) {
	jm.ajax({
		type : "post",
		url : "ajax/photo_h.jsp",
		data : "cmd=get&id=" + jm.encodeUrl(b) + "&groupId=" + jm.encodeUrl(a),
		error : function() {
		},
		success : function(d) {
			d = jm.parseJSON(d);
			jm(".showImg").attr("src", d.picPath);
			var c = parseInt(d.nextId) === -1 ? false : true;
			var e = parseInt(d.prevId) === -1 ? false : true;
			if (e) {
				jm(".prevPhoto").show();
				jm(".prevPhoto").attr(
						"onclick",
						"Mobi.getPhotoDetail('" + d.groupId + "','" + d.prevId
								+ "')")
			} else {
				jm(".prevPhoto").hide()
			}
			if (c) {
				jm(".nextPhoto").show();
				jm(".nextPhoto").attr(
						"onclick",
						"Mobi.getPhotoDetail('" + d.groupId + "','" + d.nextId
								+ "')")
			} else {
				jm(".nextPhoto").hide()
			}
			jm(".imgDesc").html(d.basic);
			jm(".imgName").html(d.name);
			jm(".imgDetailArea").html(d.detail)
		}
	})
};
Mobi.toNextPhoto = function(g) {
	var b = jm(Mobi.getPreviewObject("module" + g)).find(".photoBox");
	var d = parseInt(jm(b).css("width")) - 300;
	var f = parseInt(jm(b).css("left").split("px")[0]);
	var a = Math.abs(f / 300) + 2;
	var c = jm(b).find("li:nth-child(" + a + ") img").attr("lazysrc");
	if (c) {
		jm(b).find("li:nth-child(" + a + ") img").attr("src", c)
	}
	if (f <= -d) {
		if (!jm(b).hasClass("moving")) {
			jm(b).addClass("moving");
			jm(b).css("left", (f - 50) + "px");
			setTimeout(function() {
				jm(b).css("left", (f) + "px");
				jm(b).removeClass("moving")
			}, 600)
		}
		return
	}
	var e = f - 300;
	jm(b).css("left", e + "px")
};
Mobi.toPrevPhoto = function(e) {
	var a = jm(Mobi.getPreviewObject("module" + e)).find(".photoBox");
	var b = parseInt(jm(a).css("width"));
	var d = parseInt(jm(a).css("left").split("px")[0]);
	if (d == 0) {
		if (!jm(a).hasClass("moving")) {
			jm(a).addClass("moving");
			jm(a).css("left", (d + 50) + "px");
			setTimeout(function() {
				jm(a).css("left", (d) + "px");
				jm(a).removeClass("moving")
			}, 600)
		}
		return
	}
	var c = d + 300;
	jm(a).css("left", c + "px")
};
Mobi.handEvent = function(b) {
	var a = jm(Mobi.getPreviewObject("module" + b)).find(".photoModule");
	jm(a).bind("swipeLeft", function() {
		Mobi.toNextPhoto(b);
		return false
	});
	jm(a).bind("swipeRight", function() {
		Mobi.toPrevPhoto(b);
		return false
	})
};
Mobi.autoSetPhotoHeight = function(a) {
	Mobi.unifiedAttrVal(jm(Mobi.getPreviewObject("module" + a)),
			".photoModule .photoDiv", "height")
};
Mobi.initPhotoSwipe = function(h, g, e, f) {
	var d = Mobi.getPreviewObject("imgName" + h);
	jm(d).html(g[0]);
	var c = Mobi.getJQMobi();
	var b = Mobi.getPreviewObject("photoSwipe" + h);
	if (!b) {
		return
	}
	Mobi.initScaleImage(b);
	c("#photoSwipe" + h).swipehandle(b, {
		auto : e,
		speed : f,
		continuous : true,
		bulletsClick : true,
		callback : function(j) {
			jm(d).html(g[j]);
			var i = a.length;
			while (i--) {
				a[i].className = " "
			}
			if (!a[j]) {
				a[j - a.length].className = "on"
			} else {
				a[j].className = "on"
			}
		}
	});
	if (!b.querySelector("#bullets" + h)) {
		return
	}
	var a = b.querySelector("#bullets" + h).getElementsByTagName("li")
};
Mobi.initScaleImage = function(g) {
	if (g) {
		var f = g.querySelectorAll("img"), d = g.clientWidth, a = 0;
		if (f) {
			for (var e = 0; e < f.length; e++) {
				var c = parseInt(f[e].getAttribute("vwidth") ? f[e]
						.getAttribute("vwidth") : 1), b = parseInt(f[e]
						.getAttribute("vheight") ? f[e].getAttribute("vheight")
						: 1), h = b / c;
				if (h === NaN) {
					continue
				}
				f[e].style.width = d + "px";
				f[e].style.height = Math.floor(d * h) + "px";
				if (h > a) {
					a = h
				}
			}
			if (d * a != 0) {
				g.style.height = Math.floor(d * a) + "px"
			}
		}
	}
};
Mobi.initPhotoImageSwipe = function(a) {
	var b = Mobi.getJQMobi();
	var d = Mobi.getPreviewObject(a), c = d.querySelector(".imgName");
	if (!d) {
		return
	}
	Mobi.initScaleImage(d);
	b("#" + a).swipehandle(d, {
		isOpenNextAndPrevious : true,
		callback : function(h, e) {
			var g = e.querySelector("img"), f = g.getAttribute("lazysrc");
			if (!g.src) {
				g.src = f;
				g.onload = function() {
				}
			}
			c.innerText = g.alt
		}
	})
};
Mobi.initModulePhotoSwipe = function(e) {
	var b = document.querySelectorAll("#" + e + " img");
	if (b.length < 1) {
		return
	}
	var d = {
		imageScaleMethod : "fitNoUpscale",
		getImageCaption : function(f, g) {
			var i, h;
			i = f + "/" + g;
			h = document.createElement("div");
			h.appendChild(document.createTextNode(i));
			return h
		},
		getToolbar : function() {
			return '<div class="ps-toolbar-close"><div class="ps-toolbar-content"></div></div><div class="ps-toolbar-previous"><div class="ps-toolbar-content"></div></div><div class="ps-toolbar-next"><div class="ps-toolbar-content"></div></div>'
		}
	}, c = window.Code.PhotoSwipe, a = c.attach(b, d)
};
Mobi.initModulePhotoDetailSwipe = function(b, n, l) {
	if (n.length < 1) {
		return
	}
	var j = [];
	if (l) {
		j = document.querySelectorAll("#" + b + " .photoGroup-img")
	} else {
		j = document.querySelectorAll("#" + b + " img")
	}
	if (j.length < 1) {
		return
	}
	if (l) {
		var c = [];
		if (j[0].nodeName === "DIV") {
			j[0].src = j[0].getAttribute("datasrc") || ""
		}
		c.push(j[0]);
		for (var h = 1, f = n.length; h < f; h++) {
			var d = new Image();
			d.src = n[h].picPath;
			c.push(d)
		}
		j = c
	}
	var o = {
		imageScaleMethod : "fitNoUpscale",
		enableMouseWheel : false,
		resetToolbarPosition : true,
		loop : false,
		photoJson : n,
		captionAndToolbarAutoHideDelay : 0,
		getImageCaption : function(p, q) {
			var s, r;
			s = p + " / " + q;
			r = document.createElement("div");
			r.className = "ps-page";
			r.appendChild(document.createTextNode(s));
			return r
		},
		getToolbar : function() {
			return '<div class="ps-toolbar-close ps-toolbar-close-style icon-toolbar-close-style"></div><div class="ps-toolbar-base"><div class="ps-toolbar-base-title" id="wrapperTitle"></div><div class="ps-toolbar-base-detail icon-toolbar-base-detail" id="wrapperTitleDetail"></div></div><div class="ps-toolbar-base-describe" id="wrapperBasic"><div id="scrollerBasic"></div></div>'
		},
		uiDetailCallBack : function(q, u, p) {
			var r = this;
			jm(q).html("");
			var w = n[m.currentIndex], t = w.groupId, v = w.id, s = w.name;
			jm(p).html(s);
			jm(u).addClass(a.Carousel.CssClasses.itemLoading);
			jm.ajax({
				type : "post",
				url : "ajax/photo_h.jsp",
				data : "cmd=getInfo&id=" + jm.encodeUrl(v) + "&groupId="
						+ jm.encodeUrl(t),
				error : function() {
					Mobi.ing("加载错误...")
				},
				success : function(x) {
					jm(q).html(x);
					var A = q.querySelectorAll("img");
					if (A.length === 0) {
						r.detailScroll && r.detailScroll.destroy();
						r.detailScroll = null;
						r.destroyScroll = new iScroll(u);
						jm(u).removeClass(a.Carousel.CssClasses.itemLoading)
					} else {
						for (var y = 0; y < A.length; y++) {
							var z = new Image();
							z.src = A[y].src;
							z.onload = function() {
								if (y === A.length) {
									r.detailScroll && r.detailScroll.destroy();
									r.detailScroll = null;
									r.destroyScroll = new iScroll(u);
									jm(u).removeClass(
											a.Carousel.CssClasses.itemLoading)
								}
							}
						}
					}
					Mobi.switchJump()
				}
			})
		}
	}, k = null, e = null, i = null, g = null, a = window.Code.PhotoSwipe, m = a
			.attach(j, o);
	m && m.addEventHandler(a.EventTypes.onCaptionAndToolbarShow, function(p) {
		if (this.scroll) {
			this.scroll.destroy()
		}
		this.scroll = new iScroll("wrapperBasic")
	})
};
Mobi.initProductEvent = function() {
	Mobi.initProductSwipe()
};
Mobi.initRepPropValueOfURL = function() {
	var a = new RegExp("https?|ftp|file://");
	jm(".paramCollection .propVal")
			.each(
					function(b, d) {
						var c = jm(this).text();
						if (a.test(c)) {
							jm(this)
									.html(
											c
													.replace(
															/((https?|ftp|file):\/\/[-a-zA-Z0-9+&@#\/%?=~_|!:,.;]*)/g,
															'<a href="$1" target="_blank" style="text-decoration:underline">$1</a>'))
						}
					})
};
Mobi.initProductOptions = function(b, c, a) {
	var d = false;
	jm.each(b, function(e, f) {
		if (f.t == null) {
			d = true;
			return false
		}
	});
	jm(".optionsBlock label").click(
			function() {
				if (jm(this).parent().find(".optionSelected").length > 0) {
					jm(this).parent().find(".optionSelected").removeClass(
							"optionSelected")
				}
				jm(this).addClass("optionSelected");
				var e = jm(this).attr("data");
				jm(jm(this).parents(".mallOptionLine")).attr("option_data", e);
				var j = jm(".mallOptionBox").find(".mallOptionLine");
				var h = jm(".mallOptionBox").find(".optionSelected");
				if (j.length == h.length) {
					var g = "";
					var i;
					var f;
					jm(h).each(function(k) {
						if (d) {
							g += jm(this).attr("data") + "_"
						} else {
							g += jm(this).attr("data")
						}
					});
					jm.each(b, function(k, l) {
						if (l.t == g) {
							i = l.oPrice;
							f = l.oAmount
						} else {
							if ((l.t2 + "_") == g) {
								i = l.oPrice;
								f = l.oAmount
							}
						}
					});
					if (c) {
						jm("#mallAmount").text(f)
					}
					if (i == null) {
						jm("#mallPrice").text(a)
					} else {
						jm("#mallPrice").text(i)
					}
				}
			})
};
Mobi.autoSetProductHeight = function(a) {
	Mobi.unifiedAttrVal(jm(Mobi.getPreviewObject("module" + a)),
			".styleForm1 .mProductTileForm", "height")
};
Mobi.initProductSwipe = function() {
	var c = Mobi.getJQMobi();
	var b = Mobi.getPreviewObject("productImageSwipe");
	if (!b) {
		return
	}
	Mobi.initScaleImage(b);
	c("#productImageSwipe").swipehandle(b, {
		continuous : true,
		bulletsClick : true,
		callback : function(e) {
			var d = a.length;
			while (d--) {
				a[d].className = " "
			}
			if (!a[e]) {
				a[e - a.length].className = "on"
			} else {
				a[e].className = "on"
			}
		}
	});
	if (!b.querySelector(".bullets")) {
		return
	}
	var a = b.querySelector(".bullets").getElementsByTagName("li")
};
Mobi.pdCommentAddCom = function() {
	var e = jm.trim(jm("#productCommentCreator").val());
	var c = jm("#productCommentCreator").attr("minlength");
	var h = jm("#productCommentInput").val();
	var a = jm("#productCommentInput").attr("minlength");
	var f = jm("#validateCodeInput").val();
	var d = jm("#productCommentInput").attr("productId");
	if (typeof (e) != "string") {
		Mobi.ing(LS.creatorTips);
		return
	}
	if (typeof (h) != "string" || "" == h) {
		Mobi.ing(LS.commentNotEmpty);
		return
	}
	if (h.length < a) {
		Mobi.ing(jm.format(LS.commentLenTips, jm.encodeHtml(a)));
		return
	}
	if (typeof (f) != "string" || "" == f) {
		Mobi.ing(LS.memberInputCaptcha);
		return
	}
	var g = "ajax/productComment_h.jsp?cmd=submitPC";
	var b = {
		validateCode : f,
		productId : d,
		creator : e,
		comment : h
	};
	Mobi.ing(LS.siteFormSubmitIng);
	jm
			.ajax({
				type : "POST",
				url : g,
				data : b,
				error : function() {
					Mobi.ing(LS.systemError);
					jm("#captchaChange").click()
				},
				success : function(i) {
					var k = jm.parseJSON(i);
					if (!k || !k.success) {
						jm("#captchaChange").click()
					}
					switch (k.msg) {
					case 1:
						Mobi.ing(LS.captchaError);
						break;
					case 2:
						Mobi.ing(LS.creatorError);
						break;
					case 3:
						Mobi.ing(LS.commentError);
						break;
					case 4:
						Mobi.getCommentDiv("product", d);
						Mobi.ing(LS.submitSuccess);
						break;
					case 5:
						Mobi.ing(LS.paramError);
						break;
					case 6:
						var j = jm.encodeUrl(window.location.href);
						window.location.href = "login.jsp?returnUrl=" + j
								+ "&errno=11";
						break;
					case 7:
						Mobi.ing(LS.commentClosed);
						break;
					case 8:
						Mobi.ing(LS.commentSubmitError);
						break;
					case 9:
						Mobi.ing(LS.commentCountLimit);
						break;
					default:
					}
				}
			})
};
Mobi.waterFall = function(u, x, v, h, e, g, j) {
	var c = parseInt(jm("#" + x + " .productWaterFall .style8Img").width());
	var f = _htmlFontSize;
	var l = (c * g) / (e * f);
	l = parseFloat(l.toFixed(4));
	var s = (c * h) / (v * f);
	s = parseFloat(s.toFixed(4));
	var y = jm("#" + x + " .paramPadding .paramName").css("font-size");
	if (typeof y != "object") {
		var m = y.substring(0, y.indexOf("p")) / f;
		m = m + 0.1;
		jm("#" + x + " .productWaterFall .paramPadding .paramName").css(
				"line-height", m + "rem");
		m = parseFloat(m.toFixed(4)) * 2
	} else {
		m = 0
	}
	var p = "paramWrap";
	if (j == p) {
		jm("#" + x + " .productWaterFall .paramPadding .paramName").height(
				m + "rem")
	} else {
		jm("#" + x + " .productWaterFall .paramPadding .paramName").height(
				m / 2 + "rem")
	}
	if (u.length == 1) {
		jm("#" + x + " .productWaterFall .style8Img").height(l + "rem");
		jm("#" + x + " .productWaterFall").eq(q).css({
			"vertical-align" : "top"
		})
	} else {
		if (u.length == 2) {
			for (var q = 0; q < u.length; q++) {
				if (q % 2 == 0) {
					jm("#" + x + " .productWaterFall .style8Img").eq(q).height(
							l + "rem");
					jm("#" + x + " .productWaterFall").eq(q).css({
						"vertical-align" : "top"
					})
				} else {
					if (q % 2 == 1) {
						var w = 0;
						jm("#" + x + " .productWaterFall .style8Img").eq(q)
								.height(s + "rem");
						jm("#" + x + " .productWaterFall").eq(q).css({
							position : "absolute",
							top : w + "rem"
						});
						var d = parseFloat(jm(
								"#" + x + " .productWaterFall .commonProRight")
								.parent().parent().parent().height());
						var n = parseFloat(jm(
								"#" + x + " .productWaterFall .firstLastPro")
								.parent().parent().parent().height());
						d = d / f;
						n = n / f;
						if (n < d) {
							d = d + 10 / f;
							jm("#" + x + " .productWaterFall .firstLastPro")
									.parent().parent().parent().parent()
									.height(d + "rem")
						}
					}
				}
			}
		} else {
			for (var q = 0; q < u.length; q++) {
				var o = q;
				if (q == 0) {
					jm("#" + x + " .productWaterFall .style8Img").eq(q).height(
							l + "rem");
					jm("#" + x + " .productWaterFall").eq(q).css({
						"vertical-align" : "top"
					})
				} else {
					if (o + 1 == u.length) {
						jm("#" + x + " .productWaterFall .style8Img").eq(q)
								.height(l + "rem");
						if (u.length % 2 == 1) {
							jm("#" + x + " .productWaterFall").eq(q).css({
								"vertical-align" : "top"
							})
						} else {
							if (u.length % 2 == 0) {
								var b = parseFloat(jm(
										"#"
												+ x
												+ " .productWaterFall .commonProRight")
										.parent().parent().parent().height());
								b = (b) / f;
								var t = (b + 0.5) * ((q + 1) / 2 - 1);
								jm("#" + x + " .productWaterFall").eq(q).css({
									position : "absolute",
									top : t + "rem"
								})
							}
						}
					} else {
						jm("#" + x + " .productWaterFall .style8Img").eq(q)
								.height(s + "rem");
						var b = parseFloat(jm(
								"#" + x + " .productWaterFall .commonProRight")
								.parent().parent().parent().height());
						var a = parseFloat(jm(
								"#" + x + " .productWaterFall .commonProRight")
								.parent().parent().parent().width());
						b = (b) / f;
						if (q % 2 == 0) {
							jm("#" + x + " .productWaterFall").eq(q).css({
								"vertical-align" : "top"
							})
						} else {
							if (q % 2 == 1) {
								var r = (b + 0.5) * ((q + 1) / 2 - 1);
								jm("#" + x + " .productWaterFall").eq(q).css({
									position : "absolute",
									top : r + "rem"
								})
							}
						}
					}
				}
			}
		}
	}
};
Mobi.initProductSwipe1 = function(d) {
	var c = Mobi.getJQMobi();
	var b = Mobi.getPreviewObject(d);
	if (!b) {
		return
	}
	c("#" + d).swipehandle(b, {
		auto : false,
		continuous : false,
		bulletsClick : true,
		callback : function(f) {
			var e = a.length;
			while (e--) {
				a[e].className = " "
			}
			if (!a[f]) {
				a[f - a.length].className = "on"
			} else {
				a[f].className = "on"
			}
		}
	});
	if (!b.querySelector(".bullets")) {
		return
	}
	var a = b.querySelector(".bullets").getElementsByTagName("li")
};
Mobi.productCrossedSlide = function(a, d, f, b) {
	var c = jm("#" + a + " .productCrossedSlide .style7Img").width();
	var g = _htmlFontSize;
	var i = (c * f) / (d * g);
	i = parseFloat(i.toFixed(4));
	var h = jm("#" + a + " .paramPadding .paramName").css("font-size");
	if (typeof h != "object") {
		var j = h.substring(0, h.indexOf("p")) / g;
		jm("#" + a + " .productCrossedSlide .paramPadding .paramName").css(
				"line-height", j + "rem");
		j = parseFloat(j.toFixed(4)) * 2
	} else {
		j = 0
	}
	var e = "paramWrap";
	if (b == e) {
		jm("#" + a + " .productCrossedSlide .paramPadding .paramName").height(
				j + "rem")
	} else {
		jm("#" + a + " .productWaterFall .paramPadding .paramName").height(
				j / 2 + "rem")
	}
	jm("#" + a + " .productCrossedSlide .style7Img").height(i + "rem")
};
Mobi.productCrossedSlideSec = function(a, d, f, b) {
	var c = jm("#" + a + " .productCrossedSlideSec .style9Img").width();
	var g = _htmlFontSize;
	var i = (c * f) / (d * g);
	i = parseFloat(i.toFixed(4));
	var h = jm("#" + a + " .paramPadding .paramName").css("font-size");
	if (typeof h != "object") {
		var j = h.substring(0, h.indexOf("p")) / g;
		jm("#" + a + " .productCrossedSlideSec .paramPadding .paramName").css(
				"line-height", j + "rem");
		j = parseFloat(j.toFixed(4)) * 2
	} else {
		j = 0
	}
	var e = "paramWrap";
	if (b == e) {
		jm("#" + a + " .productCrossedSlideSec .paramPadding .paramName")
				.height(j + "rem")
	} else {
		jm("#" + a + " .productWaterFall .paramPadding .paramName").height(
				j / 2 + "rem")
	}
	jm("#" + a + " .productCrossedSlideSec .style9Img").height(i + "rem")
};
Mobi.productCrossedSlideSecSwipe = function(b, k) {
	var e = Mobi.getPreviewObject(b), a = Mobi.getPreviewObject(k), j = e, m = parseInt(jm(
			a).width()), g = 0, c = a
			.querySelectorAll(".productCrossedSlideSec");
	var l = _htmlFontSize;
	var h = c.length * 0.5 * l;
	for (var d = 0; d < c.length; d++) {
		g += c[d].offsetWidth
	}
	g += h;
	if (g > m) {
		if (navigator.appVersion.match(/MSIE [\d.]+/)) {
			if (parseInt(navigator.appVersion.match(/MSIE ([\d.]+)/)[1]) === 10) {
				g = g + c.length * 2
			}
		}
		g = g + 10;
		jm(j).css("width", g + "px");
		var f = jm.getCookie("startX") ? parseInt(jm.getCookie("startX")) : 0;
		if (jm.os.supportsTouch) {
			var n = new iScroll(a, {
				x : f,
				scrollX : true,
				scrollY : false,
				mouseWheel : true,
				remarkXCoordinate : true,
				onBeforeScrollStart : function() {
				}
			})
		} else {
		}
	}
};
Mobi.hideProductItemContainer = function(a) {
	jm(Mobi.getPreviewObject(a)).removeAttr("style");
	jm(Mobi.getPreviewObject("productSlide")).find(".productLeft").hide();
	jm(Mobi.getPreviewObject("productSlide")).find(".productRight").hide()
};
Mobi.hideParamPadding = function(b) {
	var a = jm("#" + b + " .paramCollection").children("p").length;
	if (a === 0) {
		jm("#" + b + " .paramCollection").removeClass("paramPadding")
	}
};
Mobi.removeMarginBottom = function(c, b) {
	if (b == "styleNine") {
		var f = jm("#" + c + " .productCrossedSlideSec")
	} else {
		if (b == "styleEight") {
			var f = jm("#" + c + " .productWaterFall")
		} else {
			if (b == "styleSeven") {
				var f = jm("#" + c + " .productCrossedSlide")
			}
		}
	}
	var a = f.eq(0).find(".paramCollection").children("p").length;
	var e = f.eq(0).find(".paramCollection").children(".paramName").length;
	if (a === 1 && e === 1) {
		jm("#" + c + " .paramCollection .paramName").css("marginBottom", 0)
	}
	var d = f.eq(0).find(".paramCollection").children(".paramPrice").length;
	if (a === 2 && d === 1) {
		f.find(".paramCollection").children(".paramLine").remove()
	}
};
Mobi.initOnlineServiceWidth = function() {
	var b = Mobi.getPreviewObject("customerServiceDiv");
	if (!b) {
		return
	}
	var a = b.querySelectorAll(".service").length;
	if (a === 0) {
		jm("#webCustomerServiceBox").css("display", "none");
		Fai.top._openOnlineService = false
	} else {
		jm("#webCustomerServiceBox").css("display", "block");
		Fai.top._openOnlineService = true
	}
	jm("#customerServiceDiv .service").css("width", 100 / a + "%")
};
Mobi.showMapService = function() {
	var a = Fai.top._onlineServiceJson.map.city
			+ Fai.top._onlineServiceJson.map.d_address;
	if (!a) {
		alert("请填写正确的地址");
		return false
	}
	var b = "http://map.baidu.com/mobile/webapp/search/search/qt=s&wd="
			+ encodeURIComponent(a)
			+ "&c=348&searchFlag=bigBox&version=5&exptype=dep/vt=map/?fromhash=1";
	jm("#webMapServiceBox").addClass("showMapService");
	jm("#mobiSearchMapFrame").attr("src", b);
	jm("#mobiSearchMapFrame").load(function() {
		Mobi.mobiHideScroll()
	})
};
Mobi.closeMapService = function() {
	Mobi.mobiShowScroll();
	jm("#webMapServiceBox").removeClass("showMapService")
};
Mobi.unloadForATag = function() {
	if (!jm.os.supportsTouch) {
		jm("#g_body").delegate("#customerServiceDiv a", "click", function(d) {
			var c = d.target || d.srcElement;
			var b = c.parentNode;
			if (!b) {
				return
			}
			var a = b.getAttribute("id").substring(11);
			if (parseInt(a) === 1 || parseInt(a) === 2) {
				alert("该功能无法在桌面浏览器中启动");
				return false
			}
		})
	}
};
Mobi.showPhonesBg = function() {
	var a = document.getElementById("showMorePhone");
	if (a != null) {
		a.onclick = null;
		a.onclick = function() {
			if (Fai.top._onlineServiceJson.phone.phoneInfo.length > 1) {
				Mobi.mobiHideScroll();
				var I = document.body.clientHeight;
				var A = document.body.clientWidth;
				var e = document.getElementById("g_web");
				var y = document.createElement("div");
				var G = document.createElement("div");
				var u = document.createElement("div");
				var d = document.createElement("div");
				y.id = "phoneDiv";
				G.id = "fullbg";
				u.id = "tablesDiv";
				d.id = "scrollTable";
				y.className = "phoneDiv";
				u.className = "tablesDiv";
				G.className = "phoneFullBg";
				d.className = "scrollTable";
				e.appendChild(y);
				var D = document.getElementById("phoneDiv");
				D.appendChild(G);
				D.appendChild(u);
				u.appendChild(d);
				var x = document.getElementById("fullbg");
				var c = document.getElementById("tablesDiv");
				var r = document.getElementById("scrollTable");
				x.style.height = I + "px";
				x.style.width = A + "px";
				x.style.position = "fixed";
				for (var E = 0; E < Fai.top._onlineServiceJson.phone.phoneInfo.length; E++) {
					var J = E + 1;
					var f = decodeURIComponent(Fai.top._onlineServiceJson.phone.phoneInfo[E].name);
					var L = Fai.top._onlineServiceJson.phone.phoneInfo[E].number;
					var l = document.createElement("div");
					l.id = "fullTableDiv" + J;
					l.className = "fullTableDiv";
					r.appendChild(l);
					var h = document.getElementById("fullTableDiv");
					l.innerHTML = "<a id='numberHref_"
							+ Fai.top._onlineServiceJson.phone.type + J
							+ "' href='tel:" + L + "'>";
					var w = document.getElementById("numberHref_"
							+ Fai.top._onlineServiceJson.phone.type + J);
					var F = document.createElement("div");
					F.id = "tableDiv";
					F.className = "tableBox tableDiv";
					w.appendChild(F);
					var m = document.getElementById("tableDiv");
					var q = document.createElement("div");
					var z = document.createElement("div");
					var g = document.createElement("div");
					var o = document.createElement("div");
					var s = document.createElement("div");
					var C = document.createElement("div");
					q.className = "phoneName tableCell";
					q.id = "phoneName" + J;
					z.className = "phoneNumber tableCell";
					z.id = "phoneNumber" + J;
					g.className = "phoneOperation tableCell";
					g.id = "phoneOperation" + J;
					o.id = "phoneLine";
					o.className = "phoneLine";
					C.id = "phoneOperImg" + J;
					C.className = "phoneOperImg";
					F.appendChild(q);
					F.appendChild(z);
					F.appendChild(g);
					r.appendChild(o);
					g.appendChild(C);
					var k = document.getElementById("phoneName" + J);
					var b = document.getElementById("phoneNumber" + J);
					var p = document.getElementById("phoneOperation" + J);
					var H = document.getElementById("phoneOperImg");
					var n = document.createTextNode(f);
					k.appendChild(n);
					b.innerHTML = L;
					if (!jm.os.supportsTouch) {
						w.onclick = function() {
							alert("该功能无法在桌面浏览器中启动")
						}
					}
				}
				var v = document.createElement("div");
				var B = document.createElement("div");
				v.id = "pCancle";
				v.className = "pCancle";
				B.id = "phoneCancle";
				B.className = "phoneCancle";
				c.appendChild(v);
				v.appendChild(B);
				var j = document.getElementById("phoneCancle");
				j.innerHTML = "取消";
				var K = document.documentElement.clientHeight - j.offsetHeight;
				var t = r.offsetHeight;
				if (t > K) {
					d.style.height = (document.documentElement.clientHeight - j.offsetHeight)
							+ "px"
				}
				setTimeout("tablesDiv.style.cssText = 'bottom: 0; ';", 10);
				setTimeout(function() {
					x.style.opacity = "0.3"
				}, 10);
				x.onclick = function() {
					var i = document.getElementById("phoneDiv");
					c.style.cssText = "bottom: -100%";
					x.style.opacity = "0";
					Mobi.mobiShowScroll();
					setTimeout(function() {
						i.parentNode.removeChild(i)
					}, 100)
				};
				j.onclick = function() {
					var i = document.getElementById("phoneDiv");
					c.style.cssText = "bottom: -100%";
					x.style.opacity = "0";
					Mobi.mobiShowScroll();
					setTimeout(function() {
						i.parentNode.removeChild(i)
					}, 100)
				}
			}
		}
	} else {
		return
	}
};
Mobi.showQqBg = function() {
	var a = document.getElementById("showMoreQq");
	if (a != null) {
		a.onclick = null;
		a.onclick = function() {
			if (Fai.top._onlineServiceJson.qq.qqInfo.length > 1) {
				Mobi.mobiHideScroll();
				var I = document.body.clientHeight;
				var z = document.body.clientWidth;
				var f = document.getElementById("g_web");
				var x = document.createElement("div");
				var H = document.createElement("div");
				var t = document.createElement("div");
				var d = document.createElement("div");
				x.id = "qqDiv";
				H.id = "fullbg";
				t.id = "tablesDiv";
				d.id = "scrollTable";
				x.className = "qqDiv";
				t.className = "tablesDiv";
				H.className = "qqFullBg";
				d.className = "scrollTable";
				f.appendChild(x);
				var C = document.getElementById("qqDiv");
				C.appendChild(H);
				C.appendChild(t);
				t.appendChild(d);
				var w = document.getElementById("fullbg");
				var c = document.getElementById("tablesDiv");
				var p = document.getElementById("scrollTable");
				w.style.height = I + "px";
				w.style.width = z + "px";
				w.style.position = "fixed";
				for (var F = 0; F < Fai.top._onlineServiceJson.qq.qqInfo.length; F++) {
					var J = F + 1;
					var g = decodeURIComponent(Fai.top._onlineServiceJson.qq.qqInfo[F].name);
					var L = Fai.top._onlineServiceJson.qq.qqInfo[F].number;
					var l = document.createElement("div");
					l.id = "fullTableDiv" + J;
					l.className = "fullTableDiv";
					p.appendChild(l);
					var j = document.getElementById("fullTableDiv");
					l.innerHTML = "<a id='numberHref_"
							+ Fai.top._onlineServiceJson.qq.type
							+ J
							+ "' target='_blank' href='http://wpa.qq.com/msgrd?v=3&uin="
							+ L + "&site=qq&menu=yes'>";
					var v = document.getElementById("numberHref_"
							+ Fai.top._onlineServiceJson.qq.type + J);
					var G = document.createElement("div");
					G.id = "tableDiv";
					G.className = "tableBox tableDiv";
					v.appendChild(G);
					var m = document.getElementById("tableDiv");
					var e = document.createElement("div");
					var y = document.createElement("div");
					var o = document.createElement("div");
					var b = document.createElement("div");
					var A = document.createElement("div");
					var E = document.createElement("div");
					e.className = "qqName tableCell";
					e.id = "qqName" + J;
					y.className = "qqNumber tableCell";
					y.id = "qqNumber" + J;
					o.className = "qqOperation tableCell";
					o.id = "qqOperation" + J;
					b.id = "qqLine";
					b.className = "qqLine";
					E.id = "qqOperImg" + J;
					E.className = "qqOperImg";
					G.appendChild(e);
					G.appendChild(y);
					G.appendChild(o);
					p.appendChild(b);
					o.appendChild(E);
					var q = document.getElementById("qqName" + J);
					var r = document.getElementById("qqNumber" + J);
					var D = document.getElementById("qqOperation" + J);
					var h = document.getElementById("qqOperImg");
					var n = document.createTextNode(g);
					q.appendChild(n);
					r.innerHTML = L
				}
				var u = document.createElement("div");
				var B = document.createElement("div");
				u.id = "qCancle";
				u.className = "qCancle";
				B.id = "qqCancle";
				B.className = "qqCancle";
				c.appendChild(u);
				u.appendChild(B);
				var k = document.getElementById("qqCancle");
				k.innerHTML = "取消";
				var K = document.documentElement.clientHeight - k.offsetHeight;
				var s = p.offsetHeight;
				if (s > K) {
					d.style.height = (document.documentElement.clientHeight - k.offsetHeight)
							+ "px"
				}
				setTimeout("tablesDiv.style.cssText = 'bottom: 0; ';", 10);
				setTimeout(function() {
					w.style.opacity = "0.3"
				}, 10);
				w.onclick = function() {
					var i = document.getElementById("qqDiv");
					c.style.cssText = "bottom: -100%";
					w.style.opacity = "0";
					Mobi.mobiShowScroll();
					setTimeout(function() {
						i.parentNode.removeChild(i)
					}, 100)
				};
				k.onclick = function() {
					var i = document.getElementById("qqDiv");
					c.style.cssText = "bottom: -100%";
					w.style.opacity = "0";
					Mobi.mobiShowScroll();
					setTimeout(function() {
						i.parentNode.removeChild(i)
					}, 100)
				}
			}
		}
	} else {
		return
	}
};
Mobi.initLocater = function() {
	var a = jm("#multiLanguageCtrl ");
	if (!a) {
		return false
	} else {
		var b = jm("#lanSelect .lanContainer").find("div[currentlan]");
		b = b.length === 1 ? jm(b[0]).attr("currentlan") : jm(b[1]).attr(
				"currentlan");
		jm(a).addClass("Icon" + b);
		jm("#lanSelected").addClass("Icon" + b);
		jm(".lanItem ").click(function() {
			document.location.href = jm(this).attr("value")
		});
		jm(document).bind("click", function(d) {
			var c = d.target || d.srcElement;
			if (c.id === "multiLanguageCtrl") {
				return
			}
			var e = jm(c);
			if (e.closest("#lanSelect").length == 0) {
				jm("#lanSelect").hide()
			}
			d.stopPropagation()
		})
	}
};
Mobi.languageCtrl = function() {
	if (jm("#lanSelect").css("display") === "block") {
		jm("#lanSelect").hide()
	} else {
		jm("#lanSelect").show()
	}
};
Mobi.decrease = function() {
	var a = parseInt(jm("#productNum").val());
	if (isNaN(a)) {
		a = 1
	}
	if (a > 99999998) {
		a = 99999998
	}
	if (a < 0) {
		a = 0
	}
	jm("#productNum").val(a + 1)
};
Mobi.increase = function() {
	var a = parseInt(jm("#productNum").val());
	if (isNaN(a)) {
		a = 1
	}
	if (a < 2) {
		a = 2
	}
	jm("#productNum").val(a - 1)
};
Mobi.removeMallTIps = function() {
	jm("#mallBuyTips").remove();
	document.getElementById("webLoading").style.display = "none"
};
Mobi.MallAjaxErrno = {
	ok : 0,
	error : 1,
	manager : 2,
	login : 3,
	idNotExist : 4,
	orderSettle : 5,
	noMall : 6,
	toProductDetail : 7,
	orderNotExist : 8,
	networkError : 9,
	outOfMallAmount : 10,
	mallAmountZero : 11
};
Mobi.returnMallErrorMsg = function(a) {
	var b;
	switch (parseInt(a)) {
	case Mobi.MallAjaxErrno.error:
		Mobi.ing(LS.mallAjaxErrno_error);
		break;
	case Mobi.MallAjaxErrno.manager:
		Mobi.showMallTips(LS.mallAjaxErrno_manager);
		break;
	case Mobi.MallAjaxErrno.login:
		goToMallCartUrl = "login.jsp?returnUrl="
				+ jm.encodeUrl(jm.getUrlRoot(top.location.href)) + "&errno=11";
		top.location.href = goToMallCartUrl;
		break;
	case Mobi.MallAjaxErrno.idNotExist:
		Mobi.ing(LS.mallAjaxErrno_idNotExist);
		break;
	case Mobi.MallAjaxErrno.orderSettle:
		Mobi.ing(LS.mallAjaxErrno_orderSettle);
		break;
	case Mobi.MallAjaxErrno.noMall:
		Mobi.ing(LS.mallAjaxErrno_noMall);
		break;
	case Mobi.MallAjaxErrno.orderNotExist:
		Mobi.ing(LS.mallAjaxErrno_orderNotExist);
		break;
	case Mobi.MallAjaxErrno.networkError:
		Mobi.ing(LS.networkError);
		break;
	case Mobi.MallAjaxErrno.outOfMallAmount:
		Mobi.ing(LS.mallAmountOverFlow);
		break;
	case Mobi.MallAjaxErrno.mallAmountZero:
		Mobi.ing(LS.mallAmountZero);
		break;
	default:
		Mobi.ing(LS.systemError);
		top.location.href.reload()
	}
};
Mobi.mallBuying = {};
Mobi.mallBuy = function(d) {
	if (typeof (Mobi.mallBuying[d]) == "undefined") {
		Mobi.mallBuying[d] = false
	}
	var b = false;
	jm.each(Mobi.mallBuying, function(j, i) {
		if (i) {
			b = true;
			return false
		}
	});
	if (b) {
		return
	}
	Mobi.mallBuying[d] = true;
	var a = "id=" + d;
	a += "&fromDetail=true";
	var h = [];
	var f = jm(".mallOptionLine");
	var g = true;
	jm(".mallOptionLine").each(function() {
		var j = jm(this).attr("option_name");
		var k = jm(this).attr("data");
		var i = jm(this).attr("option_data");
		if (i) {
			var l = {};
			l.name = k;
			l.value = parseInt(i);
			h.push(l)
		} else {
			Mobi.ing(jm.format(LS.mallCartChoiceItemError, jm.encodeHtml(j)));
			g = false;
			return false
		}
	});
	if (!g) {
		Mobi.mallBuying[d] = false;
		return false
	}
	if (h.length > 0) {
		a += "&optionList=" + jm.encodeUrl(jm.toJSON(h))
	}
	var c = jm("#productNum").val();
	var e = 1;
	if (jm.isInteger(c)) {
		e = parseInt(c)
	}
	if (e < 1) {
		e = 1
	} else {
		if (e > 9999999) {
			e = 9999999
		}
	}
	jm("#productNum").val(e);
	a += "&amount=" + e;
	jm.ajax({
		type : "post",
		url : "ajax/order_h.jsp?cmd=addCartItem",
		data : a,
		error : function() {
			Mobi.ing(LS.systemError);
			Mobi.mallBuying[d] = false
		},
		success : function(i) {
			var j = jm.parseJSON(i);
			if (j.success) {
				Mobi.showMallTips(LS.mallAddSuc);
				Mobi.mallBuying[d] = false
			} else {
				Mobi.returnMallErrorMsg(j.rt);
				Mobi.mallBuying[d] = false
			}
		}
	})
};
Mobi.mallCartAmountChange = function(f, a, g) {
	var b = jm(".itemLine" + f);
	var e = b.find(".buyNumber");
	var c = e.val();
	var d = 1;
	if (jm.isInteger(c)) {
		d = parseInt(c)
	}
	if (d < 2) {
		d = 1
	} else {
		if (d > 9999998) {
			d = 9999999
		}
	}
	e.val(d);
	if (isNaN(d) || d <= 0 || d > 9999999) {
		Mobi.ing(LS.mallCartAmountError);
		return
	}
	Mobi.ing(LS.mallCartUpdating);
	jm.ajax({
		type : "post",
		url : "ajax/order_h.jsp?cmd=setItem&orderId=" + a,
		data : "itemId=" + g + "&amount=" + d,
		error : function() {
			Mobi.ing(LS.mallCartUpdateError)
		},
		success : function(h) {
			var h = jm.parseJSON(h);
			if (h.success) {
				Mobi.ing(LS.mallCartUpdateOk);
				var n = 0;
				jm(".mall_product ").each(function() {
					var r = parseFloat(jm(this).attr("price"), 2);
					var o = parseInt(jm(this).find(".buyNumber").val());
					var q = (r * o);
					q = q.toFixed(2);
					n += parseFloat(q, 2)
				});
				var j = jm("#count");
				var m = j.attr("choiceCurrencyVal");
				var l = m;
				var k = j.attr("levelDiscount");
				var i = jm.encodeHtml(j.attr("levelName"));
				if (k > 0 && i.length > 0 && k < 100) {
					l = l + n.toFixed(2) + "*" + k + "%(" + i + ")=" + m;
					n = n * k / 100
				}
				j.html(l + n.toFixed(2))
			} else {
				if (h.rt == -3) {
					Mobi.ing(LS.mallCartUpdateNotFound)
				} else {
					if (h.rt == -9) {
						Mobi.ing(LS.mallCartUpdateStatusError)
					} else {
						Mobi.ing(LS.mallCartUpdateError)
					}
				}
			}
		}
	})
};
Mobi.mallCartItemDel = function(b, a, c) {
	Mobi.ing(LS.mallCartUpdating);
	jm.ajax({
		type : "post",
		url : "ajax/order_h.jsp?cmd=delItem&orderId=" + a,
		data : "itemId=" + c,
		error : function() {
			Mobi.ing(LS.mallCartUpdateError)
		},
		success : function(d) {
			var d = jm.parseJSON(d);
			if (d.success) {
				Mobi.ing(LS.mallCartUpdateOk);
				jm(".itemLine" + b).remove();
				var f = jm(".mall_product");
				if (f.length == 0) {
					Fai.top.location.reload()
				} else {
					var k = 0;
					f.each(function() {
						var n = parseFloat(jm(this).attr("price"), 2);
						var l = parseInt(jm(this).find(".buyNumber").val());
						var m = (n * l);
						m = m.toFixed(2);
						k += parseFloat(m, 2)
					});
					var g = jm("#count");
					var j = g.attr("choiceCurrencyVal");
					var h = g.attr("levelDiscount");
					var e = jm.encodeHtml(g.attr("levelName"));
					var i = j;
					if (h > 0 && h < 100) {
						i += k.toFixed(2) + "*" + h + "%(" + e + ")=" + j;
						k = k * h / 100
					}
					g.html(i + k.toFixed(2))
				}
			} else {
				if (d.rt == -3) {
					Mobi.ing(LS.mallCartUpdateNotFound)
				} else {
					if (d.rt == -9) {
						Mobi.ing(LS.mallCartUpdateStatusError)
					} else {
						Mobi.ing(LS.mallCartUpdateError)
					}
				}
			}
		}
	})
};
Mobi.showMallTips = function(c) {
	document.getElementById("webLoading").style.display = "block";
	var b = document.getElementById("webLoading");
	var a = "<div id='mallBuyTips' class='mallTips'><div class='top wekitBox'><div class='topIcon'></div><div class='topText flex1'>"
			+ c
			+ "</div></div><div class='bottom wekitBox'><div class='left flex1' onclick='Mobi.removeMallTIps();'>"
			+ LS.mallContinueShopping
			+ "</div><a href='mcart.jsp' class='right flex1'>"
			+ LS.mallToCartCount + "</a></div></div>";
	b.innerHTML = a
};
Mobi.initMallShipInfo = function(a) {
	jm("#mallShipTemplate_province").find(
			"option[value='" + a.provinceCode + "']").prop("selected", true)
			.trigger("change");
	jm("#mallShipTemplate_city").find("option[value='" + a.cityCode + "']")
			.prop("selected", true).trigger("change");
	jm("#mallShipTemplate_county").find("option[value='" + a.countyCode + "']")
			.prop("selected", true).trigger("change");
	jm("#info_addrDetail").text(a.streetAddr);
	jm("#edit_addrDetal").text(a.streetAddr);
	jm("#mallShip").find("option[id='template_item_" + a.type + "']").prop(
			"selected", true).trigger("change")
};
Mobi.initModuleMallShipTemplate = function(c, f) {
	var k = LS.mallPleaseChoose;
	var i = [];
	var e;
	var j;
	var b;
	var d;
	var a;
	var g;
	var h = site_cityUtil.getProvince();
	site_cityUtil.simpleProvinceName(h);
	jm.each(h, function(l, m) {
		i.push("<option value='" + m.id + "' >"
				+ site_cityUtil.simpleCityNameStr(m.name) + "</option>")
	});
	jm("#mallShipTemplate_province")
			.html("")
			.html("<option value='-1'>" + k + "</option>" + i.join(""))
			.change(
					function(l) {
						e = jm("#mallShipTemplate_province").val();
						if (isNaN(e) || e <= 0) {
							jm("#mallShipTemplate_city").html("").html(
									"<option value='-1'>" + k + "</option>");
							jm("#mallShipTemplate_county").html("").html(
									"<option value='-1'>" + k + "</option>");
							jm.each(c, function(m, n) {
								var o = jm("#template_item_" + n.type).attr(
										"mark");
								jm("#template_item_" + n.type).html(
										o + n.defaultPrice.toFixed(1));
								jm("#template_item_" + n.type).attr("value",
										n.defaultPrice.toFixed(1))
							});
							Mobi.mallStlCalcTotal();
							return
						}
						b = [];
						j = site_cityUtil.getCities(e);
						site_cityUtil.simpleCityName(j);
						jm.each(j, function(m, n) {
							b.push("<option value='" + n.id + "' >" + n.name
									+ "</option>")
						});
						jm("#mallShipTemplate_city")
								.html("")
								.html(
										"<option value='-1'>" + k + "</option>"
												+ b.join(""))
								.change(
										function(m) {
											d = jm("#mallShipTemplate_city")
													.val();
											if (isNaN(d) || d <= 0) {
												jm("#mallShipTemplate_county")
														.html("")
														.html(
																"<option value='-1'>"
																		+ k
																		+ "</option>");
												jm
														.each(
																c,
																function(n, o) {
																	var p = jm(
																			"#template_item_"
																					+ o.type)
																			.attr(
																					"mark");
																	jm(
																			"#template_item_"
																					+ o.type)
																			.html(
																					p
																							+ o.defaultPrice
																									.toFixed(1));
																	jm(
																			"#template_item_"
																					+ o.type)
																			.attr(
																					"value",
																					o.defaultPrice
																							.toFixed(1))
																});
												Mobi.mallStlCalcTotal();
												return
											}
											g = [];
											a = site_cityUtil.getCounty(d);
											jm.each(a, function(n, o) {
												g.push("<option value='" + o.id
														+ "' >" + o.name
														+ "</option>")
											});
											jm("#mallShipTemplate_county")
													.html("")
													.html(
															"<option value='-1'>"
																	+ k
																	+ "</option>"
																	+ g
																			.join(""))
													.change(function(n) {
														Mobi.mallStlCalcTotal()
													});
											jm
													.each(
															c,
															function(n, o) {
																if (!o.regionList
																		|| o.regionList.length <= 0) {
																	var p = jm(
																			"#template_item_"
																					+ o.type)
																			.attr(
																					"mark");
																	jm(
																			"#template_item_"
																					+ o.type)
																			.html(
																					p
																							+ o.defaultPrice
																									.toFixed(1));
																	jm(
																			"#template_item_"
																					+ o.type)
																			.attr(
																					"value",
																					o.defaultPrice
																							.toFixed(1));
																	return true
																}
																jm
																		.each(
																				o.regionList,
																				function(
																						q,
																						r) {
																					if (jm
																							.inArray(
																									parseInt(d),
																									r.areaList) < 0) {
																						return true
																					}
																					var s = jm(
																							"#template_item_"
																									+ o.type)
																							.attr(
																									"mark");
																					jm(
																							"#template_item_"
																									+ o.type)
																							.html(
																									s
																											+ r.price
																													.toFixed(1));
																					jm(
																							"#template_item_"
																									+ o.type)
																							.attr(
																									"value",
																									r.price
																											.toFixed(1));
																					return false
																				})
															});
											Mobi.mallStlCalcTotal()
										});
						jm("#mallShipTemplate_county").html("").html(
								"<option value='-1'>" + k + "</option>");
						jm.each(c,
								function(m, n) {
									var o = jm("#template_item_" + n.type)
											.attr("mark");
									jm("#template_item_" + n.type).html(
											o + n.defaultPrice.toFixed(1));
									jm("#template_item_" + n.type).attr(
											"value", n.defaultPrice.toFixed(1))
								});
						Mobi.mallStlCalcTotal()
					});
	jm("#mallShipTemplate_city").html("").html(
			"<option value='-1'>" + k + "</option>");
	jm("#mallShipTemplate_county").html("").html(
			"<option value='-1'>" + k + "</option>")
};
Mobi.mallStlCalcTotal = function() {
	var g = parseFloat(jm("#cartTotalPrice").attr("totalPrice"));
	if (isNaN(g)) {
		return
	}
	var e = parseFloat(jm("#mallShip").val());
	if (isNaN(e)) {
		e = 0
	}
	if (jm("#mallShipTemplate_province").length > 0) {
		var a = jm("#mallShip");
		a.attr("provinceCode", jm.trim(jm("#mallShipTemplate_province").val()));
		a.attr("cityCode", jm.trim(jm("#mallShipTemplate_city").val()));
		a.attr("countyCode", jm.trim(jm("#mallShipTemplate_county").val()));
		var b = document.getElementById("mallShip").selectedIndex;
		var d = document.getElementById("mallShip").options[b]
				.getAttribute("id");
		a.attr("selectidx", d.substr(14))
	} else {
		if (jm("#mallShip").length == 1) {
			var b = document.getElementById("mallShip").selectedIndex;
			var d = document.getElementById("mallShip").options[b]
					.getAttribute("shipType");
			jm("#mallShip").attr("shipType", d)
		}
	}
	var h = 0;
	if (jm("#offsetMoney").length > 0) {
		var c = jm("#offsetMoney").attr("_offsetmoney");
		if (!isNaN(c)) {
			h = parseFloat(c);
			if ((g + e) < h) {
				Mobi.ing(jm.format(LS.integral_maxUse, jm("#useItg").attr(
						"_maxuse"), jm.encodeHtml(jm("#useItg").attr(
						"_itegName"))));
				module.find(".mallStlTotal .totalValue").text(
						(g + e).toFixed(2));
				return
			}
		}
		var f = parseInt(jm("#presentItg").attr("value"));
		if (f > 0) {
			jm("#presentItg").text(parseInt((g - h).toFixed(2) * f))
		}
	}
	jm("#mallShipCount").text((e).toFixed(2));
	jm("#totalValue").text((g + e - h).toFixed(2))
};
Mobi.showBankList = function() {
	var a = parseInt(jm("#payType").val());
	if (a != 1 && a != 2) {
		jm("#bankSelect").show()
	} else {
		jm("#bankSelect").hide()
	}
};
Mobi.showCusInfo = function(a) {
	if (a == 1) {
		jm("#cusInfo").hide();
		jm("#editCusInfo").show()
	} else {
		jm("#cusInfo").show();
		jm("#editCusInfo").hide()
	}
};
Mobi.editInfoSave = function() {
	var b = jm("#editCusInfo");
	var c = new Array();
	var a = false;
	b.find(".propItemValue").each(function() {
		var g = jm(this).val();
		var h = jm(this).attr("id");
		if (jm(this).attr("_required") == 1 && !g) {
			msg = LS.mallStlSubmitInput + jm(this).attr("_prop");
			Mobi.ing(msg);
			document.getElementById(h).focus();
			a = true;
			return false
		}
		var f = jm(this).attr("_field");
		if (g && g.length > 0) {
			if (f === "email" && !jm.isEmail(g)) {
				msg = LS.mallStlSubmitInput2 + jm(this).attr("_prop");
				Mobi.ing(msg);
				document.getElementById(h).focus();
				a = true;
				return false
			}
			if (f === "phone" && !jm.isPhone(g)) {
				msg = LS.mallStlSubmitInput2 + jm(this).attr("_prop");
				Mobi.ing(msg);
				document.getElementById(h).focus();
				a = true;
				return false
			}
		}
		if (typeof f !== "undefined") {
			var e = {};
			e.field = f;
			e.value = g;
			c.push(e)
		}
	});
	if (a) {
		return
	}
	if (jm("#mallShipTemplate_city").length == 1) {
		var d = parseInt(jm("#mallShipTemplate_city").val());
		if (d === -1) {
			Mobi.ing(LS.mallStlSubmitAddrErr);
			document.getElementById("mallShipTemplate_city").focus();
			return false
		}
	}
	jm.each(c, function(e) {
		jm("#info_" + (c[e])["field"]).html(jm.encodeHtml((c[e])["value"]))
	});
	Mobi.showCusInfo(2)
};
Mobi.mallSubmit = function(l) {
	if (l == 0) {
		window.location.href = "mdetail.jsp";
		return
	}
	var q = jm("#editCusInfo");
	var s = {};
	var n = false;
	var h = "";
	q.find(".propItemValue").each(function() {
		var u = jm(this).val();
		var v = jm(this).attr("id");
		if (jm(this).attr("_required") == 1 && !u) {
			h = LS.mallStlSubmitInput + jm(this).attr("_prop");
			Mobi.ing(h);
			document.getElementById(v).focus();
			n = true;
			return false
		}
		var t = jm(this).attr("_field");
		if (u && u.length > 0) {
			if (t === "email" && !jm.isEmail(u)) {
				h = LS.mallStlSubmitInput2 + jm(this).attr("_prop");
				Mobi.ing(h);
				document.getElementById(v).focus();
				n = true;
				return false
			}
			if (t === "phone" && !jm.isPhone(u)) {
				h = LS.mallStlSubmitInput2 + jm(this).attr("_prop");
				Mobi.ing(h);
				document.getElementById(v).focus();
				n = true;
				return false
			}
		}
		if (typeof t !== "undefined") {
			if (t !== "addrDetail") {
				s[t] = u
			}
		}
	});
	if (n) {
		Mobi.showCusInfo(1);
		return
	}
	var b = jm("#mallShip");
	if (jm("#mallShipTemplate_province").length == 1 && b.length == 1) {
		var g = parseInt(b.attr("provinceCode"));
		var j = parseInt(b.attr("cityCode"));
		var f = parseInt(b.attr("countyCode"));
		if (!g || isNaN(g) || !site_cityUtil.isValidProvince(g)) {
			h = LS.mallStlSubmitAddrErr
		}
		if (!j || isNaN(j) || !site_cityUtil.isValidCity(j, g)) {
			h = LS.mallStlSubmitAddrErr
		}
		var i = {
			type : parseInt(b.attr("selectIdx")),
			templateId : parseInt(b.attr("templateId")),
			provinceCode : g,
			cityCode : j,
			countyCode : f,
			streetAddr : jm.trim(jm("#edit_addrDetal").val())
		};
		s.shipType = i
	} else {
		if (b.length == 1) {
			s.shipType = parseInt(b.attr("shipType"))
		}
	}
	if (h != "") {
		Mobi.ing(h);
		return
	}
	var k = jm("#payType");
	var m = jm("#onlineBankType");
	var c = 0;
	if (k.length == 1) {
		c = parseInt(k.val());
		if (c < 3) {
			s.payMode = c
		}
	}
	if ((m.length == 1) && (c > 2)) {
		c = parseInt(m.attr("_paymode"));
		if (c != 9 && c != 8 && c != 7) {
			s.payBankType = parseInt(m.attr("_type"))
		}
		s.payMode = parseInt(m.attr("_paymode"))
	}
	if (isNaN(c)) {
		Mobi.ing(LS.mallStlPayOnlineType);
		return
	}
	var r = jm("#useItg");
	if (r.length > 0) {
		var d = r.val();
		if (jm.isInteger(d)) {
			var e = parseInt(r.attr("_maxUse"));
			var a = parseInt(r.attr("_currentitg"));
			var o = r.attr("_itegName");
			if (d > a) {
				Mobi.ing(jm.format(LS.integral_notOverCurrent,
						jm.encodeHtml(o), jm.encodeHtml(o)));
				r.focus();
				return
			}
			if (d > e) {
				Mobi.ing(jm.format(LS.integral_notOver, jm.encodeHtml(o), e));
				r.focus();
				return
			}
			if (d < 0) {
				Mobi.ing(LS.integral_inputInteger);
				r.focus();
				return
			}
			s.useItg = parseInt(d)
		}
	}
	if (jm("#presentItgShow").length > 0) {
		s.presentItg = true
	}
	Mobi.ing(LS.mallStlSubmitting);
	var p = jm("#onlineBankType").attr("_paymode");
	jm.ajax({
		type : "post",
		url : "ajax/order_h.jsp?cmd=settle&orderId=" + l,
		data : "data=" + jm.encodeUrl(jm.toJSON(s)),
		error : function() {
			Mobi.ing(LS.mallStlSubmitError)
		},
		success : function(t) {
			var t = jm.parseJSON(t);
			if (t.success) {
				if (p === "10") {
					window.location.href = "/wxPay/mdetail.jsp?id=" + l
							+ "&suc=true"
				} else {
					window.location.href = "mdetail.jsp?id=" + l + "&suc=true"
				}
			} else {
				if (t.rt == -3) {
					Mobi.ing(LS.mallStlSubmitNotFound)
				} else {
					if (t.rt == -9) {
						Mobi.ing(LS.mallStlSubmitStatusError)
					} else {
						if (t.rt == Mobi.MallAjaxErrno.outOfMallAmount) {
							Mobi.ing(jm.format(LS.mallAmountOverNameList,
									t.productsName))
						} else {
							Mobi.ing(LS.mallStlSubmitError)
						}
					}
				}
			}
		}
	})
};
Mobi.mallSettle = function(a) {
	if (a > 0) {
		window.location.href = "mstl.jsp?id=" + a
	} else {
		window.location.href = "mstl.jsp"
	}
};
Mobi.initPresentIpt = function() {
	var a = jm("#useItg");
	if (a.length > 0) {
		a.bind("change", function() {
			var b = parseInt(a.attr("_needitg"));
			var g = parseInt(a.val());
			var f = a.attr("_itegName");
			var c = parseInt(a.attr("_maxuse"));
			if (!jm.isInteger(g)) {
				Mobi.ing(LS.integral_inputOverZero);
				a.focus;
				g = 0
			}
			if (g > c) {
				Mobi.ing(jm.format(LS.integral_maxUse, jm("#useItg").attr(
						"_maxuse"), jm.encodeHtml(jm("#useItg").attr(
						"_itegName"))));
				return
			}
			if (g > parseInt(a.attr("_currentItg"))) {
				Mobi.ing(jm.format(LS.integral_notOverCurrent,
						jm.encodeHtml(f), jm.encodeHtml(f)));
				g = 0;
				a.focus();
				return
			}
			if (g < 0) {
				Mobi.ing(LS.integral_inputInteger);
				a.focus();
				return
			}
			var d = (g / b).toFixed(2);
			jm("#offsetMoney").text(d);
			jm("#offsetMoney").attr("_offsetmoney", d);
			var e = jm(this).attr("moduleId");
			Mobi.mallStlCalcTotal()
		})
	}
};
Mobi.printOnlinePayType = function(a) {
	jm("#fullScreenDivCotainer")
			.append(
					"<div class='fullScreenDiv webBackground webContainerBox moduleContent'  style='overflow-y: scroll;position: fixed;' id='pgListDiv'></div>");
	var b = new Array();
	b.push("<div class='loginHeader webHeaderBg'>");
	b
			.push("<span class='turnBackIcon g_close icon-gClose' onclick='jm(\"#pgListDiv\").remove();'></span>");
	b.push("<span class='title' style='padding-right:25px;'>"
			+ LS.mallSstlOnlineType + "</span>");
	b.push("</div>");
	b.push("<div id='onlinePayType' class='pgDetail'>");
	b.push("<div id='pgBox' class='pgBox'>");
	jm
			.each(
					a,
					function(c) {
						var d = a[c];
						b.push("<div id=group_" + d.payMode + " class='line'>");
						if (d.bank.length > 0) {
							b
									.push("<div class='pgBoxItem' onclick='Mobi.productGroupCollapse(\""
											+ d.payMode
											+ "\")'><div class='pgName'>"
											+ d.desc
											+ "</div><div class='pgMark'>&gt;</div></div>")
						} else {
							b
									.push("<div class='pgBoxItem'><a class='pgName payMode'  onclick='Mobi.setPayOnlineType(this);'  _payMode='"
											+ d.payMode
											+ "' _name='"
											+ d.desc
											+ "'>" + d.desc + "</a></div>")
						}
						b.push("</div>")
					});
	b.push("</div>");
	b.push("<div id='pgBox2' class='pgBox2'>");
	jm
			.each(
					a,
					function(c) {
						var d = a[c];
						if (d.bank.length < 1) {
							return true
						}
						b.push("<div id='pgBox2_Item" + d.payMode
								+ "' class='pgBox2Item' >");
						jm
								.each(
										d.bank,
										function(f) {
											var e = d.bank[f].desc;
											var g = d.bank[f].type;
											b
													.push("<a class='pgName bank' onclick='Mobi.setPayOnlineType(this);' _type='"
															+ g
															+ "'  _payMode='"
															+ d.payMode
															+ "' _name='"
															+ d.desc
															+ "-"
															+ e
															+ "'>" + e + "</a>")
										});
						b.push("</div>")
					});
	b.push("</div>");
	jm("#pgListDiv").append(b.join(""));
	jm("#pgListDiv").addClass("showFullScreen")
};
Mobi.setPayOnlineType = function(e, a) {
	var e = jm(e);
	var d = "";
	var b = "";
	var a = e.attr("_name");
	if (e.hasClass("payMode")) {
		d = e.attr("_payMode");
		if (d == 10) {
			var c = navigator.userAgent.toLowerCase();
			if (!(c.match(/MicroMessenger/i) == "micromessenger")) {
				Mobi.ing("只可在微信客户端可用，请重新选择。");
				return
			}
		}
		jm("#onlineBankType").attr("_payMode", d)
	} else {
		if (e.hasClass("bank")) {
			d = e.attr("_payMode");
			b = e.attr("_type");
			jm("#onlineBankType").attr("_payMode", d);
			jm("#onlineBankType").attr("_type", b)
		}
	}
	jm("#onlineBankType").attr("value", a);
	jm("#pgListDiv").remove()
};
Mobi.getWxpayUrl = function(a) {
	var b = encodeURIComponent(location.href);
	window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid="
			+ a
			+ "&redirect_uri="
			+ b
			+ "&response_type=code&scope=snsapi_base&state=1#wechat_redirect"
};
Mobi.callPay = function(b, a) {
	Mobi.showLoading();
	jm.ajax({
		type : "post",
		url : "ajax/mall_h.jsp?cmd=getWxpayCallPayParam&orderId=" + a
				+ "&code=" + b,
		error : function() {
			Mobi.closeLoading();
			Mobi.ing("系统错误。")
		},
		success : function(c) {
			var d = jm.parseJSON(jm.decodeUrl(c));
			Mobi.closeLoading();
			if (d.success) {
				Mobi.callPayAPI(d)
			} else {
				Mobi.closeLoading();
				Mobi.ing("系统错误，请稍后再试。")
			}
		}
	})
};
Mobi.callPayAPI = function(c) {
	try {
		if (typeof WeixinJSBridge == "undefined") {
			if (document.addEventListener) {
				document.addEventListener("WeixinJSBridgeReady", a, false)
			} else {
				if (document.attachEvent) {
					document.attachEvent("WeixinJSBridgeReady", a);
					document.attachEvent("onWeixinJSBridgeReady", a)
				}
			}
		} else {
			a()
		}
		function a() {
			var d = {
				appId : c.appId,
				nonceStr : c.nonceStr,
				timeStamp : c.timeStamp,
				paySign : c.paySign,
				"package" : c.pak,
				signType : "MD5"
			};
			WeixinJSBridge.invoke("getBrandWCPayRequest", d, function(e) {
				WeixinJSBridge.log(e.err_msg);
				if (e.err_msg != "get_brand_wcpay_request:ok") {
					Mobi.ing(e.err_msg);
					Mobi.showLoading();
					setTimeout(function() {
						window.location.href = "/wxPay/mdetail.jsp?id="
								+ jm("#wxpayBtn").attr("_orderid")
								+ "&suc=true"
					}, 3000)
				} else {
					Mobi.ing("支付成功，5秒后将跳转到首页。");
					Mobi.showLoading();
					setTimeout(function() {
						window.location.href = "index.jsp"
					}, 5000)
				}
			})
		}
	} catch (b) {
		alert(b.message)
	}
};
Mobi.backOff = function(a) {
	if (Fai.top._manageMode) {
		var b = {};
		b.fun = top.Mobi.saveDesignToCheckUpRedirectUrl;
		b.args = new Array();
		b.args.push("../mcart.jsp");
		if (top.Mobi.checkSaveBar(b, true)) {
			return false
		}
		window.location.href = "index.jsp"
	} else {
		history.go(-1)
	}
};
Mobi.newsCommentAddCom = function() {
	var e = jm.trim(jm("#newsCommentCreator").val());
	var d = jm("#newsCommentCreator").attr("minlength");
	var h = jm("#newsCommentInput").val();
	var a = jm("#newsCommentInput").attr("minlength");
	var f = jm("#validateCodeInput").val();
	var b = jm("#newsCommentInput").attr("newsId");
	if (typeof (e) != "string") {
		Mobi.ing(LS.creatorTips);
		return
	}
	if (typeof (h) != "string" || "" == h) {
		Mobi.ing(LS.commentNotEmpty);
		return
	}
	if (h.length < a) {
		Mobi.ing(jm.format(LS.commentLenTips, jm.encodeHtml(a)));
		return
	}
	if (typeof (f) != "string" || "" == f) {
		Mobi.ing(LS.memberInputCaptcha);
		return
	}
	var g = "ajax/newsComment_h.jsp?cmd=submitComment";
	var c = {
		validateCode : f,
		newsId : b,
		creator : e,
		comment : h
	};
	Mobi.ing(LS.siteFormSubmitIng);
	jm
			.ajax({
				type : "POST",
				url : g,
				data : c,
				error : function() {
					Mobi.ing(LS.systemError);
					jm("#captchaChange").click()
				},
				success : function(i) {
					var k = jm.parseJSON(i);
					if (!k || !k.success) {
						jm("#captchaChange").click()
					}
					switch (k.msg) {
					case 1:
						Mobi.ing(LS.captchaError);
						break;
					case 2:
						Mobi.ing(LS.creatorError);
						break;
					case 3:
						Mobi.ing(LS.commentError);
						break;
					case 4:
						Mobi.getCommentDiv("news", b);
						Mobi.ing(LS.submitSuccess);
						break;
					case 5:
						Mobi.ing(LS.paramError);
						break;
					case 6:
						var j = jm.encodeUrl(window.location.href);
						window.location.href = "login.jsp?returnUrl=" + j
								+ "&errno=11";
						break;
					case 7:
						Mobi.ing(LS.commentClosed);
						break;
					case 8:
						Mobi.ing(LS.commentSubmitError);
						break;
					case 9:
						Mobi.ing(LS.commentCountLimit);
						break;
					default:
					}
				}
			})
};
Mobi.initMixNews = function(c) {
	var b = jm("#newsList" + c.moduleId);
	var f = b.children().eq(0);
	var e = f.find(".mixNewsStyleTitleContainer  a");
	var d = parseInt(f.width());
	var a = parseInt(c.imgWidth);
	var g = d - a - 45;
	e.css({
		width : g + "px"
	})
};
Mobi.showMore = function() {
	var b = document.getElementById("sharePanel");
	var a = document.getElementById("showOrHide");
	if (b && b.style) {
		if (b.style.height == "auto") {
			b.style.height = "";
			a.className = a.className.replace("hideIcon", "showIcon");
			b.style.background = ""
		} else {
			b.style.height = "auto";
			a.className = a.className.replace("showIcon", "hideIcon")
		}
	}
};
Mobi.showBg = function() {
	Mobi.mobiHideScroll();
	var b = document.body.clientHeight;
	var f = document.body.clientWidth;
	var h = document.body;
	var i = document.createElement("div");
	var g = document.createElement("div");
	var d = document.createElement("div");
	i.id = "shareParentDiv";
	g.id = "shareFullbg";
	g.className = "shareFullbg";
	d.id = "shareTipsDiv";
	d.className = "shareTips";
	h.appendChild(i);
	var a = document.getElementById("shareParentDiv");
	a.appendChild(g);
	a.appendChild(d);
	var e = document.getElementById("shareFullbg");
	var c = document.getElementById("shareTipsDiv");
	e.style.height = b + "px";
	e.style.width = f + "px";
	e.style.position = "fixed";
	e.onclick = function() {
		var j = document.getElementById("shareParentDiv");
		Mobi.mobiShowScroll();
		j.parentNode.removeChild(j)
	}
};
var site_cityUtil = (function() {
	var i = {
		"110000" : [ "北京", "1" ],
		"110100" : [ "北京市", "110000" ],
		"110101" : [ "东城区", "110100" ],
		"110102" : [ "西城区", "110100" ],
		"110103" : [ "崇文区", "110100" ],
		"110104" : [ "宣武区", "110100" ],
		"110105" : [ "朝阳区", "110100" ],
		"110106" : [ "丰台区", "110100" ],
		"110107" : [ "石景山区", "110100" ],
		"110108" : [ "海淀区", "110100" ],
		"110109" : [ "门头沟区", "110100" ],
		"110111" : [ "房山区", "110100" ],
		"110112" : [ "通州区", "110100" ],
		"110113" : [ "顺义区", "110100" ],
		"110114" : [ "昌平区", "110100" ],
		"110115" : [ "大兴区", "110100" ],
		"110116" : [ "怀柔区", "110100" ],
		"110117" : [ "平谷区", "110100" ],
		"110228" : [ "密云县", "110100" ],
		"110229" : [ "延庆县", "110100" ],
		"110230" : [ "其它区", "110100" ],
		"120000" : [ "天津", "1" ],
		"120100" : [ "天津市", "120000" ],
		"120101" : [ "和平区", "120100" ],
		"120102" : [ "河东区", "120100" ],
		"120103" : [ "河西区", "120100" ],
		"120104" : [ "南开区", "120100" ],
		"120105" : [ "河北区", "120100" ],
		"120106" : [ "红桥区", "120100" ],
		"120107" : [ "塘沽区", "120100" ],
		"120108" : [ "汉沽区", "120100" ],
		"120109" : [ "大港区", "120100" ],
		"120110" : [ "东丽区", "120100" ],
		"120111" : [ "西青区", "120100" ],
		"120112" : [ "津南区", "120100" ],
		"120113" : [ "北辰区", "120100" ],
		"120114" : [ "武清区", "120100" ],
		"120115" : [ "宝坻区", "120100" ],
		"120116" : [ "滨海新区", "120100" ],
		"120221" : [ "宁河县", "120100" ],
		"120223" : [ "静海县", "120100" ],
		"120225" : [ "蓟县", "120100" ],
		"120226" : [ "其它区", "120100" ],
		"130000" : [ "河北省", "1" ],
		"130100" : [ "石家庄市", "130000" ],
		"130102" : [ "长安区", "130100" ],
		"130103" : [ "桥东区", "130100" ],
		"130104" : [ "桥西区", "130100" ],
		"130105" : [ "新华区", "130100" ],
		"130107" : [ "井陉矿区", "130100" ],
		"130108" : [ "裕华区", "130100" ],
		"130121" : [ "井陉县", "130100" ],
		"130123" : [ "正定县", "130100" ],
		"130124" : [ "栾城县", "130100" ],
		"130125" : [ "行唐县", "130100" ],
		"130126" : [ "灵寿县", "130100" ],
		"130127" : [ "高邑县", "130100" ],
		"130128" : [ "深泽县", "130100" ],
		"130129" : [ "赞皇县", "130100" ],
		"130130" : [ "无极县", "130100" ],
		"130131" : [ "平山县", "130100" ],
		"130132" : [ "元氏县", "130100" ],
		"130133" : [ "赵县", "130100" ],
		"130181" : [ "辛集市", "130100" ],
		"130182" : [ "藁城市", "130100" ],
		"130183" : [ "晋州市", "130100" ],
		"130184" : [ "新乐市", "130100" ],
		"130185" : [ "鹿泉市", "130100" ],
		"130186" : [ "其它区", "130100" ],
		"130200" : [ "唐山市", "130000" ],
		"130202" : [ "路南区", "130200" ],
		"130203" : [ "路北区", "130200" ],
		"130204" : [ "古冶区", "130200" ],
		"130205" : [ "开平区", "130200" ],
		"130207" : [ "丰南区", "130200" ],
		"130208" : [ "丰润区", "130200" ],
		"130223" : [ "滦县", "130200" ],
		"130224" : [ "滦南县", "130200" ],
		"130225" : [ "乐亭县", "130200" ],
		"130227" : [ "迁西县", "130200" ],
		"130229" : [ "玉田县", "130200" ],
		"130230" : [ "唐海县", "130200" ],
		"130281" : [ "遵化市", "130200" ],
		"130283" : [ "迁安市", "130200" ],
		"130284" : [ "其它区", "130200" ],
		"130300" : [ "秦皇岛市", "130000" ],
		"130302" : [ "海港区", "130300" ],
		"130303" : [ "山海关区", "130300" ],
		"130304" : [ "北戴河区", "130300" ],
		"130321" : [ "青龙满族自治县", "130300" ],
		"130322" : [ "昌黎县", "130300" ],
		"130323" : [ "抚宁县", "130300" ],
		"130324" : [ "卢龙县", "130300" ],
		"130398" : [ "其它区", "130300" ],
		"130399" : [ "经济技术开发区", "130300" ],
		"130400" : [ "邯郸市", "130000" ],
		"130402" : [ "邯山区", "130400" ],
		"130403" : [ "丛台区", "130400" ],
		"130404" : [ "复兴区", "130400" ],
		"130406" : [ "峰峰矿区", "130400" ],
		"130421" : [ "邯郸县", "130400" ],
		"130423" : [ "临漳县", "130400" ],
		"130424" : [ "成安县", "130400" ],
		"130425" : [ "大名县", "130400" ],
		"130426" : [ "涉县", "130400" ],
		"130427" : [ "磁县", "130400" ],
		"130428" : [ "肥乡县", "130400" ],
		"130429" : [ "永年县", "130400" ],
		"130430" : [ "邱县", "130400" ],
		"130431" : [ "鸡泽县", "130400" ],
		"130432" : [ "广平县", "130400" ],
		"130433" : [ "馆陶县", "130400" ],
		"130434" : [ "魏县", "130400" ],
		"130435" : [ "曲周县", "130400" ],
		"130481" : [ "武安市", "130400" ],
		"130482" : [ "其它区", "130400" ],
		"130500" : [ "邢台市", "130000" ],
		"130502" : [ "桥东区", "130500" ],
		"130503" : [ "桥西区", "130500" ],
		"130521" : [ "邢台县", "130500" ],
		"130522" : [ "临城县", "130500" ],
		"130523" : [ "内丘县", "130500" ],
		"130524" : [ "柏乡县", "130500" ],
		"130525" : [ "隆尧县", "130500" ],
		"130526" : [ "任县", "130500" ],
		"130527" : [ "南和县", "130500" ],
		"130528" : [ "宁晋县", "130500" ],
		"130529" : [ "巨鹿县", "130500" ],
		"130530" : [ "新河县", "130500" ],
		"130531" : [ "广宗县", "130500" ],
		"130532" : [ "平乡县", "130500" ],
		"130533" : [ "威县", "130500" ],
		"130534" : [ "清河县", "130500" ],
		"130535" : [ "临西县", "130500" ],
		"130581" : [ "南宫市", "130500" ],
		"130582" : [ "沙河市", "130500" ],
		"130583" : [ "其它区", "130500" ],
		"130600" : [ "保定市", "130000" ],
		"130602" : [ "新市区", "130600" ],
		"130603" : [ "北市区", "130600" ],
		"130604" : [ "南市区", "130600" ],
		"130621" : [ "满城县", "130600" ],
		"130622" : [ "清苑县", "130600" ],
		"130623" : [ "涞水县", "130600" ],
		"130624" : [ "阜平县", "130600" ],
		"130625" : [ "徐水县", "130600" ],
		"130626" : [ "定兴县", "130600" ],
		"130627" : [ "唐县", "130600" ],
		"130628" : [ "高阳县", "130600" ],
		"130629" : [ "容城县", "130600" ],
		"130630" : [ "涞源县", "130600" ],
		"130631" : [ "望都县", "130600" ],
		"130632" : [ "安新县", "130600" ],
		"130633" : [ "易县", "130600" ],
		"130634" : [ "曲阳县", "130600" ],
		"130635" : [ "蠡县", "130600" ],
		"130636" : [ "顺平县", "130600" ],
		"130637" : [ "博野县", "130600" ],
		"130638" : [ "雄县", "130600" ],
		"130681" : [ "涿州市", "130600" ],
		"130682" : [ "定州市", "130600" ],
		"130683" : [ "安国市", "130600" ],
		"130684" : [ "高碑店市", "130600" ],
		"130698" : [ "高开区", "130600" ],
		"130699" : [ "其它区", "130600" ],
		"130700" : [ "张家口市", "130000" ],
		"130702" : [ "桥东区", "130700" ],
		"130703" : [ "桥西区", "130700" ],
		"130705" : [ "宣化区", "130700" ],
		"130706" : [ "下花园区", "130700" ],
		"130721" : [ "宣化县", "130700" ],
		"130722" : [ "张北县", "130700" ],
		"130723" : [ "康保县", "130700" ],
		"130724" : [ "沽源县", "130700" ],
		"130725" : [ "尚义县", "130700" ],
		"130726" : [ "蔚县", "130700" ],
		"130727" : [ "阳原县", "130700" ],
		"130728" : [ "怀安县", "130700" ],
		"130729" : [ "万全县", "130700" ],
		"130730" : [ "怀来县", "130700" ],
		"130731" : [ "涿鹿县", "130700" ],
		"130732" : [ "赤城县", "130700" ],
		"130733" : [ "崇礼县", "130700" ],
		"130734" : [ "其它区", "130700" ],
		"130800" : [ "承德市", "130000" ],
		"130802" : [ "双桥区", "130800" ],
		"130803" : [ "双滦区", "130800" ],
		"130804" : [ "鹰手营子矿区", "130800" ],
		"130821" : [ "承德县", "130800" ],
		"130822" : [ "兴隆县", "130800" ],
		"130823" : [ "平泉县", "130800" ],
		"130824" : [ "滦平县", "130800" ],
		"130825" : [ "隆化县", "130800" ],
		"130826" : [ "丰宁满族自治县", "130800" ],
		"130827" : [ "宽城满族自治县", "130800" ],
		"130828" : [ "围场满族蒙古族自治县", "130800" ],
		"130829" : [ "其它区", "130800" ],
		"130900" : [ "沧州市", "130000" ],
		"130902" : [ "新华区", "130900" ],
		"130903" : [ "运河区", "130900" ],
		"130921" : [ "沧县", "130900" ],
		"130922" : [ "青县", "130900" ],
		"130923" : [ "东光县", "130900" ],
		"130924" : [ "海兴县", "130900" ],
		"130925" : [ "盐山县", "130900" ],
		"130926" : [ "肃宁县", "130900" ],
		"130927" : [ "南皮县", "130900" ],
		"130928" : [ "吴桥县", "130900" ],
		"130929" : [ "献县", "130900" ],
		"130930" : [ "孟村回族自治县", "130900" ],
		"130981" : [ "泊头市", "130900" ],
		"130982" : [ "任丘市", "130900" ],
		"130983" : [ "黄骅市", "130900" ],
		"130984" : [ "河间市", "130900" ],
		"130985" : [ "其它区", "130900" ],
		"131000" : [ "廊坊市", "130000" ],
		"131002" : [ "安次区", "131000" ],
		"131003" : [ "广阳区", "131000" ],
		"131022" : [ "固安县", "131000" ],
		"131023" : [ "永清县", "131000" ],
		"131024" : [ "香河县", "131000" ],
		"131025" : [ "大城县", "131000" ],
		"131026" : [ "文安县", "131000" ],
		"131028" : [ "大厂回族自治县", "131000" ],
		"131051" : [ "开发区", "131000" ],
		"131052" : [ "燕郊经济技术开发区", "131000" ],
		"131081" : [ "霸州市", "131000" ],
		"131082" : [ "三河市", "131000" ],
		"131083" : [ "其它区", "131000" ],
		"131100" : [ "衡水市", "130000" ],
		"131102" : [ "桃城区", "131100" ],
		"131121" : [ "枣强县", "131100" ],
		"131122" : [ "武邑县", "131100" ],
		"131123" : [ "武强县", "131100" ],
		"131124" : [ "饶阳县", "131100" ],
		"131125" : [ "安平县", "131100" ],
		"131126" : [ "故城县", "131100" ],
		"131127" : [ "景县", "131100" ],
		"131128" : [ "阜城县", "131100" ],
		"131181" : [ "冀州市", "131100" ],
		"131182" : [ "深州市", "131100" ],
		"131183" : [ "其它区", "131100" ],
		"140000" : [ "山西省", "1" ],
		"140100" : [ "太原市", "140000" ],
		"140105" : [ "小店区", "140100" ],
		"140106" : [ "迎泽区", "140100" ],
		"140107" : [ "杏花岭区", "140100" ],
		"140108" : [ "尖草坪区", "140100" ],
		"140109" : [ "万柏林区", "140100" ],
		"140110" : [ "晋源区", "140100" ],
		"140121" : [ "清徐县", "140100" ],
		"140122" : [ "阳曲县", "140100" ],
		"140123" : [ "娄烦县", "140100" ],
		"140181" : [ "古交市", "140100" ],
		"140182" : [ "其它区", "140100" ],
		"140200" : [ "大同市", "140000" ],
		"140202" : [ "城区", "140200" ],
		"140203" : [ "矿区", "140200" ],
		"140211" : [ "南郊区", "140200" ],
		"140212" : [ "新荣区", "140200" ],
		"140221" : [ "阳高县", "140200" ],
		"140222" : [ "天镇县", "140200" ],
		"140223" : [ "广灵县", "140200" ],
		"140224" : [ "灵丘县", "140200" ],
		"140225" : [ "浑源县", "140200" ],
		"140226" : [ "左云县", "140200" ],
		"140227" : [ "大同县", "140200" ],
		"140228" : [ "其它区", "140200" ],
		"140300" : [ "阳泉市", "140000" ],
		"140302" : [ "城区", "140300" ],
		"140303" : [ "矿区", "140300" ],
		"140311" : [ "郊区", "140300" ],
		"140321" : [ "平定县", "140300" ],
		"140322" : [ "盂县", "140300" ],
		"140323" : [ "其它区", "140300" ],
		"140400" : [ "长治市", "140000" ],
		"140421" : [ "长治县", "140400" ],
		"140423" : [ "襄垣县", "140400" ],
		"140424" : [ "屯留县", "140400" ],
		"140425" : [ "平顺县", "140400" ],
		"140426" : [ "黎城县", "140400" ],
		"140427" : [ "壶关县", "140400" ],
		"140428" : [ "长子县", "140400" ],
		"140429" : [ "武乡县", "140400" ],
		"140430" : [ "沁县", "140400" ],
		"140431" : [ "沁源县", "140400" ],
		"140481" : [ "潞城市", "140400" ],
		"140482" : [ "城区", "140400" ],
		"140483" : [ "郊区", "140400" ],
		"140484" : [ "高新区", "140400" ],
		"140485" : [ "其它区", "140400" ],
		"140500" : [ "晋城市", "140000" ],
		"140502" : [ "城区", "140500" ],
		"140521" : [ "沁水县", "140500" ],
		"140522" : [ "阳城县", "140500" ],
		"140524" : [ "陵川县", "140500" ],
		"140525" : [ "泽州县", "140500" ],
		"140581" : [ "高平市", "140500" ],
		"140582" : [ "其它区", "140500" ],
		"140600" : [ "朔州市", "140000" ],
		"140602" : [ "朔城区", "140600" ],
		"140603" : [ "平鲁区", "140600" ],
		"140621" : [ "山阴县", "140600" ],
		"140622" : [ "应县", "140600" ],
		"140623" : [ "右玉县", "140600" ],
		"140624" : [ "怀仁县", "140600" ],
		"140625" : [ "其它区", "140600" ],
		"140700" : [ "晋中市", "140000" ],
		"140702" : [ "榆次区", "140700" ],
		"140721" : [ "榆社县", "140700" ],
		"140722" : [ "左权县", "140700" ],
		"140723" : [ "和顺县", "140700" ],
		"140724" : [ "昔阳县", "140700" ],
		"140725" : [ "寿阳县", "140700" ],
		"140726" : [ "太谷县", "140700" ],
		"140727" : [ "祁县", "140700" ],
		"140728" : [ "平遥县", "140700" ],
		"140729" : [ "灵石县", "140700" ],
		"140781" : [ "介休市", "140700" ],
		"140782" : [ "其它区", "140700" ],
		"140800" : [ "运城市", "140000" ],
		"140802" : [ "盐湖区", "140800" ],
		"140821" : [ "临猗县", "140800" ],
		"140822" : [ "万荣县", "140800" ],
		"140823" : [ "闻喜县", "140800" ],
		"140824" : [ "稷山县", "140800" ],
		"140825" : [ "新绛县", "140800" ],
		"140826" : [ "绛县", "140800" ],
		"140827" : [ "垣曲县", "140800" ],
		"140828" : [ "夏县", "140800" ],
		"140829" : [ "平陆县", "140800" ],
		"140830" : [ "芮城县", "140800" ],
		"140881" : [ "永济市", "140800" ],
		"140882" : [ "河津市", "140800" ],
		"140883" : [ "其它区", "140800" ],
		"140900" : [ "忻州市", "140000" ],
		"140902" : [ "忻府区", "140900" ],
		"140921" : [ "定襄县", "140900" ],
		"140922" : [ "五台县", "140900" ],
		"140923" : [ "代县", "140900" ],
		"140924" : [ "繁峙县", "140900" ],
		"140925" : [ "宁武县", "140900" ],
		"140926" : [ "静乐县", "140900" ],
		"140927" : [ "神池县", "140900" ],
		"140928" : [ "五寨县", "140900" ],
		"140929" : [ "岢岚县", "140900" ],
		"140930" : [ "河曲县", "140900" ],
		"140931" : [ "保德县", "140900" ],
		"140932" : [ "偏关县", "140900" ],
		"140981" : [ "原平市", "140900" ],
		"140982" : [ "其它区", "140900" ],
		"141000" : [ "临汾市", "140000" ],
		"141002" : [ "尧都区", "141000" ],
		"141021" : [ "曲沃县", "141000" ],
		"141022" : [ "翼城县", "141000" ],
		"141023" : [ "襄汾县", "141000" ],
		"141024" : [ "洪洞县", "141000" ],
		"141025" : [ "古县", "141000" ],
		"141026" : [ "安泽县", "141000" ],
		"141027" : [ "浮山县", "141000" ],
		"141028" : [ "吉县", "141000" ],
		"141029" : [ "乡宁县", "141000" ],
		"141030" : [ "大宁县", "141000" ],
		"141031" : [ "隰县", "141000" ],
		"141032" : [ "永和县", "141000" ],
		"141033" : [ "蒲县", "141000" ],
		"141034" : [ "汾西县", "141000" ],
		"141081" : [ "侯马市", "141000" ],
		"141082" : [ "霍州市", "141000" ],
		"141083" : [ "其它区", "141000" ],
		"141100" : [ "吕梁市", "140000" ],
		"141102" : [ "离石区", "141100" ],
		"141121" : [ "文水县", "141100" ],
		"141122" : [ "交城县", "141100" ],
		"141123" : [ "兴县", "141100" ],
		"141124" : [ "临县", "141100" ],
		"141125" : [ "柳林县", "141100" ],
		"141126" : [ "石楼县", "141100" ],
		"141127" : [ "岚县", "141100" ],
		"141128" : [ "方山县", "141100" ],
		"141129" : [ "中阳县", "141100" ],
		"141130" : [ "交口县", "141100" ],
		"141181" : [ "孝义市", "141100" ],
		"141182" : [ "汾阳市", "141100" ],
		"141183" : [ "其它区", "141100" ],
		"150000" : [ "内蒙古自治区", "1" ],
		"150100" : [ "呼和浩特市", "150000" ],
		"150102" : [ "新城区", "150100" ],
		"150103" : [ "回民区", "150100" ],
		"150104" : [ "玉泉区", "150100" ],
		"150105" : [ "赛罕区", "150100" ],
		"150121" : [ "土默特左旗", "150100" ],
		"150122" : [ "托克托县", "150100" ],
		"150123" : [ "和林格尔县", "150100" ],
		"150124" : [ "清水河县", "150100" ],
		"150125" : [ "武川县", "150100" ],
		"150126" : [ "其它区", "150100" ],
		"150200" : [ "包头市", "150000" ],
		"150202" : [ "东河区", "150200" ],
		"150203" : [ "昆都仑区", "150200" ],
		"150204" : [ "青山区", "150200" ],
		"150205" : [ "石拐区", "150200" ],
		"150206" : [ "白云矿区", "150200" ],
		"150207" : [ "九原区", "150200" ],
		"150221" : [ "土默特右旗", "150200" ],
		"150222" : [ "固阳县", "150200" ],
		"150223" : [ "达尔罕茂明安联合旗", "150200" ],
		"150224" : [ "其它区", "150200" ],
		"150300" : [ "乌海市", "150000" ],
		"150302" : [ "海勃湾区", "150300" ],
		"150303" : [ "海南区", "150300" ],
		"150304" : [ "乌达区", "150300" ],
		"150305" : [ "其它区", "150300" ],
		"150400" : [ "赤峰市", "150000" ],
		"150402" : [ "红山区", "150400" ],
		"150403" : [ "元宝山区", "150400" ],
		"150404" : [ "松山区", "150400" ],
		"150421" : [ "阿鲁科尔沁旗", "150400" ],
		"150422" : [ "巴林左旗", "150400" ],
		"150423" : [ "巴林右旗", "150400" ],
		"150424" : [ "林西县", "150400" ],
		"150425" : [ "克什克腾旗", "150400" ],
		"150426" : [ "翁牛特旗", "150400" ],
		"150428" : [ "喀喇沁旗", "150400" ],
		"150429" : [ "宁城县", "150400" ],
		"150430" : [ "敖汉旗", "150400" ],
		"150431" : [ "其它区", "150400" ],
		"150500" : [ "通辽市", "150000" ],
		"150502" : [ "科尔沁区", "150500" ],
		"150521" : [ "科尔沁左翼中旗", "150500" ],
		"150522" : [ "科尔沁左翼后旗", "150500" ],
		"150523" : [ "开鲁县", "150500" ],
		"150524" : [ "库伦旗", "150500" ],
		"150525" : [ "奈曼旗", "150500" ],
		"150526" : [ "扎鲁特旗", "150500" ],
		"150581" : [ "霍林郭勒市", "150500" ],
		"150582" : [ "其它区", "150500" ],
		"150600" : [ "鄂尔多斯市", "150000" ],
		"150602" : [ "东胜区", "150600" ],
		"150621" : [ "达拉特旗", "150600" ],
		"150622" : [ "准格尔旗", "150600" ],
		"150623" : [ "鄂托克前旗", "150600" ],
		"150624" : [ "鄂托克旗", "150600" ],
		"150625" : [ "杭锦旗", "150600" ],
		"150626" : [ "乌审旗", "150600" ],
		"150627" : [ "伊金霍洛旗", "150600" ],
		"150628" : [ "其它区", "150600" ],
		"150700" : [ "呼伦贝尔市", "150000" ],
		"150702" : [ "海拉尔区", "150700" ],
		"150721" : [ "阿荣旗", "150700" ],
		"150722" : [ "莫力达瓦达斡尔族自治旗", "150700" ],
		"150723" : [ "鄂伦春自治旗", "150700" ],
		"150724" : [ "鄂温克族自治旗", "150700" ],
		"150725" : [ "陈巴尔虎旗", "150700" ],
		"150726" : [ "新巴尔虎左旗", "150700" ],
		"150727" : [ "新巴尔虎右旗", "150700" ],
		"150781" : [ "满洲里市", "150700" ],
		"150782" : [ "牙克石市", "150700" ],
		"150783" : [ "扎兰屯市", "150700" ],
		"150784" : [ "额尔古纳市", "150700" ],
		"150785" : [ "根河市", "150700" ],
		"150786" : [ "其它区", "150700" ],
		"150800" : [ "巴彦淖尔市", "150000" ],
		"150802" : [ "临河区", "150800" ],
		"150821" : [ "五原县", "150800" ],
		"150822" : [ "磴口县", "150800" ],
		"150823" : [ "乌拉特前旗", "150800" ],
		"150824" : [ "乌拉特中旗", "150800" ],
		"150825" : [ "乌拉特后旗", "150800" ],
		"150826" : [ "杭锦后旗", "150800" ],
		"150827" : [ "其它区", "150800" ],
		"150900" : [ "乌兰察布市", "150000" ],
		"150902" : [ "集宁区", "150900" ],
		"150921" : [ "卓资县", "150900" ],
		"150922" : [ "化德县", "150900" ],
		"150923" : [ "商都县", "150900" ],
		"150924" : [ "兴和县", "150900" ],
		"150925" : [ "凉城县", "150900" ],
		"150926" : [ "察哈尔右翼前旗", "150900" ],
		"150927" : [ "察哈尔右翼中旗", "150900" ],
		"150928" : [ "察哈尔右翼后旗", "150900" ],
		"150929" : [ "四子王旗", "150900" ],
		"150981" : [ "丰镇市", "150900" ],
		"150982" : [ "其它区", "150900" ],
		"152200" : [ "兴安盟", "150000" ],
		"152201" : [ "乌兰浩特市", "152200" ],
		"152202" : [ "阿尔山市", "152200" ],
		"152221" : [ "科尔沁右翼前旗", "152200" ],
		"152222" : [ "科尔沁右翼中旗", "152200" ],
		"152223" : [ "扎赉特旗", "152200" ],
		"152224" : [ "突泉县", "152200" ],
		"152225" : [ "其它区", "152200" ],
		"152500" : [ "锡林郭勒盟", "150000" ],
		"152501" : [ "二连浩特市", "152500" ],
		"152502" : [ "锡林浩特市", "152500" ],
		"152522" : [ "阿巴嘎旗", "152500" ],
		"152523" : [ "苏尼特左旗", "152500" ],
		"152524" : [ "苏尼特右旗", "152500" ],
		"152525" : [ "东乌珠穆沁旗", "152500" ],
		"152526" : [ "西乌珠穆沁旗", "152500" ],
		"152527" : [ "太仆寺旗", "152500" ],
		"152528" : [ "镶黄旗", "152500" ],
		"152529" : [ "正镶白旗", "152500" ],
		"152530" : [ "正蓝旗", "152500" ],
		"152531" : [ "多伦县", "152500" ],
		"152532" : [ "其它区", "152500" ],
		"152900" : [ "阿拉善盟", "150000" ],
		"152921" : [ "阿拉善左旗", "152900" ],
		"152922" : [ "阿拉善右旗", "152900" ],
		"152923" : [ "额济纳旗", "152900" ],
		"152924" : [ "其它区", "152900" ],
		"210000" : [ "辽宁省", "1" ],
		"210100" : [ "沈阳市", "210000" ],
		"210102" : [ "和平区", "210100" ],
		"210103" : [ "沈河区", "210100" ],
		"210104" : [ "大东区", "210100" ],
		"210105" : [ "皇姑区", "210100" ],
		"210106" : [ "铁西区", "210100" ],
		"210111" : [ "苏家屯区", "210100" ],
		"210112" : [ "东陵区", "210100" ],
		"210113" : [ "新城子区", "210100" ],
		"210114" : [ "于洪区", "210100" ],
		"210122" : [ "辽中县", "210100" ],
		"210123" : [ "康平县", "210100" ],
		"210124" : [ "法库县", "210100" ],
		"210181" : [ "新民市", "210100" ],
		"210182" : [ "浑南新区", "210100" ],
		"210183" : [ "张士开发区", "210100" ],
		"210184" : [ "沈北新区", "210100" ],
		"210185" : [ "其它区", "210100" ],
		"210200" : [ "大连市", "210000" ],
		"210202" : [ "中山区", "210200" ],
		"210203" : [ "西岗区", "210200" ],
		"210204" : [ "沙河口区", "210200" ],
		"210211" : [ "甘井子区", "210200" ],
		"210212" : [ "旅顺口区", "210200" ],
		"210213" : [ "金州区", "210200" ],
		"210224" : [ "长海县", "210200" ],
		"210251" : [ "开发区", "210200" ],
		"210281" : [ "瓦房店市", "210200" ],
		"210282" : [ "普兰店市", "210200" ],
		"210283" : [ "庄河市", "210200" ],
		"210297" : [ "岭前区", "210200" ],
		"210298" : [ "其它区", "210200" ],
		"210300" : [ "鞍山市", "210000" ],
		"210302" : [ "铁东区", "210300" ],
		"210303" : [ "铁西区", "210300" ],
		"210304" : [ "立山区", "210300" ],
		"210311" : [ "千山区", "210300" ],
		"210321" : [ "台安县", "210300" ],
		"210323" : [ "岫岩满族自治县", "210300" ],
		"210351" : [ "高新区", "210300" ],
		"210381" : [ "海城市", "210300" ],
		"210382" : [ "其它区", "210300" ],
		"210400" : [ "抚顺市", "210000" ],
		"210402" : [ "新抚区", "210400" ],
		"210403" : [ "东洲区", "210400" ],
		"210404" : [ "望花区", "210400" ],
		"210411" : [ "顺城区", "210400" ],
		"210421" : [ "抚顺县", "210400" ],
		"210422" : [ "新宾满族自治县", "210400" ],
		"210423" : [ "清原满族自治县", "210400" ],
		"210424" : [ "其它区", "210400" ],
		"210500" : [ "本溪市", "210000" ],
		"210502" : [ "平山区", "210500" ],
		"210503" : [ "溪湖区", "210500" ],
		"210504" : [ "明山区", "210500" ],
		"210505" : [ "南芬区", "210500" ],
		"210521" : [ "本溪满族自治县", "210500" ],
		"210522" : [ "桓仁满族自治县", "210500" ],
		"210523" : [ "其它区", "210500" ],
		"210600" : [ "丹东市", "210000" ],
		"210602" : [ "元宝区", "210600" ],
		"210603" : [ "振兴区", "210600" ],
		"210604" : [ "振安区", "210600" ],
		"210624" : [ "宽甸满族自治县", "210600" ],
		"210681" : [ "东港市", "210600" ],
		"210682" : [ "凤城市", "210600" ],
		"210683" : [ "其它区", "210600" ],
		"210700" : [ "锦州市", "210000" ],
		"210702" : [ "古塔区", "210700" ],
		"210703" : [ "凌河区", "210700" ],
		"210711" : [ "太和区", "210700" ],
		"210726" : [ "黑山县", "210700" ],
		"210727" : [ "义县", "210700" ],
		"210781" : [ "凌海市", "210700" ],
		"210782" : [ "北镇市", "210700" ],
		"210783" : [ "其它区", "210700" ],
		"210800" : [ "营口市", "210000" ],
		"210802" : [ "站前区", "210800" ],
		"210803" : [ "西市区", "210800" ],
		"210804" : [ "鲅鱼圈区", "210800" ],
		"210811" : [ "老边区", "210800" ],
		"210881" : [ "盖州市", "210800" ],
		"210882" : [ "大石桥市", "210800" ],
		"210883" : [ "其它区", "210800" ],
		"210900" : [ "阜新市", "210000" ],
		"210902" : [ "海州区", "210900" ],
		"210903" : [ "新邱区", "210900" ],
		"210904" : [ "太平区", "210900" ],
		"210905" : [ "清河门区", "210900" ],
		"210911" : [ "细河区", "210900" ],
		"210921" : [ "阜新蒙古族自治县", "210900" ],
		"210922" : [ "彰武县", "210900" ],
		"210923" : [ "其它区", "210900" ],
		"211000" : [ "辽阳市", "210000" ],
		"211002" : [ "白塔区", "211000" ],
		"211003" : [ "文圣区", "211000" ],
		"211004" : [ "宏伟区", "211000" ],
		"211005" : [ "弓长岭区", "211000" ],
		"211011" : [ "太子河区", "211000" ],
		"211021" : [ "辽阳县", "211000" ],
		"211081" : [ "灯塔市", "211000" ],
		"211082" : [ "其它区", "211000" ],
		"211100" : [ "盘锦市", "210000" ],
		"211102" : [ "双台子区", "211100" ],
		"211103" : [ "兴隆台区", "211100" ],
		"211121" : [ "大洼县", "211100" ],
		"211122" : [ "盘山县", "211100" ],
		"211123" : [ "其它区", "211100" ],
		"211200" : [ "铁岭市", "210000" ],
		"211202" : [ "银州区", "211200" ],
		"211204" : [ "清河区", "211200" ],
		"211221" : [ "铁岭县", "211200" ],
		"211223" : [ "西丰县", "211200" ],
		"211224" : [ "昌图县", "211200" ],
		"211281" : [ "调兵山市", "211200" ],
		"211282" : [ "开原市", "211200" ],
		"211283" : [ "其它区", "211200" ],
		"211300" : [ "朝阳市", "210000" ],
		"211302" : [ "双塔区", "211300" ],
		"211303" : [ "龙城区", "211300" ],
		"211321" : [ "朝阳县", "211300" ],
		"211322" : [ "建平县", "211300" ],
		"211324" : [ "喀喇沁左翼蒙古族自治县", "211300" ],
		"211381" : [ "北票市", "211300" ],
		"211382" : [ "凌源市", "211300" ],
		"211383" : [ "其它区", "211300" ],
		"211400" : [ "葫芦岛市", "210000" ],
		"211402" : [ "连山区", "211400" ],
		"211403" : [ "龙港区", "211400" ],
		"211404" : [ "南票区", "211400" ],
		"211421" : [ "绥中县", "211400" ],
		"211422" : [ "建昌县", "211400" ],
		"211481" : [ "兴城市", "211400" ],
		"211482" : [ "其它区", "211400" ],
		"220000" : [ "吉林省", "1" ],
		"220100" : [ "长春市", "220000" ],
		"220102" : [ "南关区", "220100" ],
		"220103" : [ "宽城区", "220100" ],
		"220104" : [ "朝阳区", "220100" ],
		"220105" : [ "二道区", "220100" ],
		"220106" : [ "绿园区", "220100" ],
		"220112" : [ "双阳区", "220100" ],
		"220122" : [ "农安县", "220100" ],
		"220181" : [ "九台市", "220100" ],
		"220182" : [ "榆树市", "220100" ],
		"220183" : [ "德惠市", "220100" ],
		"220184" : [ "高新技术产业开发区", "220100" ],
		"220185" : [ "汽车产业开发区", "220100" ],
		"220186" : [ "经济技术开发区", "220100" ],
		"220187" : [ "净月旅游开发区", "220100" ],
		"220188" : [ "其它区", "220100" ],
		"220200" : [ "吉林市", "220000" ],
		"220202" : [ "昌邑区", "220200" ],
		"220203" : [ "龙潭区", "220200" ],
		"220204" : [ "船营区", "220200" ],
		"220211" : [ "丰满区", "220200" ],
		"220221" : [ "永吉县", "220200" ],
		"220281" : [ "蛟河市", "220200" ],
		"220282" : [ "桦甸市", "220200" ],
		"220283" : [ "舒兰市", "220200" ],
		"220284" : [ "磐石市", "220200" ],
		"220285" : [ "其它区", "220200" ],
		"220300" : [ "四平市", "220000" ],
		"220302" : [ "铁西区", "220300" ],
		"220303" : [ "铁东区", "220300" ],
		"220322" : [ "梨树县", "220300" ],
		"220323" : [ "伊通满族自治县", "220300" ],
		"220381" : [ "公主岭市", "220300" ],
		"220382" : [ "双辽市", "220300" ],
		"220383" : [ "其它区", "220300" ],
		"220400" : [ "辽源市", "220000" ],
		"220402" : [ "龙山区", "220400" ],
		"220403" : [ "西安区", "220400" ],
		"220421" : [ "东丰县", "220400" ],
		"220422" : [ "东辽县", "220400" ],
		"220423" : [ "其它区", "220400" ],
		"220500" : [ "通化市", "220000" ],
		"220502" : [ "东昌区", "220500" ],
		"220503" : [ "二道江区", "220500" ],
		"220521" : [ "通化县", "220500" ],
		"220523" : [ "辉南县", "220500" ],
		"220524" : [ "柳河县", "220500" ],
		"220581" : [ "梅河口市", "220500" ],
		"220582" : [ "集安市", "220500" ],
		"220583" : [ "其它区", "220500" ],
		"220600" : [ "白山市", "220000" ],
		"220602" : [ "八道江区", "220600" ],
		"220621" : [ "抚松县", "220600" ],
		"220622" : [ "靖宇县", "220600" ],
		"220623" : [ "长白朝鲜族自治县", "220600" ],
		"220625" : [ "江源县", "220600" ],
		"220681" : [ "临江市", "220600" ],
		"220682" : [ "其它区", "220600" ],
		"220700" : [ "松原市", "220000" ],
		"220702" : [ "宁江区", "220700" ],
		"220721" : [ "前郭尔罗斯蒙古族自治县", "220700" ],
		"220722" : [ "长岭县", "220700" ],
		"220723" : [ "乾安县", "220700" ],
		"220724" : [ "扶余县", "220700" ],
		"220725" : [ "其它区", "220700" ],
		"220800" : [ "白城市", "220000" ],
		"220802" : [ "洮北区", "220800" ],
		"220821" : [ "镇赉县", "220800" ],
		"220822" : [ "通榆县", "220800" ],
		"220881" : [ "洮南市", "220800" ],
		"220882" : [ "大安市", "220800" ],
		"220883" : [ "其它区", "220800" ],
		"222400" : [ "延边朝鲜族自治州", "220000" ],
		"222401" : [ "延吉市", "222400" ],
		"222402" : [ "图们市", "222400" ],
		"222403" : [ "敦化市", "222400" ],
		"222404" : [ "珲春市", "222400" ],
		"222405" : [ "龙井市", "222400" ],
		"222406" : [ "和龙市", "222400" ],
		"222424" : [ "汪清县", "222400" ],
		"222426" : [ "安图县", "222400" ],
		"222427" : [ "其它区", "222400" ],
		"230000" : [ "黑龙江省", "1" ],
		"230100" : [ "哈尔滨市", "230000" ],
		"230102" : [ "道里区", "230100" ],
		"230103" : [ "南岗区", "230100" ],
		"230104" : [ "道外区", "230100" ],
		"230106" : [ "香坊区", "230100" ],
		"230107" : [ "动力区", "230100" ],
		"230108" : [ "平房区", "230100" ],
		"230109" : [ "松北区", "230100" ],
		"230111" : [ "呼兰区", "230100" ],
		"230123" : [ "依兰县", "230100" ],
		"230124" : [ "方正县", "230100" ],
		"230125" : [ "宾县", "230100" ],
		"230126" : [ "巴彦县", "230100" ],
		"230127" : [ "木兰县", "230100" ],
		"230128" : [ "通河县", "230100" ],
		"230129" : [ "延寿县", "230100" ],
		"230181" : [ "阿城市", "230100" ],
		"230182" : [ "双城市", "230100" ],
		"230183" : [ "尚志市", "230100" ],
		"230184" : [ "五常市", "230100" ],
		"230185" : [ "阿城市", "230100" ],
		"230186" : [ "其它区", "230100" ],
		"230200" : [ "齐齐哈尔市", "230000" ],
		"230202" : [ "龙沙区", "230200" ],
		"230203" : [ "建华区", "230200" ],
		"230204" : [ "铁锋区", "230200" ],
		"230205" : [ "昂昂溪区", "230200" ],
		"230206" : [ "富拉尔基区", "230200" ],
		"230207" : [ "碾子山区", "230200" ],
		"230208" : [ "梅里斯达斡尔族区", "230200" ],
		"230221" : [ "龙江县", "230200" ],
		"230223" : [ "依安县", "230200" ],
		"230224" : [ "泰来县", "230200" ],
		"230225" : [ "甘南县", "230200" ],
		"230227" : [ "富裕县", "230200" ],
		"230229" : [ "克山县", "230200" ],
		"230230" : [ "克东县", "230200" ],
		"230231" : [ "拜泉县", "230200" ],
		"230281" : [ "讷河市", "230200" ],
		"230282" : [ "其它区", "230200" ],
		"230300" : [ "鸡西市", "230000" ],
		"230302" : [ "鸡冠区", "230300" ],
		"230303" : [ "恒山区", "230300" ],
		"230304" : [ "滴道区", "230300" ],
		"230305" : [ "梨树区", "230300" ],
		"230306" : [ "城子河区", "230300" ],
		"230307" : [ "麻山区", "230300" ],
		"230321" : [ "鸡东县", "230300" ],
		"230381" : [ "虎林市", "230300" ],
		"230382" : [ "密山市", "230300" ],
		"230383" : [ "其它区", "230300" ],
		"230400" : [ "鹤岗市", "230000" ],
		"230402" : [ "向阳区", "230400" ],
		"230403" : [ "工农区", "230400" ],
		"230404" : [ "南山区", "230400" ],
		"230405" : [ "兴安区", "230400" ],
		"230406" : [ "东山区", "230400" ],
		"230407" : [ "兴山区", "230400" ],
		"230421" : [ "萝北县", "230400" ],
		"230422" : [ "绥滨县", "230400" ],
		"230423" : [ "其它区", "230400" ],
		"230500" : [ "双鸭山市", "230000" ],
		"230502" : [ "尖山区", "230500" ],
		"230503" : [ "岭东区", "230500" ],
		"230505" : [ "四方台区", "230500" ],
		"230506" : [ "宝山区", "230500" ],
		"230521" : [ "集贤县", "230500" ],
		"230522" : [ "友谊县", "230500" ],
		"230523" : [ "宝清县", "230500" ],
		"230524" : [ "饶河县", "230500" ],
		"230525" : [ "其它区", "230500" ],
		"230600" : [ "大庆市", "230000" ],
		"230602" : [ "萨尔图区", "230600" ],
		"230603" : [ "龙凤区", "230600" ],
		"230604" : [ "让胡路区", "230600" ],
		"230605" : [ "红岗区", "230600" ],
		"230606" : [ "大同区", "230600" ],
		"230621" : [ "肇州县", "230600" ],
		"230622" : [ "肇源县", "230600" ],
		"230623" : [ "林甸县", "230600" ],
		"230624" : [ "杜尔伯特蒙古族自治县", "230600" ],
		"230625" : [ "其它区", "230600" ],
		"230700" : [ "伊春市", "230000" ],
		"230702" : [ "伊春区", "230700" ],
		"230703" : [ "南岔区", "230700" ],
		"230704" : [ "友好区", "230700" ],
		"230705" : [ "西林区", "230700" ],
		"230706" : [ "翠峦区", "230700" ],
		"230707" : [ "新青区", "230700" ],
		"230708" : [ "美溪区", "230700" ],
		"230709" : [ "金山屯区", "230700" ],
		"230710" : [ "五营区", "230700" ],
		"230711" : [ "乌马河区", "230700" ],
		"230712" : [ "汤旺河区", "230700" ],
		"230713" : [ "带岭区", "230700" ],
		"230714" : [ "乌伊岭区", "230700" ],
		"230715" : [ "红星区", "230700" ],
		"230716" : [ "上甘岭区", "230700" ],
		"230722" : [ "嘉荫县", "230700" ],
		"230781" : [ "铁力市", "230700" ],
		"230782" : [ "其它区", "230700" ],
		"230800" : [ "佳木斯市", "230000" ],
		"230802" : [ "永红区", "230800" ],
		"230803" : [ "向阳区", "230800" ],
		"230804" : [ "前进区", "230800" ],
		"230805" : [ "东风区", "230800" ],
		"230811" : [ "郊区", "230800" ],
		"230822" : [ "桦南县", "230800" ],
		"230826" : [ "桦川县", "230800" ],
		"230828" : [ "汤原县", "230800" ],
		"230833" : [ "抚远县", "230800" ],
		"230881" : [ "同江市", "230800" ],
		"230882" : [ "富锦市", "230800" ],
		"230883" : [ "其它区", "230800" ],
		"230900" : [ "七台河市", "230000" ],
		"230902" : [ "新兴区", "230900" ],
		"230903" : [ "桃山区", "230900" ],
		"230904" : [ "茄子河区", "230900" ],
		"230921" : [ "勃利县", "230900" ],
		"230922" : [ "其它区", "230900" ],
		"231000" : [ "牡丹江市", "230000" ],
		"231002" : [ "东安区", "231000" ],
		"231003" : [ "阳明区", "231000" ],
		"231004" : [ "爱民区", "231000" ],
		"231005" : [ "西安区", "231000" ],
		"231024" : [ "东宁县", "231000" ],
		"231025" : [ "林口县", "231000" ],
		"231081" : [ "绥芬河市", "231000" ],
		"231083" : [ "海林市", "231000" ],
		"231084" : [ "宁安市", "231000" ],
		"231085" : [ "穆棱市", "231000" ],
		"231086" : [ "其它区", "231000" ],
		"231100" : [ "黑河市", "230000" ],
		"231102" : [ "爱辉区", "231100" ],
		"231121" : [ "嫩江县", "231100" ],
		"231123" : [ "逊克县", "231100" ],
		"231124" : [ "孙吴县", "231100" ],
		"231181" : [ "北安市", "231100" ],
		"231182" : [ "五大连池市", "231100" ],
		"231183" : [ "其它区", "231100" ],
		"231200" : [ "绥化市", "230000" ],
		"231202" : [ "北林区", "231200" ],
		"231221" : [ "望奎县", "231200" ],
		"231222" : [ "兰西县", "231200" ],
		"231223" : [ "青冈县", "231200" ],
		"231224" : [ "庆安县", "231200" ],
		"231225" : [ "明水县", "231200" ],
		"231226" : [ "绥棱县", "231200" ],
		"231281" : [ "安达市", "231200" ],
		"231282" : [ "肇东市", "231200" ],
		"231283" : [ "海伦市", "231200" ],
		"231284" : [ "其它区", "231200" ],
		"232700" : [ "大兴安岭地区", "230000" ],
		"232721" : [ "呼玛县", "232700" ],
		"232722" : [ "塔河县", "232700" ],
		"232723" : [ "漠河县", "232700" ],
		"232724" : [ "加格达奇区", "232700" ],
		"232725" : [ "其它区", "232700" ],
		"310000" : [ "上海", "1" ],
		"310100" : [ "上海市", "310000" ],
		"310101" : [ "黄浦区", "310100" ],
		"310103" : [ "卢湾区", "310100" ],
		"310104" : [ "徐汇区", "310100" ],
		"310105" : [ "长宁区", "310100" ],
		"310106" : [ "静安区", "310100" ],
		"310107" : [ "普陀区", "310100" ],
		"310108" : [ "闸北区", "310100" ],
		"310109" : [ "虹口区", "310100" ],
		"310110" : [ "杨浦区", "310100" ],
		"310112" : [ "闵行区", "310100" ],
		"310113" : [ "宝山区", "310100" ],
		"310114" : [ "嘉定区", "310100" ],
		"310115" : [ "浦东新区", "310100" ],
		"310116" : [ "金山区", "310100" ],
		"310117" : [ "松江区", "310100" ],
		"310118" : [ "青浦区", "310100" ],
		"310119" : [ "南汇区", "310100" ],
		"310120" : [ "奉贤区", "310100" ],
		"310152" : [ "川沙区", "310100" ],
		"310230" : [ "崇明县", "310100" ],
		"310231" : [ "其它区", "310100" ],
		"320000" : [ "江苏省", "1" ],
		"320100" : [ "南京市", "320000" ],
		"320102" : [ "玄武区", "320100" ],
		"320103" : [ "白下区", "320100" ],
		"320104" : [ "秦淮区", "320100" ],
		"320105" : [ "建邺区", "320100" ],
		"320106" : [ "鼓楼区", "320100" ],
		"320107" : [ "下关区", "320100" ],
		"320111" : [ "浦口区", "320100" ],
		"320113" : [ "栖霞区", "320100" ],
		"320114" : [ "雨花台区", "320100" ],
		"320115" : [ "江宁区", "320100" ],
		"320116" : [ "六合区", "320100" ],
		"320124" : [ "溧水县", "320100" ],
		"320125" : [ "高淳县", "320100" ],
		"320126" : [ "其它区", "320100" ],
		"320200" : [ "无锡市", "320000" ],
		"320202" : [ "崇安区", "320200" ],
		"320203" : [ "南长区", "320200" ],
		"320204" : [ "北塘区", "320200" ],
		"320205" : [ "锡山区", "320200" ],
		"320206" : [ "惠山区", "320200" ],
		"320211" : [ "滨湖区", "320200" ],
		"320281" : [ "江阴市", "320200" ],
		"320282" : [ "宜兴市", "320200" ],
		"320296" : [ "新区", "320200" ],
		"320297" : [ "其它区", "320200" ],
		"320300" : [ "徐州市", "320000" ],
		"320302" : [ "鼓楼区", "320300" ],
		"320303" : [ "云龙区", "320300" ],
		"320304" : [ "九里区", "320300" ],
		"320305" : [ "贾汪区", "320300" ],
		"320311" : [ "泉山区", "320300" ],
		"320321" : [ "丰县", "320300" ],
		"320322" : [ "沛县", "320300" ],
		"320323" : [ "铜山县", "320300" ],
		"320324" : [ "睢宁县", "320300" ],
		"320381" : [ "新沂市", "320300" ],
		"320382" : [ "邳州市", "320300" ],
		"320383" : [ "其它区", "320300" ],
		"320400" : [ "常州市", "320000" ],
		"320402" : [ "天宁区", "320400" ],
		"320404" : [ "钟楼区", "320400" ],
		"320405" : [ "戚墅堰区", "320400" ],
		"320411" : [ "新北区", "320400" ],
		"320412" : [ "武进区", "320400" ],
		"320481" : [ "溧阳市", "320400" ],
		"320482" : [ "金坛市", "320400" ],
		"320483" : [ "其它区", "320400" ],
		"320500" : [ "苏州市", "320000" ],
		"320502" : [ "沧浪区", "320500" ],
		"320503" : [ "平江区", "320500" ],
		"320504" : [ "金阊区", "320500" ],
		"320505" : [ "虎丘区", "320500" ],
		"320506" : [ "吴中区", "320500" ],
		"320507" : [ "相城区", "320500" ],
		"320581" : [ "常熟市", "320500" ],
		"320582" : [ "张家港市", "320500" ],
		"320583" : [ "昆山市", "320500" ],
		"320584" : [ "吴江市", "320500" ],
		"320585" : [ "太仓市", "320500" ],
		"320594" : [ "新区", "320500" ],
		"320595" : [ "园区", "320500" ],
		"320596" : [ "其它区", "320500" ],
		"320600" : [ "南通市", "320000" ],
		"320602" : [ "崇川区", "320600" ],
		"320611" : [ "港闸区", "320600" ],
		"320612" : [ "通州区", "320600" ],
		"320621" : [ "海安县", "320600" ],
		"320623" : [ "如东县", "320600" ],
		"320681" : [ "启东市", "320600" ],
		"320682" : [ "如皋市", "320600" ],
		"320683" : [ "通州市", "320600" ],
		"320684" : [ "海门市", "320600" ],
		"320693" : [ "开发区", "320600" ],
		"320694" : [ "其它区", "320600" ],
		"320700" : [ "连云港市", "320000" ],
		"320703" : [ "连云区", "320700" ],
		"320705" : [ "新浦区", "320700" ],
		"320706" : [ "海州区", "320700" ],
		"320721" : [ "赣榆县", "320700" ],
		"320722" : [ "东海县", "320700" ],
		"320723" : [ "灌云县", "320700" ],
		"320724" : [ "灌南县", "320700" ],
		"320725" : [ "其它区", "320700" ],
		"320800" : [ "淮安市", "320000" ],
		"320802" : [ "清河区", "320800" ],
		"320803" : [ "楚州区", "320800" ],
		"320804" : [ "淮阴区", "320800" ],
		"320811" : [ "清浦区", "320800" ],
		"320826" : [ "涟水县", "320800" ],
		"320829" : [ "洪泽县", "320800" ],
		"320830" : [ "盱眙县", "320800" ],
		"320831" : [ "金湖县", "320800" ],
		"320832" : [ "其它区", "320800" ],
		"320900" : [ "盐城市", "320000" ],
		"320902" : [ "亭湖区", "320900" ],
		"320903" : [ "盐都区", "320900" ],
		"320921" : [ "响水县", "320900" ],
		"320922" : [ "滨海县", "320900" ],
		"320923" : [ "阜宁县", "320900" ],
		"320924" : [ "射阳县", "320900" ],
		"320925" : [ "建湖县", "320900" ],
		"320981" : [ "东台市", "320900" ],
		"320982" : [ "大丰市", "320900" ],
		"320983" : [ "其它区", "320900" ],
		"321000" : [ "扬州市", "320000" ],
		"321002" : [ "广陵区", "321000" ],
		"321003" : [ "邗江区", "321000" ],
		"321011" : [ "维扬区", "321000" ],
		"321023" : [ "宝应县", "321000" ],
		"321081" : [ "仪征市", "321000" ],
		"321084" : [ "高邮市", "321000" ],
		"321088" : [ "江都市", "321000" ],
		"321092" : [ "经济开发区", "321000" ],
		"321093" : [ "其它区", "321000" ],
		"321100" : [ "镇江市", "320000" ],
		"321102" : [ "京口区", "321100" ],
		"321111" : [ "润州区", "321100" ],
		"321112" : [ "丹徒区", "321100" ],
		"321181" : [ "丹阳市", "321100" ],
		"321182" : [ "扬中市", "321100" ],
		"321183" : [ "句容市", "321100" ],
		"321184" : [ "其它区", "321100" ],
		"321200" : [ "泰州市", "320000" ],
		"321202" : [ "海陵区", "321200" ],
		"321203" : [ "高港区", "321200" ],
		"321281" : [ "兴化市", "321200" ],
		"321282" : [ "靖江市", "321200" ],
		"321283" : [ "泰兴市", "321200" ],
		"321284" : [ "姜堰市", "321200" ],
		"321285" : [ "其它区", "321200" ],
		"321300" : [ "宿迁市", "320000" ],
		"321302" : [ "宿城区", "321300" ],
		"321311" : [ "宿豫区", "321300" ],
		"321322" : [ "沭阳县", "321300" ],
		"321323" : [ "泗阳县", "321300" ],
		"321324" : [ "泗洪县", "321300" ],
		"321325" : [ "其它区", "321300" ],
		"330000" : [ "浙江省", "1" ],
		"330100" : [ "杭州市", "330000" ],
		"330102" : [ "上城区", "330100" ],
		"330103" : [ "下城区", "330100" ],
		"330104" : [ "江干区", "330100" ],
		"330105" : [ "拱墅区", "330100" ],
		"330106" : [ "西湖区", "330100" ],
		"330108" : [ "滨江区", "330100" ],
		"330109" : [ "萧山区", "330100" ],
		"330110" : [ "余杭区", "330100" ],
		"330122" : [ "桐庐县", "330100" ],
		"330127" : [ "淳安县", "330100" ],
		"330182" : [ "建德市", "330100" ],
		"330183" : [ "富阳市", "330100" ],
		"330185" : [ "临安市", "330100" ],
		"330186" : [ "其它区", "330100" ],
		"330200" : [ "宁波市", "330000" ],
		"330203" : [ "海曙区", "330200" ],
		"330204" : [ "江东区", "330200" ],
		"330205" : [ "江北区", "330200" ],
		"330206" : [ "北仑区", "330200" ],
		"330211" : [ "镇海区", "330200" ],
		"330212" : [ "鄞州区", "330200" ],
		"330225" : [ "象山县", "330200" ],
		"330226" : [ "宁海县", "330200" ],
		"330281" : [ "余姚市", "330200" ],
		"330282" : [ "慈溪市", "330200" ],
		"330283" : [ "奉化市", "330200" ],
		"330284" : [ "其它区", "330200" ],
		"330300" : [ "温州市", "330000" ],
		"330302" : [ "鹿城区", "330300" ],
		"330303" : [ "龙湾区", "330300" ],
		"330304" : [ "瓯海区", "330300" ],
		"330322" : [ "洞头县", "330300" ],
		"330324" : [ "永嘉县", "330300" ],
		"330326" : [ "平阳县", "330300" ],
		"330327" : [ "苍南县", "330300" ],
		"330328" : [ "文成县", "330300" ],
		"330329" : [ "泰顺县", "330300" ],
		"330381" : [ "瑞安市", "330300" ],
		"330382" : [ "乐清市", "330300" ],
		"330383" : [ "其它区", "330300" ],
		"330400" : [ "嘉兴市", "330000" ],
		"330402" : [ "南湖区", "330400" ],
		"330411" : [ "秀洲区", "330400" ],
		"330421" : [ "嘉善县", "330400" ],
		"330424" : [ "海盐县", "330400" ],
		"330481" : [ "海宁市", "330400" ],
		"330482" : [ "平湖市", "330400" ],
		"330483" : [ "桐乡市", "330400" ],
		"330484" : [ "其它区", "330400" ],
		"330500" : [ "湖州市", "330000" ],
		"330502" : [ "吴兴区", "330500" ],
		"330503" : [ "南浔区", "330500" ],
		"330521" : [ "德清县", "330500" ],
		"330522" : [ "长兴县", "330500" ],
		"330523" : [ "安吉县", "330500" ],
		"330524" : [ "其它区", "330500" ],
		"330600" : [ "绍兴市", "330000" ],
		"330602" : [ "越城区", "330600" ],
		"330621" : [ "绍兴县", "330600" ],
		"330624" : [ "新昌县", "330600" ],
		"330681" : [ "诸暨市", "330600" ],
		"330682" : [ "上虞市", "330600" ],
		"330683" : [ "嵊州市", "330600" ],
		"330684" : [ "其它区", "330600" ],
		"330700" : [ "金华市", "330000" ],
		"330702" : [ "婺城区", "330700" ],
		"330703" : [ "金东区", "330700" ],
		"330723" : [ "武义县", "330700" ],
		"330726" : [ "浦江县", "330700" ],
		"330727" : [ "磐安县", "330700" ],
		"330781" : [ "兰溪市", "330700" ],
		"330782" : [ "义乌市", "330700" ],
		"330783" : [ "东阳市", "330700" ],
		"330784" : [ "永康市", "330700" ],
		"330785" : [ "其它区", "330700" ],
		"330800" : [ "衢州市", "330000" ],
		"330802" : [ "柯城区", "330800" ],
		"330803" : [ "衢江区", "330800" ],
		"330822" : [ "常山县", "330800" ],
		"330824" : [ "开化县", "330800" ],
		"330825" : [ "龙游县", "330800" ],
		"330881" : [ "江山市", "330800" ],
		"330882" : [ "其它区", "330800" ],
		"330900" : [ "舟山市", "330000" ],
		"330902" : [ "定海区", "330900" ],
		"330903" : [ "普陀区", "330900" ],
		"330921" : [ "岱山县", "330900" ],
		"330922" : [ "嵊泗县", "330900" ],
		"330923" : [ "其它区", "330900" ],
		"331000" : [ "台州市", "330000" ],
		"331002" : [ "椒江区", "331000" ],
		"331003" : [ "黄岩区", "331000" ],
		"331004" : [ "路桥区", "331000" ],
		"331021" : [ "玉环县", "331000" ],
		"331022" : [ "三门县", "331000" ],
		"331023" : [ "天台县", "331000" ],
		"331024" : [ "仙居县", "331000" ],
		"331081" : [ "温岭市", "331000" ],
		"331082" : [ "临海市", "331000" ],
		"331083" : [ "其它区", "331000" ],
		"331100" : [ "丽水市", "330000" ],
		"331102" : [ "莲都区", "331100" ],
		"331121" : [ "青田县", "331100" ],
		"331122" : [ "缙云县", "331100" ],
		"331123" : [ "遂昌县", "331100" ],
		"331124" : [ "松阳县", "331100" ],
		"331125" : [ "云和县", "331100" ],
		"331126" : [ "庆元县", "331100" ],
		"331127" : [ "景宁畲族自治县", "331100" ],
		"331181" : [ "龙泉市", "331100" ],
		"331182" : [ "其它区", "331100" ],
		"340000" : [ "安徽省", "1" ],
		"340100" : [ "合肥市", "340000" ],
		"340102" : [ "瑶海区", "340100" ],
		"340103" : [ "庐阳区", "340100" ],
		"340104" : [ "蜀山区", "340100" ],
		"340111" : [ "包河区", "340100" ],
		"340121" : [ "长丰县", "340100" ],
		"340122" : [ "肥东县", "340100" ],
		"340123" : [ "肥西县", "340100" ],
		"340151" : [ "高新区", "340100" ],
		"340191" : [ "中区", "340100" ],
		"340192" : [ "其它区", "340100" ],
		"340200" : [ "芜湖市", "340000" ],
		"340202" : [ "镜湖区", "340200" ],
		"340203" : [ "弋江区", "340200" ],
		"340207" : [ "鸠江区", "340200" ],
		"340208" : [ "三山区", "340200" ],
		"340221" : [ "芜湖县", "340200" ],
		"340222" : [ "繁昌县", "340200" ],
		"340223" : [ "南陵县", "340200" ],
		"340224" : [ "其它区", "340200" ],
		"340300" : [ "蚌埠市", "340000" ],
		"340302" : [ "龙子湖区", "340300" ],
		"340303" : [ "蚌山区", "340300" ],
		"340304" : [ "禹会区", "340300" ],
		"340311" : [ "淮上区", "340300" ],
		"340321" : [ "怀远县", "340300" ],
		"340322" : [ "五河县", "340300" ],
		"340323" : [ "固镇县", "340300" ],
		"340324" : [ "其它区", "340300" ],
		"340400" : [ "淮南市", "340000" ],
		"340402" : [ "大通区", "340400" ],
		"340403" : [ "田家庵区", "340400" ],
		"340404" : [ "谢家集区", "340400" ],
		"340405" : [ "八公山区", "340400" ],
		"340406" : [ "潘集区", "340400" ],
		"340421" : [ "凤台县", "340400" ],
		"340422" : [ "其它区", "340400" ],
		"340500" : [ "马鞍山市", "340000" ],
		"340502" : [ "金家庄区", "340500" ],
		"340503" : [ "花山区", "340500" ],
		"340504" : [ "雨山区", "340500" ],
		"340521" : [ "当涂县", "340500" ],
		"340522" : [ "其它区", "340500" ],
		"340600" : [ "淮北市", "340000" ],
		"340602" : [ "杜集区", "340600" ],
		"340603" : [ "相山区", "340600" ],
		"340604" : [ "烈山区", "340600" ],
		"340621" : [ "濉溪县", "340600" ],
		"340622" : [ "其它区", "340600" ],
		"340700" : [ "铜陵市", "340000" ],
		"340702" : [ "铜官山区", "340700" ],
		"340703" : [ "狮子山区", "340700" ],
		"340711" : [ "郊区", "340700" ],
		"340721" : [ "铜陵县", "340700" ],
		"340722" : [ "其它区", "340700" ],
		"340800" : [ "安庆市", "340000" ],
		"340802" : [ "迎江区", "340800" ],
		"340803" : [ "大观区", "340800" ],
		"340811" : [ "宜秀区", "340800" ],
		"340822" : [ "怀宁县", "340800" ],
		"340823" : [ "枞阳县", "340800" ],
		"340824" : [ "潜山县", "340800" ],
		"340825" : [ "太湖县", "340800" ],
		"340826" : [ "宿松县", "340800" ],
		"340827" : [ "望江县", "340800" ],
		"340828" : [ "岳西县", "340800" ],
		"340881" : [ "桐城市", "340800" ],
		"340882" : [ "其它区", "340800" ],
		"341000" : [ "黄山市", "340000" ],
		"341002" : [ "屯溪区", "341000" ],
		"341003" : [ "黄山区", "341000" ],
		"341004" : [ "徽州区", "341000" ],
		"341021" : [ "歙县", "341000" ],
		"341022" : [ "休宁县", "341000" ],
		"341023" : [ "黟县", "341000" ],
		"341024" : [ "祁门县", "341000" ],
		"341025" : [ "其它区", "341000" ],
		"341100" : [ "滁州市", "340000" ],
		"341102" : [ "琅琊区", "341100" ],
		"341103" : [ "南谯区", "341100" ],
		"341122" : [ "来安县", "341100" ],
		"341124" : [ "全椒县", "341100" ],
		"341125" : [ "定远县", "341100" ],
		"341126" : [ "凤阳县", "341100" ],
		"341181" : [ "天长市", "341100" ],
		"341182" : [ "明光市", "341100" ],
		"341183" : [ "其它区", "341100" ],
		"341200" : [ "阜阳市", "340000" ],
		"341202" : [ "颍州区", "341200" ],
		"341203" : [ "颍东区", "341200" ],
		"341204" : [ "颍泉区", "341200" ],
		"341221" : [ "临泉县", "341200" ],
		"341222" : [ "太和县", "341200" ],
		"341225" : [ "阜南县", "341200" ],
		"341226" : [ "颍上县", "341200" ],
		"341282" : [ "界首市", "341200" ],
		"341283" : [ "其它区", "341200" ],
		"341300" : [ "宿州市", "340000" ],
		"341302" : [ "埇桥区", "341300" ],
		"341321" : [ "砀山县", "341300" ],
		"341322" : [ "萧县", "341300" ],
		"341323" : [ "灵璧县", "341300" ],
		"341324" : [ "泗县", "341300" ],
		"341325" : [ "其它区", "341300" ],
		"341400" : [ "巢湖市", "340100" ],
		"341402" : [ "居巢区", "340100" ],
		"341421" : [ "庐江县", "340100" ],
		"341422" : [ "无为县", "340200" ],
		"341423" : [ "含山县", "340500" ],
		"341424" : [ "和县", "340500" ],
		"341500" : [ "六安市", "340000" ],
		"341502" : [ "金安区", "341500" ],
		"341503" : [ "裕安区", "341500" ],
		"341521" : [ "寿县", "341500" ],
		"341522" : [ "霍邱县", "341500" ],
		"341523" : [ "舒城县", "341500" ],
		"341524" : [ "金寨县", "341500" ],
		"341525" : [ "霍山县", "341500" ],
		"341526" : [ "其它区", "341500" ],
		"341600" : [ "亳州市", "340000" ],
		"341602" : [ "谯城区", "341600" ],
		"341621" : [ "涡阳县", "341600" ],
		"341622" : [ "蒙城县", "341600" ],
		"341623" : [ "利辛县", "341600" ],
		"341624" : [ "其它区", "341600" ],
		"341700" : [ "池州市", "340000" ],
		"341702" : [ "贵池区", "341700" ],
		"341721" : [ "东至县", "341700" ],
		"341722" : [ "石台县", "341700" ],
		"341723" : [ "青阳县", "341700" ],
		"341724" : [ "其它区", "341700" ],
		"341800" : [ "宣城市", "340000" ],
		"341802" : [ "宣州区", "341800" ],
		"341821" : [ "郎溪县", "341800" ],
		"341822" : [ "广德县", "341800" ],
		"341823" : [ "泾县", "341800" ],
		"341824" : [ "绩溪县", "341800" ],
		"341825" : [ "旌德县", "341800" ],
		"341881" : [ "宁国市", "341800" ],
		"341882" : [ "其它区", "341800" ],
		"350000" : [ "福建省", "1" ],
		"350100" : [ "福州市", "350000" ],
		"350102" : [ "鼓楼区", "350100" ],
		"350103" : [ "台江区", "350100" ],
		"350104" : [ "仓山区", "350100" ],
		"350105" : [ "马尾区", "350100" ],
		"350111" : [ "晋安区", "350100" ],
		"350121" : [ "闽侯县", "350100" ],
		"350122" : [ "连江县", "350100" ],
		"350123" : [ "罗源县", "350100" ],
		"350124" : [ "闽清县", "350100" ],
		"350125" : [ "永泰县", "350100" ],
		"350128" : [ "平潭县", "350100" ],
		"350181" : [ "福清市", "350100" ],
		"350182" : [ "长乐市", "350100" ],
		"350183" : [ "其它区", "350100" ],
		"350200" : [ "厦门市", "350000" ],
		"350203" : [ "思明区", "350200" ],
		"350205" : [ "海沧区", "350200" ],
		"350206" : [ "湖里区", "350200" ],
		"350211" : [ "集美区", "350200" ],
		"350212" : [ "同安区", "350200" ],
		"350213" : [ "翔安区", "350200" ],
		"350214" : [ "其它区", "350200" ],
		"350300" : [ "莆田市", "350000" ],
		"350302" : [ "城厢区", "350300" ],
		"350303" : [ "涵江区", "350300" ],
		"350304" : [ "荔城区", "350300" ],
		"350305" : [ "秀屿区", "350300" ],
		"350322" : [ "仙游县", "350300" ],
		"350323" : [ "其它区", "350300" ],
		"350400" : [ "三明市", "350000" ],
		"350402" : [ "梅列区", "350400" ],
		"350403" : [ "三元区", "350400" ],
		"350421" : [ "明溪县", "350400" ],
		"350423" : [ "清流县", "350400" ],
		"350424" : [ "宁化县", "350400" ],
		"350425" : [ "大田县", "350400" ],
		"350426" : [ "尤溪县", "350400" ],
		"350427" : [ "沙县", "350400" ],
		"350428" : [ "将乐县", "350400" ],
		"350429" : [ "泰宁县", "350400" ],
		"350430" : [ "建宁县", "350400" ],
		"350481" : [ "永安市", "350400" ],
		"350482" : [ "其它区", "350400" ],
		"350500" : [ "泉州市", "350000" ],
		"350502" : [ "鲤城区", "350500" ],
		"350503" : [ "丰泽区", "350500" ],
		"350504" : [ "洛江区", "350500" ],
		"350505" : [ "泉港区", "350500" ],
		"350521" : [ "惠安县", "350500" ],
		"350524" : [ "安溪县", "350500" ],
		"350525" : [ "永春县", "350500" ],
		"350526" : [ "德化县", "350500" ],
		"350527" : [ "金门县", "350500" ],
		"350581" : [ "石狮市", "350500" ],
		"350582" : [ "晋江市", "350500" ],
		"350583" : [ "南安市", "350500" ],
		"350584" : [ "其它区", "350500" ],
		"350600" : [ "漳州市", "350000" ],
		"350602" : [ "芗城区", "350600" ],
		"350603" : [ "龙文区", "350600" ],
		"350622" : [ "云霄县", "350600" ],
		"350623" : [ "漳浦县", "350600" ],
		"350624" : [ "诏安县", "350600" ],
		"350625" : [ "长泰县", "350600" ],
		"350626" : [ "东山县", "350600" ],
		"350627" : [ "南靖县", "350600" ],
		"350628" : [ "平和县", "350600" ],
		"350629" : [ "华安县", "350600" ],
		"350681" : [ "龙海市", "350600" ],
		"350682" : [ "其它区", "350600" ],
		"350700" : [ "南平市", "350000" ],
		"350702" : [ "延平区", "350700" ],
		"350721" : [ "顺昌县", "350700" ],
		"350722" : [ "浦城县", "350700" ],
		"350723" : [ "光泽县", "350700" ],
		"350724" : [ "松溪县", "350700" ],
		"350725" : [ "政和县", "350700" ],
		"350781" : [ "邵武市", "350700" ],
		"350782" : [ "武夷山市", "350700" ],
		"350783" : [ "建瓯市", "350700" ],
		"350784" : [ "建阳市", "350700" ],
		"350785" : [ "其它区", "350700" ],
		"350800" : [ "龙岩市", "350000" ],
		"350802" : [ "新罗区", "350800" ],
		"350821" : [ "长汀县", "350800" ],
		"350822" : [ "永定县", "350800" ],
		"350823" : [ "上杭县", "350800" ],
		"350824" : [ "武平县", "350800" ],
		"350825" : [ "连城县", "350800" ],
		"350881" : [ "漳平市", "350800" ],
		"350882" : [ "其它区", "350800" ],
		"350900" : [ "宁德市", "350000" ],
		"350902" : [ "蕉城区", "350900" ],
		"350921" : [ "霞浦县", "350900" ],
		"350922" : [ "古田县", "350900" ],
		"350923" : [ "屏南县", "350900" ],
		"350924" : [ "寿宁县", "350900" ],
		"350925" : [ "周宁县", "350900" ],
		"350926" : [ "柘荣县", "350900" ],
		"350981" : [ "福安市", "350900" ],
		"350982" : [ "福鼎市", "350900" ],
		"350983" : [ "其它区", "350900" ],
		"360000" : [ "江西省", "1" ],
		"360100" : [ "南昌市", "360000" ],
		"360102" : [ "东湖区", "360100" ],
		"360103" : [ "西湖区", "360100" ],
		"360104" : [ "青云谱区", "360100" ],
		"360105" : [ "湾里区", "360100" ],
		"360111" : [ "青山湖区", "360100" ],
		"360121" : [ "南昌县", "360100" ],
		"360122" : [ "新建县", "360100" ],
		"360123" : [ "安义县", "360100" ],
		"360124" : [ "进贤县", "360100" ],
		"360125" : [ "红谷滩新区", "360100" ],
		"360126" : [ "经济技术开发区", "360100" ],
		"360127" : [ "昌北区", "360100" ],
		"360128" : [ "其它区", "360100" ],
		"360200" : [ "景德镇市", "360000" ],
		"360202" : [ "昌江区", "360200" ],
		"360203" : [ "珠山区", "360200" ],
		"360222" : [ "浮梁县", "360200" ],
		"360281" : [ "乐平市", "360200" ],
		"360282" : [ "其它区", "360200" ],
		"360300" : [ "萍乡市", "360000" ],
		"360302" : [ "安源区", "360300" ],
		"360313" : [ "湘东区", "360300" ],
		"360321" : [ "莲花县", "360300" ],
		"360322" : [ "上栗县", "360300" ],
		"360323" : [ "芦溪县", "360300" ],
		"360324" : [ "其它区", "360300" ],
		"360400" : [ "九江市", "360000" ],
		"360402" : [ "庐山区", "360400" ],
		"360403" : [ "浔阳区", "360400" ],
		"360421" : [ "九江县", "360400" ],
		"360423" : [ "武宁县", "360400" ],
		"360424" : [ "修水县", "360400" ],
		"360425" : [ "永修县", "360400" ],
		"360426" : [ "德安县", "360400" ],
		"360427" : [ "星子县", "360400" ],
		"360428" : [ "都昌县", "360400" ],
		"360429" : [ "湖口县", "360400" ],
		"360430" : [ "彭泽县", "360400" ],
		"360481" : [ "瑞昌市", "360400" ],
		"360482" : [ "其它区", "360400" ],
		"360500" : [ "新余市", "360000" ],
		"360502" : [ "渝水区", "360500" ],
		"360521" : [ "分宜县", "360500" ],
		"360522" : [ "其它区", "360500" ],
		"360600" : [ "鹰潭市", "360000" ],
		"360602" : [ "月湖区", "360600" ],
		"360622" : [ "余江县", "360600" ],
		"360681" : [ "贵溪市", "360600" ],
		"360682" : [ "其它区", "360600" ],
		"360700" : [ "赣州市", "360000" ],
		"360702" : [ "章贡区", "360700" ],
		"360721" : [ "赣县", "360700" ],
		"360722" : [ "信丰县", "360700" ],
		"360723" : [ "大余县", "360700" ],
		"360724" : [ "上犹县", "360700" ],
		"360725" : [ "崇义县", "360700" ],
		"360726" : [ "安远县", "360700" ],
		"360727" : [ "龙南县", "360700" ],
		"360728" : [ "定南县", "360700" ],
		"360729" : [ "全南县", "360700" ],
		"360730" : [ "宁都县", "360700" ],
		"360731" : [ "于都县", "360700" ],
		"360732" : [ "兴国县", "360700" ],
		"360733" : [ "会昌县", "360700" ],
		"360734" : [ "寻乌县", "360700" ],
		"360735" : [ "石城县", "360700" ],
		"360751" : [ "黄金区", "360700" ],
		"360781" : [ "瑞金市", "360700" ],
		"360782" : [ "南康市", "360700" ],
		"360783" : [ "其它区", "360700" ],
		"360800" : [ "吉安市", "360000" ],
		"360802" : [ "吉州区", "360800" ],
		"360803" : [ "青原区", "360800" ],
		"360821" : [ "吉安县", "360800" ],
		"360822" : [ "吉水县", "360800" ],
		"360823" : [ "峡江县", "360800" ],
		"360824" : [ "新干县", "360800" ],
		"360825" : [ "永丰县", "360800" ],
		"360826" : [ "泰和县", "360800" ],
		"360827" : [ "遂川县", "360800" ],
		"360828" : [ "万安县", "360800" ],
		"360829" : [ "安福县", "360800" ],
		"360830" : [ "永新县", "360800" ],
		"360881" : [ "井冈山市", "360800" ],
		"360882" : [ "其它区", "360800" ],
		"360900" : [ "宜春市", "360000" ],
		"360902" : [ "袁州区", "360900" ],
		"360921" : [ "奉新县", "360900" ],
		"360922" : [ "万载县", "360900" ],
		"360923" : [ "上高县", "360900" ],
		"360924" : [ "宜丰县", "360900" ],
		"360925" : [ "靖安县", "360900" ],
		"360926" : [ "铜鼓县", "360900" ],
		"360981" : [ "丰城市", "360900" ],
		"360982" : [ "樟树市", "360900" ],
		"360983" : [ "高安市", "360900" ],
		"360984" : [ "其它区", "360900" ],
		"361000" : [ "抚州市", "360000" ],
		"361002" : [ "临川区", "361000" ],
		"361021" : [ "南城县", "361000" ],
		"361022" : [ "黎川县", "361000" ],
		"361023" : [ "南丰县", "361000" ],
		"361024" : [ "崇仁县", "361000" ],
		"361025" : [ "乐安县", "361000" ],
		"361026" : [ "宜黄县", "361000" ],
		"361027" : [ "金溪县", "361000" ],
		"361028" : [ "资溪县", "361000" ],
		"361029" : [ "东乡县", "361000" ],
		"361030" : [ "广昌县", "361000" ],
		"361031" : [ "其它区", "361000" ],
		"361100" : [ "上饶市", "360000" ],
		"361102" : [ "信州区", "361100" ],
		"361121" : [ "上饶县", "361100" ],
		"361122" : [ "广丰县", "361100" ],
		"361123" : [ "玉山县", "361100" ],
		"361124" : [ "铅山县", "361100" ],
		"361125" : [ "横峰县", "361100" ],
		"361126" : [ "弋阳县", "361100" ],
		"361127" : [ "余干县", "361100" ],
		"361128" : [ "鄱阳县", "361100" ],
		"361129" : [ "万年县", "361100" ],
		"361130" : [ "婺源县", "361100" ],
		"361181" : [ "德兴市", "361100" ],
		"361182" : [ "其它区", "361100" ],
		"370000" : [ "山东省", "1" ],
		"370100" : [ "济南市", "370000" ],
		"370102" : [ "历下区", "370100" ],
		"370103" : [ "市中区", "370100" ],
		"370104" : [ "槐荫区", "370100" ],
		"370105" : [ "天桥区", "370100" ],
		"370112" : [ "历城区", "370100" ],
		"370113" : [ "长清区", "370100" ],
		"370124" : [ "平阴县", "370100" ],
		"370125" : [ "济阳县", "370100" ],
		"370126" : [ "商河县", "370100" ],
		"370181" : [ "章丘市", "370100" ],
		"370182" : [ "其它区", "370100" ],
		"370200" : [ "青岛市", "370000" ],
		"370202" : [ "市南区", "370200" ],
		"370203" : [ "市北区", "370200" ],
		"370205" : [ "四方区", "370200" ],
		"370211" : [ "黄岛区", "370200" ],
		"370212" : [ "崂山区", "370200" ],
		"370213" : [ "李沧区", "370200" ],
		"370214" : [ "城阳区", "370200" ],
		"370251" : [ "开发区", "370200" ],
		"370281" : [ "胶州市", "370200" ],
		"370282" : [ "即墨市", "370200" ],
		"370283" : [ "平度市", "370200" ],
		"370284" : [ "胶南市", "370200" ],
		"370285" : [ "莱西市", "370200" ],
		"370286" : [ "其它区", "370200" ],
		"370300" : [ "淄博市", "370000" ],
		"370302" : [ "淄川区", "370300" ],
		"370303" : [ "张店区", "370300" ],
		"370304" : [ "博山区", "370300" ],
		"370305" : [ "临淄区", "370300" ],
		"370306" : [ "周村区", "370300" ],
		"370321" : [ "桓台县", "370300" ],
		"370322" : [ "高青县", "370300" ],
		"370323" : [ "沂源县", "370300" ],
		"370324" : [ "其它区", "370300" ],
		"370400" : [ "枣庄市", "370000" ],
		"370402" : [ "市中区", "370400" ],
		"370403" : [ "薛城区", "370400" ],
		"370404" : [ "峄城区", "370400" ],
		"370405" : [ "台儿庄区", "370400" ],
		"370406" : [ "山亭区", "370400" ],
		"370481" : [ "滕州市", "370400" ],
		"370482" : [ "其它区", "370400" ],
		"370500" : [ "东营市", "370000" ],
		"370502" : [ "东营区", "370500" ],
		"370503" : [ "河口区", "370500" ],
		"370521" : [ "垦利县", "370500" ],
		"370522" : [ "利津县", "370500" ],
		"370523" : [ "广饶县", "370500" ],
		"370589" : [ "西城区", "370500" ],
		"370590" : [ "东城区", "370500" ],
		"370591" : [ "其它区", "370500" ],
		"370600" : [ "烟台市", "370000" ],
		"370602" : [ "芝罘区", "370600" ],
		"370611" : [ "福山区", "370600" ],
		"370612" : [ "牟平区", "370600" ],
		"370613" : [ "莱山区", "370600" ],
		"370634" : [ "长岛县", "370600" ],
		"370681" : [ "龙口市", "370600" ],
		"370682" : [ "莱阳市", "370600" ],
		"370683" : [ "莱州市", "370600" ],
		"370684" : [ "蓬莱市", "370600" ],
		"370685" : [ "招远市", "370600" ],
		"370686" : [ "栖霞市", "370600" ],
		"370687" : [ "海阳市", "370600" ],
		"370688" : [ "其它区", "370600" ],
		"370700" : [ "潍坊市", "370000" ],
		"370702" : [ "潍城区", "370700" ],
		"370703" : [ "寒亭区", "370700" ],
		"370704" : [ "坊子区", "370700" ],
		"370705" : [ "奎文区", "370700" ],
		"370724" : [ "临朐县", "370700" ],
		"370725" : [ "昌乐县", "370700" ],
		"370751" : [ "开发区", "370700" ],
		"370781" : [ "青州市", "370700" ],
		"370782" : [ "诸城市", "370700" ],
		"370783" : [ "寿光市", "370700" ],
		"370784" : [ "安丘市", "370700" ],
		"370785" : [ "高密市", "370700" ],
		"370786" : [ "昌邑市", "370700" ],
		"370787" : [ "其它区", "370700" ],
		"370800" : [ "济宁市", "370000" ],
		"370802" : [ "市中区", "370800" ],
		"370811" : [ "任城区", "370800" ],
		"370826" : [ "微山县", "370800" ],
		"370827" : [ "鱼台县", "370800" ],
		"370828" : [ "金乡县", "370800" ],
		"370829" : [ "嘉祥县", "370800" ],
		"370830" : [ "汶上县", "370800" ],
		"370831" : [ "泗水县", "370800" ],
		"370832" : [ "梁山县", "370800" ],
		"370881" : [ "曲阜市", "370800" ],
		"370882" : [ "兖州市", "370800" ],
		"370883" : [ "邹城市", "370800" ],
		"370884" : [ "其它区", "370800" ],
		"370900" : [ "泰安市", "370000" ],
		"370902" : [ "泰山区", "370900" ],
		"370903" : [ "岱岳区", "370900" ],
		"370921" : [ "宁阳县", "370900" ],
		"370923" : [ "东平县", "370900" ],
		"370982" : [ "新泰市", "370900" ],
		"370983" : [ "肥城市", "370900" ],
		"370984" : [ "其它区", "370900" ],
		"371000" : [ "威海市", "370000" ],
		"371002" : [ "环翠区", "371000" ],
		"371081" : [ "文登市", "371000" ],
		"371082" : [ "荣成市", "371000" ],
		"371083" : [ "乳山市", "371000" ],
		"371084" : [ "其它区", "371000" ],
		"371100" : [ "日照市", "370000" ],
		"371102" : [ "东港区", "371100" ],
		"371103" : [ "岚山区", "371100" ],
		"371121" : [ "五莲县", "371100" ],
		"371122" : [ "莒县", "371100" ],
		"371123" : [ "其它区", "371100" ],
		"371200" : [ "莱芜市", "370000" ],
		"371202" : [ "莱城区", "371200" ],
		"371203" : [ "钢城区", "371200" ],
		"371204" : [ "其它区", "371200" ],
		"371300" : [ "临沂市", "370000" ],
		"371302" : [ "兰山区", "371300" ],
		"371311" : [ "罗庄区", "371300" ],
		"371312" : [ "河东区", "371300" ],
		"371321" : [ "沂南县", "371300" ],
		"371322" : [ "郯城县", "371300" ],
		"371323" : [ "沂水县", "371300" ],
		"371324" : [ "苍山县", "371300" ],
		"371325" : [ "费县", "371300" ],
		"371326" : [ "平邑县", "371300" ],
		"371327" : [ "莒南县", "371300" ],
		"371328" : [ "蒙阴县", "371300" ],
		"371329" : [ "临沭县", "371300" ],
		"371330" : [ "其它区", "371300" ],
		"371400" : [ "德州市", "370000" ],
		"371402" : [ "德城区", "371400" ],
		"371421" : [ "陵县", "371400" ],
		"371422" : [ "宁津县", "371400" ],
		"371423" : [ "庆云县", "371400" ],
		"371424" : [ "临邑县", "371400" ],
		"371425" : [ "齐河县", "371400" ],
		"371426" : [ "平原县", "371400" ],
		"371427" : [ "夏津县", "371400" ],
		"371428" : [ "武城县", "371400" ],
		"371451" : [ "开发区", "371400" ],
		"371481" : [ "乐陵市", "371400" ],
		"371482" : [ "禹城市", "371400" ],
		"371483" : [ "其它区", "371400" ],
		"371500" : [ "聊城市", "370000" ],
		"371502" : [ "东昌府区", "371500" ],
		"371521" : [ "阳谷县", "371500" ],
		"371522" : [ "莘县", "371500" ],
		"371523" : [ "茌平县", "371500" ],
		"371524" : [ "东阿县", "371500" ],
		"371525" : [ "冠县", "371500" ],
		"371526" : [ "高唐县", "371500" ],
		"371581" : [ "临清市", "371500" ],
		"371582" : [ "其它区", "371500" ],
		"371600" : [ "滨州市", "370000" ],
		"371602" : [ "滨城区", "371600" ],
		"371621" : [ "惠民县", "371600" ],
		"371622" : [ "阳信县", "371600" ],
		"371623" : [ "无棣县", "371600" ],
		"371624" : [ "沾化县", "371600" ],
		"371625" : [ "博兴县", "371600" ],
		"371626" : [ "邹平县", "371600" ],
		"371627" : [ "其它区", "371600" ],
		"371700" : [ "菏泽市", "370000" ],
		"371702" : [ "牡丹区", "371700" ],
		"371721" : [ "曹县", "371700" ],
		"371722" : [ "单县", "371700" ],
		"371723" : [ "成武县", "371700" ],
		"371724" : [ "巨野县", "371700" ],
		"371725" : [ "郓城县", "371700" ],
		"371726" : [ "鄄城县", "371700" ],
		"371727" : [ "定陶县", "371700" ],
		"371728" : [ "东明县", "371700" ],
		"371729" : [ "其它区", "371700" ],
		"410000" : [ "河南省", "1" ],
		"410100" : [ "郑州市", "410000" ],
		"410102" : [ "中原区", "410100" ],
		"410103" : [ "二七区", "410100" ],
		"410104" : [ "管城回族区", "410100" ],
		"410105" : [ "金水区", "410100" ],
		"410106" : [ "上街区", "410100" ],
		"410108" : [ "惠济区", "410100" ],
		"410122" : [ "中牟县", "410100" ],
		"410181" : [ "巩义市", "410100" ],
		"410182" : [ "荥阳市", "410100" ],
		"410183" : [ "新密市", "410100" ],
		"410184" : [ "新郑市", "410100" ],
		"410185" : [ "登封市", "410100" ],
		"410186" : [ "郑东新区", "410100" ],
		"410187" : [ "高新区", "410100" ],
		"410188" : [ "其它区", "410100" ],
		"410200" : [ "开封市", "410000" ],
		"410202" : [ "龙亭区", "410200" ],
		"410203" : [ "顺河回族区", "410200" ],
		"410204" : [ "鼓楼区", "410200" ],
		"410205" : [ "禹王台区", "410200" ],
		"410211" : [ "金明区", "410200" ],
		"410221" : [ "杞县", "410200" ],
		"410222" : [ "通许县", "410200" ],
		"410223" : [ "尉氏县", "410200" ],
		"410224" : [ "开封县", "410200" ],
		"410225" : [ "兰考县", "410200" ],
		"410226" : [ "其它区", "410200" ],
		"410300" : [ "洛阳市", "410000" ],
		"410302" : [ "老城区", "410300" ],
		"410303" : [ "西工区", "410300" ],
		"410304" : [ "廛河回族区", "410300" ],
		"410305" : [ "涧西区", "410300" ],
		"410306" : [ "吉利区", "410300" ],
		"410307" : [ "洛龙区", "410300" ],
		"410322" : [ "孟津县", "410300" ],
		"410323" : [ "新安县", "410300" ],
		"410324" : [ "栾川县", "410300" ],
		"410325" : [ "嵩县", "410300" ],
		"410326" : [ "汝阳县", "410300" ],
		"410327" : [ "宜阳县", "410300" ],
		"410328" : [ "洛宁县", "410300" ],
		"410329" : [ "伊川县", "410300" ],
		"410381" : [ "偃师市", "410300" ],
		"410400" : [ "平顶山市", "410000" ],
		"410402" : [ "新华区", "410400" ],
		"410403" : [ "卫东区", "410400" ],
		"410404" : [ "石龙区", "410400" ],
		"410411" : [ "湛河区", "410400" ],
		"410421" : [ "宝丰县", "410400" ],
		"410422" : [ "叶县", "410400" ],
		"410423" : [ "鲁山县", "410400" ],
		"410425" : [ "郏县", "410400" ],
		"410481" : [ "舞钢市", "410400" ],
		"410482" : [ "汝州市", "410400" ],
		"410483" : [ "其它区", "410400" ],
		"410500" : [ "安阳市", "410000" ],
		"410502" : [ "文峰区", "410500" ],
		"410503" : [ "北关区", "410500" ],
		"410505" : [ "殷都区", "410500" ],
		"410506" : [ "龙安区", "410500" ],
		"410522" : [ "安阳县", "410500" ],
		"410523" : [ "汤阴县", "410500" ],
		"410526" : [ "滑县", "410500" ],
		"410527" : [ "内黄县", "410500" ],
		"410581" : [ "林州市", "410500" ],
		"410582" : [ "其它区", "410500" ],
		"410600" : [ "鹤壁市", "410000" ],
		"410602" : [ "鹤山区", "410600" ],
		"410603" : [ "山城区", "410600" ],
		"410611" : [ "淇滨区", "410600" ],
		"410621" : [ "浚县", "410600" ],
		"410622" : [ "淇县", "410600" ],
		"410623" : [ "其它区", "410600" ],
		"410700" : [ "新乡市", "410000" ],
		"410702" : [ "红旗区", "410700" ],
		"410703" : [ "卫滨区", "410700" ],
		"410704" : [ "凤泉区", "410700" ],
		"410711" : [ "牧野区", "410700" ],
		"410721" : [ "新乡县", "410700" ],
		"410724" : [ "获嘉县", "410700" ],
		"410725" : [ "原阳县", "410700" ],
		"410726" : [ "延津县", "410700" ],
		"410727" : [ "封丘县", "410700" ],
		"410728" : [ "长垣县", "410700" ],
		"410781" : [ "卫辉市", "410700" ],
		"410782" : [ "辉县市", "410700" ],
		"410783" : [ "其它区", "410700" ],
		"410800" : [ "焦作市", "410000" ],
		"410802" : [ "解放区", "410800" ],
		"410803" : [ "中站区", "410800" ],
		"410804" : [ "马村区", "410800" ],
		"410811" : [ "山阳区", "410800" ],
		"410821" : [ "修武县", "410800" ],
		"410822" : [ "博爱县", "410800" ],
		"410823" : [ "武陟县", "410800" ],
		"410825" : [ "温县", "410800" ],
		"410881" : [ "济源市", "410000" ],
		"410882" : [ "沁阳市", "410800" ],
		"410883" : [ "孟州市", "410800" ],
		"410884" : [ "其它区", "410800" ],
		"410900" : [ "濮阳市", "410000" ],
		"410902" : [ "华龙区", "410900" ],
		"410922" : [ "清丰县", "410900" ],
		"410923" : [ "南乐县", "410900" ],
		"410926" : [ "范县", "410900" ],
		"410927" : [ "台前县", "410900" ],
		"410928" : [ "濮阳县", "410900" ],
		"410929" : [ "其它区", "410900" ],
		"411000" : [ "许昌市", "410000" ],
		"411002" : [ "魏都区", "411000" ],
		"411023" : [ "许昌县", "411000" ],
		"411024" : [ "鄢陵县", "411000" ],
		"411025" : [ "襄城县", "411000" ],
		"411081" : [ "禹州市", "411000" ],
		"411082" : [ "长葛市", "411000" ],
		"411083" : [ "其它区", "411000" ],
		"411100" : [ "漯河市", "410000" ],
		"411102" : [ "源汇区", "411100" ],
		"411103" : [ "郾城区", "411100" ],
		"411104" : [ "召陵区", "411100" ],
		"411121" : [ "舞阳县", "411100" ],
		"411122" : [ "临颍县", "411100" ],
		"411123" : [ "其它区", "411100" ],
		"411200" : [ "三门峡市", "410000" ],
		"411202" : [ "湖滨区", "411200" ],
		"411221" : [ "渑池县", "411200" ],
		"411222" : [ "陕县", "411200" ],
		"411224" : [ "卢氏县", "411200" ],
		"411281" : [ "义马市", "411200" ],
		"411282" : [ "灵宝市", "411200" ],
		"411283" : [ "其它区", "411200" ],
		"411300" : [ "南阳市", "410000" ],
		"411302" : [ "宛城区", "411300" ],
		"411303" : [ "卧龙区", "411300" ],
		"411321" : [ "南召县", "411300" ],
		"411322" : [ "方城县", "411300" ],
		"411323" : [ "西峡县", "411300" ],
		"411324" : [ "镇平县", "411300" ],
		"411325" : [ "内乡县", "411300" ],
		"411326" : [ "淅川县", "411300" ],
		"411327" : [ "社旗县", "411300" ],
		"411328" : [ "唐河县", "411300" ],
		"411329" : [ "新野县", "411300" ],
		"411330" : [ "桐柏县", "411300" ],
		"411381" : [ "邓州市", "411300" ],
		"411382" : [ "其它区", "411300" ],
		"411400" : [ "商丘市", "410000" ],
		"411402" : [ "梁园区", "411400" ],
		"411403" : [ "睢阳区", "411400" ],
		"411421" : [ "民权县", "411400" ],
		"411422" : [ "睢县", "411400" ],
		"411423" : [ "宁陵县", "411400" ],
		"411424" : [ "柘城县", "411400" ],
		"411425" : [ "虞城县", "411400" ],
		"411426" : [ "夏邑县", "411400" ],
		"411481" : [ "永城市", "411400" ],
		"411482" : [ "其它区", "411400" ],
		"411500" : [ "信阳市", "410000" ],
		"411502" : [ "浉河区", "411500" ],
		"411503" : [ "平桥区", "411500" ],
		"411521" : [ "罗山县", "411500" ],
		"411522" : [ "光山县", "411500" ],
		"411523" : [ "新县", "411500" ],
		"411524" : [ "商城县", "411500" ],
		"411525" : [ "固始县", "411500" ],
		"411526" : [ "潢川县", "411500" ],
		"411527" : [ "淮滨县", "411500" ],
		"411528" : [ "息县", "411500" ],
		"411529" : [ "其它区", "411500" ],
		"411600" : [ "周口市", "410000" ],
		"411602" : [ "川汇区", "411600" ],
		"411621" : [ "扶沟县", "411600" ],
		"411622" : [ "西华县", "411600" ],
		"411623" : [ "商水县", "411600" ],
		"411624" : [ "沈丘县", "411600" ],
		"411625" : [ "郸城县", "411600" ],
		"411626" : [ "淮阳县", "411600" ],
		"411627" : [ "太康县", "411600" ],
		"411628" : [ "鹿邑县", "411600" ],
		"411681" : [ "项城市", "411600" ],
		"411682" : [ "其它区", "411600" ],
		"411700" : [ "驻马店市", "410000" ],
		"411702" : [ "驿城区", "411700" ],
		"411721" : [ "西平县", "411700" ],
		"411722" : [ "上蔡县", "411700" ],
		"411723" : [ "平舆县", "411700" ],
		"411724" : [ "正阳县", "411700" ],
		"411725" : [ "确山县", "411700" ],
		"411726" : [ "泌阳县", "411700" ],
		"411727" : [ "汝南县", "411700" ],
		"411728" : [ "遂平县", "411700" ],
		"411729" : [ "新蔡县", "411700" ],
		"411730" : [ "其它区", "411700" ],
		"420000" : [ "湖北省", "1" ],
		"420100" : [ "武汉市", "420000" ],
		"420102" : [ "江岸区", "420100" ],
		"420103" : [ "江汉区", "420100" ],
		"420104" : [ "硚口区", "420100" ],
		"420105" : [ "汉阳区", "420100" ],
		"420106" : [ "武昌区", "420100" ],
		"420107" : [ "青山区", "420100" ],
		"420111" : [ "洪山区", "420100" ],
		"420112" : [ "东西湖区", "420100" ],
		"420113" : [ "汉南区", "420100" ],
		"420114" : [ "蔡甸区", "420100" ],
		"420115" : [ "江夏区", "420100" ],
		"420116" : [ "黄陂区", "420100" ],
		"420117" : [ "新洲区", "420100" ],
		"420118" : [ "其它区", "420100" ],
		"420200" : [ "黄石市", "420000" ],
		"420202" : [ "黄石港区", "420200" ],
		"420203" : [ "西塞山区", "420200" ],
		"420204" : [ "下陆区", "420200" ],
		"420205" : [ "铁山区", "420200" ],
		"420222" : [ "阳新县", "420200" ],
		"420281" : [ "大冶市", "420200" ],
		"420282" : [ "其它区", "420200" ],
		"420300" : [ "十堰市", "420000" ],
		"420302" : [ "茅箭区", "420300" ],
		"420303" : [ "张湾区", "420300" ],
		"420321" : [ "郧县", "420300" ],
		"420322" : [ "郧西县", "420300" ],
		"420323" : [ "竹山县", "420300" ],
		"420324" : [ "竹溪县", "420300" ],
		"420325" : [ "房县", "420300" ],
		"420381" : [ "丹江口市", "420300" ],
		"420382" : [ "城区", "420300" ],
		"420383" : [ "其它区", "420300" ],
		"420500" : [ "宜昌市", "420000" ],
		"420502" : [ "西陵区", "420500" ],
		"420503" : [ "伍家岗区", "420500" ],
		"420504" : [ "点军区", "420500" ],
		"420505" : [ "猇亭区", "420500" ],
		"420506" : [ "夷陵区", "420500" ],
		"420525" : [ "远安县", "420500" ],
		"420526" : [ "兴山县", "420500" ],
		"420527" : [ "秭归县", "420500" ],
		"420528" : [ "长阳土家族自治县", "420500" ],
		"420529" : [ "五峰土家族自治县", "420500" ],
		"420551" : [ "葛洲坝区", "420500" ],
		"420552" : [ "开发区", "420500" ],
		"420581" : [ "宜都市", "420500" ],
		"420582" : [ "当阳市", "420500" ],
		"420583" : [ "枝江市", "420500" ],
		"420584" : [ "其它区", "420500" ],
		"420600" : [ "襄阳市", "420000" ],
		"420602" : [ "襄城区", "420600" ],
		"420606" : [ "樊城区", "420600" ],
		"420607" : [ "襄州区", "420600" ],
		"420624" : [ "南漳县", "420600" ],
		"420625" : [ "谷城县", "420600" ],
		"420626" : [ "保康县", "420600" ],
		"420682" : [ "老河口市", "420600" ],
		"420683" : [ "枣阳市", "420600" ],
		"420684" : [ "宜城市", "420600" ],
		"420685" : [ "其它区", "420600" ],
		"420700" : [ "鄂州市", "420000" ],
		"420702" : [ "梁子湖区", "420700" ],
		"420703" : [ "华容区", "420700" ],
		"420704" : [ "鄂城区", "420700" ],
		"420705" : [ "其它区", "420700" ],
		"420800" : [ "荆门市", "420000" ],
		"420802" : [ "东宝区", "420800" ],
		"420804" : [ "掇刀区", "420800" ],
		"420821" : [ "京山县", "420800" ],
		"420822" : [ "沙洋县", "420800" ],
		"420881" : [ "钟祥市", "420800" ],
		"420882" : [ "其它区", "420800" ],
		"420900" : [ "孝感市", "420000" ],
		"420902" : [ "孝南区", "420900" ],
		"420921" : [ "孝昌县", "420900" ],
		"420922" : [ "大悟县", "420900" ],
		"420923" : [ "云梦县", "420900" ],
		"420981" : [ "应城市", "420900" ],
		"420982" : [ "安陆市", "420900" ],
		"420984" : [ "汉川市", "420900" ],
		"420985" : [ "其它区", "420900" ],
		"421000" : [ "荆州市", "420000" ],
		"421002" : [ "沙市区", "421000" ],
		"421003" : [ "荆州区", "421000" ],
		"421022" : [ "公安县", "421000" ],
		"421023" : [ "监利县", "421000" ],
		"421024" : [ "江陵县", "421000" ],
		"421081" : [ "石首市", "421000" ],
		"421083" : [ "洪湖市", "421000" ],
		"421087" : [ "松滋市", "421000" ],
		"421088" : [ "其它区", "421000" ],
		"421100" : [ "黄冈市", "420000" ],
		"421102" : [ "黄州区", "421100" ],
		"421121" : [ "团风县", "421100" ],
		"421122" : [ "红安县", "421100" ],
		"421123" : [ "罗田县", "421100" ],
		"421124" : [ "英山县", "421100" ],
		"421125" : [ "浠水县", "421100" ],
		"421126" : [ "蕲春县", "421100" ],
		"421127" : [ "黄梅县", "421100" ],
		"421181" : [ "麻城市", "421100" ],
		"421182" : [ "武穴市", "421100" ],
		"421183" : [ "其它区", "421100" ],
		"421200" : [ "咸宁市", "420000" ],
		"421202" : [ "咸安区", "421200" ],
		"421221" : [ "嘉鱼县", "421200" ],
		"421222" : [ "通城县", "421200" ],
		"421223" : [ "崇阳县", "421200" ],
		"421224" : [ "通山县", "421200" ],
		"421281" : [ "赤壁市", "421200" ],
		"421282" : [ "温泉城区", "421200" ],
		"421283" : [ "其它区", "421200" ],
		"421300" : [ "随州市", "420000" ],
		"421302" : [ "曾都区", "421300" ],
		"421321" : [ "随县", "421300" ],
		"421381" : [ "广水市", "421300" ],
		"421382" : [ "其它区", "421300" ],
		"422800" : [ "恩施土家族苗族自治州", "420000" ],
		"422801" : [ "恩施市", "422800" ],
		"422802" : [ "利川市", "422800" ],
		"422822" : [ "建始县", "422800" ],
		"422823" : [ "巴东县", "422800" ],
		"422825" : [ "宣恩县", "422800" ],
		"422826" : [ "咸丰县", "422800" ],
		"422827" : [ "来凤县", "422800" ],
		"422828" : [ "鹤峰县", "422800" ],
		"422829" : [ "其它区", "422800" ],
		"429004" : [ "仙桃市", "420000" ],
		"429005" : [ "潜江市", "420000" ],
		"429006" : [ "天门市", "420000" ],
		"429021" : [ "神农架林区", "420000" ],
		"430000" : [ "湖南省", "1" ],
		"430100" : [ "长沙市", "430000" ],
		"430102" : [ "芙蓉区", "430100" ],
		"430103" : [ "天心区", "430100" ],
		"430104" : [ "岳麓区", "430100" ],
		"430105" : [ "开福区", "430100" ],
		"430111" : [ "雨花区", "430100" ],
		"430121" : [ "长沙县", "430100" ],
		"430122" : [ "望城县", "430100" ],
		"430124" : [ "宁乡县", "430100" ],
		"430181" : [ "浏阳市", "430100" ],
		"430182" : [ "其它区", "430100" ],
		"430200" : [ "株洲市", "430000" ],
		"430202" : [ "荷塘区", "430200" ],
		"430203" : [ "芦淞区", "430200" ],
		"430204" : [ "石峰区", "430200" ],
		"430211" : [ "天元区", "430200" ],
		"430221" : [ "株洲县", "430200" ],
		"430223" : [ "攸县", "430200" ],
		"430224" : [ "茶陵县", "430200" ],
		"430225" : [ "炎陵县", "430200" ],
		"430281" : [ "醴陵市", "430200" ],
		"430282" : [ "其它区", "430200" ],
		"430300" : [ "湘潭市", "430000" ],
		"430302" : [ "雨湖区", "430300" ],
		"430304" : [ "岳塘区", "430300" ],
		"430321" : [ "湘潭县", "430300" ],
		"430381" : [ "湘乡市", "430300" ],
		"430382" : [ "韶山市", "430300" ],
		"430383" : [ "其它区", "430300" ],
		"430400" : [ "衡阳市", "430000" ],
		"430405" : [ "珠晖区", "430400" ],
		"430406" : [ "雁峰区", "430400" ],
		"430407" : [ "石鼓区", "430400" ],
		"430408" : [ "蒸湘区", "430400" ],
		"430412" : [ "南岳区", "430400" ],
		"430421" : [ "衡阳县", "430400" ],
		"430422" : [ "衡南县", "430400" ],
		"430423" : [ "衡山县", "430400" ],
		"430424" : [ "衡东县", "430400" ],
		"430426" : [ "祁东县", "430400" ],
		"430481" : [ "耒阳市", "430400" ],
		"430482" : [ "常宁市", "430400" ],
		"430483" : [ "其它区", "430400" ],
		"430500" : [ "邵阳市", "430000" ],
		"430502" : [ "双清区", "430500" ],
		"430503" : [ "大祥区", "430500" ],
		"430511" : [ "北塔区", "430500" ],
		"430521" : [ "邵东县", "430500" ],
		"430522" : [ "新邵县", "430500" ],
		"430523" : [ "邵阳县", "430500" ],
		"430524" : [ "隆回县", "430500" ],
		"430525" : [ "洞口县", "430500" ],
		"430527" : [ "绥宁县", "430500" ],
		"430528" : [ "新宁县", "430500" ],
		"430529" : [ "城步苗族自治县", "430500" ],
		"430581" : [ "武冈市", "430500" ],
		"430582" : [ "其它区", "430500" ],
		"430600" : [ "岳阳市", "430000" ],
		"430602" : [ "岳阳楼区", "430600" ],
		"430603" : [ "云溪区", "430600" ],
		"430611" : [ "君山区", "430600" ],
		"430621" : [ "岳阳县", "430600" ],
		"430623" : [ "华容县", "430600" ],
		"430624" : [ "湘阴县", "430600" ],
		"430626" : [ "平江县", "430600" ],
		"430681" : [ "汨罗市", "430600" ],
		"430682" : [ "临湘市", "430600" ],
		"430683" : [ "其它区", "430600" ],
		"430700" : [ "常德市", "430000" ],
		"430702" : [ "武陵区", "430700" ],
		"430703" : [ "鼎城区", "430700" ],
		"430721" : [ "安乡县", "430700" ],
		"430722" : [ "汉寿县", "430700" ],
		"430723" : [ "澧县", "430700" ],
		"430724" : [ "临澧县", "430700" ],
		"430725" : [ "桃源县", "430700" ],
		"430726" : [ "石门县", "430700" ],
		"430781" : [ "津市市", "430700" ],
		"430782" : [ "其它区", "430700" ],
		"430800" : [ "张家界市", "430000" ],
		"430802" : [ "永定区", "430800" ],
		"430811" : [ "武陵源区", "430800" ],
		"430821" : [ "慈利县", "430800" ],
		"430822" : [ "桑植县", "430800" ],
		"430823" : [ "其它区", "430800" ],
		"430900" : [ "益阳市", "430000" ],
		"430902" : [ "资阳区", "430900" ],
		"430903" : [ "赫山区", "430900" ],
		"430921" : [ "南县", "430900" ],
		"430922" : [ "桃江县", "430900" ],
		"430923" : [ "安化县", "430900" ],
		"430981" : [ "沅江市", "430900" ],
		"430982" : [ "其它区", "430900" ],
		"431000" : [ "郴州市", "430000" ],
		"431002" : [ "北湖区", "431000" ],
		"431003" : [ "苏仙区", "431000" ],
		"431021" : [ "桂阳县", "431000" ],
		"431022" : [ "宜章县", "431000" ],
		"431023" : [ "永兴县", "431000" ],
		"431024" : [ "嘉禾县", "431000" ],
		"431025" : [ "临武县", "431000" ],
		"431026" : [ "汝城县", "431000" ],
		"431027" : [ "桂东县", "431000" ],
		"431028" : [ "安仁县", "431000" ],
		"431081" : [ "资兴市", "431000" ],
		"431082" : [ "其它区", "431000" ],
		"431100" : [ "永州市", "430000" ],
		"431102" : [ "零陵区", "431100" ],
		"431103" : [ "冷水滩区", "431100" ],
		"431121" : [ "祁阳县", "431100" ],
		"431122" : [ "东安县", "431100" ],
		"431123" : [ "双牌县", "431100" ],
		"431124" : [ "道县", "431100" ],
		"431125" : [ "江永县", "431100" ],
		"431126" : [ "宁远县", "431100" ],
		"431127" : [ "蓝山县", "431100" ],
		"431128" : [ "新田县", "431100" ],
		"431129" : [ "江华瑶族自治县", "431100" ],
		"431130" : [ "其它区", "431100" ],
		"431200" : [ "怀化市", "430000" ],
		"431202" : [ "鹤城区", "431200" ],
		"431221" : [ "中方县", "431200" ],
		"431222" : [ "沅陵县", "431200" ],
		"431223" : [ "辰溪县", "431200" ],
		"431224" : [ "溆浦县", "431200" ],
		"431225" : [ "会同县", "431200" ],
		"431226" : [ "麻阳苗族自治县", "431200" ],
		"431227" : [ "新晃侗族自治县", "431200" ],
		"431228" : [ "芷江侗族自治县", "431200" ],
		"431229" : [ "靖州苗族侗族自治县", "431200" ],
		"431230" : [ "通道侗族自治县", "431200" ],
		"431281" : [ "洪江市", "431200" ],
		"431282" : [ "其它区", "431200" ],
		"431300" : [ "娄底市", "430000" ],
		"431302" : [ "娄星区", "431300" ],
		"431321" : [ "双峰县", "431300" ],
		"431322" : [ "新化县", "431300" ],
		"431381" : [ "冷水江市", "431300" ],
		"431382" : [ "涟源市", "431300" ],
		"431383" : [ "其它区", "431300" ],
		"433100" : [ "湘西土家族苗族自治州", "430000" ],
		"433101" : [ "吉首市", "433100" ],
		"433122" : [ "泸溪县", "433100" ],
		"433123" : [ "凤凰县", "433100" ],
		"433124" : [ "花垣县", "433100" ],
		"433125" : [ "保靖县", "433100" ],
		"433126" : [ "古丈县", "433100" ],
		"433127" : [ "永顺县", "433100" ],
		"433130" : [ "龙山县", "433100" ],
		"433131" : [ "其它区", "433100" ],
		"440000" : [ "广东省", "1" ],
		"440100" : [ "广州市", "440000" ],
		"440103" : [ "荔湾区", "440100" ],
		"440104" : [ "越秀区", "440100" ],
		"440105" : [ "海珠区", "440100" ],
		"440106" : [ "天河区", "440100" ],
		"440111" : [ "白云区", "440100" ],
		"440112" : [ "黄埔区", "440100" ],
		"440113" : [ "番禺区", "440100" ],
		"440114" : [ "花都区", "440100" ],
		"440115" : [ "南沙区", "440100" ],
		"440116" : [ "萝岗区", "440100" ],
		"440183" : [ "增城市", "440100" ],
		"440184" : [ "从化市", "440100" ],
		"440188" : [ "东山区", "440100" ],
		"440189" : [ "其它区", "440100" ],
		"440200" : [ "韶关市", "440000" ],
		"440203" : [ "武江区", "440200" ],
		"440204" : [ "浈江区", "440200" ],
		"440205" : [ "曲江区", "440200" ],
		"440222" : [ "始兴县", "440200" ],
		"440224" : [ "仁化县", "440200" ],
		"440229" : [ "翁源县", "440200" ],
		"440232" : [ "乳源瑶族自治县", "440200" ],
		"440233" : [ "新丰县", "440200" ],
		"440281" : [ "乐昌市", "440200" ],
		"440282" : [ "南雄市", "440200" ],
		"440283" : [ "其它区", "440200" ],
		"440300" : [ "深圳市", "440000" ],
		"440303" : [ "罗湖区", "440300" ],
		"440304" : [ "福田区", "440300" ],
		"440305" : [ "南山区", "440300" ],
		"440306" : [ "宝安区", "440300" ],
		"440307" : [ "龙岗区", "440300" ],
		"440308" : [ "盐田区", "440300" ],
		"440309" : [ "其它区", "440300" ],
		"440400" : [ "珠海市", "440000" ],
		"440402" : [ "香洲区", "440400" ],
		"440403" : [ "斗门区", "440400" ],
		"440404" : [ "金湾区", "440400" ],
		"440486" : [ "金唐区", "440400" ],
		"440487" : [ "南湾区", "440400" ],
		"440488" : [ "其它区", "440400" ],
		"440500" : [ "汕头市", "440000" ],
		"440507" : [ "龙湖区", "440500" ],
		"440511" : [ "金平区", "440500" ],
		"440512" : [ "濠江区", "440500" ],
		"440513" : [ "潮阳区", "440500" ],
		"440514" : [ "潮南区", "440500" ],
		"440515" : [ "澄海区", "440500" ],
		"440523" : [ "南澳县", "440500" ],
		"440524" : [ "其它区", "440500" ],
		"440600" : [ "佛山市", "440000" ],
		"440604" : [ "禅城区", "440600" ],
		"440605" : [ "南海区", "440600" ],
		"440606" : [ "顺德区", "440600" ],
		"440607" : [ "三水区", "440600" ],
		"440608" : [ "高明区", "440600" ],
		"440609" : [ "其它区", "440600" ],
		"440700" : [ "江门市", "440000" ],
		"440703" : [ "蓬江区", "440700" ],
		"440704" : [ "江海区", "440700" ],
		"440705" : [ "新会区", "440700" ],
		"440781" : [ "台山市", "440700" ],
		"440783" : [ "开平市", "440700" ],
		"440784" : [ "鹤山市", "440700" ],
		"440785" : [ "恩平市", "440700" ],
		"440786" : [ "其它区", "440700" ],
		"440800" : [ "湛江市", "440000" ],
		"440802" : [ "赤坎区", "440800" ],
		"440803" : [ "霞山区", "440800" ],
		"440804" : [ "坡头区", "440800" ],
		"440811" : [ "麻章区", "440800" ],
		"440823" : [ "遂溪县", "440800" ],
		"440825" : [ "徐闻县", "440800" ],
		"440881" : [ "廉江市", "440800" ],
		"440882" : [ "雷州市", "440800" ],
		"440883" : [ "吴川市", "440800" ],
		"440884" : [ "其它区", "440800" ],
		"440900" : [ "茂名市", "440000" ],
		"440902" : [ "茂南区", "440900" ],
		"440903" : [ "茂港区", "440900" ],
		"440923" : [ "电白县", "440900" ],
		"440981" : [ "高州市", "440900" ],
		"440982" : [ "化州市", "440900" ],
		"440983" : [ "信宜市", "440900" ],
		"440984" : [ "其它区", "440900" ],
		"441200" : [ "肇庆市", "440000" ],
		"441202" : [ "端州区", "441200" ],
		"441203" : [ "鼎湖区", "441200" ],
		"441223" : [ "广宁县", "441200" ],
		"441224" : [ "怀集县", "441200" ],
		"441225" : [ "封开县", "441200" ],
		"441226" : [ "德庆县", "441200" ],
		"441283" : [ "高要市", "441200" ],
		"441284" : [ "四会市", "441200" ],
		"441285" : [ "其它区", "441200" ],
		"441300" : [ "惠州市", "440000" ],
		"441302" : [ "惠城区", "441300" ],
		"441303" : [ "惠阳区", "441300" ],
		"441322" : [ "博罗县", "441300" ],
		"441323" : [ "惠东县", "441300" ],
		"441324" : [ "龙门县", "441300" ],
		"441325" : [ "其它区", "441300" ],
		"441400" : [ "梅州市", "440000" ],
		"441402" : [ "梅江区", "441400" ],
		"441421" : [ "梅县", "441400" ],
		"441422" : [ "大埔县", "441400" ],
		"441423" : [ "丰顺县", "441400" ],
		"441424" : [ "五华县", "441400" ],
		"441426" : [ "平远县", "441400" ],
		"441427" : [ "蕉岭县", "441400" ],
		"441481" : [ "兴宁市", "441400" ],
		"441482" : [ "其它区", "441400" ],
		"441500" : [ "汕尾市", "440000" ],
		"441502" : [ "城区", "441500" ],
		"441521" : [ "海丰县", "441500" ],
		"441523" : [ "陆河县", "441500" ],
		"441581" : [ "陆丰市", "441500" ],
		"441582" : [ "其它区", "441500" ],
		"441600" : [ "河源市", "440000" ],
		"441602" : [ "源城区", "441600" ],
		"441621" : [ "紫金县", "441600" ],
		"441622" : [ "龙川县", "441600" ],
		"441623" : [ "连平县", "441600" ],
		"441624" : [ "和平县", "441600" ],
		"441625" : [ "东源县", "441600" ],
		"441626" : [ "其它区", "441600" ],
		"441700" : [ "阳江市", "440000" ],
		"441702" : [ "江城区", "441700" ],
		"441721" : [ "阳西县", "441700" ],
		"441723" : [ "阳东县", "441700" ],
		"441781" : [ "阳春市", "441700" ],
		"441782" : [ "其它区", "441700" ],
		"441800" : [ "清远市", "440000" ],
		"441802" : [ "清城区", "441800" ],
		"441821" : [ "佛冈县", "441800" ],
		"441823" : [ "阳山县", "441800" ],
		"441825" : [ "连山壮族瑶族自治县", "441800" ],
		"441826" : [ "连南瑶族自治县", "441800" ],
		"441827" : [ "清新县", "441800" ],
		"441881" : [ "英德市", "441800" ],
		"441882" : [ "连州市", "441800" ],
		"441883" : [ "其它区", "441800" ],
		"441900" : [ "东莞市", "440000" ],
		"442000" : [ "中山市", "440000" ],
		"445100" : [ "潮州市", "440000" ],
		"445102" : [ "湘桥区", "445100" ],
		"445121" : [ "潮安县", "445100" ],
		"445122" : [ "饶平县", "445100" ],
		"445185" : [ "枫溪区", "445100" ],
		"445186" : [ "其它区", "445100" ],
		"445200" : [ "揭阳市", "440000" ],
		"445202" : [ "榕城区", "445200" ],
		"445221" : [ "揭东县", "445200" ],
		"445222" : [ "揭西县", "445200" ],
		"445224" : [ "惠来县", "445200" ],
		"445281" : [ "普宁市", "445200" ],
		"445284" : [ "东山区", "445200" ],
		"445285" : [ "其它区", "445200" ],
		"445300" : [ "云浮市", "440000" ],
		"445302" : [ "云城区", "445300" ],
		"445321" : [ "新兴县", "445300" ],
		"445322" : [ "郁南县", "445300" ],
		"445323" : [ "云安县", "445300" ],
		"445381" : [ "罗定市", "445300" ],
		"445382" : [ "其它区", "445300" ],
		"450000" : [ "广西壮族自治区", "1" ],
		"450100" : [ "南宁市", "450000" ],
		"450102" : [ "兴宁区", "450100" ],
		"450103" : [ "青秀区", "450100" ],
		"450105" : [ "江南区", "450100" ],
		"450107" : [ "西乡塘区", "450100" ],
		"450108" : [ "良庆区", "450100" ],
		"450109" : [ "邕宁区", "450100" ],
		"450122" : [ "武鸣县", "450100" ],
		"450123" : [ "隆安县", "450100" ],
		"450124" : [ "马山县", "450100" ],
		"450125" : [ "上林县", "450100" ],
		"450126" : [ "宾阳县", "450100" ],
		"450127" : [ "横县", "450100" ],
		"450128" : [ "其它区", "450100" ],
		"450200" : [ "柳州市", "450000" ],
		"450202" : [ "城中区", "450200" ],
		"450203" : [ "鱼峰区", "450200" ],
		"450204" : [ "柳南区", "450200" ],
		"450205" : [ "柳北区", "450200" ],
		"450221" : [ "柳江县", "450200" ],
		"450222" : [ "柳城县", "450200" ],
		"450223" : [ "鹿寨县", "450200" ],
		"450224" : [ "融安县", "450200" ],
		"450225" : [ "融水苗族自治县", "450200" ],
		"450226" : [ "三江侗族自治县", "450200" ],
		"450227" : [ "其它区", "450200" ],
		"450300" : [ "桂林市", "450000" ],
		"450302" : [ "秀峰区", "450300" ],
		"450303" : [ "叠彩区", "450300" ],
		"450304" : [ "象山区", "450300" ],
		"450305" : [ "七星区", "450300" ],
		"450311" : [ "雁山区", "450300" ],
		"450321" : [ "阳朔县", "450300" ],
		"450322" : [ "临桂县", "450300" ],
		"450323" : [ "灵川县", "450300" ],
		"450324" : [ "全州县", "450300" ],
		"450325" : [ "兴安县", "450300" ],
		"450326" : [ "永福县", "450300" ],
		"450327" : [ "灌阳县", "450300" ],
		"450328" : [ "龙胜各族自治县", "450300" ],
		"450329" : [ "资源县", "450300" ],
		"450330" : [ "平乐县", "450300" ],
		"450331" : [ "荔浦县", "450300" ],
		"450332" : [ "恭城瑶族自治县", "450300" ],
		"450333" : [ "其它区", "450300" ],
		"450400" : [ "梧州市", "450000" ],
		"450403" : [ "万秀区", "450400" ],
		"450404" : [ "蝶山区", "450400" ],
		"450405" : [ "长洲区", "450400" ],
		"450421" : [ "苍梧县", "450400" ],
		"450422" : [ "藤县", "450400" ],
		"450423" : [ "蒙山县", "450400" ],
		"450481" : [ "岑溪市", "450400" ],
		"450482" : [ "其它区", "450400" ],
		"450500" : [ "北海市", "450000" ],
		"450502" : [ "海城区", "450500" ],
		"450503" : [ "银海区", "450500" ],
		"450512" : [ "铁山港区", "450500" ],
		"450521" : [ "合浦县", "450500" ],
		"450522" : [ "其它区", "450500" ],
		"450600" : [ "防城港市", "450000" ],
		"450602" : [ "港口区", "450600" ],
		"450603" : [ "防城区", "450600" ],
		"450621" : [ "上思县", "450600" ],
		"450681" : [ "东兴市", "450600" ],
		"450682" : [ "其它区", "450600" ],
		"450700" : [ "钦州市", "450000" ],
		"450702" : [ "钦南区", "450700" ],
		"450703" : [ "钦北区", "450700" ],
		"450721" : [ "灵山县", "450700" ],
		"450722" : [ "浦北县", "450700" ],
		"450723" : [ "其它区", "450700" ],
		"450800" : [ "贵港市", "450000" ],
		"450802" : [ "港北区", "450800" ],
		"450803" : [ "港南区", "450800" ],
		"450804" : [ "覃塘区", "450800" ],
		"450821" : [ "平南县", "450800" ],
		"450881" : [ "桂平市", "450800" ],
		"450882" : [ "其它区", "450800" ],
		"450900" : [ "玉林市", "450000" ],
		"450902" : [ "玉州区", "450900" ],
		"450921" : [ "容县", "450900" ],
		"450922" : [ "陆川县", "450900" ],
		"450923" : [ "博白县", "450900" ],
		"450924" : [ "兴业县", "450900" ],
		"450981" : [ "北流市", "450900" ],
		"450982" : [ "其它区", "450900" ],
		"451000" : [ "百色市", "450000" ],
		"451002" : [ "右江区", "451000" ],
		"451021" : [ "田阳县", "451000" ],
		"451022" : [ "田东县", "451000" ],
		"451023" : [ "平果县", "451000" ],
		"451024" : [ "德保县", "451000" ],
		"451025" : [ "靖西县", "451000" ],
		"451026" : [ "那坡县", "451000" ],
		"451027" : [ "凌云县", "451000" ],
		"451028" : [ "乐业县", "451000" ],
		"451029" : [ "田林县", "451000" ],
		"451030" : [ "西林县", "451000" ],
		"451031" : [ "隆林各族自治县", "451000" ],
		"451032" : [ "其它区", "451000" ],
		"451100" : [ "贺州市", "450000" ],
		"451102" : [ "八步区", "451100" ],
		"451121" : [ "昭平县", "451100" ],
		"451122" : [ "钟山县", "451100" ],
		"451123" : [ "富川瑶族自治县", "451100" ],
		"451124" : [ "其它区", "451100" ],
		"451200" : [ "河池市", "450000" ],
		"451202" : [ "金城江区", "451200" ],
		"451221" : [ "南丹县", "451200" ],
		"451222" : [ "天峨县", "451200" ],
		"451223" : [ "凤山县", "451200" ],
		"451224" : [ "东兰县", "451200" ],
		"451225" : [ "罗城仫佬族自治县", "451200" ],
		"451226" : [ "环江毛南族自治县", "451200" ],
		"451227" : [ "巴马瑶族自治县", "451200" ],
		"451228" : [ "都安瑶族自治县", "451200" ],
		"451229" : [ "大化瑶族自治县", "451200" ],
		"451281" : [ "宜州市", "451200" ],
		"451282" : [ "其它区", "451200" ],
		"451300" : [ "来宾市", "450000" ],
		"451302" : [ "兴宾区", "451300" ],
		"451321" : [ "忻城县", "451300" ],
		"451322" : [ "象州县", "451300" ],
		"451323" : [ "武宣县", "451300" ],
		"451324" : [ "金秀瑶族自治县", "451300" ],
		"451381" : [ "合山市", "451300" ],
		"451382" : [ "其它区", "451300" ],
		"451400" : [ "崇左市", "450000" ],
		"451402" : [ "江州区", "451400" ],
		"451421" : [ "扶绥县", "451400" ],
		"451422" : [ "宁明县", "451400" ],
		"451423" : [ "龙州县", "451400" ],
		"451424" : [ "大新县", "451400" ],
		"451425" : [ "天等县", "451400" ],
		"451481" : [ "凭祥市", "451400" ],
		"451482" : [ "其它区", "451400" ],
		"460000" : [ "海南省", "1" ],
		"460100" : [ "海口市", "460000" ],
		"460105" : [ "秀英区", "460100" ],
		"460106" : [ "龙华区", "460100" ],
		"460107" : [ "琼山区", "460100" ],
		"460108" : [ "美兰区", "460100" ],
		"460109" : [ "其它区", "460100" ],
		"460200" : [ "三亚市", "460000" ],
		"469001" : [ "五指山市", "460000" ],
		"469002" : [ "琼海市", "460000" ],
		"469003" : [ "儋州市", "460000" ],
		"469005" : [ "文昌市", "460000" ],
		"469006" : [ "万宁市", "460000" ],
		"469007" : [ "东方市", "460000" ],
		"469025" : [ "定安县", "460000" ],
		"469026" : [ "屯昌县", "460000" ],
		"469027" : [ "澄迈县", "460000" ],
		"469028" : [ "临高县", "460000" ],
		"469030" : [ "白沙黎族自治县", "460000" ],
		"469031" : [ "昌江黎族自治县", "460000" ],
		"469033" : [ "乐东黎族自治县", "460000" ],
		"469034" : [ "陵水黎族自治县", "460000" ],
		"469035" : [ "保亭黎族苗族自治县", "460000" ],
		"469036" : [ "琼中黎族苗族自治县", "460000" ],
		"469037" : [ "西沙群岛", "460000" ],
		"469038" : [ "南沙群岛", "460000" ],
		"469039" : [ "中沙群岛的岛礁及其海域", "460000" ],
		"471004" : [ "高新区", "410300" ],
		"471005" : [ "其它区", "410300" ],
		"500000" : [ "重庆", "1" ],
		"500100" : [ "重庆市", "500000" ],
		"500101" : [ "万州区", "500100" ],
		"500102" : [ "涪陵区", "500100" ],
		"500103" : [ "渝中区", "500100" ],
		"500104" : [ "大渡口区", "500100" ],
		"500105" : [ "江北区", "500100" ],
		"500106" : [ "沙坪坝区", "500100" ],
		"500107" : [ "九龙坡区", "500100" ],
		"500108" : [ "南岸区", "500100" ],
		"500109" : [ "北碚区", "500100" ],
		"500110" : [ "万盛区", "500100" ],
		"500111" : [ "双桥区", "500100" ],
		"500112" : [ "渝北区", "500100" ],
		"500113" : [ "巴南区", "500100" ],
		"500114" : [ "黔江区", "500100" ],
		"500115" : [ "长寿区", "500100" ],
		"500222" : [ "綦江县", "500100" ],
		"500223" : [ "潼南县", "500100" ],
		"500224" : [ "铜梁县", "500100" ],
		"500225" : [ "大足县", "500100" ],
		"500226" : [ "荣昌县", "500100" ],
		"500227" : [ "璧山县", "500100" ],
		"500228" : [ "梁平县", "500100" ],
		"500229" : [ "城口县", "500100" ],
		"500230" : [ "丰都县", "500100" ],
		"500231" : [ "垫江县", "500100" ],
		"500232" : [ "武隆县", "500100" ],
		"500233" : [ "忠县", "500100" ],
		"500234" : [ "开县", "500100" ],
		"500235" : [ "云阳县", "500100" ],
		"500236" : [ "奉节县", "500100" ],
		"500237" : [ "巫山县", "500100" ],
		"500238" : [ "巫溪县", "500100" ],
		"500240" : [ "石柱土家族自治县", "500100" ],
		"500241" : [ "秀山土家族苗族自治县", "500100" ],
		"500242" : [ "酉阳土家族苗族自治县", "500100" ],
		"500243" : [ "彭水苗族土家族自治县", "500100" ],
		"500381" : [ "江津区", "500100" ],
		"500382" : [ "合川区", "500100" ],
		"500383" : [ "永川区", "500100" ],
		"500384" : [ "南川区", "500100" ],
		"500385" : [ "其它区", "500100" ],
		"510000" : [ "四川省", "1" ],
		"510100" : [ "成都市", "510000" ],
		"510104" : [ "锦江区", "510100" ],
		"510105" : [ "青羊区", "510100" ],
		"510106" : [ "金牛区", "510100" ],
		"510107" : [ "武侯区", "510100" ],
		"510108" : [ "成华区", "510100" ],
		"510112" : [ "龙泉驿区", "510100" ],
		"510113" : [ "青白江区", "510100" ],
		"510114" : [ "新都区", "510100" ],
		"510115" : [ "温江区", "510100" ],
		"510121" : [ "金堂县", "510100" ],
		"510122" : [ "双流县", "510100" ],
		"510124" : [ "郫县", "510100" ],
		"510129" : [ "大邑县", "510100" ],
		"510131" : [ "蒲江县", "510100" ],
		"510132" : [ "新津县", "510100" ],
		"510181" : [ "都江堰市", "510100" ],
		"510182" : [ "彭州市", "510100" ],
		"510183" : [ "邛崃市", "510100" ],
		"510184" : [ "崇州市", "510100" ],
		"510185" : [ "其它区", "510100" ],
		"510300" : [ "自贡市", "510000" ],
		"510302" : [ "自流井区", "510300" ],
		"510303" : [ "贡井区", "510300" ],
		"510304" : [ "大安区", "510300" ],
		"510311" : [ "沿滩区", "510300" ],
		"510321" : [ "荣县", "510300" ],
		"510322" : [ "富顺县", "510300" ],
		"510323" : [ "其它区", "510300" ],
		"510400" : [ "攀枝花市", "510000" ],
		"510402" : [ "东区", "510400" ],
		"510403" : [ "西区", "510400" ],
		"510411" : [ "仁和区", "510400" ],
		"510421" : [ "米易县", "510400" ],
		"510422" : [ "盐边县", "510400" ],
		"510423" : [ "其它区", "510400" ],
		"510500" : [ "泸州市", "510000" ],
		"510502" : [ "江阳区", "510500" ],
		"510503" : [ "纳溪区", "510500" ],
		"510504" : [ "龙马潭区", "510500" ],
		"510521" : [ "泸县", "510500" ],
		"510522" : [ "合江县", "510500" ],
		"510524" : [ "叙永县", "510500" ],
		"510525" : [ "古蔺县", "510500" ],
		"510526" : [ "其它区", "510500" ],
		"510600" : [ "德阳市", "510000" ],
		"510603" : [ "旌阳区", "510600" ],
		"510623" : [ "中江县", "510600" ],
		"510626" : [ "罗江县", "510600" ],
		"510681" : [ "广汉市", "510600" ],
		"510682" : [ "什邡市", "510600" ],
		"510683" : [ "绵竹市", "510600" ],
		"510684" : [ "其它区", "510600" ],
		"510700" : [ "绵阳市", "510000" ],
		"510703" : [ "涪城区", "510700" ],
		"510704" : [ "游仙区", "510700" ],
		"510722" : [ "三台县", "510700" ],
		"510723" : [ "盐亭县", "510700" ],
		"510724" : [ "安县", "510700" ],
		"510725" : [ "梓潼县", "510700" ],
		"510726" : [ "北川羌族自治县", "510700" ],
		"510727" : [ "平武县", "510700" ],
		"510751" : [ "高新区", "510700" ],
		"510781" : [ "江油市", "510700" ],
		"510782" : [ "其它区", "510700" ],
		"510800" : [ "广元市", "510000" ],
		"510802" : [ "利州区", "510800" ],
		"510811" : [ "元坝区", "510800" ],
		"510812" : [ "朝天区", "510800" ],
		"510821" : [ "旺苍县", "510800" ],
		"510822" : [ "青川县", "510800" ],
		"510823" : [ "剑阁县", "510800" ],
		"510824" : [ "苍溪县", "510800" ],
		"510825" : [ "其它区", "510800" ],
		"510900" : [ "遂宁市", "510000" ],
		"510903" : [ "船山区", "510900" ],
		"510904" : [ "安居区", "510900" ],
		"510921" : [ "蓬溪县", "510900" ],
		"510922" : [ "射洪县", "510900" ],
		"510923" : [ "大英县", "510900" ],
		"510924" : [ "其它区", "510900" ],
		"511000" : [ "内江市", "510000" ],
		"511002" : [ "市中区", "511000" ],
		"511011" : [ "东兴区", "511000" ],
		"511024" : [ "威远县", "511000" ],
		"511025" : [ "资中县", "511000" ],
		"511028" : [ "隆昌县", "511000" ],
		"511029" : [ "其它区", "511000" ],
		"511100" : [ "乐山市", "510000" ],
		"511102" : [ "市中区", "511100" ],
		"511111" : [ "沙湾区", "511100" ],
		"511112" : [ "五通桥区", "511100" ],
		"511113" : [ "金口河区", "511100" ],
		"511123" : [ "犍为县", "511100" ],
		"511124" : [ "井研县", "511100" ],
		"511126" : [ "夹江县", "511100" ],
		"511129" : [ "沐川县", "511100" ],
		"511132" : [ "峨边彝族自治县", "511100" ],
		"511133" : [ "马边彝族自治县", "511100" ],
		"511181" : [ "峨眉山市", "511100" ],
		"511182" : [ "其它区", "511100" ],
		"511300" : [ "南充市", "510000" ],
		"511302" : [ "顺庆区", "511300" ],
		"511303" : [ "高坪区", "511300" ],
		"511304" : [ "嘉陵区", "511300" ],
		"511321" : [ "南部县", "511300" ],
		"511322" : [ "营山县", "511300" ],
		"511323" : [ "蓬安县", "511300" ],
		"511324" : [ "仪陇县", "511300" ],
		"511325" : [ "西充县", "511300" ],
		"511381" : [ "阆中市", "511300" ],
		"511382" : [ "其它区", "511300" ],
		"511400" : [ "眉山市", "510000" ],
		"511402" : [ "东坡区", "511400" ],
		"511421" : [ "仁寿县", "511400" ],
		"511422" : [ "彭山县", "511400" ],
		"511423" : [ "洪雅县", "511400" ],
		"511424" : [ "丹棱县", "511400" ],
		"511425" : [ "青神县", "511400" ],
		"511426" : [ "其它区", "511400" ],
		"511500" : [ "宜宾市", "510000" ],
		"511502" : [ "翠屏区", "511500" ],
		"511521" : [ "宜宾县", "511500" ],
		"511522" : [ "南溪县", "511500" ],
		"511523" : [ "江安县", "511500" ],
		"511524" : [ "长宁县", "511500" ],
		"511525" : [ "高县", "511500" ],
		"511526" : [ "珙县", "511500" ],
		"511527" : [ "筠连县", "511500" ],
		"511528" : [ "兴文县", "511500" ],
		"511529" : [ "屏山县", "511500" ],
		"511530" : [ "其它区", "511500" ],
		"511600" : [ "广安市", "510000" ],
		"511602" : [ "广安区", "511600" ],
		"511621" : [ "岳池县", "511600" ],
		"511622" : [ "武胜县", "511600" ],
		"511623" : [ "邻水县", "511600" ],
		"511681" : [ "华蓥市", "511600" ],
		"511682" : [ "市辖区", "511600" ],
		"511683" : [ "其它区", "511600" ],
		"511700" : [ "达州市", "510000" ],
		"511702" : [ "通川区", "511700" ],
		"511721" : [ "达县", "511700" ],
		"511722" : [ "宣汉县", "511700" ],
		"511723" : [ "开江县", "511700" ],
		"511724" : [ "大竹县", "511700" ],
		"511725" : [ "渠县", "511700" ],
		"511781" : [ "万源市", "511700" ],
		"511782" : [ "其它区", "511700" ],
		"511800" : [ "雅安市", "510000" ],
		"511802" : [ "雨城区", "511800" ],
		"511821" : [ "名山县", "511800" ],
		"511822" : [ "荥经县", "511800" ],
		"511823" : [ "汉源县", "511800" ],
		"511824" : [ "石棉县", "511800" ],
		"511825" : [ "天全县", "511800" ],
		"511826" : [ "芦山县", "511800" ],
		"511827" : [ "宝兴县", "511800" ],
		"511828" : [ "其它区", "511800" ],
		"511900" : [ "巴中市", "510000" ],
		"511902" : [ "巴州区", "511900" ],
		"511921" : [ "通江县", "511900" ],
		"511922" : [ "南江县", "511900" ],
		"511923" : [ "平昌县", "511900" ],
		"511924" : [ "其它区", "511900" ],
		"512000" : [ "资阳市", "510000" ],
		"512002" : [ "雁江区", "512000" ],
		"512021" : [ "安岳县", "512000" ],
		"512022" : [ "乐至县", "512000" ],
		"512081" : [ "简阳市", "512000" ],
		"512082" : [ "其它区", "512000" ],
		"513200" : [ "阿坝藏族羌族自治州", "510000" ],
		"513221" : [ "汶川县", "513200" ],
		"513222" : [ "理县", "513200" ],
		"513223" : [ "茂县", "513200" ],
		"513224" : [ "松潘县", "513200" ],
		"513225" : [ "九寨沟县", "513200" ],
		"513226" : [ "金川县", "513200" ],
		"513227" : [ "小金县", "513200" ],
		"513228" : [ "黑水县", "513200" ],
		"513229" : [ "马尔康县", "513200" ],
		"513230" : [ "壤塘县", "513200" ],
		"513231" : [ "阿坝县", "513200" ],
		"513232" : [ "若尔盖县", "513200" ],
		"513233" : [ "红原县", "513200" ],
		"513234" : [ "其它区", "513200" ],
		"513300" : [ "甘孜藏族自治州", "510000" ],
		"513321" : [ "康定县", "513300" ],
		"513322" : [ "泸定县", "513300" ],
		"513323" : [ "丹巴县", "513300" ],
		"513324" : [ "九龙县", "513300" ],
		"513325" : [ "雅江县", "513300" ],
		"513326" : [ "道孚县", "513300" ],
		"513327" : [ "炉霍县", "513300" ],
		"513328" : [ "甘孜县", "513300" ],
		"513329" : [ "新龙县", "513300" ],
		"513330" : [ "德格县", "513300" ],
		"513331" : [ "白玉县", "513300" ],
		"513332" : [ "石渠县", "513300" ],
		"513333" : [ "色达县", "513300" ],
		"513334" : [ "理塘县", "513300" ],
		"513335" : [ "巴塘县", "513300" ],
		"513336" : [ "乡城县", "513300" ],
		"513337" : [ "稻城县", "513300" ],
		"513338" : [ "得荣县", "513300" ],
		"513339" : [ "其它区", "513300" ],
		"513400" : [ "凉山彝族自治州", "510000" ],
		"513401" : [ "西昌市", "513400" ],
		"513422" : [ "木里藏族自治县", "513400" ],
		"513423" : [ "盐源县", "513400" ],
		"513424" : [ "德昌县", "513400" ],
		"513425" : [ "会理县", "513400" ],
		"513426" : [ "会东县", "513400" ],
		"513427" : [ "宁南县", "513400" ],
		"513428" : [ "普格县", "513400" ],
		"513429" : [ "布拖县", "513400" ],
		"513430" : [ "金阳县", "513400" ],
		"513431" : [ "昭觉县", "513400" ],
		"513432" : [ "喜德县", "513400" ],
		"513433" : [ "冕宁县", "513400" ],
		"513434" : [ "越西县", "513400" ],
		"513435" : [ "甘洛县", "513400" ],
		"513436" : [ "美姑县", "513400" ],
		"513437" : [ "雷波县", "513400" ],
		"513438" : [ "其它区", "513400" ],
		"520000" : [ "贵州省", "1" ],
		"520100" : [ "贵阳市", "520000" ],
		"520102" : [ "南明区", "520100" ],
		"520103" : [ "云岩区", "520100" ],
		"520111" : [ "花溪区", "520100" ],
		"520112" : [ "乌当区", "520100" ],
		"520113" : [ "白云区", "520100" ],
		"520114" : [ "小河区", "520100" ],
		"520121" : [ "开阳县", "520100" ],
		"520122" : [ "息烽县", "520100" ],
		"520123" : [ "修文县", "520100" ],
		"520151" : [ "金阳开发区", "520100" ],
		"520181" : [ "清镇市", "520100" ],
		"520182" : [ "其它区", "520100" ],
		"520200" : [ "六盘水市", "520000" ],
		"520201" : [ "钟山区", "520200" ],
		"520203" : [ "六枝特区", "520200" ],
		"520221" : [ "水城县", "520200" ],
		"520222" : [ "盘县", "520200" ],
		"520223" : [ "其它区", "520200" ],
		"520300" : [ "遵义市", "520000" ],
		"520302" : [ "红花岗区", "520300" ],
		"520303" : [ "汇川区", "520300" ],
		"520321" : [ "遵义县", "520300" ],
		"520322" : [ "桐梓县", "520300" ],
		"520323" : [ "绥阳县", "520300" ],
		"520324" : [ "正安县", "520300" ],
		"520325" : [ "道真仡佬族苗族自治县", "520300" ],
		"520326" : [ "务川仡佬族苗族自治县", "520300" ],
		"520327" : [ "凤冈县", "520300" ],
		"520328" : [ "湄潭县", "520300" ],
		"520329" : [ "余庆县", "520300" ],
		"520330" : [ "习水县", "520300" ],
		"520381" : [ "赤水市", "520300" ],
		"520382" : [ "仁怀市", "520300" ],
		"520383" : [ "其它区", "520300" ],
		"520400" : [ "安顺市", "520000" ],
		"520402" : [ "西秀区", "520400" ],
		"520421" : [ "平坝县", "520400" ],
		"520422" : [ "普定县", "520400" ],
		"520423" : [ "镇宁布依族苗族自治县", "520400" ],
		"520424" : [ "关岭布依族苗族自治县", "520400" ],
		"520425" : [ "紫云苗族布依族自治县", "520400" ],
		"520426" : [ "其它区", "520400" ],
		"522200" : [ "铜仁地区", "520000" ],
		"522201" : [ "铜仁市", "522200" ],
		"522222" : [ "江口县", "522200" ],
		"522223" : [ "玉屏侗族自治县", "522200" ],
		"522224" : [ "石阡县", "522200" ],
		"522225" : [ "思南县", "522200" ],
		"522226" : [ "印江土家族苗族自治县", "522200" ],
		"522227" : [ "德江县", "522200" ],
		"522228" : [ "沿河土家族自治县", "522200" ],
		"522229" : [ "松桃苗族自治县", "522200" ],
		"522230" : [ "万山特区", "522200" ],
		"522231" : [ "其它区", "522200" ],
		"522300" : [ "黔西南布依族苗族自治州", "520000" ],
		"522301" : [ "兴义市", "522300" ],
		"522322" : [ "兴仁县", "522300" ],
		"522323" : [ "普安县", "522300" ],
		"522324" : [ "晴隆县", "522300" ],
		"522325" : [ "贞丰县", "522300" ],
		"522326" : [ "望谟县", "522300" ],
		"522327" : [ "册亨县", "522300" ],
		"522328" : [ "安龙县", "522300" ],
		"522329" : [ "其它区", "522300" ],
		"522400" : [ "毕节地区", "520000" ],
		"522401" : [ "毕节市", "522400" ],
		"522422" : [ "大方县", "522400" ],
		"522423" : [ "黔西县", "522400" ],
		"522424" : [ "金沙县", "522400" ],
		"522425" : [ "织金县", "522400" ],
		"522426" : [ "纳雍县", "522400" ],
		"522427" : [ "威宁彝族回族苗族自治县", "522400" ],
		"522428" : [ "赫章县", "522400" ],
		"522429" : [ "其它区", "522400" ],
		"522600" : [ "黔东南苗族侗族自治州", "520000" ],
		"522601" : [ "凯里市", "522600" ],
		"522622" : [ "黄平县", "522600" ],
		"522623" : [ "施秉县", "522600" ],
		"522624" : [ "三穗县", "522600" ],
		"522625" : [ "镇远县", "522600" ],
		"522626" : [ "岑巩县", "522600" ],
		"522627" : [ "天柱县", "522600" ],
		"522628" : [ "锦屏县", "522600" ],
		"522629" : [ "剑河县", "522600" ],
		"522630" : [ "台江县", "522600" ],
		"522631" : [ "黎平县", "522600" ],
		"522632" : [ "榕江县", "522600" ],
		"522633" : [ "从江县", "522600" ],
		"522634" : [ "雷山县", "522600" ],
		"522635" : [ "麻江县", "522600" ],
		"522636" : [ "丹寨县", "522600" ],
		"522637" : [ "其它区", "522600" ],
		"522700" : [ "黔南布依族苗族自治州", "520000" ],
		"522701" : [ "都匀市", "522700" ],
		"522702" : [ "福泉市", "522700" ],
		"522722" : [ "荔波县", "522700" ],
		"522723" : [ "贵定县", "522700" ],
		"522725" : [ "瓮安县", "522700" ],
		"522726" : [ "独山县", "522700" ],
		"522727" : [ "平塘县", "522700" ],
		"522728" : [ "罗甸县", "522700" ],
		"522729" : [ "长顺县", "522700" ],
		"522730" : [ "龙里县", "522700" ],
		"522731" : [ "惠水县", "522700" ],
		"522732" : [ "三都水族自治县", "522700" ],
		"522733" : [ "其它区", "522700" ],
		"530000" : [ "云南省", "1" ],
		"530100" : [ "昆明市", "530000" ],
		"530102" : [ "五华区", "530100" ],
		"530103" : [ "盘龙区", "530100" ],
		"530111" : [ "官渡区", "530100" ],
		"530112" : [ "西山区", "530100" ],
		"530113" : [ "东川区", "530100" ],
		"530121" : [ "呈贡县", "530100" ],
		"530122" : [ "晋宁县", "530100" ],
		"530124" : [ "富民县", "530100" ],
		"530125" : [ "宜良县", "530100" ],
		"530126" : [ "石林彝族自治县", "530100" ],
		"530127" : [ "嵩明县", "530100" ],
		"530128" : [ "禄劝彝族苗族自治县", "530100" ],
		"530129" : [ "寻甸回族彝族自治县", "530100" ],
		"530181" : [ "安宁市", "530100" ],
		"530182" : [ "其它区", "530100" ],
		"530300" : [ "曲靖市", "530000" ],
		"530302" : [ "麒麟区", "530300" ],
		"530321" : [ "马龙县", "530300" ],
		"530322" : [ "陆良县", "530300" ],
		"530323" : [ "师宗县", "530300" ],
		"530324" : [ "罗平县", "530300" ],
		"530325" : [ "富源县", "530300" ],
		"530326" : [ "会泽县", "530300" ],
		"530328" : [ "沾益县", "530300" ],
		"530381" : [ "宣威市", "530300" ],
		"530382" : [ "其它区", "530300" ],
		"530400" : [ "玉溪市", "530000" ],
		"530402" : [ "红塔区", "530400" ],
		"530421" : [ "江川县", "530400" ],
		"530422" : [ "澄江县", "530400" ],
		"530423" : [ "通海县", "530400" ],
		"530424" : [ "华宁县", "530400" ],
		"530425" : [ "易门县", "530400" ],
		"530426" : [ "峨山彝族自治县", "530400" ],
		"530427" : [ "新平彝族傣族自治县", "530400" ],
		"530428" : [ "元江哈尼族彝族傣族自治县", "530400" ],
		"530429" : [ "其它区", "530400" ],
		"530500" : [ "保山市", "530000" ],
		"530502" : [ "隆阳区", "530500" ],
		"530521" : [ "施甸县", "530500" ],
		"530522" : [ "腾冲县", "530500" ],
		"530523" : [ "龙陵县", "530500" ],
		"530524" : [ "昌宁县", "530500" ],
		"530525" : [ "其它区", "530500" ],
		"530600" : [ "昭通市", "530000" ],
		"530602" : [ "昭阳区", "530600" ],
		"530621" : [ "鲁甸县", "530600" ],
		"530622" : [ "巧家县", "530600" ],
		"530623" : [ "盐津县", "530600" ],
		"530624" : [ "大关县", "530600" ],
		"530625" : [ "永善县", "530600" ],
		"530626" : [ "绥江县", "530600" ],
		"530627" : [ "镇雄县", "530600" ],
		"530628" : [ "彝良县", "530600" ],
		"530629" : [ "威信县", "530600" ],
		"530630" : [ "水富县", "530600" ],
		"530631" : [ "其它区", "530600" ],
		"530700" : [ "丽江市", "530000" ],
		"530702" : [ "古城区", "530700" ],
		"530721" : [ "玉龙纳西族自治县", "530700" ],
		"530722" : [ "永胜县", "530700" ],
		"530723" : [ "华坪县", "530700" ],
		"530724" : [ "宁蒗彝族自治县", "530700" ],
		"530725" : [ "其它区", "530700" ],
		"530800" : [ "普洱市", "530000" ],
		"530802" : [ "思茅区", "530800" ],
		"530821" : [ "宁洱哈尼族彝族自治县", "530800" ],
		"530822" : [ "墨江哈尼族自治县", "530800" ],
		"530823" : [ "景东彝族自治县", "530800" ],
		"530824" : [ "景谷傣族彝族自治县", "530800" ],
		"530825" : [ "镇沅彝族哈尼族拉祜族自治县", "530800" ],
		"530826" : [ "江城哈尼族彝族自治县", "530800" ],
		"530827" : [ "孟连傣族拉祜族佤族自治县", "530800" ],
		"530828" : [ "澜沧拉祜族自治县", "530800" ],
		"530829" : [ "西盟佤族自治县", "530800" ],
		"530830" : [ "其它区", "530800" ],
		"530900" : [ "临沧市", "530000" ],
		"530902" : [ "临翔区", "530900" ],
		"530921" : [ "凤庆县", "530900" ],
		"530922" : [ "云县", "530900" ],
		"530923" : [ "永德县", "530900" ],
		"530924" : [ "镇康县", "530900" ],
		"530925" : [ "双江拉祜族佤族布朗族傣族自治县", "530900" ],
		"530926" : [ "耿马傣族佤族自治县", "530900" ],
		"530927" : [ "沧源佤族自治县", "530900" ],
		"530928" : [ "其它区", "530900" ],
		"532300" : [ "楚雄彝族自治州", "530000" ],
		"532301" : [ "楚雄市", "532300" ],
		"532322" : [ "双柏县", "532300" ],
		"532323" : [ "牟定县", "532300" ],
		"532324" : [ "南华县", "532300" ],
		"532325" : [ "姚安县", "532300" ],
		"532326" : [ "大姚县", "532300" ],
		"532327" : [ "永仁县", "532300" ],
		"532328" : [ "元谋县", "532300" ],
		"532329" : [ "武定县", "532300" ],
		"532331" : [ "禄丰县", "532300" ],
		"532332" : [ "其它区", "532300" ],
		"532500" : [ "红河哈尼族彝族自治州", "530000" ],
		"532501" : [ "个旧市", "532500" ],
		"532502" : [ "开远市", "532500" ],
		"532522" : [ "蒙自县", "532500" ],
		"532523" : [ "屏边苗族自治县", "532500" ],
		"532524" : [ "建水县", "532500" ],
		"532525" : [ "石屏县", "532500" ],
		"532526" : [ "弥勒县", "532500" ],
		"532527" : [ "泸西县", "532500" ],
		"532528" : [ "元阳县", "532500" ],
		"532529" : [ "红河县", "532500" ],
		"532530" : [ "金平苗族瑶族傣族自治县", "532500" ],
		"532531" : [ "绿春县", "532500" ],
		"532532" : [ "河口瑶族自治县", "532500" ],
		"532533" : [ "其它区", "532500" ],
		"532600" : [ "文山壮族苗族自治州", "530000" ],
		"532621" : [ "文山县", "532600" ],
		"532622" : [ "砚山县", "532600" ],
		"532623" : [ "西畴县", "532600" ],
		"532624" : [ "麻栗坡县", "532600" ],
		"532625" : [ "马关县", "532600" ],
		"532626" : [ "丘北县", "532600" ],
		"532627" : [ "广南县", "532600" ],
		"532628" : [ "富宁县", "532600" ],
		"532629" : [ "其它区", "532600" ],
		"532800" : [ "西双版纳傣族自治州", "530000" ],
		"532801" : [ "景洪市", "532800" ],
		"532822" : [ "勐海县", "532800" ],
		"532823" : [ "勐腊县", "532800" ],
		"532824" : [ "其它区", "532800" ],
		"532900" : [ "大理白族自治州", "530000" ],
		"532901" : [ "大理市", "532900" ],
		"532922" : [ "漾濞彝族自治县", "532900" ],
		"532923" : [ "祥云县", "532900" ],
		"532924" : [ "宾川县", "532900" ],
		"532925" : [ "弥渡县", "532900" ],
		"532926" : [ "南涧彝族自治县", "532900" ],
		"532927" : [ "巍山彝族回族自治县", "532900" ],
		"532928" : [ "永平县", "532900" ],
		"532929" : [ "云龙县", "532900" ],
		"532930" : [ "洱源县", "532900" ],
		"532931" : [ "剑川县", "532900" ],
		"532932" : [ "鹤庆县", "532900" ],
		"532933" : [ "其它区", "532900" ],
		"533100" : [ "德宏傣族景颇族自治州", "530000" ],
		"533102" : [ "瑞丽市", "533100" ],
		"533103" : [ "潞西市", "533100" ],
		"533122" : [ "梁河县", "533100" ],
		"533123" : [ "盈江县", "533100" ],
		"533124" : [ "陇川县", "533100" ],
		"533125" : [ "其它区", "533100" ],
		"533300" : [ "怒江傈僳族自治州", "530000" ],
		"533321" : [ "泸水县", "533300" ],
		"533323" : [ "福贡县", "533300" ],
		"533324" : [ "贡山独龙族怒族自治县", "533300" ],
		"533325" : [ "兰坪白族普米族自治县", "533300" ],
		"533326" : [ "其它区", "533300" ],
		"533400" : [ "迪庆藏族自治州", "530000" ],
		"533421" : [ "香格里拉县", "533400" ],
		"533422" : [ "德钦县", "533400" ],
		"533423" : [ "维西傈僳族自治县", "533400" ],
		"533424" : [ "其它区", "533400" ],
		"540000" : [ "西藏自治区", "1" ],
		"540100" : [ "拉萨市", "540000" ],
		"540102" : [ "城关区", "540100" ],
		"540121" : [ "林周县", "540100" ],
		"540122" : [ "当雄县", "540100" ],
		"540123" : [ "尼木县", "540100" ],
		"540124" : [ "曲水县", "540100" ],
		"540125" : [ "堆龙德庆县", "540100" ],
		"540126" : [ "达孜县", "540100" ],
		"540127" : [ "墨竹工卡县", "540100" ],
		"540128" : [ "其它区", "540100" ],
		"542100" : [ "昌都地区", "540000" ],
		"542121" : [ "昌都县", "542100" ],
		"542122" : [ "江达县", "542100" ],
		"542123" : [ "贡觉县", "542100" ],
		"542124" : [ "类乌齐县", "542100" ],
		"542125" : [ "丁青县", "542100" ],
		"542126" : [ "察雅县", "542100" ],
		"542127" : [ "八宿县", "542100" ],
		"542128" : [ "左贡县", "542100" ],
		"542129" : [ "芒康县", "542100" ],
		"542132" : [ "洛隆县", "542100" ],
		"542133" : [ "边坝县", "542100" ],
		"542134" : [ "其它区", "542100" ],
		"542200" : [ "山南地区", "540000" ],
		"542221" : [ "乃东县", "542200" ],
		"542222" : [ "扎囊县", "542200" ],
		"542223" : [ "贡嘎县", "542200" ],
		"542224" : [ "桑日县", "542200" ],
		"542225" : [ "琼结县", "542200" ],
		"542226" : [ "曲松县", "542200" ],
		"542227" : [ "措美县", "542200" ],
		"542228" : [ "洛扎县", "542200" ],
		"542229" : [ "加查县", "542200" ],
		"542231" : [ "隆子县", "542200" ],
		"542232" : [ "错那县", "542200" ],
		"542233" : [ "浪卡子县", "542200" ],
		"542234" : [ "其它区", "542200" ],
		"542300" : [ "日喀则地区", "540000" ],
		"542301" : [ "日喀则市", "542300" ],
		"542322" : [ "南木林县", "542300" ],
		"542323" : [ "江孜县", "542300" ],
		"542324" : [ "定日县", "542300" ],
		"542325" : [ "萨迦县", "542300" ],
		"542326" : [ "拉孜县", "542300" ],
		"542327" : [ "昂仁县", "542300" ],
		"542328" : [ "谢通门县", "542300" ],
		"542329" : [ "白朗县", "542300" ],
		"542330" : [ "仁布县", "542300" ],
		"542331" : [ "康马县", "542300" ],
		"542332" : [ "定结县", "542300" ],
		"542333" : [ "仲巴县", "542300" ],
		"542334" : [ "亚东县", "542300" ],
		"542335" : [ "吉隆县", "542300" ],
		"542336" : [ "聂拉木县", "542300" ],
		"542337" : [ "萨嘎县", "542300" ],
		"542338" : [ "岗巴县", "542300" ],
		"542339" : [ "其它区", "542300" ],
		"542400" : [ "那曲地区", "540000" ],
		"542421" : [ "那曲县", "542400" ],
		"542422" : [ "嘉黎县", "542400" ],
		"542423" : [ "比如县", "542400" ],
		"542424" : [ "聂荣县", "542400" ],
		"542425" : [ "安多县", "542400" ],
		"542426" : [ "申扎县", "542400" ],
		"542427" : [ "索县", "542400" ],
		"542428" : [ "班戈县", "542400" ],
		"542429" : [ "巴青县", "542400" ],
		"542430" : [ "尼玛县", "542400" ],
		"542431" : [ "其它区", "542400" ],
		"542500" : [ "阿里地区", "540000" ],
		"542521" : [ "普兰县", "542500" ],
		"542522" : [ "札达县", "542500" ],
		"542523" : [ "噶尔县", "542500" ],
		"542524" : [ "日土县", "542500" ],
		"542525" : [ "革吉县", "542500" ],
		"542526" : [ "改则县", "542500" ],
		"542527" : [ "措勤县", "542500" ],
		"542528" : [ "其它区", "542500" ],
		"542600" : [ "林芝地区", "540000" ],
		"542621" : [ "林芝县", "542600" ],
		"542622" : [ "工布江达县", "542600" ],
		"542623" : [ "米林县", "542600" ],
		"542624" : [ "墨脱县", "542600" ],
		"542625" : [ "波密县", "542600" ],
		"542626" : [ "察隅县", "542600" ],
		"542627" : [ "朗县", "542600" ],
		"542628" : [ "其它区", "542600" ],
		"610000" : [ "陕西省", "1" ],
		"610100" : [ "西安市", "610000" ],
		"610102" : [ "新城区", "610100" ],
		"610103" : [ "碑林区", "610100" ],
		"610104" : [ "莲湖区", "610100" ],
		"610111" : [ "灞桥区", "610100" ],
		"610112" : [ "未央区", "610100" ],
		"610113" : [ "雁塔区", "610100" ],
		"610114" : [ "阎良区", "610100" ],
		"610115" : [ "临潼区", "610100" ],
		"610116" : [ "长安区", "610100" ],
		"610122" : [ "蓝田县", "610100" ],
		"610124" : [ "周至县", "610100" ],
		"610125" : [ "户县", "610100" ],
		"610126" : [ "高陵县", "610100" ],
		"610127" : [ "其它区", "610100" ],
		"610200" : [ "铜川市", "610000" ],
		"610202" : [ "王益区", "610200" ],
		"610203" : [ "印台区", "610200" ],
		"610204" : [ "耀州区", "610200" ],
		"610222" : [ "宜君县", "610200" ],
		"610223" : [ "其它区", "610200" ],
		"610300" : [ "宝鸡市", "610000" ],
		"610302" : [ "渭滨区", "610300" ],
		"610303" : [ "金台区", "610300" ],
		"610304" : [ "陈仓区", "610300" ],
		"610322" : [ "凤翔县", "610300" ],
		"610323" : [ "岐山县", "610300" ],
		"610324" : [ "扶风县", "610300" ],
		"610326" : [ "眉县", "610300" ],
		"610327" : [ "陇县", "610300" ],
		"610328" : [ "千阳县", "610300" ],
		"610329" : [ "麟游县", "610300" ],
		"610330" : [ "凤县", "610300" ],
		"610331" : [ "太白县", "610300" ],
		"610332" : [ "其它区", "610300" ],
		"610400" : [ "咸阳市", "610000" ],
		"610402" : [ "秦都区", "610400" ],
		"610403" : [ "杨凌区", "610400" ],
		"610404" : [ "渭城区", "610400" ],
		"610422" : [ "三原县", "610400" ],
		"610423" : [ "泾阳县", "610400" ],
		"610424" : [ "乾县", "610400" ],
		"610425" : [ "礼泉县", "610400" ],
		"610426" : [ "永寿县", "610400" ],
		"610427" : [ "彬县", "610400" ],
		"610428" : [ "长武县", "610400" ],
		"610429" : [ "旬邑县", "610400" ],
		"610430" : [ "淳化县", "610400" ],
		"610431" : [ "武功县", "610400" ],
		"610481" : [ "兴平市", "610400" ],
		"610482" : [ "其它区", "610400" ],
		"610500" : [ "渭南市", "610000" ],
		"610502" : [ "临渭区", "610500" ],
		"610521" : [ "华县", "610500" ],
		"610522" : [ "潼关县", "610500" ],
		"610523" : [ "大荔县", "610500" ],
		"610524" : [ "合阳县", "610500" ],
		"610525" : [ "澄城县", "610500" ],
		"610526" : [ "蒲城县", "610500" ],
		"610527" : [ "白水县", "610500" ],
		"610528" : [ "富平县", "610500" ],
		"610581" : [ "韩城市", "610500" ],
		"610582" : [ "华阴市", "610500" ],
		"610583" : [ "其它区", "610500" ],
		"610600" : [ "延安市", "610000" ],
		"610602" : [ "宝塔区", "610600" ],
		"610621" : [ "延长县", "610600" ],
		"610622" : [ "延川县", "610600" ],
		"610623" : [ "子长县", "610600" ],
		"610624" : [ "安塞县", "610600" ],
		"610625" : [ "志丹县", "610600" ],
		"610626" : [ "吴起县", "610600" ],
		"610627" : [ "甘泉县", "610600" ],
		"610628" : [ "富县", "610600" ],
		"610629" : [ "洛川县", "610600" ],
		"610630" : [ "宜川县", "610600" ],
		"610631" : [ "黄龙县", "610600" ],
		"610632" : [ "黄陵县", "610600" ],
		"610633" : [ "其它区", "610600" ],
		"610700" : [ "汉中市", "610000" ],
		"610702" : [ "汉台区", "610700" ],
		"610721" : [ "南郑县", "610700" ],
		"610722" : [ "城固县", "610700" ],
		"610723" : [ "洋县", "610700" ],
		"610724" : [ "西乡县", "610700" ],
		"610725" : [ "勉县", "610700" ],
		"610726" : [ "宁强县", "610700" ],
		"610727" : [ "略阳县", "610700" ],
		"610728" : [ "镇巴县", "610700" ],
		"610729" : [ "留坝县", "610700" ],
		"610730" : [ "佛坪县", "610700" ],
		"610731" : [ "其它区", "610700" ],
		"610800" : [ "榆林市", "610000" ],
		"610802" : [ "榆阳区", "610800" ],
		"610821" : [ "神木县", "610800" ],
		"610822" : [ "府谷县", "610800" ],
		"610823" : [ "横山县", "610800" ],
		"610824" : [ "靖边县", "610800" ],
		"610825" : [ "定边县", "610800" ],
		"610826" : [ "绥德县", "610800" ],
		"610827" : [ "米脂县", "610800" ],
		"610828" : [ "佳县", "610800" ],
		"610829" : [ "吴堡县", "610800" ],
		"610830" : [ "清涧县", "610800" ],
		"610831" : [ "子洲县", "610800" ],
		"610832" : [ "其它区", "610800" ],
		"610900" : [ "安康市", "610000" ],
		"610902" : [ "汉滨区", "610900" ],
		"610921" : [ "汉阴县", "610900" ],
		"610922" : [ "石泉县", "610900" ],
		"610923" : [ "宁陕县", "610900" ],
		"610924" : [ "紫阳县", "610900" ],
		"610925" : [ "岚皋县", "610900" ],
		"610926" : [ "平利县", "610900" ],
		"610927" : [ "镇坪县", "610900" ],
		"610928" : [ "旬阳县", "610900" ],
		"610929" : [ "白河县", "610900" ],
		"610930" : [ "其它区", "610900" ],
		"611000" : [ "商洛市", "610000" ],
		"611002" : [ "商州区", "611000" ],
		"611021" : [ "洛南县", "611000" ],
		"611022" : [ "丹凤县", "611000" ],
		"611023" : [ "商南县", "611000" ],
		"611024" : [ "山阳县", "611000" ],
		"611025" : [ "镇安县", "611000" ],
		"611026" : [ "柞水县", "611000" ],
		"611027" : [ "其它区", "611000" ],
		"620000" : [ "甘肃省", "1" ],
		"620100" : [ "兰州市", "620000" ],
		"620102" : [ "城关区", "620100" ],
		"620103" : [ "七里河区", "620100" ],
		"620104" : [ "西固区", "620100" ],
		"620105" : [ "安宁区", "620100" ],
		"620111" : [ "红古区", "620100" ],
		"620121" : [ "永登县", "620100" ],
		"620122" : [ "皋兰县", "620100" ],
		"620123" : [ "榆中县", "620100" ],
		"620124" : [ "其它区", "620100" ],
		"620200" : [ "嘉峪关市", "620000" ],
		"620300" : [ "金昌市", "620000" ],
		"620302" : [ "金川区", "620300" ],
		"620321" : [ "永昌县", "620300" ],
		"620322" : [ "其它区", "620300" ],
		"620400" : [ "白银市", "620000" ],
		"620402" : [ "白银区", "620400" ],
		"620403" : [ "平川区", "620400" ],
		"620421" : [ "靖远县", "620400" ],
		"620422" : [ "会宁县", "620400" ],
		"620423" : [ "景泰县", "620400" ],
		"620424" : [ "其它区", "620400" ],
		"620500" : [ "天水市", "620000" ],
		"620502" : [ "秦州区", "620500" ],
		"620503" : [ "麦积区", "620500" ],
		"620521" : [ "清水县", "620500" ],
		"620522" : [ "秦安县", "620500" ],
		"620523" : [ "甘谷县", "620500" ],
		"620524" : [ "武山县", "620500" ],
		"620525" : [ "张家川回族自治县", "620500" ],
		"620526" : [ "其它区", "620500" ],
		"620600" : [ "武威市", "620000" ],
		"620602" : [ "凉州区", "620600" ],
		"620621" : [ "民勤县", "620600" ],
		"620622" : [ "古浪县", "620600" ],
		"620623" : [ "天祝藏族自治县", "620600" ],
		"620624" : [ "其它区", "620600" ],
		"620700" : [ "张掖市", "620000" ],
		"620702" : [ "甘州区", "620700" ],
		"620721" : [ "肃南裕固族自治县", "620700" ],
		"620722" : [ "民乐县", "620700" ],
		"620723" : [ "临泽县", "620700" ],
		"620724" : [ "高台县", "620700" ],
		"620725" : [ "山丹县", "620700" ],
		"620726" : [ "其它区", "620700" ],
		"620800" : [ "平凉市", "620000" ],
		"620802" : [ "崆峒区", "620800" ],
		"620821" : [ "泾川县", "620800" ],
		"620822" : [ "灵台县", "620800" ],
		"620823" : [ "崇信县", "620800" ],
		"620824" : [ "华亭县", "620800" ],
		"620825" : [ "庄浪县", "620800" ],
		"620826" : [ "静宁县", "620800" ],
		"620827" : [ "其它区", "620800" ],
		"620900" : [ "酒泉市", "620000" ],
		"620902" : [ "肃州区", "620900" ],
		"620921" : [ "金塔县", "620900" ],
		"620922" : [ "安西县", "620900" ],
		"620923" : [ "肃北蒙古族自治县", "620900" ],
		"620924" : [ "阿克塞哈萨克族自治县", "620900" ],
		"620981" : [ "玉门市", "620900" ],
		"620982" : [ "敦煌市", "620900" ],
		"620983" : [ "其它区", "620900" ],
		"621000" : [ "庆阳市", "620000" ],
		"621002" : [ "西峰区", "621000" ],
		"621021" : [ "庆城县", "621000" ],
		"621022" : [ "环县", "621000" ],
		"621023" : [ "华池县", "621000" ],
		"621024" : [ "合水县", "621000" ],
		"621025" : [ "正宁县", "621000" ],
		"621026" : [ "宁县", "621000" ],
		"621027" : [ "镇原县", "621000" ],
		"621028" : [ "其它区", "621000" ],
		"621100" : [ "定西市", "620000" ],
		"621102" : [ "安定区", "621100" ],
		"621121" : [ "通渭县", "621100" ],
		"621122" : [ "陇西县", "621100" ],
		"621123" : [ "渭源县", "621100" ],
		"621124" : [ "临洮县", "621100" ],
		"621125" : [ "漳县", "621100" ],
		"621126" : [ "岷县", "621100" ],
		"621127" : [ "其它区", "621100" ],
		"621200" : [ "陇南市", "620000" ],
		"621202" : [ "武都区", "621200" ],
		"621221" : [ "成县", "621200" ],
		"621222" : [ "文县", "621200" ],
		"621223" : [ "宕昌县", "621200" ],
		"621224" : [ "康县", "621200" ],
		"621225" : [ "西和县", "621200" ],
		"621226" : [ "礼县", "621200" ],
		"621227" : [ "徽县", "621200" ],
		"621228" : [ "两当县", "621200" ],
		"621229" : [ "其它区", "621200" ],
		"622900" : [ "临夏回族自治州", "620000" ],
		"622901" : [ "临夏市", "622900" ],
		"622921" : [ "临夏县", "622900" ],
		"622922" : [ "康乐县", "622900" ],
		"622923" : [ "永靖县", "622900" ],
		"622924" : [ "广河县", "622900" ],
		"622925" : [ "和政县", "622900" ],
		"622926" : [ "东乡族自治县", "622900" ],
		"622927" : [ "积石山保安族东乡族撒拉族自治县", "622900" ],
		"622928" : [ "其它区", "622900" ],
		"623000" : [ "甘南藏族自治州", "620000" ],
		"623001" : [ "合作市", "623000" ],
		"623021" : [ "临潭县", "623000" ],
		"623022" : [ "卓尼县", "623000" ],
		"623023" : [ "舟曲县", "623000" ],
		"623024" : [ "迭部县", "623000" ],
		"623025" : [ "玛曲县", "623000" ],
		"623026" : [ "碌曲县", "623000" ],
		"623027" : [ "夏河县", "623000" ],
		"623028" : [ "其它区", "623000" ],
		"630000" : [ "青海省", "1" ],
		"630100" : [ "西宁市", "630000" ],
		"630102" : [ "城东区", "630100" ],
		"630103" : [ "城中区", "630100" ],
		"630104" : [ "城西区", "630100" ],
		"630105" : [ "城北区", "630100" ],
		"630121" : [ "大通回族土族自治县", "630100" ],
		"630122" : [ "湟中县", "630100" ],
		"630123" : [ "湟源县", "630100" ],
		"630124" : [ "其它区", "630100" ],
		"632100" : [ "海东地区", "630000" ],
		"632121" : [ "平安县", "632100" ],
		"632122" : [ "民和回族土族自治县", "632100" ],
		"632123" : [ "乐都县", "632100" ],
		"632126" : [ "互助土族自治县", "632100" ],
		"632127" : [ "化隆回族自治县", "632100" ],
		"632128" : [ "循化撒拉族自治县", "632100" ],
		"632129" : [ "其它区", "632100" ],
		"632200" : [ "海北藏族自治州", "630000" ],
		"632221" : [ "门源回族自治县", "632200" ],
		"632222" : [ "祁连县", "632200" ],
		"632223" : [ "海晏县", "632200" ],
		"632224" : [ "刚察县", "632200" ],
		"632225" : [ "其它区", "632200" ],
		"632300" : [ "黄南藏族自治州", "630000" ],
		"632321" : [ "同仁县", "632300" ],
		"632322" : [ "尖扎县", "632300" ],
		"632323" : [ "泽库县", "632300" ],
		"632324" : [ "河南蒙古族自治县", "632300" ],
		"632325" : [ "其它区", "632300" ],
		"632500" : [ "海南藏族自治州", "630000" ],
		"632521" : [ "共和县", "632500" ],
		"632522" : [ "同德县", "632500" ],
		"632523" : [ "贵德县", "632500" ],
		"632524" : [ "兴海县", "632500" ],
		"632525" : [ "贵南县", "632500" ],
		"632526" : [ "其它区", "632500" ],
		"632600" : [ "果洛藏族自治州", "630000" ],
		"632621" : [ "玛沁县", "632600" ],
		"632622" : [ "班玛县", "632600" ],
		"632623" : [ "甘德县", "632600" ],
		"632624" : [ "达日县", "632600" ],
		"632625" : [ "久治县", "632600" ],
		"632626" : [ "玛多县", "632600" ],
		"632627" : [ "其它区", "632600" ],
		"632700" : [ "玉树藏族自治州", "630000" ],
		"632721" : [ "玉树县", "632700" ],
		"632722" : [ "杂多县", "632700" ],
		"632723" : [ "称多县", "632700" ],
		"632724" : [ "治多县", "632700" ],
		"632725" : [ "囊谦县", "632700" ],
		"632726" : [ "曲麻莱县", "632700" ],
		"632727" : [ "其它区", "632700" ],
		"632800" : [ "海西蒙古族藏族自治州", "630000" ],
		"632801" : [ "格尔木市", "632800" ],
		"632802" : [ "德令哈市", "632800" ],
		"632821" : [ "乌兰县", "632800" ],
		"632822" : [ "都兰县", "632800" ],
		"632823" : [ "天峻县", "632800" ],
		"632824" : [ "其它区", "632800" ],
		"640000" : [ "宁夏回族自治区", "1" ],
		"640100" : [ "银川市", "640000" ],
		"640104" : [ "兴庆区", "640100" ],
		"640105" : [ "西夏区", "640100" ],
		"640106" : [ "金凤区", "640100" ],
		"640121" : [ "永宁县", "640100" ],
		"640122" : [ "贺兰县", "640100" ],
		"640181" : [ "灵武市", "640100" ],
		"640182" : [ "其它区", "640100" ],
		"640200" : [ "石嘴山市", "640000" ],
		"640202" : [ "大武口区", "640200" ],
		"640205" : [ "惠农区", "640200" ],
		"640221" : [ "平罗县", "640200" ],
		"640222" : [ "其它区", "640200" ],
		"640300" : [ "吴忠市", "640000" ],
		"640302" : [ "利通区", "640300" ],
		"640303" : [ "红寺堡区", "640300" ],
		"640323" : [ "盐池县", "640300" ],
		"640324" : [ "同心县", "640300" ],
		"640381" : [ "青铜峡市", "640300" ],
		"640382" : [ "其它区", "640300" ],
		"640400" : [ "固原市", "640000" ],
		"640402" : [ "原州区", "640400" ],
		"640422" : [ "西吉县", "640400" ],
		"640423" : [ "隆德县", "640400" ],
		"640424" : [ "泾源县", "640400" ],
		"640425" : [ "彭阳县", "640400" ],
		"640426" : [ "其它区", "640400" ],
		"640500" : [ "中卫市", "640000" ],
		"640502" : [ "沙坡头区", "640500" ],
		"640521" : [ "中宁县", "640500" ],
		"640522" : [ "海原县", "640500" ],
		"640523" : [ "其它区", "640500" ],
		"650000" : [ "新疆维吾尔自治区", "1" ],
		"650100" : [ "乌鲁木齐市", "650000" ],
		"650102" : [ "天山区", "650100" ],
		"650103" : [ "沙依巴克区", "650100" ],
		"650104" : [ "新市区", "650100" ],
		"650105" : [ "水磨沟区", "650100" ],
		"650106" : [ "头屯河区", "650100" ],
		"650107" : [ "达坂城区", "650100" ],
		"650108" : [ "东山区", "650100" ],
		"650109" : [ "米东区", "650100" ],
		"650121" : [ "乌鲁木齐县", "650100" ],
		"650122" : [ "其它区", "650100" ],
		"650200" : [ "克拉玛依市", "650000" ],
		"650202" : [ "独山子区", "650200" ],
		"650203" : [ "克拉玛依区", "650200" ],
		"650204" : [ "白碱滩区", "650200" ],
		"650205" : [ "乌尔禾区", "650200" ],
		"650206" : [ "其它区", "650200" ],
		"652100" : [ "吐鲁番地区", "650000" ],
		"652101" : [ "吐鲁番市", "652100" ],
		"652122" : [ "鄯善县", "652100" ],
		"652123" : [ "托克逊县", "652100" ],
		"652124" : [ "其它区", "652100" ],
		"652200" : [ "哈密地区", "650000" ],
		"652201" : [ "哈密市", "652200" ],
		"652222" : [ "巴里坤哈萨克自治县", "652200" ],
		"652223" : [ "伊吾县", "652200" ],
		"652224" : [ "其它区", "652200" ],
		"652300" : [ "昌吉回族自治州", "650000" ],
		"652301" : [ "昌吉市", "652300" ],
		"652302" : [ "阜康市", "652300" ],
		"652303" : [ "米泉市", "652300" ],
		"652323" : [ "呼图壁县", "652300" ],
		"652324" : [ "玛纳斯县", "652300" ],
		"652325" : [ "奇台县", "652300" ],
		"652327" : [ "吉木萨尔县", "652300" ],
		"652328" : [ "木垒哈萨克自治县", "652300" ],
		"652329" : [ "其它区", "652300" ],
		"652700" : [ "博尔塔拉蒙古自治州", "650000" ],
		"652701" : [ "博乐市", "652700" ],
		"652722" : [ "精河县", "652700" ],
		"652723" : [ "温泉县", "652700" ],
		"652724" : [ "其它区", "652700" ],
		"652800" : [ "巴音郭楞蒙古自治州", "650000" ],
		"652801" : [ "库尔勒市", "652800" ],
		"652822" : [ "轮台县", "652800" ],
		"652823" : [ "尉犁县", "652800" ],
		"652824" : [ "若羌县", "652800" ],
		"652825" : [ "且末县", "652800" ],
		"652826" : [ "焉耆回族自治县", "652800" ],
		"652827" : [ "和静县", "652800" ],
		"652828" : [ "和硕县", "652800" ],
		"652829" : [ "博湖县", "652800" ],
		"652830" : [ "其它区", "652800" ],
		"652900" : [ "阿克苏地区", "650000" ],
		"652901" : [ "阿克苏市", "652900" ],
		"652922" : [ "温宿县", "652900" ],
		"652923" : [ "库车县", "652900" ],
		"652924" : [ "沙雅县", "652900" ],
		"652925" : [ "新和县", "652900" ],
		"652926" : [ "拜城县", "652900" ],
		"652927" : [ "乌什县", "652900" ],
		"652928" : [ "阿瓦提县", "652900" ],
		"652929" : [ "柯坪县", "652900" ],
		"652930" : [ "其它区", "652900" ],
		"653000" : [ "克孜勒苏柯尔克孜自治州", "650000" ],
		"653001" : [ "阿图什市", "653000" ],
		"653022" : [ "阿克陶县", "653000" ],
		"653023" : [ "阿合奇县", "653000" ],
		"653024" : [ "乌恰县", "653000" ],
		"653025" : [ "其它区", "653000" ],
		"653100" : [ "喀什地区", "650000" ],
		"653101" : [ "喀什市", "653100" ],
		"653121" : [ "疏附县", "653100" ],
		"653122" : [ "疏勒县", "653100" ],
		"653123" : [ "英吉沙县", "653100" ],
		"653124" : [ "泽普县", "653100" ],
		"653125" : [ "莎车县", "653100" ],
		"653126" : [ "叶城县", "653100" ],
		"653127" : [ "麦盖提县", "653100" ],
		"653128" : [ "岳普湖县", "653100" ],
		"653129" : [ "伽师县", "653100" ],
		"653130" : [ "巴楚县", "653100" ],
		"653131" : [ "塔什库尔干塔吉克自治县", "653100" ],
		"653132" : [ "其它区", "653100" ],
		"653200" : [ "和田地区", "650000" ],
		"653201" : [ "和田市", "653200" ],
		"653221" : [ "和田县", "653200" ],
		"653222" : [ "墨玉县", "653200" ],
		"653223" : [ "皮山县", "653200" ],
		"653224" : [ "洛浦县", "653200" ],
		"653225" : [ "策勒县", "653200" ],
		"653226" : [ "于田县", "653200" ],
		"653227" : [ "民丰县", "653200" ],
		"653228" : [ "其它区", "653200" ],
		"654000" : [ "伊犁哈萨克自治州", "650000" ],
		"654002" : [ "伊宁市", "654000" ],
		"654003" : [ "奎屯市", "654000" ],
		"654021" : [ "伊宁县", "654000" ],
		"654022" : [ "察布查尔锡伯自治县", "654000" ],
		"654023" : [ "霍城县", "654000" ],
		"654024" : [ "巩留县", "654000" ],
		"654025" : [ "新源县", "654000" ],
		"654026" : [ "昭苏县", "654000" ],
		"654027" : [ "特克斯县", "654000" ],
		"654028" : [ "尼勒克县", "654000" ],
		"654029" : [ "其它区", "654000" ],
		"654200" : [ "塔城地区", "650000" ],
		"654201" : [ "塔城市", "654200" ],
		"654202" : [ "乌苏市", "654200" ],
		"654221" : [ "额敏县", "654200" ],
		"654223" : [ "沙湾县", "654200" ],
		"654224" : [ "托里县", "654200" ],
		"654225" : [ "裕民县", "654200" ],
		"654226" : [ "和布克赛尔蒙古自治县", "654200" ],
		"654227" : [ "其它区", "654200" ],
		"654300" : [ "阿勒泰地区", "650000" ],
		"654301" : [ "阿勒泰市", "654300" ],
		"654321" : [ "布尔津县", "654300" ],
		"654322" : [ "富蕴县", "654300" ],
		"654323" : [ "福海县", "654300" ],
		"654324" : [ "哈巴河县", "654300" ],
		"654325" : [ "青河县", "654300" ],
		"654326" : [ "吉木乃县", "654300" ],
		"654327" : [ "其它区", "654300" ],
		"659001" : [ "石河子市", "650000" ],
		"659002" : [ "阿拉尔市", "650000" ],
		"659003" : [ "图木舒克市", "650000" ],
		"659004" : [ "五家渠市", "650000" ],
		"710000" : [ "台湾省", "1" ],
		"710100" : [ "台北市", "710000" ],
		"710101" : [ "中正区", "710100" ],
		"710102" : [ "大同区", "710100" ],
		"710103" : [ "中山区", "710100" ],
		"710104" : [ "松山区", "710100" ],
		"710105" : [ "大安区", "710100" ],
		"710106" : [ "万华区", "710100" ],
		"710107" : [ "信义区", "710100" ],
		"710108" : [ "士林区", "710100" ],
		"710109" : [ "北投区", "710100" ],
		"710110" : [ "内湖区", "710100" ],
		"710111" : [ "南港区", "710100" ],
		"710112" : [ "文山区", "710100" ],
		"710113" : [ "其它区", "710100" ],
		"710200" : [ "高雄市", "710000" ],
		"710201" : [ "新兴区", "710200" ],
		"710202" : [ "前金区", "710200" ],
		"710203" : [ "芩雅区", "710200" ],
		"710204" : [ "盐埕区", "710200" ],
		"710205" : [ "鼓山区", "710200" ],
		"710206" : [ "旗津区", "710200" ],
		"710207" : [ "前镇区", "710200" ],
		"710208" : [ "三民区", "710200" ],
		"710209" : [ "左营区", "710200" ],
		"710210" : [ "楠梓区", "710200" ],
		"710211" : [ "小港区", "710200" ],
		"710212" : [ "其它区", "710200" ],
		"710300" : [ "台南市", "710000" ],
		"710301" : [ "中西区", "710300" ],
		"710302" : [ "东区", "710300" ],
		"710303" : [ "南区", "710300" ],
		"710304" : [ "北区", "710300" ],
		"710305" : [ "安平区", "710300" ],
		"710306" : [ "安南区", "710300" ],
		"710307" : [ "其它区", "710300" ],
		"710400" : [ "台中市", "710000" ],
		"710401" : [ "中区", "710400" ],
		"710402" : [ "东区", "710400" ],
		"710403" : [ "南区", "710400" ],
		"710404" : [ "西区", "710400" ],
		"710405" : [ "北区", "710400" ],
		"710406" : [ "北屯区", "710400" ],
		"710407" : [ "西屯区", "710400" ],
		"710408" : [ "南屯区", "710400" ],
		"710409" : [ "其它区", "710400" ],
		"710500" : [ "金门县", "710000" ],
		"710600" : [ "南投县", "710000" ],
		"710700" : [ "基隆市", "710000" ],
		"710701" : [ "仁爱区", "710700" ],
		"710702" : [ "信义区", "710700" ],
		"710703" : [ "中正区", "710700" ],
		"710704" : [ "中山区", "710700" ],
		"710705" : [ "安乐区", "710700" ],
		"710706" : [ "暖暖区", "710700" ],
		"710707" : [ "七堵区", "710700" ],
		"710708" : [ "其它区", "710700" ],
		"710800" : [ "新竹市", "710000" ],
		"710801" : [ "东区", "710800" ],
		"710802" : [ "北区", "710800" ],
		"710803" : [ "香山区", "710800" ],
		"710804" : [ "其它区", "710800" ],
		"710900" : [ "嘉义市", "710000" ],
		"710901" : [ "东区", "710900" ],
		"710902" : [ "西区", "710900" ],
		"710903" : [ "其它区", "710900" ],
		"711100" : [ "新北市", "710000" ],
		"711200" : [ "宜兰县", "710000" ],
		"711300" : [ "新竹县", "710000" ],
		"711400" : [ "桃园县", "710000" ],
		"711500" : [ "苗栗县", "710000" ],
		"711700" : [ "彰化县", "710000" ],
		"711900" : [ "嘉义县", "710000" ],
		"712100" : [ "云林县", "710000" ],
		"712400" : [ "屏东县", "710000" ],
		"712500" : [ "台东县", "710000" ],
		"712600" : [ "花莲县", "710000" ],
		"712700" : [ "澎湖县", "710000" ],
		"810000" : [ "香港特别行政区", "1" ],
		"810100" : [ "香港岛", "810000" ],
		"810101" : [ "中西区", "810100" ],
		"810102" : [ "湾仔", "810100" ],
		"810103" : [ "东区", "810100" ],
		"810104" : [ "南区", "810100" ],
		"810200" : [ "九龙", "810000" ],
		"810201" : [ "九龙城区", "810200" ],
		"810202" : [ "油尖旺区", "810200" ],
		"810203" : [ "深水埗区", "810200" ],
		"810204" : [ "黄大仙区", "810200" ],
		"810205" : [ "观塘区", "810200" ],
		"810300" : [ "新界", "810000" ],
		"810301" : [ "北区", "810300" ],
		"810302" : [ "大埔区", "810300" ],
		"810303" : [ "沙田区", "810300" ],
		"810304" : [ "西贡区", "810300" ],
		"810305" : [ "元朗区", "810300" ],
		"810306" : [ "屯门区", "810300" ],
		"810307" : [ "荃湾区", "810300" ],
		"810308" : [ "葵青区", "810300" ],
		"810309" : [ "离岛区", "810300" ],
		"820000" : [ "澳门特别行政区", "1" ],
		"820100" : [ "澳门半岛", "820000" ],
		"820200" : [ "离岛", "820000" ],
		"990000" : [ "海外", "1" ],
		"990100" : [ "海外", "990000" ]
	};
	var j = {
		1 : [ "华东", [ 310000, 320000, 330000, 340000, 360000 ] ],
		2 : [ "华北", [ 110000, 120000, 140000, 370000, 130000, 150000 ] ],
		3 : [ "华中", [ 430000, 420000, 410000 ] ],
		4 : [ "华南", [ 440000, 450000, 350000, 460000 ] ],
		5 : [ "东北", [ 210000, 220000, 230000 ] ],
		6 : [ "西北", [ 610000, 650000, 620000, 640000, 630000 ] ],
		7 : [ "西南", [ 500000, 530000, 520000, 540000, 510000 ] ],
		8 : [ "港澳台", [ 810000, 820000, 710000 ] ],
		9 : [ "海外", [ 990000 ] ]
	};
	var g;
	var a;
	var k = function(l) {
		if (typeof l !== "string") {
			l = l + ""
		}
		if (i[l] && i[l][1] === "1") {
			return true
		}
		return false
	};
	var c = function(m, l) {
		if (typeof m !== "string") {
			m = m + ""
		}
		if (l) {
			if (typeof l !== "string") {
				l = l + ""
			}
			if (i[m] && i[m][1] === l && k(l)) {
				return true
			}
		} else {
			if (i[m] && i[m][1] !== "1") {
				return true
			}
		}
		return false
	};
	var e = function(l) {
		if (!l) {
			return
		}
		if (l.length <= 3) {
			if (l.slice(l.length - 1, l.length) == "市"
					|| l.slice(l.length - 1, l.length) == "县"
					|| l.slice(l.length - 1, l.length) == "盟") {
				return l.slice(0, l.length - 1)
			}
		}
		var m;
		m = l.slice(l.length - 9);
		if (m == "群岛的岛礁及其海域") {
			return l.slice(0, l.length - 9)
		}
		m = l.slice(l.length - 8);
		if (m == "土家族苗族自治州" || m == "傣族景颇族自治州" || m == "哈尼族彝族自治州"
				|| m == "布依族苗族自治州" || m == "蒙古族藏族自治州") {
			return l.slice(0, l.length - 8)
		}
		m = l.slice(l.length - 7);
		if (m == "藏族羌族自治州" || m == "壮族苗族自治州" || m == "黎族苗族自治县"
				|| m == "苗族侗族自治州") {
			return l.slice(0, l.length - 7)
		}
		m = l.slice(l.length - 6);
		if (m == "傈僳族自治州" || m == "哈萨克自治州") {
			return l.slice(0, l.length - 6)
		}
		m = l.slice(l.length - 5);
		if (m == "彝族自治州" || m == "藏族自治州" || m == "白族自治州" || m == "傣族自治州"
				|| m == "黎族自治县" || m == "回族自治州" || m == "蒙古自治州") {
			return l.slice(0, l.length - 5)
		}
		m = l.slice(l.length - 4);
		if (m == "") {
			return l.slice(0, l.length - 4)
		}
		m = l.slice(l.length - 3);
		if (m == "蒙古族" || m == "自治州") {
			return l.slice(0, l.length - 3)
		}
		m = l.slice(l.length - 2);
		if (m == "群岛" || m == "地区" || m == "林区") {
			return l.slice(0, l.length - 2)
		}
		if (l.slice(l.length - 1, l.length) == "市"
				|| l.slice(l.length - 1, l.length) == "县"
				|| l.slice(l.length - 1, l.length) == "盟") {
			return l.slice(0, l.length - 1)
		}
		return l
	};
	var f = function(n) {
		var m = [];
		var l;
		if (n) {
			var o = j[n];
			if (o) {
				l = o[1] || []
			}
		}
		if (!g) {
			g = [];
			jm.each(i, function(q, p) {
				if (p[1] != 1) {
					return true
				}
				var r = {};
				r.name = p[0], r.parentid = p[1];
				r.id = q;
				g.push(r);
				if (l && jm.inArray(parseInt(q), l) >= 0) {
					m.push(r)
				}
			});
			if (!l || l.length <= 0) {
				return g
			}
			return m
		}
		if (!l) {
			return g
		}
		jm.each(g, function(q, p) {
			if (l && jm.inArray(parseInt(p.id), l) >= 0) {
				m.push(p)
			}
		});
		return m
	};
	var h = function(m) {
		if (!m || isNaN(m)) {
			return
		}
		var l = [];
		if (!a) {
			a = [];
			jm.each(i, function(p, n) {
				if (n[1] == 1) {
					return true
				}
				var o = {};
				o.name = n[0], o.parentid = n[1];
				o.id = p;
				a.push(o);
				if (n[1] == m) {
					l.push(o)
				}
			});
			return l
		}
		jm.each(a, function(o, n) {
			if (n.parentid == m) {
				l.push(n)
			}
		});
		return l
	};
	var b = function(m) {
		if (!m) {
			return {
				id : m,
				name : "",
				parentId : 0
			}
		}
		var l = i[m];
		if (l) {
			return {
				id : m,
				name : l[0],
				parentId : l[1]
			}
		}
		return {
			id : m,
			name : "",
			parentId : 0
		}
	};
	var d = function(l) {
		if (!l) {
			return
		}
		if (l.length == 3 && l.slice(l.length - 1, l.length) == "省") {
			return l.slice(0, l.length - 1)
		}
		var m = l.slice(l.length - 6);
		if (m == "维吾尔自治区") {
			return l.slice(0, l.length - 6)
		}
		m = l.slice(l.length - 5);
		if (m == "特别行政区" || m == "壮族自治区" || m == "回族自治区") {
			return l.slice(0, l.length - 5)
		}
		m = l.slice(l.length - 3);
		if (m == "自治区") {
			return l.slice(0, l.length - 3)
		}
		if (l.slice(l.length - 1, l.length) == "省") {
			return l.slice(0, l.length - 1)
		}
		return l
	};
	return {
		getAreaGroups : function() {
			return j
		},
		getProvince : function(l) {
			return f(l)
		},
		getCities : function(l) {
			return h(l)
		},
		getCounty : function(l) {
			return h(l)
		},
		getInfo : function(l) {
			return b(l)
		},
		simpleProvinceName : function(l) {
			jm.each(l, function(m, n) {
				l[m].name = d(l[m].name)
			})
		},
		simpleProvinceNameStr : function(l) {
			return d(l)
		},
		simpleCityName : function(l) {
			jm.each(l, function(m, n) {
				l[m].name = e(l[m].name)
			})
		},
		simpleCityNameStr : function(l) {
			return e(l)
		},
		simpleCityListStr : function(p) {
			if (!p || p.length <= 0) {
				return "未添加地区"
			}
			var n = {};
			jm.each(p, function(q, s) {
				var r = b(s);
				if (n[r.parentId]) {
					n[r.parentId].count++
				} else {
					n[r.parentId] = {
						count : 1,
						objs : []
					}
				}
				n[r.parentId].objs.push(r)
			});
			var o = [];
			var m = [];
			jm.each(n, function(q, r) {
				var s = h(q);
				if (s.length == r.count) {
					o.push(d(b(q).name));
					o.push("、")
				} else {
					jm.each(r.objs, function(t, u) {
						m.push(e(u.name));
						m.push("、")
					})
				}
			});
			var l = o.join("") + m.join("");
			return l.slice(0, l.length - 1)
		},
		isValidProvince : function(l) {
			return k(l)
		},
		isValidCity : function(m, l) {
			return c(m, l)
		}
	}
}());
Mobi.vote = function(e, d, c, b) {
	var a = new Array();
	jm("#voteItems" + e + d).find("input:checked").each(function() {
		var g = jm(this).val();
		if (!isNaN(g)) {
			a.push(parseInt(g))
		}
	});
	if (a.length == 0) {
		Mobi.ing(LS.voteNotSelect);
		return
	}
	var f = parseInt(jm.getCookie("vote" + e));
	Mobi.ing(LS.voteBeing);
	jm("#vote" + e + d).attr("disabled", true);
	jm.ajax({
		type : "post",
		url : "ajax/vote_h.jsp?cmd=voteItem",
		data : "vid=" + e + "&list=" + jm.encodeUrl(jm.toJSON(a)),
		error : function() {
			Mobi.ing(LS.voteError);
			setTimeout(function() {
				jm("#vote" + e + d).removeAttr("disabled")
			}, 3000)
		},
		success : function(h) {
			var g = jm.parseJSON(h);
			if (g.success) {
				Mobi.ing(LS.voteSuccess);
				if (c > 0) {
					if (jm.getCookie("vote" + e) === ""
							|| jm.getCookie("vote" + e) === "null") {
						var i = new Date();
						i.setHours(i.getHours() + c);
						jm.setCookie("vote" + e, c, {
							expires : i
						})
					}
				} else {
					if (c == 0) {
						jm.setCookie("vote" + e, null)
					} else {
						jm.setCookie("vote" + e, -1, {
							expires : 30
						})
					}
				}
			} else {
				if (g.login) {
					Mobi.ing(LS.voteErrorByNotLogin)
				} else {
					Mobi.ing(g.msg)
				}
			}
			setTimeout(function() {
				jm("#vote" + e + d).removeAttr("disabled")
			}, 3000)
		}
	})
};
Mobi.initModuleVote = function(e) {
	var f = e.id, c = e.delay, b = e.mid, a = e.isVoted;
	if (c == 0) {
		jm.setCookie("vote" + f, null)
	} else {
		if (c == -1) {
			if (jm.getCookie("vote" + f) === "null") {
				jm.setCookie("vote" + f, -1, {
					expires : 30
				})
			}
		} else {
			if (jm.getCookie("vote" + f) === "-1") {
				jm.setCookie("vote" + f, null)
			}
			if (jm.getCookie("vote" + f) !== ""
					&& parseInt(jm.getCookie("vote" + f)) != c) {
				var g = new Date();
				g.setHours(g.getHours() + c);
				jm.setCookie("vote" + f, c, {
					expires : g
				})
			}
		}
	}
	jm("#vote" + f + b).click(function() {
		Mobi.vote(f, b, c, a)
	})
};
Mobi.showVoteResult = function(c, a) {
	var b = new Array();
	jm("#vote" + a).find("input:checked").each(function() {
		var d = jm(this).val();
		if (!isNaN(d)) {
			b.push(parseInt(d))
		}
	});
	jm("#voteResult").addClass("showFullScreen");
	if (jm("#voteResult").length > 0) {
		jm("#voteResult").remove()
	}
	jm("#fullScreenDivCotainer")
			.append(
					"<div id='voteResult'  class=' webBackground webContainerBox voteResultDiv moduleContent' style='overflow-y:auto;'></div>");
	jm.ajax({
		type : "post",
		url : "ajax/vote_h.jsp?cmd=voteResult",
		data : "id=" + c + "&list=" + b,
		error : function() {
			Mobi.ing(LS.systemError)
		},
		success : function(d) {
			var e = jm.parseJSON(d);
			var f = e.msg;
			if (e.success) {
				jm("#voteResult").append(e.html);
				jm("#voteResult").addClass("showVoteResult");
				if (f.length > 0) {
					Mobi.ing(f)
				}
			}
		}
	})
};
Mobi.closeVoteResult = function() {
	jm("#voteResult").removeClass("showVoteResult");
	setTimeout(function() {
		jm("#voteResult").remove()
	}, 600)
};
Mobi.searchInMobi = function(d) {
	var e = d.moduleId;
	var c = d.lanCode;
	var f = jm("#module" + e + " .mSearchInput").val();
	var a = d.nSL;
	var b = "/searchResult.jsp?searchword=" + jm.encodeUrl(jm.trim(f))
			+ "&nSL=" + a;
	if (d.searchProduct == 1) {
		b = "/pr.jsp?psId=" + e + "&searchword=" + jm.encodeUrl(jm.trim(f))
	}
	jm("#module" + e + " .mSearchBtn").attr("href", "" + c + b)
};
Mobi.manageFaiscoAd = function(a) {
	var b = jm.cookie("faiscoAd", {
		path : "/"
	});
	if (b !== "true") {
		jm("#mobiAdvertisement_box").css("display", "block");
		if (a == 4
				&& jm("#mobiAdvertisement_adImg").length > 0
				&& Mobi.getStyle(
						Mobi.getPreviewObject("mobiAdvertisement_box"),
						"display") != "none") {
			jm("#header .navButton").css(
					"bottom",
					(parseInt(jm("#header .navButton").css("bottom")) + 40)
							+ "px");
			jm("#navbar").css("bottom",
					(parseInt(jm("#navbar").css("bottom")) + 40) + "px")
		}
		if (jm("#webCustomerServiceBox").length > 0
				&& jm("#webCustomerServiceBox").css("display") != "none") {
			jm("#mobiAdvertisement_adImg").css("opacity", "0.8")
		}
	}
	jm("#mobiAdClose").click(function() {
		if (Fai.top._manageMode == true) {
			jm.cookie("faiscoAd", true, {
				path : "/"
			})
		}
		jm("#mobiAdvertisement_box").remove()
	});
	jm("#mobiAdvertisement_adImg").click(function() {
		if (Fai.top._manageMode == true) {
			Mobi.logDog(200010, 1)
		} else {
			Mobi.logDog(200010, 0)
		}
	})
};
Mobi.logoSizeCompressByMargin = function() {
	var l = document.getElementById("pageLogo");
	var j = document.getElementById("webHeader");
	if (j.style.display == "none") {
		return
	}
	l.style.height = 0;
	var b = parseInt(e(l).marginTop.replace("px", ""));
	var h = parseInt(e(l).marginBottom.replace("px", ""));
	var i = parseInt(e(l).height.replace("px", ""));
	var a = parseInt(l.attributes.sid.value);
	var k = parseInt(l.attributes.pw.value);
	var d = parseInt(l.attributes.ph.value);
	var g = l.className;
	var f = 0;
	var c = parseInt(e(j).height.replace("px", ""));
	f = c - b - h;
	l.style.height = f + "px";
	if (a != 0) {
		l.style.width = e(l).height
	} else {
		l.style.width = parseInt(e(l).height.replace("px", "")) * k / d + "px"
	}
	function e(m) {
		var n = null;
		if (window.getComputedStyle) {
			n = window.getComputedStyle(m, null)
		} else {
			n = m.currentStyle
		}
		return n
	}
};
Mobi.titlePositionRefreshByLogo = function() {
	var m = document.getElementById("pageLogo");
	var i = document.getElementById("header");
	var d = document.getElementById("pageTitle");
	var a = document.getElementById("webHeader");
	if (jm(a).css("display") == "none") {
		return
	}
	jm(m).css({
		position : "",
		"float" : "",
		left : "",
		right : ""
	});
	if (Fai.top._mobiSiteTitle.align == 0) {
		jm(i).css("text-align", "")
	} else {
		if (Fai.top._mobiSiteTitle.align == 1) {
			jm(i).css("text-align", "left")
		} else {
			if (Fai.top._mobiSiteTitle.align == 2) {
				jm(i).css("text-align", "center")
			} else {
				jm(i).css("text-align", "right")
			}
		}
	}
	jm(i).css("padding", "");
	jm(d).css("max-width", "");
	var k = parseInt(jm(i).width());
	var g = parseInt(jm(m).width());
	var c = parseInt(jm(m).css("margin-left").replace("px", ""));
	var b = parseInt(jm(m).css("margin-right").replace("px", ""));
	var f = parseInt(jm(i).css("padding-left").replace("px", ""));
	var e = parseInt(jm(i).css("padding-right").replace("px", ""));
	var j = parseInt(jm(d).css("padding-left").replace("px", ""));
	var l = parseInt(jm(d).css("padding-right").replace("px", ""));
	var h = parseInt(jm(d).width());
	if (jm(m).css("display") != "none") {
		jm(d).css("max-width", (k - g - c - b - j - l - 10) + "px");
		if (jm(i).css("text-align") == "center"
				&& (jm(m).hasClass("left") || jm(m).hasClass("right"))) {
			jm(m).css({
				position : "absolute",
				"float" : "none"
			});
			jm(i).css("padding", 0);
			if (jm(m).hasClass("left")) {
				if (f > 0) {
					jm(m).css("left", f + "px")
				} else {
					jm(m).css("left", 0)
				}
				if (jm(d).offset().left < (jm(m).offset().left + g)) {
					jm(i).css("padding", "0 0 0 " + (f + c + b + g) + "px");
					jm(i).css("text-align", "left")
				}
			} else {
				if (jm(m).hasClass("right")) {
					if (e > 0) {
						jm(m).css("right", e + "px")
					} else {
						jm(m).css("right", 0)
					}
					if ((jm(d).offset().left + parseInt(jm(d).width())) > jm(m)
							.offset().left) {
						jm(i).css("padding", "0 " + (e + c + b + g) + "px 0 0");
						jm(i).css("text-align", "right")
					}
				}
			}
		} else {
			if (jm(i).css("text-align") == "center") {
				jm(i).css("padding", 0);
				if (f > 0) {
					if ((jm(m).offset().left) <= (jm(i).offset().left + f)
							|| (jm(d).offset().left) <= (jm(i).offset().left + f)) {
						jm(i).css("padding", "");
						jm(i).css("text-align", "left")
					}
				} else {
					if (e > 0) {
						if ((jm(m).offset().left + g) >= (jm(i).offset().left + k)
								|| (jm(d).offset().left + parseInt(jm(d)
										.width())) >= (jm(i).offset().left + k)) {
							jm(i).css("padding", "");
							jm(i).css("text-align", "right")
						}
					}
				}
			}
		}
	} else {
		jm(d).css("max-width", (k - j - l) + "px");
		if (jm(i).css("text-align") == "center") {
			jm(i).css("padding", 0);
			if (f > 0 && (jm(d).offset().left <= f)) {
				jm(i).css("padding", "")
			} else {
				if (e > 0
						&& (jm(d).offset().left + parseInt(jm(d).width()) >= (k - e))) {
					jm(i).css("padding", "")
				}
			}
		}
	}
};
Mobi.iframeToEmbed = function(b, e, a) {
	var d = jm("#" + b + " iframe");
	var c;
	if (jm.os.ie) {
		if (a == "v.youku.com" || a == "player.youku.com") {
			c = "http://player.youku.com/player.php/sid/" + e + "/v.swf"
		} else {
			if (a == "v.qq.com" || a == "static.video.qq.com") {
				c = "http://static.video.qq.com/TPout.swf?vid=" + e + "&auto=0"
			} else {
				return false
			}
		}
		d
				.replaceWith("<embed class='mobiVideoOnlineIframe' src='"
						+ c
						+ "' allowFullScreen='true' wmode='Opaque' quality='high'  align='middle' allowScriptAccess='always' type='application/x-shockwave-flash'></embed>")
	}
	return
};
Mobi.initTemplate2 = function(a) {
	var d = Mobi.getJQMobi(), c = Mobi.getPreviewObject("navbar"), b = Mobi
			.getPreviewObject("navbarList");
	if (c) {
		c.setAttribute("style", "")
	}
	if (b) {
		b.setAttribute("style", "")
	}
	jm(Mobi.getPreviewObject("webTop")).css("height", "");
	if (a == 1) {
		jm(Mobi.getPreviewObject("webFooterBox")).append(
				Mobi.getPreviewObject("navbar"));
		Mobi.showNavItemContainer()
	} else {
		if (a == 2 || a == 4 || a == 5) {
			if (a !== 5) {
				Mobi.getPreviewObject("webTop").appendChild(
						Mobi.getPreviewObject("navbar"))
			} else {
				Mobi.getPreviewObject("webHeaderBox").appendChild(
						Mobi.getPreviewObject("navbar"))
			}
			Mobi.autoSetNavBarBottom(a);
			Mobi.navSwipeMenu(a)
		} else {
			if (a == 3 || a == 0) {
				jm(Mobi.getPreviewObject("webHeaderBox")).append(
						Mobi.getPreviewObject("navbar"));
				if (a == 0) {
					Mobi.showNavItemContainer()
				} else {
					Mobi.autoSetNavBarBottom(a)
				}
			} else {
				if (a == 6) {
					jm(Mobi.getPreviewObject("webBannerBox")).append(
							Mobi.getPreviewObject("navbar"));
					Mobi.showNavItemContainer()
				}
			}
		}
	}
	Mobi.autoFixGWebTop(a);
	if (Mobi.getPreviewObject("webMultilingualArea")) {
		if (a == 4) {
			jm(Mobi.getPreviewObject("webHeaderBox")).append(
					Mobi.getPreviewObject("webMultilingualArea"))
		} else {
			jm(Mobi.getPreviewObject("webBannerBox")).prepend(
					Mobi.getPreviewObject("webMultilingualArea"))
		}
	}
};
Mobi.autoSetNavBarHeight = function(a) {
	var f = Mobi.getPreviewObject("webHeader").offsetHeight, d = Mobi
			.getPreviewObject("webTips") ? Mobi.getPreviewObject("webTips").offsetHeight
			: 0, c = 0, e = 4 + parseInt(jm(Mobi.getPreviewObject("navbar"))
			.css("bottom").replace("px", ""));
	if (jm.os.iphone) {
		if (a == 4) {
			c = Mobi.getPreviewWindow().innerHeight - e - d;
			if (c > 370) {
				c = 370
			}
		}
	} else {
		if (jm.os.android) {
			c = Mobi.getPreviewWindow().screen.height
					/ Mobi.getPreviewWindow().devicePixelRatio
					- Mobi.getPreviewWindow().screenTop;
			if (a == 4) {
				c = c - e;
				if (c > 370) {
					c = 370
				}
			}
		} else {
			if (!jm.os.supportsTouch) {
				c = Mobi.getPreviewWindow().innerHeight - d;
				if (a == 4) {
					c = Mobi.getPreviewWindow().innerHeight - e;
					if (c > 370) {
						c = 370
					}
				}
			}
		}
	}
	if (c > 0) {
		if (a == 4) {
			var b = parseInt(jm("#navbarList").height())
					+ parseInt(jm("#navbarList").css("padding-bottom").replace(
							"px", ""));
			if (b > c) {
				jm("#navbar").css("height", c + "px")
			}
		} else {
			jm("#navbar").css("height", c + "px")
		}
	}
};
Mobi.autoSetNavBarBottom = function(a) {
	if (a == 4) {
		if (Fai.top._openOnlineService) {
			jm("#navButton")
					.css(
							"bottom",
							parseInt(jm("#webCustomerServiceBox").height())
									+ 15 + "px");
			jm("#navbar")
					.css(
							"bottom",
							parseInt(jm("#webCustomerServiceBox").height())
									+ 35 + "px")
		} else {
			jm("#navButton").removeAttr("style");
			jm("#navbar").removeAttr("style")
		}
	} else {
		jm("#navButton").removeAttr("style");
		jm("#navbar").removeAttr("style")
	}
};
Mobi.handlePirtureSize = function() {
	var b = document.getElementById("webContainerBox");
	if (!b) {
		return
	}
	var c = b.querySelectorAll("img");
	for (var a = 0; a < c.length; a++) {
		if (c[a].offsetWidth <= 0 || c[a].offsetHeight <= 0) {
			c[a].style.visibility = "hidden"
		}
		c[a].onload = function() {
			this.style.visibility = "visible"
		}
	}
};
Mobi.fixImageHeight = function(c) {
	if (!c) {
		return
	}
	var b = document.getElementById(c);
	if (!b) {
		return
	}
	var d = b.querySelectorAll("img"), e = 0;
	for (var a = 0; a < d.length; a++) {
		(function(g) {
			var h = new Image();
			h.src = d[g].src;
			h.onload = function() {
				if (h.height > e) {
					e = h.height
				}
			};
			if (h.height != 0) {
				if (h.height > e) {
					e = h.height
				}
			}
			if (g === d.length - 1) {
				for (var f = 0; f < d.length; f++) {
					d[f].parentNode.style.height = (e > 0 && e < 160 ? e / 20
							: 160 / 20)
							+ "rem"
				}
			}
		})(a)
	}
};
Mobi.initTemplate = function(a) {
	var b = Mobi.getJQMobi();
	if (a == 0 || a == 1 || a == 6) {
		Mobi.showNavItemContainer()
	} else {
		if (a == 2 || a == 4 || a == 5) {
			Mobi.autoSetNavBarBottom(a);
			Mobi.navSwipeMenu(a)
		}
	}
	Mobi.handlePirtureSize()
};
Mobi.fixGwebHieght = function() {
	var a = Mobi.getPreviewWindow().innerHeight, c = Mobi
			.getPreviewObject("g_web"), b = c.offsetHeight;
	if (a > b) {
		c.style.height = a + "px"
	}
};
Mobi.initMobiPage = function(a) {
	if (!jm.os.supportsTouch) {
		Mobi.resetHtmlFontSize()
	}
	Mobi.initTemplate2(a);
	Mobi.initLocater();
	Mobi.unloadForATag();
	Mobi.initOnlineServiceWidth();
	window.onresize = function() {
		Mobi.getPreviewWindow().Mobi.initSwipe("bannerSwipe");
		Mobi.resetHtmlFontSize();
		Mobi.logoSizeCompressByMargin();
		Mobi.titlePositionRefreshByLogo()
	};
	Mobi.initForms();
	Mobi.onlineServiceInputWord();
	Mobi.closeLoading()
};
Mobi.resetHtmlFontSize = function() {
	var a = document.documentElement ? document.documentElement.clientWidth
			: document.body.clientWidth;
	if (a > 640) {
		a = 640
	}
	document.documentElement.style.fontSize = a * 1 / 16 + "px"
};
Mobi.closeLoading = function() {
	var a = document.getElementById("webLoading");
	if (!a) {
		return
	}
	a.style.display = "none"
};
Mobi.showLoading = function() {
	var a = document.getElementById("webLoading");
	if (!a) {
		return
	}
	a.style.display = "block"
};
Mobi.MobiOSType = {
	UNKNOWN : 0,
	IPHONE : 1,
	IPAD : 2,
	WEBOS : 3,
	ANDROID : 4,
	ANDROIDICS : 5,
	BLACKBERRY : 6,
	WINDOW_DESKTOP : 7,
	MAC : 8,
	ANDROID_2_3 : 9,
	ANDROID_4_0 : 10,
	ANDROID_4_1 : 11,
	ANDROID_4_2 : 12,
	ANDROID_4_3 : 13,
	ANDROID_4_4 : 14,
	ANDROID_5_0 : 15,
	IOS_5_0 : 16,
	IOS_5_1 : 17,
	IOS_6_0 : 18,
	IOS_6_1 : 19,
	IOS_7_0 : 20,
	IOS_7_1 : 21,
	IOS_8_0 : 22,
	IOS_8_1 : 23
};
Mobi.getMobiOSType = function() {
	if (jm.os.IOS_5_0) {
		return Mobi.MobiOSType.IOS_5_0
	} else {
		if (jm.os.IOS_5_1) {
			return Mobi.MobiOSType.IOS_5_1
		} else {
			if (jm.os.IOS_6_0) {
				return Mobi.MobiOSType.IOS_6_0
			} else {
				if (jm.os.IOS_6_1) {
					return Mobi.MobiOSType.IOS_6_1
				} else {
					if (jm.os.IOS_7_0) {
						return Mobi.MobiOSType.IOS_7_0
					} else {
						if (jm.os.IOS_7_1) {
							return Mobi.MobiOSType.IOS_7_1
						} else {
							if (jm.os.IOS_8_0) {
								return Mobi.MobiOSType.IOS_8_0
							} else {
								if (jm.os.IOS_8_1) {
									return Mobi.MobiOSType.IOS_8_1
								} else {
									if (jm.os.ANDROID_2_3) {
										return Mobi.MobiOSType.ANDROID_2_3
									} else {
										if (jm.os.ANDROID_4_0) {
											return Mobi.MobiOSType.ANDROID_4_0
										} else {
											if (jm.os.ANDROID_4_1) {
												return Mobi.MobiOSType.ANDROID_4_1
											} else {
												if (jm.os.ANDROID_4_2) {
													return Mobi.MobiOSType.ANDROID_4_2
												} else {
													if (jm.os.ANDROID_4_3) {
														return Mobi.MobiOSType.ANDROID_4_3
													} else {
														if (jm.os.ANDROID_4_4) {
															return Mobi.MobiOSType.ANDROID_4_4
														} else {
															if (jm.os.ANDROID_5_0) {
																return Mobi.MobiOSType.ANDROID_5_0
															} else {
																if (jm.os.iphone) {
																	return Mobi.MobiOSType.IPHONE
																} else {
																	if (jm.os.ipad) {
																		return Mobi.MobiOSType.IPAD
																	} else {
																		if (jm.os.webos) {
																			return Mobi.MobiOSType.WEBOS
																		} else {
																			if (jm.os.androidICS) {
																				return Mobi.MobiOSType.ANDROIDICS
																			} else {
																				if (jm.os.android) {
																					return Mobi.MobiOSType.ANDROID
																				} else {
																					if (jm.os.blackberry) {
																						return Mobi.MobiOSType.BLACKBERRY
																					} else {
																						if (jm.os.WINDOW_DESKTOP) {
																							return Mobi.MobiOSType.WINDOW_DESKTOP
																						} else {
																							if (jm.os.MAC) {
																								return Mobi.MobiOSType.MAC
																							} else {
																								return Mobi.MobiOSType.UNKNOWN
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
};
Mobi.BrowserType = {
	UNKNOWN : 0,
	CHROME : 1,
	FIREFOX : 2,
	MSIE10 : 3,
	WEBKIT : 4,
	MSIE9 : 5,
	MSIE11 : 6,
	OPERA : 7,
	WX_BROWSER : 8,
	UC_BROWSER : 9,
	QQ_BROWSER : 10,
	B360_BROWSER : 11,
	BD_BROWSER : 12,
	SG_BROWSER : 13,
	LB_BROWSER : 14,
	SAFARI : 15
};
Mobi.getBrowserType = function() {
	if (jm.os.WXBrowser) {
		return Mobi.BrowserType.WX_BROWSER
	} else {
		if (jm.os.UCBrowser) {
			return Mobi.BrowserType.UC_BROWSER
		} else {
			if (jm.os.MQQBrowser) {
				return Mobi.BrowserType.QQ_BROWSER
			} else {
				if (jm.os.LieBaoFast) {
					return Mobi.BrowserType.LB_BROWSER
				} else {
					if (jm.os.BaiDuBrowser) {
						return Mobi.BrowserType.BD_BROWSER
					} else {
						if (jm.os.Sougou) {
							return Mobi.BrowserType.SG_BROWSER
						} else {
							if (jm.os.B360Browser) {
								return Mobi.BrowserType.B360_BROWSER
							} else {
								if (jm.os.ie10) {
									return Mobi.BrowserType.MSIE10
								} else {
									if (jm.os.chrome) {
										return Mobi.BrowserType.CHROME
									} else {
										if (jm.os.fennec) {
											return Mobi.BrowserType.FIREFOX
										} else {
											if (jm.os.safari) {
												return Mobi.BrowserType.SAFARI
											} else {
												if (jm.os.ie9) {
													return Mobi.BrowserType.MSIE9
												} else {
													if (jm.os.ie11) {
														return Mobi.BrowserType.MSIE11
													} else {
														if (jm.os.opera) {
															return Mobi.BrowserType.OPERA
														} else {
															if (jm.os.webkit) {
																return Mobi.BrowserType.WEBKIT
															} else {
																return Mobi.BrowserType.UNKNOWN
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
};
Mobi.Screen = function() {
	var a = window.devicePixelRatio || 1;
	return {
		width : window.screen.width * a,
		height : window.screen.height * a
	}
};
Mobi.ScreenType = {
	OTHER : 0,
	W320H480 : 1,
	W480H800 : 2,
	W480H854 : 3,
	W720H1280 : 4,
	WINDOW_SCREEN : 5,
	W240H320 : 6,
	W600H800 : 7,
	W540H960 : 8,
	W640H960 : 9,
	W768H1024 : 10,
	W640H1136 : 11,
	W720H1184 : 12,
	W1440H2560 : 13,
	W800H1280 : 14,
	W750H1334 : 15,
	W1080H1776 : 16,
	W1080H1920 : 17,
	W1536H2048 : 18
};
Mobi.getScreenType = function(b, a) {
	if (b == 320 && a == 480) {
		return Mobi.ScreenType.W320H480
	} else {
		if (b == 480 && a == 800) {
			return Mobi.ScreenType.W480H800
		} else {
			if (b == 480 && a == 854) {
				return Mobi.ScreenType.W480H854
			} else {
				if (b == 720 && a == 1280) {
					return Mobi.ScreenType.W1720H1280
				} else {
					if (b == 240 && a == 320) {
						return Mobi.ScreenType.W240H320
					} else {
						if (b == 600 && a == 800) {
							return Mobi.ScreenType.W600H800
						} else {
							if (b == 540 && a == 960) {
								return Mobi.ScreenType.W540H960
							} else {
								if (b == 640 && a == 960) {
									return Mobi.ScreenType.W640H960
								} else {
									if (b == 768 && a == 1024) {
										return Mobi.ScreenType.W768H1024
									} else {
										if (b == 640 && a == 1136) {
											return Mobi.ScreenType.W640H1136
										} else {
											if (b == 720 && a == 1184) {
												return Mobi.ScreenType.W720H1184
											} else {
												if (b == 1440 && a == 2560) {
													return Mobi.ScreenType.W1440H2560
												} else {
													if (b == 800 && a == 1280) {
														return Mobi.ScreenType.W800H1280
													} else {
														if (b == 750
																&& a == 1334) {
															return Mobi.ScreenType.W750H1334
														} else {
															if (b == 1080
																	&& a == 1776) {
																return Mobi.ScreenType.W1080H1776
															} else {
																if (b == 1080
																		&& a == 1920) {
																	return Mobi.ScreenType.W1080H1920
																} else {
																	if (b == 1536
																			&& a == 2048) {
																		return Mobi.ScreenType.W1536H2048
																	} else {
																		return Mobi.ScreenType.OTHER
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
};
Mobi.statisticalMobiVisitors = function(b) {
	if (!b) {
		return
	}
	var h = {
		colId : -1,
		pdId : -1,
		ndId : -1
	};
	var c = jm.extend({}, h, b);
	if (c.colId == null || c.colId == "" || c.colId < 0) {
		c.colId = -1
	}
	if (c.pdId == null || c.pdId == "" || c.pdId < 0) {
		c.pdId = -1
	}
	if (c.ndId == null || c.ndId == "" || c.ndId < 0) {
		c.ndId = -1
	}
	var f = "ajax/statistics_h.jsp?cmd=visited";
	var g = [];
	var a, e, d = false;
	if (Fai.top._manageMode) {
		a = Fai.top.Fai.getBrowserType();
		e = Fai.top.Fai.getScreenType(Fai.top.Fai.Screen().width, Fai.top.Fai
				.Screen().height)
	} else {
		a = Mobi.getBrowserType();
		e = Mobi.getScreenType(Mobi.Screen().width, Mobi.Screen().height);
		d = jm.os.WINDOW_DESKTOP
	}
	g.push("&colId=" + c.colId);
	g.push("&pdId=" + c.pdId);
	g.push("&ndId=" + c.ndId);
	g.push("&windowDesktop=" + d);
	g.push("&mobiOSType=" + Mobi.getMobiOSType());
	g.push("&browserType=" + a);
	g.push("&screenType=" + e);
	g.push("&rf=" + jm.encodeUrl(c.rf));
	g.push("&sc=" + c.sc);
	jm.ajax({
		type : "post",
		url : "ajax/mobistatistics_h.jsp?cmd=visited",
		data : g.join(""),
		success : function(i) {
		}
	})
};
Mobi.report = function(a) {
	setTimeout(function() {
		if (window.performance) {
			var d = performance.timing;
			var l = d.fetchStart - d.navigationStart;
			var g = d.redirectEnd - d.redirectStart;
			var i = d.domainLookupStart - d.fetchStart;
			var m = d.unloadEventEnd - d.unloadEventStart;
			var b = d.domainLookupEnd - d.domainLookupStart;
			var e = d.connectEnd - d.connectStart;
			var f = d.responseEnd - d.requestStart;
			var n = d.domInteractive - d.responseEnd;
			var o = d.domComplete - d.domInteractive;
			var k = d.loadEventEnd - d.loadEventStart;
			var h = d.loadEventEnd - d.navigationStart;
			var j = [];
			j.push("&dt=" + b);
			j.push("&ct=" + e);
			j.push("&rt=" + f);
			j.push("&wt=" + n);
			j.push("&pt=" + o);
			j.push("&bt=" + Mobi.getBrowserType());
			var c = "ajax/mobistatistics_h.jsp?cmd=report";
			jm.ajax({
				url : c,
				type : "post",
				cache : false,
				data : j.join(""),
				success : function(p) {
				}
			})
		}
	}, 500)
};
Mobi.scrollToTop = function(b) {
	var c = document.getElementById("g_body"), e = c.scrollTop, d = 1500;
	var a = document.createElement("div");
	a.setAttribute("id", "scrollHideDiv");
	a.style.cssText = "position:absolute;width:100%;height:100%;top:0;z-index:9999;";
	c.style.marginTop = -e + "px";
	window.scrollTo(0, 0);
	c.appendChild(a);
	c.style[jm.feat.cssPrefix + "Transition"] = "margin-top " + d
			+ "ms cubic-bezier(0.175, 0.885, 0.320, 1.025)";
	c.style.marginTop = 0 + "px";
	setTimeout(function() {
		c.style[jm.feat.cssPrefix + "Transition"] = "none";
		var f = document.getElementById("scrollHideDiv");
		c.removeChild(f)
	}, d)
};
Mobi.logDog = function(b, a) {
	jm.ajax({
		type : "get",
		url : "/ajax/log_h.jsp?cmd=dog&dogId=" + jm.encodeUrl(b) + "&dogSrc="
				+ jm.encodeUrl(a)
	})
};
Mobi.mobiHideScroll = function() {
	var c = document.getElementById("g_body");
	var d = document.getElementsByTagName("html")[0];
	c.style.overflowY = "hidden";
	d.style.overflowY = "hidden";
	if (Fai.top._manageMode) {
		iFrameObj = window.parent.document
				.getElementById("mobiReviewPageFrame");
		var b = Fai.top.Fai.getScrollWidth();
		var a = iFrameObj.clientWidth - b;
		iFrameObj.style.position = "absolute";
		iFrameObj.style.left = "0px";
		iFrameObj.setAttribute("width", a + "px")
	}
};
Mobi.mobiShowScroll = function() {
	var a = document.getElementById("g_body");
	var b = document.getElementsByTagName("html")[0];
	a.style.overflowY = "";
	b.style.overflowY = "";
	if (Fai.top._manageMode) {
		iFrameObj = window.parent.document
				.getElementById("mobiReviewPageFrame");
		iFrameObj.style.position = "";
		iFrameObj.style.left = "";
		iFrameObj.setAttribute("width", "100%")
	}
};