import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PositionService } from 'src/app/services/position/position.service';

import { SelectItem, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { Employee } from '../../models/employee.model';
import { EmployeeDataService } from '../../services/employee-data/employee-data.service';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.scss']
})
export class EmployeeDataComponent implements OnInit {
  form: FormGroup;
  title: string = 'New Employee';
  employee: Employee;
  positions: string[];
  positionsDD: SelectItem[];
  statusDD: SelectItem[];
  birthDate: Date;
  maxDate: Date;
  years: string;
  edit: boolean = false;
  loading: boolean;

  constructor(
    protected formBuilder: FormBuilder,
    private employeeDataService: EmployeeDataService,
    private messageService: MessageService,
    private positionService: PositionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.maxDate = new Date();
    this.setYearRange();
    this.fillDropdowns();
    this.loadFormControls();
  }

  /**
   * go back to the list of employees
   */
  public back() {
    this.router.navigate(['/']);
  }

  /**
   * saves the employee data to add it to the list of employees, and goes back to the list
   */
  public save() {
    let message: string = 'The employee was added successfully';

    this.fillEmployeeStructure(false);
    console.log('employee', this.employee);
    if (!this.edit) {
      this.employeeDataService.addEmployee(this.employee);
    } else {
      message = 'The employee was successfully edited';
    }
    this.messageService.add({
      severity: 'success',
      summary: 'Success message',
      detail: message
    });
    setTimeout(() => {
        this.router.navigate(['/']);
      },
      5000,
    );
    
  }

  public setDateValue(value: Date) {
    this.birthDate = value;
  }

  private setYearRange() {
    const now: Date = new Date();
    const year: number = now.getFullYear();
    this.years = `${year-120}:${year}`;
  }

  /**
   * fill the dropdowns of the form
   */
  private fillDropdowns() {
    this.statusDD = [
      {
        label: 'Active',
        value: 0
      },
      {
        label: 'Inactive',
        value: 1
      }
    ];

    this.positionsDD = [];
    this.positionService.getPositionList().subscribe(
      resp => {
        this.positions = resp.positions;
        this.positions.forEach((pos, index) => {
          this.positionsDD.push({
            label: pos,
            value: index
          });
        });
        this.loading = false;
    });
  }

  fillEmployeeStructure(edit: boolean) {
    if (!edit) {
      const id = this.employeeDataService.getEmployees().length;
      this.employee = {
        id: id,
        name: this.form.controls[`ti_name`].value,
        surname: this.form.controls[`ti_surname`].value,
        position: this.form.controls[`dd_position`].value,
        birthDate: this.form.controls[`ca_birthdate`].value,
        status: this.form.controls[`dd_status`].value
      } 
    }
  }

  /**
   * Load the controls for the form
   */
  private loadFormControls() {
    this.form = this.formBuilder.group({
      ti_name: new FormControl('', [Validators.required]),
      ti_surname: new FormControl('', [Validators.required]),
      dd_position: new FormControl('', [Validators.required]),
      ca_birthdate: new FormControl('', [Validators.required]),
      dd_status: new FormControl(0, [Validators.required])
    });
  }
}
