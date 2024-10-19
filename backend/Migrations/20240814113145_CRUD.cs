using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Wellness360.Migrations
{
    /// <inheritdoc />
    public partial class CRUD : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Kategorite",
                columns: table => new
                {
                    KategoriaId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Emri = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Kategorite", x => x.KategoriaId);
                });

            migrationBuilder.CreateTable(
                name: "Ushqimet",
                columns: table => new
                {
                    UshqimiId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Emri = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Kalorite = table.Column<int>(type: "int", nullable: false),
                    KategoriaId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ushqimet", x => x.UshqimiId);
                    table.ForeignKey(
                        name: "FK_Ushqimet_Kategorite_KategoriaId",
                        column: x => x.KategoriaId,
                        principalTable: "Kategorite",
                        principalColumn: "KategoriaId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Ushqimet_KategoriaId",
                table: "Ushqimet",
                column: "KategoriaId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Ushqimet");

            migrationBuilder.DropTable(
                name: "Kategorite");
        }
    }
}
