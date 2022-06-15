package highradius;

import java.io.IOException;
//import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;



/**
 * Servlet implementation class SearchInvoice
 */
@WebServlet("/AdvancedSearch")
public class AdvancedSearch extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AdvancedSearch() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		/*response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		
		PrintWriter out = response.getWriter();
		
		int rowCount = 12;*/
		
		try {
			Connection con = DBConnection.createConnection();
			
			String docu_id = request.getParameter("doc_id");
			//String inv_id = request.getParameter("invoice_id");
			//String cus_num = request.getParameter("cust_number");
			//String busi_year = request.getParameter("buisness_year");
			
			Statement st = con.createStatement();
			String sql_statement = "SELECT * FROM winter_internship WHERE doc_id=" + "'"+docu_id+"'";;
			ResultSet rs = st.executeQuery(sql_statement);

			ArrayList<Response> res = new ArrayList<>();
			
			while(rs.next()) {
				Response resp = new Response();
				resp.setSl_no(rs.getString("sl_no"));
				resp.setBusiness_code(rs.getString("business_code"));
				resp.setCust_number(rs.getString("cust_number"));
				resp.setClear_date(rs.getString("clear_date"));
				resp.setBuisness_year(rs.getString("buisness_year"));
				resp.setDoc_id(rs.getString("doc_id"));
				resp.setPosting_date(rs.getString("posting_date"));
				resp.setDocument_create_date(rs.getString("document_create_date"));
				resp.setDue_in_date(rs.getString("due_in_date"));
				resp.setInvoice_currency(rs.getString("invoice_currency"));
				resp.setDocument_type(rs.getString("document_type"));
				resp.setPosting_id(rs.getString("posting_id"));
				resp.setTotal_open_amount(rs.getString("total_open_amount"));
				resp.setBaseline_create_date(rs.getString("baseline_create_date"));
				resp.setCust_payment_terms(rs.getString("cust_payment_terms"));
				resp.setInvoice_id(rs.getString("invoice_id"));
				resp.setAging_bucket(rs.getString("aging_bucket"));
				res.add(resp);			}
			
			/*Gson gson = new GsonBuilder().serializeNulls().create();
			String invoices = gson.toJson(data);

			out.print(invoices);
			response.setStatus(200);
			out.flush();
		}
		catch(Exception e) {
			e.printStackTrace();
		}
	}*/
			for(int i = 0; i < res.size(); i++) {
				System.out.println(res.get(i).toString());
			}
			Gson gson = new GsonBuilder().serializeNulls().create();
			String invoices  = gson.toJson(res);
			response.setContentType("application/json");
			try {
				response.getWriter().write(invoices);//getWriter() returns a PrintWriter object that can send character text to the client. 
			}
			catch(IOException e)
			{
				e.printStackTrace();
			}
			rs.close();
			st.close();
			con.close();
			
		}
		catch(SQLException e) {
			e.printStackTrace();
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
