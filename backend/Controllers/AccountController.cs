using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System;
using System.Text;
using System.Security.Cryptography;
using System.Collections.Generic;
using Wellness360.Data;
using Wellness360.Models;
using Microsoft.EntityFrameworkCore;

namespace Wellness360.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AccountController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost("register")]
        public IActionResult Register([FromBody] Register model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            // Check if the email already exists
            if (_context.Users.Any(u => u.Email == model.Email))
                return Conflict(new { message = "Email already exists" });

            var user = new User
            {
                FirstName = model.FirstName,
                LastName = model.LastName,
                Username = model.Username,
                Email = model.Email,
                PasswordHash = HashPassword(model.Password)
            };

            _context.Users.Add(user);
            _context.SaveChanges();

            return Ok(new { message = "Registration successful" });
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteUser(int id)
        {
            var user = _context.Users.SingleOrDefault(u => u.Id == id);
            if (user == null)
            {
                return NotFound(new { message = "User not found" });
            }

            _context.Users.Remove(user);
            _context.SaveChanges();

            return Ok(new { message = "User deleted successfully" });
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] Login model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == model.Email);

            if (user == null || !VerifyPassword(model.Password, user.PasswordHash))
                return Unauthorized("Invalid credentials");

            var userData = new
            {
                user.Email,
                Role = user.Email == "admin@admin.com" ? "admin" : "user"
            };

            return Ok(userData);
        }
        [HttpGet("count")]
        public async Task<ActionResult<int>> GetUserCount()
        {
            var count = await _context.Users.CountAsync();
            return Ok(count);
        }

        [HttpGet("deletedcount")]
        public async Task<ActionResult<int>> GetDeletedUserCount()
        {
            var maxUserId = await _context.Users.MaxAsync(u => u.Id);
            var activeUserCount = await _context.Users.CountAsync();
            var deletedUserCount = maxUserId - activeUserCount;
            return Ok(deletedUserCount);
        }




        private string HashPassword(string password)
        {
            byte[] salt = new byte[16];
            using (var rng = new RNGCryptoServiceProvider())
            {
                rng.GetBytes(salt);
            }

            string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: password,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA256,
                iterationCount: 10000,
                numBytesRequested: 32));

            return Convert.ToBase64String(salt) + ":" + hashed;
        }

        private bool VerifyPassword(string enteredPassword, string storedHash)
        {
            var parts = storedHash.Split(':');
            if (parts.Length != 2) return false;

            var salt = Convert.FromBase64String(parts[0]);
            var storedPasswordHash = parts[1];

            string enteredPasswordHash = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: enteredPassword,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA256,
                iterationCount: 10000,
                numBytesRequested: 32));

            return storedPasswordHash == enteredPasswordHash;
        }
    }
}
