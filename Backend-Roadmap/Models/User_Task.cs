using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackEnd.Models
{
    public class User_Task
    {
        public int Id { get; set; }

        // Foreign key property
        // public int UserID { get; set; }    

        // public int TaskID { get; set; }

       //Navigation properties
        public virtual Tasks  Task { get; set; }

        public virtual User Users { get; set; }

      
    }
}
