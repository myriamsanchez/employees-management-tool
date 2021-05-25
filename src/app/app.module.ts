import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { StatusPipe } from './pipes/status.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    StatusPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ButtonModule,
    TableModule
  ],
  exports: [
    StatusPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
