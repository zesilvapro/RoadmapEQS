using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackEnd.Models
{
    public class Task
    {
        [Key]
        public int ID { get; set; }

        // Foreign key property
        public int EpycID { get; set; }

        // Navigation property
        [ForeignKey("EpycID")]
        public Epyc Epyc { get; set; }

        public string? FigmaUrl { get; set; }
        public string? JiraUrl { get; set; }
        public string? Name { get; set; }
        public DateTime EndDate { get; set; }
        public DateTime StartDate { get; set; }
    }
}
