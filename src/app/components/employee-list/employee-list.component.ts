import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from 'src/app/models/employee.model';

import { EmployeeDataService } from 'src/app/services/employee-data/employee-data.service';
import { PositionService } from 'src/app/services/position/position.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  positions: any[];
  loading: boolean;

  constructor(
    private employeeDataService: EmployeeDataService,
    private positionService: PositionService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loading = true;
    this.employees = this.employeeDataService.getEmployees();

    this.positionService.getPositionList().subscribe(
      resp => {
        this.positions = resp.positions;
        this.loading = false;
    });
  }

  /**
   * Go to the form that adds new employees to the list
   */
  addEmployee() {
    this.router.navigate(['employee/new']);
  }

  /**
   * Change the data associated to the selected employee
   * 
   * @param id id of the employee to edit
   */
  editEmployee(id: number) {
    console.log('employee', id);
    this.router.navigate(['/employee/edit'], {queryParams: {id: id} });
  }
}
