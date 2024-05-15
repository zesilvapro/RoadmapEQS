import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sucess-dialog',
  templateUrl: './sucess-dialog.component.html',
  styleUrls: ['./sucess-dialog.component.css']
})
export class SucessDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<SucessDialogComponent>,
    private router: Router 
  ) { }

  closeDialog(): void {
    this.dialogRef.close();
    this.router.navigate(['/board']); 
  }
}