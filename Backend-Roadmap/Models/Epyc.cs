using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackEnd.Models
{
    public class Epyc
    {
        [Key]
        public int ID { get; set; }

        // Foreign key property
        public int ProjectID { get; set; }

        // Navigation property
        [ForeignKey("ProjectID")]
        public Project Project { get; set; }

        public string? Name { get; set; }
        public string? Color { get; set; }

        public ICollection<Task> Tasks { get; set; }
    }
}
