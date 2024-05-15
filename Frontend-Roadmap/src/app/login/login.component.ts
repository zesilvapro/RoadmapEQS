import { HomepageComponent } from './../homepage/homepage.component';
import { RegisterComponent } from './../register/register.component';
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
      private authService: RoadmapService,
      private router: Router,
      public dialog: MatDialog,
      private registerService: RegisterService
      ) { }

    login() {
      this.authService.loginUser(this.email, this.password)
        .subscribe(response => {
          console.log('Login successful', response);
        }, error => {
          // Handle login error here
          console.error('Login failed', error);
        });
    }

    toggleRegisterState() {
      const currentRegisterState = this.registerService.getRegister();
      this.registerService.setRegister(!currentRegisterState);
    }
  }

