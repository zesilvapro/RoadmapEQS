import { ProjectService } from './../services/projectService';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Projects } from '../Data/Project';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent {

  projectName: string = '';
  projectStartDate: Date = new Date();
  projectEndDate: Date = new Date();

  constructor(
    public dialogRef: MatDialogRef<CreateProjectComponent>,
    private router: Router,
    private projectService: ProjectService
  ) { }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onCreateClick(): void {
    const newProject: Projects = {
      ID: 0,
      Name: this.projectName,
      StartDate: this.projectStartDate,
      EndDate: this.projectEndDate
    };

    this.projectService.addProject(newProject).subscribe(
      (response) => {
        console.log('Project created successfully:', response);
        this.dialogRef.close();
        this.router.navigate(['/projects']);
      },
      (error) => {
        console.error('Error creating project:', error);
        this.dialogRef.close();
      }
    );
  }
}
