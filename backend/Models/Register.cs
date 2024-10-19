using System.ComponentModel.DataAnnotations;

namespace Wellness360.Models
{
    public class Register
    {
        public string FirstName {  get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        [Key]
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
