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
 * Servlet implementation class DeleteInvoice
 */
@WebServlet("/DeleteInvoice")
public class DeleteForm extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DeleteForm() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
try {
			
			
			String docu_id = request.getParameter("doc_id");
			System.out.println(docu_id);
			Connection con = DBConnection.createConnection();
			String query = "DELETE FROM winter_internship WHERE sl_no =?";
			

				PreparedStatement st = con.prepareStatement(query);
				st.setString(1, docu_id);
				st.executeUpdate();
				System.out.println("Deletion done");
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
