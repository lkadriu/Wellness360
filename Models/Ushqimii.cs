using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Wellness360.Models
{
    public class Ushqimii
    {
        [Key]
        [Required]
        public DateTime Data { get; set; }

        public string Kategoria { get; set; }
        public virtual KategoriaEUshqimeve? KategoriaEUshqimeve { get; set; }

        public string Ushqimi { get; set; }
        public virtual EmriUshqimit? EmriUshqimit { get; set; }
    }

}
