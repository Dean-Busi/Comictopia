using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Bewertung
    {
        public int Id {get; set; }

        public int Rating { get; set; }

        public DateTime GepostetAm { get; set; } = DateTime.Now;

        public int? SuperHeldId {get; set; }

        public Superheld? Superheld {get; set; }
    }
}

