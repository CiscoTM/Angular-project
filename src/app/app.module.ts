import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { EmployeeChildComponent } from './employee-child/employee-child.component';
import { DetailsEmployeeComponent } from './details-employee/details-employee.component';
import { EmployeeService } from './employee.service';
import { MessageService } from './message.service';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { UsComponent } from './us/us.component';
import { ContactComponent } from './contact/contact.component';
import { UpdateComponent } from './update/update.component';
import { ErrorComponent } from './error/error.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { LoginService } from './auth/login.service';
import { CookieService } from 'ngx-cookie-service';
import { AuthGuardGuard } from './auth/auth-guard.guard';


const appRoutes:Routes=[

  {path:'',component:HomeComponent},
  {path:'proyectos',component:ProjectsComponent,canActivate:[AuthGuardGuard]},
  {path:'nosotros',component:UsComponent,canActivate:[AuthGuardGuard]},
  {path:'contactos',component:ContactComponent,canActivate:[AuthGuardGuard]},
  {path:'actualizar/:id',component:UpdateComponent,canActivate:[AuthGuardGuard]},
  {path:'login',component:AuthComponent},
  {path:'**',component:ErrorComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeChildComponent,
    DetailsEmployeeComponent,
    HomeComponent,
    ProjectsComponent,
    UsComponent,
    ContactComponent,
    UpdateComponent,
    ErrorComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule    
  ],
  providers: [EmployeeService, MessageService, DataService,LoginService,CookieService,AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
