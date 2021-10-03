using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Toolbox.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace Toolbox.Data
{
    public class ToolBoxDBContext : IdentityDbContext<User>
    {
        public ToolBoxDBContext(DbContextOptions options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}