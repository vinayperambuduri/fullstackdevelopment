<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>factorial</title>
</head>
<body>
<%!
int factorial(int n){
	if(n==0){
		return 1;
	}else{
	return n*factorial(n-1);
	}
}
%>
<% 
int n= Integer.parseInt(request.getParameter("number"));
%>
<%=factorial(n)%>
</body>
</html>