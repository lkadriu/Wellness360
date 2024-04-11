using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Wellness360.Data.Migrations
{
    /// <inheritdoc />
    public partial class First : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Vrapimi",
                columns: table => new
                {
                    Numri = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Distanca = table.Column<double>(type: "float", nullable: false),
                    Koha = table.Column<int>(type: "int", nullable: false),
                    Data = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ShpejtesiaMesatare = table.Column<double>(type: "float", nullable: false),
                    Kalorite = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vrapimi", x => x.Numri);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Vrapimi");
        }
    }
}
