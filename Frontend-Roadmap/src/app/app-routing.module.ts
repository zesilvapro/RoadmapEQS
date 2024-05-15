import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BoardComponent } from './board/board.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { GantViewComponent } from './gant-view/gant-view.component';
import { SucessDialogComponent } from './sucess-dialog/sucess-dialog.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'board', component: BoardComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'projlist', component: ProjectListComponent },
  { path: 'gant', component: GantViewComponent },
  { path: 'verify', component: SucessDialogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
