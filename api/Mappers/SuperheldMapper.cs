using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Bewertung;
using api.Dtos.Superheld;
using api.Models;

namespace api.Mappers
{
    public static class SuperheldMapper
    {
        public static SuperheldDto ToSuperheroDto(this Superheld superheldModel)
        {
            return new SuperheldDto
            {
                Name = superheldModel.Name,
                Bewertungen = superheldModel.Rating.Select(c => c.ToBewertungDto()).ToList()
            };
        }

        public static Superheld ToSuperheldFromCreateDto(this CreateSuperheldDto createSuperheldDto)
        {
            return new Superheld
            {
                Name = createSuperheldDto.Name,
            };
        }
    }
}

