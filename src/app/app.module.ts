import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

import { AppComponent } from './app.component';
import { EmployeeDataComponent } from './components/employee-data/employee-data.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { AppRoutingModule } from './app-routing.module';
import { PositionService } from './services/position/position.service';
import { StatusPipe } from './pipes/status.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDataComponent,
    EmployeeListComponent,
    StatusPipe,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    HttpClientModule,
    ReactiveFormsModule,
    TableModule,
  ],
  exports: [
    StatusPipe
  ],
  providers: [
    PositionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
