using Microsoft.EntityFrameworkCore.Migrations;



#nullable disable

namespace BackEnd.Migrations
{
    /// <inheritdoc />
    public partial class FK_epyc_tasks : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_task_EpycID",
                table: "task",
                column: "EpycID");

            migrationBuilder.AddForeignKey(
                name: "FK_task_Epyc_EpycID",
                table: "task",
                column: "EpycID",
                principalTable: "Epyc",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_task_Epyc_EpycID",
                table: "task");

            migrationBuilder.DropIndex(
                name: "IX_task_EpycID",
                table: "task");
        }
    }
}
