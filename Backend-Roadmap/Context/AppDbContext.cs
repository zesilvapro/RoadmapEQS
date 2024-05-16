using BackEnd.Models;
using Microsoft.EntityFrameworkCore;
using Task = BackEnd.Models.Task;

namespace BackEnd.Context
{
    public class AppDbContext : DbContext
    {
        
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Users> Users { get; set; }
        public DbSet<Project> Project { get; set; }
        public DbSet<Task> Tasks { get; set; }
        public DbSet<User_Task> User_Task { get; set; }
        public DbSet<Epyc> Epyc { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Users>().ToTable("users");
            modelBuilder.Entity<Project>().ToTable("project");
            modelBuilder.Entity<Task>().ToTable("task");
            modelBuilder.Entity<Epyc>().ToTable("epyc");
            modelBuilder.Entity<User_Task>().ToTable("user_task").HasNoKey();

        
        }

       
    }
}
