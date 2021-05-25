import { Injectable } from '@angular/core';
import { EMPLOYEES } from '../../mocks/employees';
import { Employee } from '../../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {
  private employeesList: Employee[]; 

  constructor() {
    this.employeesList = EMPLOYEES;
  }

  public getEmployees(): Employee[] {
    return this.employeesList;
  }
}
