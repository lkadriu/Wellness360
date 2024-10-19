using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace Wellness360.Models
{
    public class HealthData
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("UserId")]
        public string UserId { get; set; }

        [BsonElement("Date")]
        public DateTime Date { get; set; }

        [BsonElement("Weight")]
        public double Weight { get; set; }

        [BsonElement("BloodPressure")]
        public string BloodPressure { get; set; }

        [BsonElement("HeartRate")]
        public int HeartRate { get; set; }

        [BsonElement("SleepHours")]
        public double SleepHours { get; set; }

        [BsonElement("WaterIntake")]
        public double WaterIntake { get; set; }

        [BsonElement("DailyMood")]
        public string DailyMood { get; set; }
    }
}
