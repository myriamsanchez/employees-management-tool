import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EmployeeDataComponent } from './employee-data.component';

import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng-lts/inputtext';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    ButtonModule,
    CommonModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
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
