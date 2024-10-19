using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Wellness360.Data;
using Wellness360.Models;
using Microsoft.Extensions.Logging;

[Route("api/[controller]")]
[ApiController]
public class BotuesiController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly ILogger<BotuesiController> _logger;

    public BotuesiController(ApplicationDbContext context, ILogger<BotuesiController> logger)
    {
        _context = context;
        _logger = logger;
    }

    // GET: api/Botuesi
    [HttpGet]
    public async Task<IActionResult> GetAllCategories()
    {
        try
        {
            var categories = await _context.Botuesis.ToListAsync();
            return Ok(categories);
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error retrieving categories: {ex.Message}");
            return StatusCode(500, "Internal server error while retrieving categories.");
        }
    }

    // GET: api/Botuesi/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Botuesi>> GetBotuesi(int id)
    {
        try
        {
            var Botuesi = await _context.Botuesis
                .Include(k => k.PublisherName)
                .FirstOrDefaultAsync(k => k.PublisherId == id);

            if (Botuesi == null)
            {
                _logger.LogWarning($"Botuesi with ID {id} not found.");
                return NotFound();
            }

            return Ok(Botuesi);
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error retrieving Botuesi with ID {id}: {ex.Message}");
            return StatusCode(500, "Internal server error while retrieving Botuesi.");
        }
    }

    // POST: api/Botuesi
    [HttpPost]
    public async Task<ActionResult<Botuesi>> PostBotuesi(Botuesi Botuesi)
    {
        try
        {
            if (!ModelState.IsValid)
            {
                _logger.LogWarning("Invalid model state for POST request.");
                return BadRequest(ModelState);
            }

            _context.Botuesis.Add(Botuesi);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBotuesi", new { id = Botuesi.PublisherId }, Botuesi);
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error creating new Botuesi: {ex.Message}");
            return StatusCode(500, "Internal server error while creating Botuesi.");
        }
    }

    // PUT: api/Botuesi/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutBotuesi(int id, Botuesi Botuesi)
    {
        if (id != Botuesi.PublisherId)
        {
            _logger.LogWarning($"ID mismatch for PUT request. Received ID: {id}, Model ID: {Botuesi.PublisherId}");
            return BadRequest("ID mismatch.");
        }

        if (!ModelState.IsValid)
        {
            _logger.LogWarning("Invalid model state for PUT request.");
            return BadRequest(ModelState);
        }

        try
        {
            var existingCategory = await _context.Botuesis.FindAsync(id);
            if (existingCategory == null)
            {
                _logger.LogWarning($"Botuesi with ID {id} not found.");
                return NotFound();
            }

            _context.Entry(existingCategory).CurrentValues.SetValues(Botuesi);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error updating Botuesi with ID {id}: {ex.Message}");
            return StatusCode(500, "Internal server error while updating Botuesi.");
        }
    }

    // DELETE: api/Botuesi/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteBotuesi(int id)
    {
        try
        {
            var Botuesi = await _context.Botuesis.FindAsync(id);
            if (Botuesi == null)
            {
                _logger.LogWarning($"Botuesi with ID {id} not found.");
                return NotFound();
            }

            _context.Botuesis.Remove(Botuesi);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error deleting Botuesi with ID {id}: {ex.Message}");
            return StatusCode(500, "Internal server error while deleting Botuesi.");
        }
    }
}
