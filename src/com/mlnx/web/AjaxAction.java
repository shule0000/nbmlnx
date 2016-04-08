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
	public String phone;
	public String message;
	public void leaveMess() {
		MailSenderInfo mailInfo = new MailSenderInfo();
		mailInfo.setMailServerHost("smtp.qq.com");
		mailInfo.setMailServerPort("25");
		mailInfo.setValidate(true);
		mailInfo.setUserName("nbmlnx-sendmail@nbmlnx.cn");
		mailInfo.setPassword("medgen2011");// 您的邮箱密码
		mailInfo.setFromAddress("nbmlnx-sendmail@nbmlnx.cn");
		mailInfo.setToAddress("nbmlnx@nbmlnx.cn");
		mailInfo.setSubject("访问者留言，请不要回复！");
		mailInfo.setContent("姓名：" + name + "\n电话：" + phone + "\n内容：" + message);
		// 这个类主要来发送邮件
		SimpleMailSender sms = new SimpleMailSender();
		sms.sendTextMail(mailInfo);// 发送文体格式

	}
}
