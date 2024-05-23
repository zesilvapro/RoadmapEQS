namespace BackEnd.Dtos
{
    public class TaskDto
    {
        public int Id { get; set; }
        public int EpicId { get; set; }
        public string? FigmaUrl { get; set; }
        public string? JiraUrl { get; set; }
        public string? Name { get; set; }
        public DateTime EndDate { get; set; }
        public DateTime StartDate { get; set; }
    }
}
