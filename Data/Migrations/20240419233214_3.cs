using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Wellness360.Data.Migrations
{
    /// <inheritdoc />
    public partial class _3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "EmriUshqimit",
                columns: table => new
                {
                    Ushqimi = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmriUshqimit", x => x.Ushqimi);
                });

            migrationBuilder.CreateTable(
                name: "KategoriaEUshqimeve",
                columns: table => new
                {
                    Kategoria = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_KategoriaEUshqimeve", x => x.Kategoria);
                });

            migrationBuilder.CreateTable(
                name: "Vrapimi",
                columns: table => new
                {
                    Numri = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Distanca = table.Column<double>(type: "float", nullable: false),
                    Koha = table.Column<int>(type: "int", nullable: false),
                    Data = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ShpejtesiaMesatare = table.Column<double>(type: "float", nullable: false),
                    Kalorite = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vrapimi", x => x.Numri);
                });

            migrationBuilder.CreateTable(
                name: "Ushqimii",
                columns: table => new
                {
                    Data = table.Column<DateTime>(type: "datetime2", nullable: false),
                    KategoriaEUshqimeve = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    EmriUshqimit = table.Column<string>(type: "nvarchar(100)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ushqimii", x => x.Data);
                    table.ForeignKey(
                        name: "FK_Ushqimii_EmriUshqimit_EmriUshqimit",
                        column: x => x.EmriUshqimit,
                        principalTable: "EmriUshqimit",
                        principalColumn: "Ushqimi");
                    table.ForeignKey(
                        name: "FK_Ushqimii_KategoriaEUshqimeve_KategoriaEUshqimeve",
                        column: x => x.KategoriaEUshqimeve,
                        principalTable: "KategoriaEUshqimeve",
                        principalColumn: "Kategoria");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Ushqimii_EmriUshqimit",
                table: "Ushqimii",
                column: "EmriUshqimit");

            migrationBuilder.CreateIndex(
                name: "IX_Ushqimii_KategoriaEUshqimeve",
                table: "Ushqimii",
                column: "KategoriaEUshqimeve");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Ushqimii");

            migrationBuilder.DropTable(
                name: "Vrapimi");

            migrationBuilder.DropTable(
                name: "EmriUshqimit");

            migrationBuilder.DropTable(
                name: "KategoriaEUshqimeve");
        }
    }
}
