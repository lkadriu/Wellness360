using System.ComponentModel.DataAnnotations;

namespace Wellness360.Models
{
    public class EmriUshqimit
    {
        [Key]
        [Required]
        [MaxLength(100)]
        public string Ushqimi { get; set; }
    }
}
