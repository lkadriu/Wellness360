using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Wellness360.Data;
using Wellness360.Models;
using Microsoft.Extensions.Logging;

[Route("api/[controller]")]
[ApiController]
public class ClassController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly ILogger<ClassController> _logger;

    public ClassController(ApplicationDbContext context, ILogger<ClassController> logger)
    {
        _context = context;
        _logger = logger;
    }

    // GET: api/Class
    [HttpGet]
    public async Task<IActionResult> GetAllCategories()
    {
        try
        {
            var categories = await _context.Classs.ToListAsync();
            return Ok(categories);
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error retrieving categories: {ex.Message}");
            return StatusCode(500, "Internal server error while retrieving categories.");
        }
    }

    // GET: api/Class/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Class>> GetClass(int id)
    {
        try
        {
            var Class = await _context.Classs
                .Include(k => k.ClassName)
                .FirstOrDefaultAsync(k => k.ClassId == id);

            if (Class == null)
            {
                _logger.LogWarning($"Class with ID {id} not found.");
                return NotFound();
            }

            return Ok(Class);
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error retrieving Class with ID {id}: {ex.Message}");
            return StatusCode(500, "Internal server error while retrieving Class.");
        }
    }

    // POST: api/Class
    [HttpPost]
    public async Task<ActionResult<Class>> PostClass(Class Class)
    {
        try
        {
            if (!ModelState.IsValid)
            {
                _logger.LogWarning("Invalid model state for POST request.");
                return BadRequest(ModelState);
            }

            _context.Classs.Add(Class);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetClass", new { id = Class.ClassId }, Class);
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error creating new Class: {ex.Message}");
            return StatusCode(500, "Internal server error while creating Class.");
        }
    }

    // PUT: api/Class/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutClass(int id, Class Class)
    {
        if (id != Class.ClassId)
        {
            _logger.LogWarning($"ID mismatch for PUT request. Received ID: {id}, Model ID: {Class.ClassId}");
            return BadRequest("ID mismatch.");
        }

        if (!ModelState.IsValid)
        {
            _logger.LogWarning("Invalid model state for PUT request.");
            return BadRequest(ModelState);
        }

        try
        {
            var existingCategory = await _context.Classs.FindAsync(id);
            if (existingCategory == null)
            {
                _logger.LogWarning($"Class with ID {id} not found.");
                return NotFound();
            }

            _context.Entry(existingCategory).CurrentValues.SetValues(Class);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error updating Class with ID {id}: {ex.Message}");
            return StatusCode(500, "Internal server error while updating Class.");
        }
    }

    // DELETE: api/Class/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteClass(int id)
    {
        try
        {
            var Class = await _context.Classs.FindAsync(id);
            if (Class == null)
            {
                _logger.LogWarning($"Class with ID {id} not found.");
                return NotFound();
            }

            _context.Classs.Remove(Class);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error deleting Class with ID {id}: {ex.Message}");
            return StatusCode(500, "Internal server error while deleting Class.");
        }
    }
}
