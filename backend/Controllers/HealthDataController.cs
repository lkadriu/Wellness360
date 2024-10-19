using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using Wellness360.Models;

namespace Wellness360.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HealthDataController : ControllerBase
    {
        private readonly IMongoCollection<HealthData> _healthDataCollection;

        public HealthDataController(IOptions<MongoDBSettings> mongoDBSettings)
        {
            var settings = mongoDBSettings.Value;
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _healthDataCollection = database.GetCollection<HealthData>("HealthData");
        }

        [HttpPost]
        public async Task<IActionResult> AddHealthData([FromBody] HealthData healthData)
        {
            if (healthData == null)
            {
                return BadRequest("Invalid health data.");
            }

            await _healthDataCollection.InsertOneAsync(healthData);
            return Ok(healthData);
        }

        [HttpGet("{userId}")]
        public async Task<IActionResult> GetHealthData(string userId)
        {
            var healthData = await _healthDataCollection.Find(h => h.UserId == userId).ToListAsync();
            return Ok(healthData);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateHealthData(string id, [FromBody] HealthData updatedHealthData)
        {
            var result = await _healthDataCollection.ReplaceOneAsync(h => h.Id == id, updatedHealthData);

            if (result.ModifiedCount == 0)
            {
                return NotFound("Health data not found.");
            }

            return Ok(updatedHealthData);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHealthData(string id)
        {
            var result = await _healthDataCollection.DeleteOneAsync(h => h.Id == id);

            if (result.DeletedCount == 0)
            {
                return NotFound("Health data not found.");
            }

            return NoContent();
        }

    }
}
