import { SharedDataService } from './../services/sharedData';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; // Import MatDialog
import { CreateProjectComponent } from '../create-project/create-project.component'; // Adjust the path as needed
import { AuthService } from '../services/authservice';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  userName: string | null = '';


  constructor(private dialog: MatDialog, private sharedDataService: SharedDataService) {}


  ngOnInit(): void {
    this.userName = this.sharedDataService.name;
  }

  openCreateProjectDialog(): void {
    const dialogRef = this.dialog.open(CreateProjectComponent, {
      width: '600px', // Set the width as needed
      height: '400px', // Set the height as needed
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }


}
