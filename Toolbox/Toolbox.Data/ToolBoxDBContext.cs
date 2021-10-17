using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Toolbox.Data.Models;

namespace Toolbox.Data
{
    public class ToolBoxDbContext : DbContext
    {
        public ToolBoxDbContext(DbContextOptions options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
           
            base.OnModelCreating(modelBuilder);
        }
        
        public virtual DbSet<Classroom> Classrooms { get; set; }
        public virtual DbSet<Student> Students { get; set; }
    }
}