using System.Collections;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Wellness360.Models;

namespace Wellness360.Data
{
	public class ApplicationDbContext : IdentityDbContext
	{
		public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
			: base(options)
		{
		}
		public DbSet<Vrapimi> Vrapimi { get; set; } = default!;
        public DbSet<Ushqimii> Ushqimii { get; set; } = default!;
        public DbSet<KategoriaEUshqimeve> KategoriaEUshqimeve { get; set; } = default!;
        public DbSet<EmriUshqimit> EmriUshqimit { get; set; } = default!;
        public IEnumerable KategoriteEUshqimeve { get; internal set; }
        public IEnumerable EmratEUshqimeve { get; internal set; }
    }
}
