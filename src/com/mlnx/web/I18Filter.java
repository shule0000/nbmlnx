package com.mlnx.web;

import java.io.IOException;
import java.util.Locale;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

public class I18Filter implements Filter {

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {

	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response,
			FilterChain chain) throws IOException, ServletException {
		String local = request.getParameter("local");
		if (local != null) {
			String loc[] = local.split("_");
			Locale locale = new Locale(loc[0], loc[1]);
			((HttpServletRequest) request).getSession().setAttribute(
					"WW_TRANS_I18N_LOCALE", locale);
		}
		chain.doFilter(request, response);
	}

	@Override
	public void destroy() {

	}

}
