// 换验证码
function changeYzm() {
	document.getElementById("yzm").value = "";
	document.getElementById("yzmImg").src = 'yzm.jsp?num=' + Math.random();
}

// 校对验证码
function checkYzm() {
	$.ajax({
		type : "post",// 请求方式
		url : "ajax!checkYzm.action",// 发送请求地址
		data : {// 发送给数据库的数据
			yzm : $("#yzm").val()

		},
		// 请求成功后的回调函数有两个参数

		success : function(data, textStatus) {
			if (data == 0) {
				changeYzm();
				$("#promptN").fadeIn(2000, function() {
					$("#promptN").fadeOut(2000, null);
				});
				document.getElementById("yzm").value = "";
			} else {
				changeYzm();
				$("#promptY").fadeIn(2000, function() {
					$("#promptY").fadeOut(3000, null);
				});
				var name = document.getElementById("name").value;
				document.getElementById("name").value = "";
				var email = document.getElementById("email").value;
				document.getElementById("email").value = "";
				var phone = document.getElementById("phone").value;
				document.getElementById("phone").value = "";
				var message = document.getElementById("message").value;
				document.getElementById("message").value = "";
				document.getElementById("yzm").value = "";
				leaveMess(name, email, phone, message);
			}
		}

	});
}

function leaveMess() {
	var name = document.getElementById("name").value;
	document.getElementById("name").value = "";
	var phone = document.getElementById("phone").value;
	document.getElementById("phone").value = "";
	var message = document.getElementById("message").value;
	document.getElementById("message").value = "";
	alert("感谢您的留言，请耐心等待回复！");
	$.ajax({
		type : "post",// 请求方式
		dataType : "text",
		url : "ajax!leaveMess.action",// 发送请求地址
		data : {// 发送给数据库的数据
			name : name,
			phone : phone,
			message : message

		},
		// 请求成功后的回调函数有两个参数

		success : function(data, textStatus) {

		}

	});
}