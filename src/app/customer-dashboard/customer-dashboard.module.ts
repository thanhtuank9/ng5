import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { GenericDataTableComponent } from '../directives/generic.datatable.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CustomerDashboardComponent,
    GenericDataTableComponent
  ]
})
export class CustomerDashboardModule { }
