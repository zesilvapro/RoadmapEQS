import { Component } from '@angular/core';
import { RoadmapService } from '../services/RoadmapServices';
import { MatDialog } from '@angular/material/dialog'; // Import MatDialog
import { SucessDialogComponent } from '../sucess-dialog/sucess-dialog.component'; // Corrected import

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = "";
  lastName: string = "";
  email: string = "";
  username: string = "";
  password: string = "";
  confirmPassword: string = '';
  role: string = "User";
  passwordsMatch: boolean = false;

  constructor(
    private roadmapService: RoadmapService,
    private dialog: MatDialog
  ) { }

  onClickRegisterUser() {
    this.checkPasswords(); // Call checkPasswords method before registering user

    if (!this.passwordsMatch) {
      // If passwords don't match, prevent registration
      console.log('Passwords do not match. Registration aborted.');
      return;
    }

    const userData = {
      name: this.name,
      lastName: this.lastName,
      email: this.email,
      username: this.username,
      password: this.password
    };

    this.roadmapService.registerUser(userData).subscribe(
      (response) => {
        // Handle the response here
        console.log('User registered:', response);
        this.openSuccessDialog();
      },
      (error) => {
        console.error('Error registering user:', error);
      }
    );
  }

  checkPasswords() {
    this.passwordsMatch = this.password === this.confirmPassword;
  }

  openSuccessDialog(): void {
    this.dialog.open(SucessDialogComponent);
  }
}
