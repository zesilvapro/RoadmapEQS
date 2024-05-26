import { SharedDataService } from './../services/sharedData';
import { Component } from '@angular/core';
import { RoadmapService } from '../services/RoadmapServices';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RegisterService } from '../services/registerService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    email: string = '';
    password: string = '';

    constructor(
      private roadmapService: RoadmapService,
      private router: Router,
      public dialog: MatDialog,
      private registerService: RegisterService,
      private sharedDataService: SharedDataService
    ) { }

    login() {
      this.roadmapService.loginUser(this.email, this.password)
        .subscribe(response => {
          console.log('Login successful', response);
          // Set the name property in SharedDataService
          this.sharedDataService.name = response.name;
          this.router.navigate(['/board']);
        }, error => {
          console.error('Login failed', error);
        });
    }

    toggleRegisterState() {
      const currentRegisterState = this.registerService.getRegister();
      this.registerService.setRegister(!currentRegisterState);
    }
}
