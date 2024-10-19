using System.ComponentModel.DataAnnotations;

namespace Wellness360.Models
{
    public class Botuesi
    {
        [Key]
        public int PublisherId { get; set; }
        public string PublisherName { get; set; }
        public string Location { get; set; }
    }
}
