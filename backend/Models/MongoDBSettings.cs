using MongoDB.Bson.Serialization.Attributes;

namespace Wellness360.Models
{
    public class MongoDBSettings
    {
        [BsonElement("ConnectionString")]
        public string ConnectionString { get; set; }

        [BsonElement("DatabaseName")]
        public string DatabaseName { get; set; }
    }
}

