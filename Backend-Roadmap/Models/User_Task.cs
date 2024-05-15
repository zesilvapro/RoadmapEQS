using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackEnd.Models
{
    public class User_Task
    {
        [Key]
        public int ID { get; set; }

        // Foreign key property
        public int UserID { get; set; }

        // Navigation property
        [ForeignKey("UserID")]
        public Users User { get; set; }

        public int TaskID { get; set; }

       
        public Task Task { get; set; }
    }
}
