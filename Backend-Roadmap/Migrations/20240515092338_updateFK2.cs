using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BackEnd.Migrations
{
    /// <inheritdoc />
    public partial class updateFK2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Epyc_ProjectID",
                table: "Epyc",
                column: "ProjectID");

            migrationBuilder.AddForeignKey(
                name: "FK_Epyc_project_ProjectID",
                table: "Epyc",
                column: "ProjectID",
                principalTable: "project",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Epyc_project_ProjectID",
                table: "Epyc");

            migrationBuilder.DropIndex(
                name: "IX_Epyc_ProjectID",
                table: "Epyc");
        }
    }
}
