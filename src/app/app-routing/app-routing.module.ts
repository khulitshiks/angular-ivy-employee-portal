import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeComponent } from '../employee/employee.component';
import { DepartmentComponent } from '../department/department.component';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from '../project/project.component';
import { UpdateComponent } from '../update/update.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: EmployeeComponent
    
  },
  {
    path: 'employee',
    component: EmployeeComponent
  },
  {
    path: 'department',
    component: DepartmentComponent
  },
  {
    path: 'project',
    component: ProjectComponent
  },
  {
    path: 'update',
    component: UpdateComponent
  }
];

@NgModule({
  imports: [ CommonModule, 
           RouterModule.forRoot(routes)], 
  declarations: [],
  exports: [RouterModule]
})

export class AppRoutingModule {}