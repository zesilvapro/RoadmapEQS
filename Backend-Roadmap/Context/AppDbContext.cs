using BackEnd.Models;
using Microsoft.EntityFrameworkCore;
using static System.Runtime.InteropServices.JavaScript.JSType;


namespace BackEnd.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<User_Task> UserTasks { get; set; }
        public DbSet<Epyc> Epycs { get; set; }
        public DbSet<Tasks> Tasks { get; set; } //	'Task' is an ambiguous reference between 'BackEnd.Models.Task' and 'System.Threading.Tasks.Task'	Renamed class to tasks

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().ToTable("users");
            modelBuilder.Entity<Project>().ToTable("project");
            modelBuilder.Entity<Tasks>().ToTable("task"); // Ensuring table name stays the same
            modelBuilder.Entity<Epyc>().ToTable("epyc");
            modelBuilder.Entity<User_Task>().ToTable("user_task").HasNoKey();
        }
    }
}