using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Bewertung;
using api.Dtos.Superheld;
using api.Mappers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
    [Route("api/superheld")]
    [ApiController]
    public class SuperheldController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public SuperheldController(ApplicationDbContext context)
        {
            _context = context;
        }

        // ------------------------------------------------------------

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateSuperheldDto superheldDto)
        {
            var superheldToCreate = superheldDto.ToSuperheldFromCreateDto();
            await _context.Superhelden.AddAsync(superheldToCreate);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetById), new { id = superheldToCreate.Id }, superheldToCreate.ToSuperheroDto());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var superheld = await _context.Superhelden.Include(c => c.Rating).FirstOrDefaultAsync(i => i.Id == id);

            if (superheld == null)
            {
                return NotFound();
            }

            return Ok(superheld);
        }
    }
}


