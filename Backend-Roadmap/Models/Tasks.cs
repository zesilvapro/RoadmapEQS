using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackEnd.Models
{
    public class Tasks
    {
        [Key]
        public int ID { get; set; }

      

        public string? FigmaUrl { get; set; }
        public string? JiraUrl { get; set; }
        public string? Name { get; set; }
        public DateTime EndDate { get; set; }
        public DateTime StartDate { get; set; }

        // Foreign key property
        public int EpycID { get; set; }
        // public int UserTasksID { get; set; }
        // Navigation properties    
        public virtual Epyc Epyc { get; set; }

        
        public virtual ICollection<User_Task> UserTasks { get; set; }
    }
}
