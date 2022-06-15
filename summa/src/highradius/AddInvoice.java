package highradius;


import java.io.IOException;
import java.sql.Connection;
import java.sql.*;
//import java.io.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class AddInvoice
 */
@WebServlet("/AddInvoice")
public class AddInvoice extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddInvoice() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		try {
			Connection con = DBConnection.createConnection();
			String business_code =  request.getParameter("business_code");
			String custom_num = request.getParameter("cust_number");
			String clear_date = null;//request.getParameter("clear_date");
			String busi_year = request.getParameter("business_year");
			String docu_id = request.getParameter("doc_id");
			String posti_date = null;//request.getParameter("posting_date");
			String docu_create = null;//request.getParameter("document_create_date");
			String due_date = null;//request.getParameter("due_in_date");
			String inv_curr = request.getParameter("invoice_currency");
			String docu_type = request.getParameter("documet_type");
			String posti_id = null;//request.getParameter("posting_id");
			String total = request.getParameter("total_open_amount");
			String baseline = null;//request.getParameter("baseline_create_date");
			String terms = request.getParameter("cust_payment_terms");
			String inv_id = request.getParameter("invoice_id");
			
			String query = "INSERT INTO winter_internship (business_code, cust_number, clear_date, buisness_year, doc_id, posting_date, document_create_date, due_in_date, invoice_currency, document_type, posting_id, total_open_amount, baseline_create_date, cust_payment_terms, invoice_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
			PreparedStatement st = con.prepareStatement(query);
			st.setString(1, business_code);
			st.setString(2, custom_num);
			st.setString(3, clear_date);
			st.setString(4, busi_year);
			st.setString(5,  docu_id);
			st.setString(6, posti_date);
			st.setString(7,  docu_create);
			st.setString(8,  due_date);
			st.setString(9,  inv_curr);
			st.setString(10,  docu_type);
			st.setString(11,  posti_id);
			st.setString(12,  total);
			st.setString(13,  baseline);
			st.setString(14,  terms);
			st.setString(15,  inv_id);
			st.executeUpdate();
			System.out.println("Addition done");			con.close();
			

		}
		catch (Exception e) {
			e.printStackTrace();
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

