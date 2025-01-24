using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Superheld;
using api.Models;

namespace api.Dtos.Bewertung
{
    public class BewertungDto
    {
        public int Rating { get; set; }

        public DateTime GepostetAm { get; set; } = DateTime.Now;

        // public Superheld? Superheld {get; set; }
    }
}

