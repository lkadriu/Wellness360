using System.Collections;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.Web.CodeGenerators.Mvc.Templates.General;
using Wellness360.Models;

namespace Wellness360.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet<Kategoria> Kategorite { get; set; }
        public DbSet<Ushqimi> Ushqimet { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Kategoria>()
                .HasMany(k => k.Ushqimet)
                .WithOne(u => u.Kategoria)
                .HasForeignKey(u => u.KategoriaId);
        }


        public DbSet<User> Users { get; set; }
        public DbSet<RunningActivity> RunningActivities { get; set; }
        public DbSet<Group> Groups { get; set; }
        public DbSet<Class> Classs { get; set; }
        public DbSet<Botuesi> Botuesis { get; set; }
    }
}
