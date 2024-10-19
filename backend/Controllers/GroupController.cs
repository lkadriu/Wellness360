using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Wellness360.Data;
using Wellness360.Models;
using Microsoft.Extensions.Logging;

[Route("api/[controller]")]
[ApiController]
public class GroupController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly ILogger<GroupController> _logger;

    public GroupController(ApplicationDbContext context, ILogger<GroupController> logger)
    {
        _context = context;
        _logger = logger;
    }

    // GET: api/Group
    [HttpGet]
    public async Task<IActionResult> GetAllCategories()
    {
        try
        {
            var categories = await _context.Groups.ToListAsync();
            return Ok(categories);
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error retrieving categories: {ex.Message}");
            return StatusCode(500, "Internal server error while retrieving categories.");
        }
    }

    // GET: api/Group/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Group>> GetGroup(int id)
    {
        try
        {
            var Group = await _context.Groups
                .Include(k => k.GroupName)
                .FirstOrDefaultAsync(k => k.Id == id);

            if (Group == null)
            {
                _logger.LogWarning($"Group with ID {id} not found.");
                return NotFound();
            }

            return Ok(Group);
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error retrieving Group with ID {id}: {ex.Message}");
            return StatusCode(500, "Internal server error while retrieving Group.");
        }
    }

    // POST: api/Group
    [HttpPost]
    public async Task<ActionResult<Group>> PostGroup(Group Group)
    {
        try
        {
            if (!ModelState.IsValid)
            {
                _logger.LogWarning("Invalid model state for POST request.");
                return BadRequest(ModelState);
            }

            _context.Groups.Add(Group);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGroup", new { id = Group.Id }, Group);
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error creating new Group: {ex.Message}");
            return StatusCode(500, "Internal server error while creating Group.");
        }
    }

    // PUT: api/Group/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutGroup(int id, Group Group)
    {
        if (id != Group.Id)
        {
            _logger.LogWarning($"ID mismatch for PUT request. Received ID: {id}, Model ID: {Group.Id}");
            return BadRequest("ID mismatch.");
        }

        if (!ModelState.IsValid)
        {
            _logger.LogWarning("Invalid model state for PUT request.");
            return BadRequest(ModelState);
        }

        try
        {
            var existingCategory = await _context.Groups.FindAsync(id);
            if (existingCategory == null)
            {
                _logger.LogWarning($"Group with ID {id} not found.");
                return NotFound();
            }

            _context.Entry(existingCategory).CurrentValues.SetValues(Group);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error updating Group with ID {id}: {ex.Message}");
            return StatusCode(500, "Internal server error while updating Group.");
        }
    }

    // DELETE: api/Group/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteGroup(int id)
    {
        try
        {
            var Group = await _context.Groups.FindAsync(id);
            if (Group == null)
            {
                _logger.LogWarning($"Group with ID {id} not found.");
                return NotFound();
            }

            _context.Groups.Remove(Group);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error deleting Group with ID {id}: {ex.Message}");
            return StatusCode(500, "Internal server error while deleting Group.");
        }
    }
}
