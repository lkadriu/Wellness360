using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Wellness360.Data;
using Wellness360.Models;

namespace Wellness360.Controllers
{
    public class KategoriaEUshqimevesController : Controller
    {
        private readonly ApplicationDbContext _context;

        public KategoriaEUshqimevesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: KategoriaEUshqimeves
        public async Task<IActionResult> Index()
        {
            return View(await _context.KategoriaEUshqimeve.ToListAsync());
        }

        // GET: KategoriaEUshqimeves/Details/5
        public async Task<IActionResult> Details(string id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var kategoriaEUshqimeve = await _context.KategoriaEUshqimeve
                .FirstOrDefaultAsync(m => m.Kategoria == id);
            if (kategoriaEUshqimeve == null)
            {
                return NotFound();
            }

            return View(kategoriaEUshqimeve);
        }

        // GET: KategoriaEUshqimeves/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: KategoriaEUshqimeves/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Kategoria")] KategoriaEUshqimeve kategoriaEUshqimeve)
        {
            if (ModelState.IsValid)
            {
                _context.Add(kategoriaEUshqimeve);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(kategoriaEUshqimeve);
        }

        // GET: KategoriaEUshqimeves/Edit/5
        public async Task<IActionResult> Edit(string id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var kategoriaEUshqimeve = await _context.KategoriaEUshqimeve.FindAsync(id);
            if (kategoriaEUshqimeve == null)
            {
                return NotFound();
            }
            return View(kategoriaEUshqimeve);
        }

        // POST: KategoriaEUshqimeves/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(string id, [Bind("Kategoria")] KategoriaEUshqimeve kategoriaEUshqimeve)
        {
            if (id != kategoriaEUshqimeve.Kategoria)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(kategoriaEUshqimeve);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!KategoriaEUshqimeveExists(kategoriaEUshqimeve.Kategoria))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(kategoriaEUshqimeve);
        }

        // GET: KategoriaEUshqimeves/Delete/5
        public async Task<IActionResult> Delete(string id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var kategoriaEUshqimeve = await _context.KategoriaEUshqimeve
                .FirstOrDefaultAsync(m => m.Kategoria == id);
            if (kategoriaEUshqimeve == null)
            {
                return NotFound();
            }

            return View(kategoriaEUshqimeve);
        }

        // POST: KategoriaEUshqimeves/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(string id)
        {
            var kategoriaEUshqimeve = await _context.KategoriaEUshqimeve.FindAsync(id);
            if (kategoriaEUshqimeve != null)
            {
                _context.KategoriaEUshqimeve.Remove(kategoriaEUshqimeve);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool KategoriaEUshqimeveExists(string id)
        {
            return _context.KategoriaEUshqimeve.Any(e => e.Kategoria == id);
        }
    }
}
