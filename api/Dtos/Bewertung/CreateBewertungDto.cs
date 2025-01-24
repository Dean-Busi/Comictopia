using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Bewertung
{
    public class CreateBewertungDto
    {
        public int Rating { get; set; }

        public DateTime GepostetAm { get; set; } = DateTime.Now;
    }
}