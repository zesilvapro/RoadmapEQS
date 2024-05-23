using BackEnd.Models;

namespace BackEnd.Dtos
{
    public class User_Task_Dto
    {
        public int Id { get; set; }
        public int TaskId { get; set; }
        public int UserId { get; set; }
    }
}
