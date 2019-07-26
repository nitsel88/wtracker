import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployeeComponent } from './employee/employee.component';
import { DataService } from './data.service';

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      EmployeeComponent
   ],
   imports: [
      BrowserModule, 
      AppRoutingModule
   ],
   providers: [DataService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
