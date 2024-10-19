using System.ComponentModel.DataAnnotations;

namespace Wellness360.Models
{
    public class RunningActivity
    {
        [Key]
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public TimeSpan Duration { get; set; }
        public double AverageSpeed { get; set; }
        public double CaloriesBurned { get; set; }
    }

}
