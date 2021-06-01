import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

import { StatusPipe } from './pipes/status.pipe';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PositionService } from './services/position/position.service';
import { EmployeeDataModule } from './components/employee-data/employee-data.module';
import { EmployeeListModule } from './components/employee-list/employee-list.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    EmployeeDataModule,
    EmployeeListModule,
    HttpClientModule,
    ProgressSpinnerModule,
    ToastModule
  ],
  exports: [],
  providers: [
    MessageService,
    PositionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
