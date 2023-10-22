using System.Data.SqlClient;

public class DbConnection
{
  public SqlConnection GetConnection() 
  {
    string connectionString = "Data Source=DESKTOP-0GK5M5S\\MSSQLSERVER1;Initial Catalog=EmpresaEnergia;Integrated Security=True;";

    SqlConnection connection = new SqlConnection(connectionString);
    connection.Open();

    return connection;
  }
}