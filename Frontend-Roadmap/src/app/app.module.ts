
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BoardComponent } from './board/board.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { GantViewComponent } from './gant-view/gant-view.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { SucessDialogComponent } from './sucess-dialog/sucess-dialog.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserListComponent } from './user-list/user-list.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { AddEpicDialogComponent } from './add-epic-dialog/add-epic-dialog.component';
import { AddTaskDialogComponent } from './add-task-dialog/add-task-dialog.component';
import { MatSelectModule } from '@angular/material/select';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BoardComponent,
    ProjectListComponent,
    GantViewComponent,
    SucessDialogComponent,
    HomepageComponent,
    UserListComponent,
    CreateProjectComponent,
    AddEpicDialogComponent,
    AddTaskDialogComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSelectModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {



 }
