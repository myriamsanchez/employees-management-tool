import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list.component';
import { StatusPipe } from '../../pipes/status.pipe';

import { TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng-lts/button';



@NgModule({
  imports: [
    ButtonModule,
    CommonModule,
    ProgressSpinnerModule,
    TableModule,
  ],
  declarations: [
    EmployeeListComponent,
    StatusPipe
  ],
  exports: [
    EmployeeListComponent,
    StatusPipe
  ]
})
export class EmployeeListModule { }
