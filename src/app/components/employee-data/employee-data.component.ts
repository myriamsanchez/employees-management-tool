import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.scss']
})
export class EmployeeDataComponent implements OnInit {
  form: FormGroup;
  title: string = 'New Employee';

  constructor(
    protected formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loadFormControl();
  }

  private fillDropdowns() {

  }

  private loadFormControl() {
    this.form = this.formBuilder.group({
      ti_name: new FormControl('', [Validators.required]),
      ti_surname: new FormControl('', [Validators.required])
    });
  }
}
