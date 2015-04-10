package com.mlnx.web;

import java.util.SortedMap;

import com.mlnx.service.ContactService;
import com.mlnx.service.ContentService;
import com.mlnx.service.CopyrightService;
import com.mlnx.service.HeaderService;
import com.mlnx.service.ImageService;
import com.mlnx.service.NavigationService;
import com.mlnx.service.QrcodeService;

public class ShowAction extends BaseAction {

	HeaderService headerService = new HeaderService();
	NavigationService navigationService = new NavigationService();
	ContentService contentService = new ContentService();
	ImageService imageService = new ImageService();
	QrcodeService qrcodeService = new QrcodeService();
	ContactService contactService = new ContactService();
	CopyrightService copyrightService = new CopyrightService();

	/**
	 * 显示展示主页
	 */
	public void showIndex() {
		// 显示页顶信息
		SortedMap[] headers = headerService.executeQuery(
				"select * from header where headerStatus = ?", new Object[]{1});
		request.setAttribute("headers", headers);

		// 显示导航栏菜单
		SortedMap[] navigations = navigationService
				.executeQuery(
						"select * from navigation where navStatus = ? and navType = ? order by navPriority desc",
						new Object[]{1, 1});
		request.setAttribute("navigations", navigations);

		// 显示文本简介
		// 第一显示位置
		SortedMap[] content1 = contentService
				.executeQuery(
						"select * from content where conPosition = ? and conStatus = ?",
						new Object[]{1, 1});
		request.setAttribute("content1", content1);

		// 第二显示位置
		SortedMap[] content2 = contentService
				.executeQuery(
						"select * from content where conPosition = ? and conStatus = ?",
						new Object[]{2, 1});
		request.setAttribute("content2", content2);

		// 第三显示位置
		SortedMap[] content3 = contentService
				.executeQuery(
						"select * from content where conPosition = ? and conStatus = ?",
						new Object[]{3, 1});
		request.setAttribute("content3", content3);

		// 显示服务图片信息
		// 第一显示位置
		SortedMap[] image1 = imageService
				.executeQuery(
						"select * from image where imgType = ? and imgPosition = ? and imgStatus = ?",
						new Object[]{"服务类", 1, 1});
		request.setAttribute("image1", image1);

		// 第二显示位置
		SortedMap[] image2 = imageService
				.executeQuery(
						"select * from image where imgType = ? and imgPosition = ? and imgStatus = ?",
						new Object[]{"服务类", 2, 1});
		request.setAttribute("image2", image2);

		// 第三显示位置
		SortedMap[] image3 = imageService
				.executeQuery(
						"select * from image where imgType = ? and imgPosition = ? and imgStatus = ?",
						new Object[]{"服务类", 3, 1});
		request.setAttribute("image3", image3);

		// 第四显示位置
		SortedMap[] image4 = imageService
				.executeQuery(
						"select * from image where imgType = ? and imgPosition = ? and imgStatus = ?",
						new Object[]{"服务类", 4, 1});
		request.setAttribute("image4", image4);

		// 显示所有图片
		SortedMap[] images = imageService
				.executeQuery(
						"select * from image where (imgType = ? or imgType = ?) and imgStatus = ?",
						new Object[]{"证书类", "人员类", 1});
		request.setAttribute("images", images);

		// 显示二维码
		// 第一显示位置
		SortedMap[] qrcode1 = qrcodeService.executeQuery(
				"select * from qrcode where qrPosition = ? and qrStatus = ?",
				new Object[]{1, 1});
		request.setAttribute("qrcode1", qrcode1);

		// 第二显示位置
		SortedMap[] qrcode2 = qrcodeService.executeQuery(
				"select * from qrcode where qrPosition = ? and qrStatus = ?",
				new Object[]{2, 1});
		request.setAttribute("qrcode2", qrcode2);

		// 显示联系信息
		SortedMap[] contact = contactService.executeQuery(
				"select * from contact where ctStatus = ?", new Object[]{1});
		request.setAttribute("contact", contact);

		// 显示版权信息
		SortedMap[] copyright = copyrightService.executeQuery(
				"select * from copyright where cpStatus = ?", new Object[]{1});
		request.setAttribute("copyright", copyright);
		this.forward("index.jsp");

	}
}
