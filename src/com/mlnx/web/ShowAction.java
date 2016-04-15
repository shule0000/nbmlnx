package com.mlnx.web;

import java.util.ArrayList;
import java.util.List;
import java.util.SortedMap;

import com.mlnx.service.BannerService;
import com.mlnx.service.ContactService;
import com.mlnx.service.ContentService;
import com.mlnx.service.CopyrightService;
import com.mlnx.service.HeaderService;
import com.mlnx.service.ImageService;
import com.mlnx.service.NavigationService;
import com.mlnx.service.ProductService;
import com.mlnx.service.QrcodeService;

public class ShowAction extends BaseAction {

	HeaderService headerService = new HeaderService();
	NavigationService navigationService = new NavigationService();
	BannerService bannerService = new BannerService();
	ProductService productService = new ProductService();
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

		// 显示Banner
		SortedMap[] banners = bannerService
				.executeQuery(
						"select * from banner where banStatus = ? order by banPriority desc",
						new Object[]{1});
		request.setAttribute("banners", banners);

		// 显示产品
		SortedMap[] products = productService
				.executeQuery(
						"select * from product where pduStatus = ? order by pduPriority desc",
						new Object[]{1});

		List<Object[]> productsFor4 = new ArrayList<Object[]>();
		int curr = 0;
		int curr2 = 0;

		Object[] childPdus = new Object[4];
		while (curr2 < products.length) {
			childPdus[curr] = products[curr2];
			curr++;
			curr2++;
			if (curr == 4 || curr2 == products.length) {
				productsFor4.add(childPdus);
				childPdus = new Object[4];
				curr = 0;
			}
		}

		Object[] finalPdus = new Object[productsFor4.size()];
		for (int i = 0; i < finalPdus.length; i++) {
			finalPdus[i] = productsFor4.get(i);
		}

		request.setAttribute("finalPdus", finalPdus);

		// 显示联系信息
		SortedMap[] contact = contactService.executeQuery(
				"select * from contact where ctStatus = ?", new Object[]{1});
		request.setAttribute("contact", contact);

		this.forward("index.jsp");

	}
	
	/**
     * 显示展示主页
     */
    public void showPhoneIndex() {
        this.forward("phone.jsp");
    }
}
