import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Epic } from '../Data/Epic';
import { EpicService } from '../services/epicService';

@Component({
  selector: 'app-add-epic-dialog',
  templateUrl: './add-epic-dialog.component.html',
})
export class AddEpicDialogComponent {
  epicName: string = '';
  selectedColor: string = '';
  ProjectId: number = 0;

  colorOptions = [
    { value: 'blue', viewValue: 'AM' },
    { value: '#0099FA', viewValue: 'ST' },
    { value: '#902BD9', viewValue: 'UI/UX' },
    { value: '#52CC58', viewValue: 'Onboarding' }
  ];

  constructor(
    public dialogRef: MatDialogRef<AddEpicDialogComponent>,
    private epicService: EpicService // Inject the EpicService
  ) { }

  onCreateClick(): void {
    const epicDto: Epic = {
      ID: 0,
      ProjectId: this.ProjectId, // Ensure this value is set correctly
      Name: this.epicName,
      Color: this.selectedColor
    };

    this.epicService.addEpic(epicDto).subscribe({
      next: (response) => {
        console.log('Epic created successfully', response);
        // Close the dialog on success
        this.dialogRef.close();
      },
      error: (error) => {
        console.error('Error creating epic', error);
        // Handle the error appropriately in your application
      }
    });
  }

  onCancelClick(): void {
    // Close the dialog without saving
    this.dialogRef.close();
  }
}
