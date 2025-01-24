using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Bewertung;

namespace api.Dtos.Superheld
{
    public class SuperheldDto
    {
        // public int Id { get; set; }

        public string? Name { get; set; }

        public List<BewertungDto> Bewertungen { get; set; }
    }
}

