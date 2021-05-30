import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TableModule } from 'primeng/table';

import { StatusPipe } from './pipes/status.pipe';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PositionService } from './services/position/position.service';
import { EmployeeDataModule } from './components/employee-data/employee-data.module';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    StatusPipe,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    EmployeeDataModule,
    ButtonModule,
    InputTextModule,
    HttpClientModule,
    ProgressSpinnerModule,
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
