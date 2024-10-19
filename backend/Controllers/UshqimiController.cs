using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Wellness360.Data;
using Wellness360.Models;
using Microsoft.Extensions.Logging;

[Route("api/[controller]")]
[ApiController]
public class UshqimiController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly ILogger<UshqimiController> _logger;

    public UshqimiController(ApplicationDbContext context, ILogger<UshqimiController> logger)
    {
        _context = context;
        _logger = logger;
    }

    // GET: api/Ushqimi
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Ushqimi>>> GetUshqimet()
    {
        return await _context.Ushqimet.ToListAsync();
    }

    // GET: api/Ushqimi/{id}
    [HttpGet("{id}")]
    public async Task<IActionResult> GetUshqimi(int id)
    {
        try
        {
            var ushqimi = await _context.Ushqimet
                                        .Include(u => u.Kategoria)
                                        .FirstOrDefaultAsync(u => u.UshqimiId == id);

            if (ushqimi == null)
            {
                _logger.LogWarning($"Food with ID {id} not found.");
                return NotFound($"Food with ID {id} not found.");
            }

            return Ok(ushqimi);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, $"Error retrieving food with ID {id}.");
            return StatusCode(500, "Internal server error while retrieving food.");
        }
    }

    // POST: api/Ushqimi
    [HttpPost]
    public async Task<ActionResult<Ushqimi>> PostUshqimi(Ushqimi ushqimi)
    {
        try
        {
            _context.Ushqimet.Add(ushqimi);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetUshqimi), new { id = ushqimi.UshqimiId }, ushqimi);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error creating new food.");
            return StatusCode(500, "Internal server error while creating new food.");
        }
    }

    // PUT: api/Ushqimi/{id}
    [HttpPut("{id}")]
    public async Task<IActionResult> PutUshqimi(int id, Ushqimi ushqimi)
    {
        if (id != ushqimi.UshqimiId)
        {
            _logger.LogWarning("The ID provided does not match the food ID.");
            return BadRequest("The ID provided does not match the food ID.");
        }

        try
        {
            _context.Entry(ushqimi).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }
        catch (DbUpdateConcurrencyException ex)
        {
            if (!_context.Ushqimet.Any(u => u.UshqimiId == id))
            {
                _logger.LogWarning($"Food with ID {id} not found.");
                return NotFound($"Food with ID {id} not found.");
            }

            _logger.LogError(ex, $"Concurrency error updating food with ID {id}.");
            return StatusCode(500, "Internal server error while updating food.");
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, $"Error updating food with ID {id}.");
            return StatusCode(500, "Internal server error while updating food.");
        }
    }

    // DELETE: api/Ushqimi/{id}
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteUshqimi(int id)
    {
        try
        {
            var ushqimi = await _context.Ushqimet.FindAsync(id);
            if (ushqimi == null)
            {
                _logger.LogWarning($"Food with ID {id} not found.");
                return NotFound($"Food with ID {id} not found.");
            }

            _context.Ushqimet.Remove(ushqimi);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, $"Error deleting food with ID {id}.");
            return StatusCode(500, "Internal server error while deleting food.");
        }
    }
}
