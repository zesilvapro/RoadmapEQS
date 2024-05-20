using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackEnd.Models
{
    public class Epic
    {
        [Key]
        public int ID { get; set; }

        // Foreign key property
        public int ProjectID { get; set; }       

        public string? Name { get; set; }
        public string? Color { get; set; }


        // Navigation properties 
        public virtual ICollection<Tasks> Tasks { get; set; }
         
        public virtual Project Project { get; set; }
    }
}
