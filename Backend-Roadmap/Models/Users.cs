using System.ComponentModel.DataAnnotations;

namespace BackEnd.Models
{
    public class Users
    {
        [Key]
        public int ID { get; set; }
        public string? Name { get; set; }        
        public string? LastName { get; set; }
        public string? Email { get; set; }
        public string? Role { get; set; }
        public string? Username { get; set; }
        public string? Password { get; set; }
    }
}
