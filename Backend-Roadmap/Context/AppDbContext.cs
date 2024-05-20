using BackEnd.Models;
using Microsoft.EntityFrameworkCore;
using static System.Runtime.InteropServices.JavaScript.JSType;
using TasksModel = BackEnd.Models.Tasks;



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
        public DbSet<TasksModel> Tasks { get; set; } //	'Task' is an ambiguous reference between 'BackEnd.Models.Task' and 'System.Threading.Tasks.Task' -	using TasksModel = BackEnd.Models.Tasks;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().ToTable("users");
            modelBuilder.Entity<Project>().ToTable("project");
            modelBuilder.Entity<TasksModel>().ToTable("task"); // Ensuring table name stays the same
            modelBuilder.Entity<Epyc>().ToTable("epyc");
            modelBuilder.Entity<User_Task>().ToTable("user_task").HasNoKey();
        }
    }
}