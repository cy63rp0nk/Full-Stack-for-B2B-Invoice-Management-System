package highradius;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
//import java.io.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class EditInvoice
 */
@WebServlet("/EditInvoice")
public class EditForm extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public EditForm() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		try {
			String docu_id = request.getParameter("sl_no");
			String inv_curr = request.getParameter("invoice_currency");
			String terms = request.getParameter("cust_payment_terms");
		
		
		
		Connection con = DBConnection.createConnection();
		System.out.println(docu_id);
		String query = "UPDATE winter_internship SET invoice_currency = ?, cust_payment_terms = ? WHERE sl_no = ?";
		
		PreparedStatement st = con.prepareStatement(query);
		st.setString(1, inv_curr);
		st.setString(2, terms);
		st.setString(3, docu_id);
		
		
		st.executeUpdate();
		System .out.println("Edit done");
		con.close();
	}
	
	catch(Exception e) {
		
	}

		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
			}
}


