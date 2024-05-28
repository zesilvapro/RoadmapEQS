import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Task } from '../Data/Task';
import { TaskService } from '../services/TaskService';
@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
})
export class AddTaskDialogComponent {
  taskName: string = '';
  taskStartDate: Date = new Date();
  taskEndDate: Date = new Date();
  figmaUrl: string = '';
  jiraUrl: string = '';
  epicId: number = 0;

  constructor(
    public dialogRef: MatDialogRef<AddTaskDialogComponent>,
    private taskService: TaskService
  ) { }

  onCreateClick(): void {
    const taskDto: Task = {
      ID: 0,
      EpicId: this.epicId,
      Name: this.taskName,
      StartDate: this.taskStartDate,
      EndDate: this.taskEndDate,
      FigmaUrl: this.figmaUrl,
      JiraUrl: this.jiraUrl
    };

    this.taskService.addTask(taskDto).subscribe({
      next: (response) => {
        console.log('Task created successfully', response);
        // Close the dialog on success
        this.dialogRef.close();
      },
      error: (error) => {
        console.error('Error creating task', error);
        // Display a user-friendly error message
        alert('An error occurred while creating the task. Please try again later.');
      }
    });
  }

  onCancelClick(): void {
    // Close the dialog without saving
    this.dialogRef.close();
  }
}
