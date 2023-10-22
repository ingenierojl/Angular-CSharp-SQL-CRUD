using System.Data.SqlClient;

public class DeleteData
{
    private DbConnection _db;

    public DeleteData(DbConnection db)
    {
        _db = db;
    }

    public void DeleteDamageReport(int id)
    {
        using (var connection = _db.GetConnection())
        {
            //connection.Open();

            string deleteQuery = "DELETE FROM danos_reportados WHERE id = @id";
            
            using (var command = new SqlCommand(deleteQuery, connection))
            {

                command.Parameters.AddWithValue("@id", id);

                int rowsAffected = command.ExecuteNonQuery();
                
                if(rowsAffected > 0)
                {
                    Console.WriteLine("Borracción exitosa");
                }
                else
                {
                    Console.WriteLine("Error al Deletear");
                }
            }
        }
    }
}