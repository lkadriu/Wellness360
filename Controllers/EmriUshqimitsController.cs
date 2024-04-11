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
    public class EmriUshqimitsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public EmriUshqimitsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: EmriUshqimits
        public async Task<IActionResult> Index()
        {
            return View(await _context.EmriUshqimit.ToListAsync());
        }

        // GET: EmriUshqimits/Details/5
        public async Task<IActionResult> Details(string id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var emriUshqimit = await _context.EmriUshqimit
                .FirstOrDefaultAsync(m => m.Ushqimi == id);
            if (emriUshqimit == null)
            {
                return NotFound();
            }

            return View(emriUshqimit);
        }

        // GET: EmriUshqimits/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: EmriUshqimits/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Ushqimi")] EmriUshqimit emriUshqimit)
        {
            if (ModelState.IsValid)
            {
                _context.Add(emriUshqimit);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(emriUshqimit);
        }

        // GET: EmriUshqimits/Edit/5
        public async Task<IActionResult> Edit(string id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var emriUshqimit = await _context.EmriUshqimit.FindAsync(id);
            if (emriUshqimit == null)
            {
                return NotFound();
            }
            return View(emriUshqimit);
        }

        // POST: EmriUshqimits/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(string id, [Bind("Ushqimi")] EmriUshqimit emriUshqimit)
        {
            if (id != emriUshqimit.Ushqimi)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(emriUshqimit);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!EmriUshqimitExists(emriUshqimit.Ushqimi))
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
            return View(emriUshqimit);
        }

        // GET: EmriUshqimits/Delete/5
        public async Task<IActionResult> Delete(string id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var emriUshqimit = await _context.EmriUshqimit
                .FirstOrDefaultAsync(m => m.Ushqimi == id);
            if (emriUshqimit == null)
            {
                return NotFound();
            }

            return View(emriUshqimit);
        }

        // POST: EmriUshqimits/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(string id)
        {
            var emriUshqimit = await _context.EmriUshqimit.FindAsync(id);
            if (emriUshqimit != null)
            {
                _context.EmriUshqimit.Remove(emriUshqimit);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool EmriUshqimitExists(string id)
        {
            return _context.EmriUshqimit.Any(e => e.Ushqimi == id);
        }
    }
}
