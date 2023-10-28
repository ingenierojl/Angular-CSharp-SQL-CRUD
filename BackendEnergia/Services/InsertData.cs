using System.Data.SqlClient;

public class InsertData
{
    private DbConnection _db;

    public InsertData(DbConnection db)
    {
        _db = db;
    }

    public void InsertDamageReport(DanoModel danoData)
    {
        using (var connection = _db.GetConnection())
        {
            //connection.Open();

            string insertQuery = "INSERT INTO danos_reportados (titulo, descripcion, fecha, estado, usuario_id) VALUES (@titulo, @descripcion, @fecha, @estado, @usuario_id)";
            
            using (var command = new SqlCommand(insertQuery, connection))
            {
                command.Parameters.AddWithValue("@titulo", danoData.Titulo);
                command.Parameters.AddWithValue("@descripcion", danoData.Descripcion);
                command.Parameters.AddWithValue("@fecha", danoData.Fecha);
                command.Parameters.AddWithValue("@estado", danoData.Estado);
                command.Parameters.AddWithValue("@usuario_id", danoData.Id);

                int rowsAffected = command.ExecuteNonQuery();
                
                if(rowsAffected > 0)
                {
                    Console.WriteLine("Inserción exitosa");
                }
                else
                {
                    Console.WriteLine("Error al insertar");
                }
            }
        }
    }
}