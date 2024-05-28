import { SharedDataService } from './../services/sharedData';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateProjectComponent } from '../create-project/create-project.component';
import { ProjectService } from '../services/projectService';
import { RoadmapService } from '../services/RoadmapServices';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  userName: string | null = '';
  selectedTab: string = 'roadmap';
  users: any[] = [];
  projects: any[] = []; // Declare projects array

  constructor(
    private dialog: MatDialog,
    private roadmapService: RoadmapService,
    private sharedDataService: SharedDataService,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.userName = this.sharedDataService.name;
  }

  selectTab(tab: string): void {
    this.selectedTab = tab.toLowerCase();
    if (this.selectedTab === 'users') {
      this.listUsers();
    } else if (this.selectedTab === 'projectlist') {
      this.listProjects(); // Call listProjects when the 'projectlist' tab is selected
    }
  }

  openCreateProjectDialog(): void {
    const dialogRef = this.dialog.open(CreateProjectComponent, {
      width: '600px',
      height: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  listUsers(): void {
    this.roadmapService.getAllUsers()
      .subscribe(response => {
        console.log('Users List', response);
        this.users = response; // Store the users in a component property
      }, error => {
        console.error('Error fetching users', error);
      });
  }

  listProjects(): void {
    this.projectService.getAllProjects()
      .subscribe(response => {
        console.log('Projects List', response);
        this.projects = response; // Store the projects in a component property
      }, error => {
        console.error('Error fetching projects', error);
      });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based, so add 1
    const year = date.getFullYear();
  
    return `${day}-${month}-${year}`;
  }
}
