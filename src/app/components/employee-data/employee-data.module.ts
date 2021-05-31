import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EmployeeDataComponent } from './employee-data.component';

import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    ButtonModule,
    CalendarModule,
    CommonModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    ProgressSpinnerModule,
    ReactiveFormsModule
  ],
  declarations: [
    EmployeeDataComponent
  ],
  exports: [
    EmployeeDataComponent
  ]
})
export class EmployeeDataModule { }
