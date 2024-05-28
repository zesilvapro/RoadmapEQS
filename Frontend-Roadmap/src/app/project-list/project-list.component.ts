import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; 
import { AddEpicDialogComponent } from '../add-epic-dialog/add-epic-dialog.component';
import { AddTaskDialogComponent } from '../add-task-dialog/add-task-dialog.component';

interface Department {
  name: string;
  showDropdown: boolean;
}

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {
  deps: Department[] = [
    { name: 'Asset Management', showDropdown: false },
    { name: 'Safety Tool', showDropdown: false },
    { name: 'UI/UX', showDropdown: false },
    { name: 'Onboarding', showDropdown: false }
  ];

  // Inject MatDialog into the constructor
  constructor(private dialog: MatDialog) { }

  getCurrentMonthAndYear(): string {
    const monthsOfYear = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const currentDate = new Date();
    const currentMonthIndex = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const currentMonth = monthsOfYear[currentMonthIndex];

    return `${currentMonth} ${currentYear}`;
  }

  toggleDropdown(dep: Department): void {
    dep.showDropdown = !dep.showDropdown;
  }

  // Method to open the add epic dialog
  openAddEpicDialog(): void {
    const dialogRef = this.dialog.open(AddEpicDialogComponent, {
      width: '400px',
      height:'400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle dialog close if needed
    });
  }

  // Method to open the add task dialog
  openAddTaskDialog(): void {
    const dialogRef = this.dialog.open(AddTaskDialogComponent, {
      width: '400px',
      height:'60%'
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle dialog close if needed
    });
  }
}
