import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CustomerComponent} from './customer/customer.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';
import {CustomerDetailComponent} from './customer-detail/customer-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
  declarations: [
    CustomerComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    CustomerDetailComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ]
})
export class CustomerModule { }
