using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Wellness360.Data.Migrations
{
    /// <inheritdoc />
    public partial class _4 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Ushqimii_EmriUshqimit_EmriUshqimit",
                table: "Ushqimii");

            migrationBuilder.DropForeignKey(
                name: "FK_Ushqimii_KategoriaEUshqimeve_KategoriaEUshqimeve",
                table: "Ushqimii");

            migrationBuilder.RenameColumn(
                name: "KategoriaEUshqimeve",
                table: "Ushqimii",
                newName: "KategoriaEUshqimeveKategoria");

            migrationBuilder.RenameColumn(
                name: "EmriUshqimit",
                table: "Ushqimii",
                newName: "EmriUshqimitUshqimi");

            migrationBuilder.RenameIndex(
                name: "IX_Ushqimii_KategoriaEUshqimeve",
                table: "Ushqimii",
                newName: "IX_Ushqimii_KategoriaEUshqimeveKategoria");

            migrationBuilder.RenameIndex(
                name: "IX_Ushqimii_EmriUshqimit",
                table: "Ushqimii",
                newName: "IX_Ushqimii_EmriUshqimitUshqimi");

            migrationBuilder.AddColumn<string>(
                name: "Kategoria",
                table: "Ushqimii",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Ushqimi",
                table: "Ushqimii",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddForeignKey(
                name: "FK_Ushqimii_EmriUshqimit_EmriUshqimitUshqimi",
                table: "Ushqimii",
                column: "EmriUshqimitUshqimi",
                principalTable: "EmriUshqimit",
                principalColumn: "Ushqimi");

            migrationBuilder.AddForeignKey(
                name: "FK_Ushqimii_KategoriaEUshqimeve_KategoriaEUshqimeveKategoria",
                table: "Ushqimii",
                column: "KategoriaEUshqimeveKategoria",
                principalTable: "KategoriaEUshqimeve",
                principalColumn: "Kategoria");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Ushqimii_EmriUshqimit_EmriUshqimitUshqimi",
                table: "Ushqimii");

            migrationBuilder.DropForeignKey(
                name: "FK_Ushqimii_KategoriaEUshqimeve_KategoriaEUshqimeveKategoria",
                table: "Ushqimii");

            migrationBuilder.DropColumn(
                name: "Kategoria",
                table: "Ushqimii");

            migrationBuilder.DropColumn(
                name: "Ushqimi",
                table: "Ushqimii");

            migrationBuilder.RenameColumn(
                name: "KategoriaEUshqimeveKategoria",
                table: "Ushqimii",
                newName: "KategoriaEUshqimeve");

            migrationBuilder.RenameColumn(
                name: "EmriUshqimitUshqimi",
                table: "Ushqimii",
                newName: "EmriUshqimit");

            migrationBuilder.RenameIndex(
                name: "IX_Ushqimii_KategoriaEUshqimeveKategoria",
                table: "Ushqimii",
                newName: "IX_Ushqimii_KategoriaEUshqimeve");

            migrationBuilder.RenameIndex(
                name: "IX_Ushqimii_EmriUshqimitUshqimi",
                table: "Ushqimii",
                newName: "IX_Ushqimii_EmriUshqimit");

            migrationBuilder.AddForeignKey(
                name: "FK_Ushqimii_EmriUshqimit_EmriUshqimit",
                table: "Ushqimii",
                column: "EmriUshqimit",
                principalTable: "EmriUshqimit",
                principalColumn: "Ushqimi");

            migrationBuilder.AddForeignKey(
                name: "FK_Ushqimii_KategoriaEUshqimeve_KategoriaEUshqimeve",
                table: "Ushqimii",
                column: "KategoriaEUshqimeve",
                principalTable: "KategoriaEUshqimeve",
                principalColumn: "Kategoria");
        }
    }
}
