import { Component } from '@angular/core';
import { RoadmapService } from './services/RoadmapServices';
import { Users } from './Data/Users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: Users[] = [];

  constructor(private roadmapService: RoadmapService) {}

  getUsers(): void {
    this.roadmapService.getAllUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  
}
