<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1" errorPage="error.jsp" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<form action="fact.jsp" method="post">
<input type="text" name="number" placeholder="Number" pattern="[0-9]{1,2}" />
<input type="submit" value="Generate Factorial" />
</form>
<hr />
<form action="authenticate.jsp" method="post">
<input type="number" name="rollnumber" placeholder="Rollnumber" />
<input type="text" name="name" placeholder="Name" pattern="[a-z]{1,20}" />
<input type="submit" value="Insert Record" />
</form>
</body>
</html>