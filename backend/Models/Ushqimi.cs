using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Wellness360.Models
{
    public class Ushqimi
    {
        public int UshqimiId { get; set; }
        public string? Emri { get; set; }
        public int Kalorite { get; set; }
        public int KategoriaId { get; set; }
        public Kategoria? Kategoria { get; set; }
    }

}
