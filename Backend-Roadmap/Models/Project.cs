using System.ComponentModel.DataAnnotations;

namespace BackEnd.Models
{
    public class Project
    {
        [Key]
        public int ID { get; set; }
        public string? Name { get; set; }       
        public DateTime EndDate { get; set; }
        public DateTime StartDate { get; set; }

        public virtual ICollection<Epyc> Epyc { get; set; }
    }
}
