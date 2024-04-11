using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Wellness360.Data;
using Wellness360.Models;

namespace Wellness360.Controllers
{
    public class VrapimisController : Controller
    {
        private readonly ApplicationDbContext _context;

        public VrapimisController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: Vrapimi
        public async Task<IActionResult> Index()
        {
            var vrapime = await _context.Vrapimi.ToListAsync();
            foreach (var vrapim in vrapime)
            {
                vrapim.Kalorite = vrapim.LlogaritKalorite();
            }
            return View(vrapime);
        }

        // GET: Vrapimi/Details/5
        public async Task<IActionResult> Details(string id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var vrapimi = await _context.Vrapimi
                .FirstOrDefaultAsync(m => m.Numri == id);
            if (vrapimi == null)
            {
                return NotFound();
            }

            return View(vrapimi);
        }

        // GET: Vrapimi/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Vrapimi/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Numri,Distanca,Koha,Data,ShpejtesiaMesatare")] Vrapimi vrapimi)
        {
            if (ModelState.IsValid)
            {
                _context.Add(vrapimi);
                await _context.SaveChangesAsync();
                vrapimi.Kalorite = vrapimi.LlogaritKalorite(); // Llogarit kaloritë
                await _context.SaveChangesAsync(); // Ruaj ndryshimet
                return RedirectToAction(nameof(Index));
            }
            return View(vrapimi);
        }

        // GET: Vrapimi/Delete/5
        public async Task<IActionResult> Delete(string id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var vrapimi = await _context.Vrapimi
                .FirstOrDefaultAsync(m => m.Numri == id);
            if (vrapimi == null)
            {
                return NotFound();
            }

            return View(vrapimi);
        }

        // POST: Vrapimi/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(string id)
        {
            var vrapimi = await _context.Vrapimi.FindAsync(id);
            if (vrapimi != null)
            {
                _context.Vrapimi.Remove(vrapimi);
                await _context.SaveChangesAsync();
            }
            return RedirectToAction(nameof(Index));
        }

        private bool VrapimiExists(string id)
        {
            return _context.Vrapimi.Any(e => e.Numri == id);
        }
    }
}
