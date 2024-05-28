import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
})
export class AddTaskDialogComponent {
  taskName: string = '';
  selectedEpic: string = '';
  taskStartDate: Date | null = null;
  taskEndDate: Date | null = null;
  figmaUrl: string = '';
  jiraUrl: string = '';

    // testData
    epicOptions = [
      { value: 'epic1', viewValue: 'Epic 1' },
      { value: 'epic2', viewValue: 'Epic 2' },
      { value: 'epic3', viewValue: 'Epic 3' }
      
    ];

  constructor(public dialogRef: MatDialogRef<AddTaskDialogComponent>) { }

  onCreateClick(): void {
    const taskDto = {
      name: this.taskName,
      epicId: this.selectedEpic,
      startDate: this.taskStartDate,
      endDate: this.taskEndDate,
      figmaUrl: this.figmaUrl,
      jiraUrl: this.jiraUrl
    };

   

    // Close the dialog
    this.dialogRef.close();
  }

  onCancelClick(): void {
    // Close the dialog without saving
    this.dialogRef.close();
  }
}
