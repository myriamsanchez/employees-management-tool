import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDataComponent } from './components/employee-data/employee-data.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';


const routes: Routes = [
  {
    path: '',
    component: EmployeeListComponent
  },
  {
    path: 'employee',
    children: [
      {
        path: '',
        redirectTo: 'new',
        pathMatch: 'full'
      },
      {
        path: 'new',
        component: EmployeeDataComponent,
        pathMatch: 'full'
      },
      {
        path: 'edit',
        component: EmployeeDataComponent,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
