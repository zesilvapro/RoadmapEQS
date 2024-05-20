using System.ComponentModel.DataAnnotations;

namespace BackEnd.Models
{
    public class User
    {
        [Key]
        public int ID { get; set; }
        public string? Name { get; set; }        
        public string? LastName { get; set; }
        public string? Email { get; set; }
        public string? Role { get; set; }
        public string? Username { get; set; }

        public string? Password { get; set; }

        public int UserTasksID { get; set; }

        //Navigation property
        public ICollection<User_Task> UserTasks { get; set; }
        
    }
}
