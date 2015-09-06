<%@ page language="java" contentType="text/html; charset=utf-8"%> 
<%@ taglib uri="/struts-tags" prefix="s"%>
 <%
String path = request.getContextPath();
String basePath =request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<html>
<head>
<base href="<%=basePath%>">
<title>Detecting Locale</title>
</head>
<body>
 <a href="<%=basePath%>?local=zh_CN">中文</a>
<a href="<%=basePath%>?local=en_US">英文</a>
<s:text name="text"/>
</body>
</html>