using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Wellness360.Data;
using Wellness360.Models;
using Microsoft.Extensions.Logging;

[Route("api/[controller]")]
[ApiController]
public class KategoriaController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly ILogger<KategoriaController> _logger;

    public KategoriaController(ApplicationDbContext context, ILogger<KategoriaController> logger)
    {
        _context = context;
        _logger = logger;
    }

    // GET: api/Kategoria
    [HttpGet]
    public async Task<IActionResult> GetAllCategories()
    {
        try
        {
            var categories = await _context.Kategorite.ToListAsync();
            return Ok(categories);
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error retrieving categories: {ex.Message}");
            return StatusCode(500, "Internal server error while retrieving categories.");
        }
    }

    // GET: api/Kategoria/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Kategoria>> GetKategoria(int id)
    {
        try
        {
            var kategoria = await _context.Kategorite
                .Include(k => k.Ushqimet)
                .FirstOrDefaultAsync(k => k.KategoriaId == id);

            if (kategoria == null)
            {
                _logger.LogWarning($"Kategoria with ID {id} not found.");
                return NotFound();
            }

            return Ok(kategoria);
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error retrieving kategoria with ID {id}: {ex.Message}");
            return StatusCode(500, "Internal server error while retrieving kategoria.");
        }
    }

    // POST: api/Kategoria
    [HttpPost]
    public async Task<ActionResult<Kategoria>> PostKategoria(Kategoria kategoria)
    {
        try
        {
            if (!ModelState.IsValid)
            {
                _logger.LogWarning("Invalid model state for POST request.");
                return BadRequest(ModelState);
            }

            _context.Kategorite.Add(kategoria);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetKategoria", new { id = kategoria.KategoriaId }, kategoria);
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error creating new kategoria: {ex.Message}");
            return StatusCode(500, "Internal server error while creating kategoria.");
        }
    }

    // PUT: api/Kategoria/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutKategoria(int id, Kategoria kategoria)
    {
        if (id != kategoria.KategoriaId)
        {
            _logger.LogWarning($"ID mismatch for PUT request. Received ID: {id}, Model ID: {kategoria.KategoriaId}");
            return BadRequest("ID mismatch.");
        }

        if (!ModelState.IsValid)
        {
            _logger.LogWarning("Invalid model state for PUT request.");
            return BadRequest(ModelState);
        }

        try
        {
            var existingCategory = await _context.Kategorite.FindAsync(id);
            if (existingCategory == null)
            {
                _logger.LogWarning($"Kategoria with ID {id} not found.");
                return NotFound();
            }

            _context.Entry(existingCategory).CurrentValues.SetValues(kategoria);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error updating kategoria with ID {id}: {ex.Message}");
            return StatusCode(500, "Internal server error while updating kategoria.");
        }
    }

    // DELETE: api/Kategoria/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteKategoria(int id)
    {
        try
        {
            var kategoria = await _context.Kategorite.FindAsync(id);
            if (kategoria == null)
            {
                _logger.LogWarning($"Kategoria with ID {id} not found.");
                return NotFound();
            }

            _context.Kategorite.Remove(kategoria);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error deleting kategoria with ID {id}: {ex.Message}");
            return StatusCode(500, "Internal server error while deleting kategoria.");
        }
    }
}
