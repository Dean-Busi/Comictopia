using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class init : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Superhelden",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Superhelden", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Bewertungen",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Rating = table.Column<int>(type: "int", nullable: false),
                    GepostetAm = table.Column<DateTime>(type: "datetime2", nullable: false),
                    SuperHeldId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Bewertungen", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Bewertungen_Superhelden_SuperHeldId",
                        column: x => x.SuperHeldId,
                        principalTable: "Superhelden",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Bewertungen_SuperHeldId",
                table: "Bewertungen",
                column: "SuperHeldId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Bewertungen");

            migrationBuilder.DropTable(
                name: "Superhelden");
        }
    }
}
