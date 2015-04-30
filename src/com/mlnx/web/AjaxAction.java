package com.mlnx.web;

import java.io.IOException;
import java.io.PrintWriter;

import org.apache.struts2.ServletActionContext;

import com.mlnx.tool.MailSenderInfo;
import com.mlnx.tool.SimpleMailSender;

public class AjaxAction extends BaseAction {

	// 留言检查验证码
	public String yzm;
	public void checkYzm() throws IOException {
		PrintWriter out = ServletActionContext.getResponse().getWriter();
		if (yzm.equals(session.getAttribute("yzm"))) {
			out.print("1");
		} else {
			out.print("0");
		}
	}

	public String name;
	public String email;
	public String phone;
	public String message;
	public void leaveMess() {
		System.out.println("111");
		MailSenderInfo mailInfo = new MailSenderInfo();
		mailInfo.setMailServerHost("smtp.qq.com");
		mailInfo.setMailServerPort("25");
		mailInfo.setValidate(true);
		mailInfo.setUserName("460968755@qq.com");
		mailInfo.setPassword("woaiapei.0000");// 您的邮箱密码
		mailInfo.setFromAddress("460968755@qq.com");
		mailInfo.setToAddress("nbmlnx@nbmlnx.cn");
		mailInfo.setSubject("访问者留言！");
		System.out.println("222");
		mailInfo.setContent("留言者姓名：" + name + "	email：" + email + "    电话："
				+ phone + "\n内容" + message);
		System.out.println("333");
		// 这个类主要来发送邮件
		SimpleMailSender sms = new SimpleMailSender();
		System.out.println("444");
		sms.sendTextMail(mailInfo);// 发送文体格式

	}
}
