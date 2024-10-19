using System.ComponentModel.DataAnnotations;

namespace Wellness360.Models
{
    public class Kategoria
    {
        public int KategoriaId { get; set; }
        public string? Emri { get; set; }
        public List<Ushqimi>? Ushqimet { get; set; }
    }

}
