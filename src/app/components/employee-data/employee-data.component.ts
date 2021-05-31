import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PositionService } from 'src/app/services/position/position.service';

import { SelectItem, MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../models/employee.model';
import { EmployeeDataService } from '../../services/employee-data/employee-data.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.scss']
})
export class EmployeeDataComponent implements OnInit, OnDestroy {
  form: FormGroup;
  title: string = 'New Employee';
  positions: string[];
  positionsDD: SelectItem[];
  statusDD: SelectItem[];
  maxDate: Date;
  years: string;
  loading: boolean;
  private employee: Employee;
  private edit: boolean = false;
  private unsubscribe = new Subject<void>();

  constructor(
    protected formBuilder: FormBuilder,
    private employeeDataService: EmployeeDataService,
    private messageService: MessageService,
    private positionService: PositionService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.loading = true;
    this.maxDate = new Date();

    this.route.queryParams
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
      (params) => {
      if (params.id) {
        this.title = 'Edit Employee';
        this.edit = true;
        this.employee = this.employeeDataService.getEmployees()[params.id];
      }
      this.setYearRange();
      this.fillDropdowns();
      this.loadFormControls();
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
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
    this.fillEmployeeStructure();
    if (!this.edit) {
      this.employeeDataService.addEmployee(this.employee);
    } else {
      message = 'The employee was successfully edited';
      this.employeeDataService.editEmployee(this.employee);
    }
    this.messageService.add({
      severity: 'success',
      summary: 'Success message',
      detail: message
    });
    setTimeout(() => {
        this.router.navigate(['/']);
      },
      2000,
    );
  }

  /**
   * Set the range of years to show in the calendar dropdown
   */
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
    this.positionService.getPositionList()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
      (resp) => {
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

  /**
   * Prepares the employee object with the form data
   */
  fillEmployeeStructure() {
    if (!this.edit) {
      const id = this.employeeDataService.getEmployees().length;
      this.employee = {
        id: id,
        name: this.form.controls[`ti_name`].value,
        surname: this.form.controls[`ti_surname`].value,
        position: this.form.controls[`dd_position`].value,
        birthDate: this.form.controls[`ca_birthdate`].value,
        status: this.form.controls[`dd_status`].value
      }
    } else {
      this.employee.name = this.form.controls[`ti_name`].value;
      this.employee.surname = this.form.controls[`ti_surname`].value;
      this.employee.position = this.form.controls[`dd_position`].value;
      this.employee.birthDate = this.form.controls[`ca_birthdate`].value;
      this.employee.status = this.form.controls[`dd_status`].value;
    }
  }

  /**
   * Load the controls for the form
   */
  private loadFormControls() {
    this.form = this.formBuilder.group({
      ti_name: new FormControl(this.employee?this.employee.name : '', [Validators.required]),
      ti_surname: new FormControl(this.employee?this.employee.surname : '', [Validators.required]),
      dd_position: new FormControl(this.employee?this.employee.position : '', [Validators.required]),
      ca_birthdate: new FormControl(this.employee?this.employee.birthDate : '', [Validators.required]),
      dd_status: new FormControl(this.employee?this.employee.status : 0, [Validators.required])
    });
  }
}
