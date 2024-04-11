using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Wellness360.Models
{
	public class Vrapimi
	{

		[Key]
		[Required]
		public string Numri { get; set; }

		[Required]
		public double Distanca { get; set; }

		[Required]
		public int Koha { get; set; }
		[Required]
		public DateTime Data { get; set; }

		[Required]
		public double ShpejtesiaMesatare { get; set; }

		public int? Kalorite {  get; set; }


		public int LlogaritKalorite()
		{
			int KaloriteV = 0;
			double faktoriIKonvertimit = 1.4;
			KaloriteV = (int)((Koha * ShpejtesiaMesatare * faktoriIKonvertimit) / 60);
			return KaloriteV;
		}
	}
}
