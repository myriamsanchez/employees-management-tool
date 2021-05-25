import { Component, OnInit } from '@angular/core';

import { Employee } from 'src/app/models/employee.model';
import { Status } from 'src/app/enums/status.enum';

import { EmployeeDataService } from 'src/app/services/employee-data/employee-data.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];

  constructor(
    private employeeDataService: EmployeeDataService
  ) { }

  ngOnInit() {
    this.employees = this.employeeDataService.getEmployees();
  }
}
