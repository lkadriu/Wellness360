using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Wellness360.Models
{
    public class KategoriaEUshqimeve
    {
        [Key]
        [Required]
        [MaxLength(50)]
        public string Kategoria { get; set; } // Zgjidhjet e mundshme të emrave të kategorive të ushqimeve
    }


}
