using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options)
        : base(options)
        {

        }

        public DbSet<Superheld> Superhelden { get; set; }

        public DbSet<Bewertung> Bewertungen { get; set; }
    }
}