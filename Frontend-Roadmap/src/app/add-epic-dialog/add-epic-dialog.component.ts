import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-epic-dialog',
  templateUrl: './add-epic-dialog.component.html',
})
export class AddEpicDialogComponent {
  epicName: string = '';
  selectedColor: string = ''; // Holds the selected color

  // Define the array of color options
  colorOptions = [
    { value: 'red', viewValue: 'Red' },
    { value: 'blue', viewValue: 'Blue' },
    { value: 'green', viewValue: 'Green' },
    { value: 'yellow', viewValue: 'Yellow' }
  ];

  constructor(public dialogRef: MatDialogRef<AddEpicDialogComponent>) { }

  onCreateClick(): void {
    const epicDto = {
      name: this.epicName,
      color: this.selectedColor // Use the selected color
    };

    // You can handle sending the epicDto data to your backend service here

    // Close the dialog
    this.dialogRef.close();
  }

  onCancelClick(): void {
    // Close the dialog without saving
    this.dialogRef.close();
  }
}
