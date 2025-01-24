using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Bewertung;
using api.Models;

namespace api.Mappers
{
    public static class BewertungMapper
    {
        public static BewertungDto ToBewertungDto(this Bewertung bewertungModel)
        {
            return new BewertungDto
            {
                Rating = bewertungModel.Rating,
                GepostetAm = bewertungModel.GepostetAm,
            };
        }

        public static Bewertung ToBewertungFromCreateDto(this CreateBewertungDto createBewertungDto, int heroId)
        {
            return new Bewertung
            {
                Rating = createBewertungDto.Rating,
                GepostetAm = createBewertungDto.GepostetAm,
                SuperHeldId = heroId
            };
        }
    }
}

