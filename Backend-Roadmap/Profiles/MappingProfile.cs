using AutoMapper;
using BackEnd.Dtos;
using BackEnd.Models;

namespace BackEnd.Profiles
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<User, UserDto>().ReverseMap();
            CreateMap<Project, ProjectDto>().ReverseMap();
            CreateMap<Epic, EpicDto>().ReverseMap();
            CreateMap<User_Task, User_Task_Dto>().ReverseMap();
            CreateMap<Tasks, TaskDto>().ReverseMap();

        }


    }
}
