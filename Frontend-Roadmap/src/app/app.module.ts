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
import { SucessDialogComponent } from './sucess-dialog/sucess-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HomepageComponent } from './homepage/homepage.component';


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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 

 }
