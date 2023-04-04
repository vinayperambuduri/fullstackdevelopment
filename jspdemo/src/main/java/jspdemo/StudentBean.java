package jspdemo;

import java.sql.*;

public class StudentBean implements java.io.Serializable{
private int rollnumber;
private String name;
private String dbentries;
public int getRollnumber() {
	return rollnumber;
}
public void setRollnumber(int rollnumber) {
	this.rollnumber = rollnumber;
}
public String getName() {
	return "Your name is:"+name;
}
public void setName(String name) {
	this.name = name;
}
public String getDbentries() {
	String dbrecord=null;
	try {
		Class.forName("oracle.jdbc.driver.OracleDriver");
		String URL="jdbc:oracle:thin:@172.16.0.8:1521:rdbms";
		Connection con = DriverManager.getConnection(URL, "oe13", "oe13");
		PreparedStatement ps= con.prepareStatement("select * from student"); 
		ResultSet rs= ps.executeQuery();
		
		 if(rs.next()) {
			 dbrecord= rs.getInt("rollnumber")+":"+"your name is"+rs.getString("name"); 
		 }
		}catch(Exception e) {
			e.printStackTrace();
			
		}
	return dbrecord;
}
public void setDbentries(String dbentries) {
	//DB Code to store data
	try {
	Class.forName("oracle.jdbc.driver.OracleDriver");
	String URL="jdbc:oracle:thin:@172.16.0.8:1521:rdbms";
	Connection con = DriverManager.getConnection(URL, "oe13", "oe13");
	PreparedStatement ps= con.prepareStatement("insert into student values(?,?)");
	 ps.setInt(1, rollnumber);
	 ps.setString(2, name);
	 ps.executeUpdate();
	}catch(Exception e) {
		e.printStackTrace();
	}
}

}
