using System.Collections.Generic;
using System.Data.SqlClient;

public class ReporteService
{
  private readonly DbConnection _dbConnection;

  public ReporteService(DbConnection dbConnection)
  {
    _dbConnection = dbConnection; 
  }

  public List<Reporte> GetReportes()
  {
    // Definir consulta SQL
    string sql = "SELECT id, titulo, descripcion, fecha, estado, usuario_id FROM danos_reportados";
    
    List<Reporte> reportes = new List<Reporte>();

    using(var connection = _dbConnection.GetConnection())
    {
      // La conexión ya viene abierta desde DbConnection
      
      using(var command = new SqlCommand(sql, connection))
      {
        SqlDataReader reader = command.ExecuteReader();

        while(reader.Read())
        {
          Reporte reporte = new Reporte();
          
          reporte.Id = reader.GetInt32(0);
          reporte.Titulo = reader.GetString(1);
          reporte.Descripcion = reader.GetString(2);
          reporte.Fecha = reader.GetDateTime(3);
          reporte.Estado = reader.GetString(4); 
          reporte.UsuarioId = reader.GetInt32(5);
            
          reportes.Add(reporte);
        }
        
        reader.Close();
      }
    }

    return reportes; 
  }
}