using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.WebSockets;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Bewertung;
using api.Mappers;
using api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Client;

namespace api.Controllers
{
    [Route("api/bewertung")]
    [ApiController]
    public class BewertungController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public BewertungController(ApplicationDbContext context)
        {
            _context = context;
        }

        // ------------------------------------------------------------

        [HttpPost("{heroId}")]
        public async Task<IActionResult> Create([FromRoute] int heroId, CreateBewertungDto bewertungDto)
        {
            var heroExists = await _context.Superhelden.AnyAsync(s => s.Id == heroId);

            if (heroExists == false)
            {
                return BadRequest("Der gesuchte Superheld existiert nicht.");
            }

            var bewertungToPost = bewertungDto.ToBewertungFromCreateDto(heroId);

            await _context.Bewertungen.AddAsync(bewertungToPost);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetById), new { id = bewertungToPost.Id }, bewertungToPost.ToBewertungDto());
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var bewertung = await _context.Bewertungen.Include(s => s.Superheld).ToListAsync();

            return Ok(bewertung);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var bewertung = await _context.Bewertungen.FirstOrDefaultAsync(i => i.Id == id);

            if (bewertung == null)
            {
                return NotFound();
            }

            return Ok(bewertung);
        }
    }
}

