public class Reporte  
{
    public int Id { get; set; }
    public string? Titulo { get; set; }
    public string? Descripcion { get; set; } 
    public DateTime Fecha { get; set; }
    public string? Estado { get; set; }
    public int UsuarioId { get; set; }
}