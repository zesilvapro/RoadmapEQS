using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BackEnd.Migrations
{
    /// <inheritdoc />
    public partial class updateFK3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ID",
                table: "user_task",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_user_task_TaskID",
                table: "user_task",
                column: "TaskID");

            migrationBuilder.CreateIndex(
                name: "IX_user_task_UserID",
                table: "user_task",
                column: "UserID");

            migrationBuilder.AddForeignKey(
                name: "FK_user_task_task_TaskID",
                table: "user_task",
                column: "TaskID",
                principalTable: "task",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_user_task_users_UserID",
                table: "user_task",
                column: "UserID",
                principalTable: "users",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_user_task_task_TaskID",
                table: "user_task");

            migrationBuilder.DropForeignKey(
                name: "FK_user_task_users_UserID",
                table: "user_task");

            migrationBuilder.DropIndex(
                name: "IX_user_task_TaskID",
                table: "user_task");

            migrationBuilder.DropIndex(
                name: "IX_user_task_UserID",
                table: "user_task");

            migrationBuilder.DropColumn(
                name: "ID",
                table: "user_task");
        }
    }
}
