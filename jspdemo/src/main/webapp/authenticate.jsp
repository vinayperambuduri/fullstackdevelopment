<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<jsp:useBean id="bean" class="jspdemo.StudentBean">
<jsp:setProperty name="bean" property="rollnumber" />
<jsp:setProperty name="bean" property="name" />
<jsp:setProperty name="bean" property="dbentries" value="test" />
<jsp:getProperty name="bean" property="dbentries" />
</jsp:useBean>