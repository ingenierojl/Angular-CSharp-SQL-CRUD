using System.Data.SqlClient;

public class UpdateData
{
    private DbConnection _db;

    public UpdateData(DbConnection db)
    {
        _db = db;
    }

    public void UpdateDamageReport(int id, Reporte updatedReporte)
    {
        using (var connection = _db.GetConnection())
        {
            //connection.Open();

            string sql = "UPDATE danos_reportados SET titulo = @titulo, descripcion = @desc, fecha = @fecha, estado = @estado WHERE id = @id";
            using (var command = new SqlCommand(sql, connection))
                {
                command.Parameters.AddWithValue("@id", id);
                command.Parameters.AddWithValue("@titulo", updatedReporte.Titulo);
                command.Parameters.AddWithValue("@desc", updatedReporte.Descripcion);
                command.Parameters.AddWithValue("@fecha", updatedReporte.Fecha);
                command.Parameters.AddWithValue("@estado", updatedReporte.Estado);
                command.ExecuteNonQuery();
              }

        }
    }
}