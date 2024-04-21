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
    public class UshqimiisController : Controller
    {
        private readonly ApplicationDbContext _context;

        public UshqimiisController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: Ushqimiis
        public async Task<IActionResult> Index()
        {
            return View(await _context.Ushqimii.ToListAsync());
        }

        // GET: Ushqimiis/Details/5
        public async Task<IActionResult> Details(DateTime? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var ushqimii = await _context.Ushqimii
                .FirstOrDefaultAsync(m => m.Data == id);
            if (ushqimii == null)
            {
                return NotFound();
            }

            return View(ushqimii);
        }

        // GET: Ushqimiis/Create
        public IActionResult Create()
        {
            ViewData["Kategoria"] = new SelectList(_context.KategoriaEUshqimeve, "Kategoria", "Kategoria");
            ViewData["Ushqimi"] = new SelectList(_context.EmriUshqimit, "Ushqimi", "Ushqimi");
            return View();
        }


        // POST: Ushqimiis/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Data,Kategoria,Ushqimi")] Ushqimii ushqimii)
        {
            if (ModelState.IsValid)
            {
                _context.Add(ushqimii);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["Kategoria"] = new SelectList(_context.KategoriaEUshqimeve, "Kategoria", "Kategoria", ushqimii.Kategoria);
            ViewData["Ushqimi"] = new SelectList(_context.EmriUshqimit, "Ushqimi", "Ushqimi", ushqimii.Ushqimi);
            return View(ushqimii);
        }

        // GET: Ushqimiis/Edit/5
        public async Task<IActionResult> Edit(DateTime? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var ushqimii = await _context.Ushqimii.FindAsync(id);
            if (ushqimii == null)
            {
                return NotFound();
            }
            ViewData["Kategoria"] = new SelectList(_context.KategoriaEUshqimeve, "Kategoria", "Kategoria", ushqimii.Kategoria);
            ViewData["Ushqimi"] = new SelectList(_context.EmriUshqimit, "Ushqimi", "Ushqimi", ushqimii.Ushqimi);
            return View(ushqimii);
        }

        // POST: Ushqimiis/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(DateTime id, [Bind("Data,Kategoria,Ushqimi")] Ushqimii ushqimii)
        {
            if (id != ushqimii.Data)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(ushqimii);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!UshqimiiExists(ushqimii.Data))
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
            ViewData["Kategoria"] = new SelectList(_context.KategoriaEUshqimeve, "Kategoria", "Kategoria", ushqimii.Kategoria);
            ViewData["Ushqimi"] = new SelectList(_context.EmriUshqimit, "Ushqimi", "Ushqimi", ushqimii.Ushqimi);
            return View(ushqimii);
        }

        // GET: Ushqimiis/Delete/5
        public async Task<IActionResult> Delete(DateTime? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var ushqimii = await _context.Ushqimii
                .FirstOrDefaultAsync(m => m.Data == id);
            if (ushqimii == null)
            {
                return NotFound();
            }

            return View(ushqimii);
        }

        // POST: Ushqimiis/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(DateTime id)
        {
            var ushqimii = await _context.Ushqimii.FindAsync(id);
            if (ushqimii != null)
            {
                _context.Ushqimii.Remove(ushqimii);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool UshqimiiExists(DateTime id)
        {
            return _context.Ushqimii.Any(e => e.Data == id);
        }
    }
}
