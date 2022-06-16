import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from './customer/customer.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {CustomerDetailComponent} from './customer-detail/customer-detail.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';


const routes: Routes = [
  {path: 'list', component: CustomerComponent},
  {path: 'create', component: CustomerCreateComponent},
  {path: 'detail', component: CustomerDetailComponent },
  {path: 'edit/:id', component: CustomerEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
