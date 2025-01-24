using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace api.Models
{
    public class Superheld
    {
        public int Id { get; set; }

        public string? Name { get; set; }

        public List<Bewertung> Rating {get; set; } = new List<Bewertung>();
    }
}

