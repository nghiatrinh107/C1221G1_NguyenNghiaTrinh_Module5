import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FacilityComponent} from './facility/facility/facility.component';
import {FacilityCreateComponent} from './facility/facility-create/facility-create.component';
import {FacilityEditComponent} from './facility/facility-edit/facility-edit.component';
import {CustomerComponent} from './customer/customer/customer.component';
import {CustomerCreateComponent} from './customer/customer-create/customer-create.component';
import {ContractComponent} from './contract/contract/contract.component';
import {ContractCreateComponent} from './contract/contract-create/contract-create.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'facility', component: FacilityComponent},
  {path: 'facility-create', component: FacilityCreateComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'customer-create', component: CustomerCreateComponent},
  {path: 'contract', component: ContractComponent},
  {path: 'contract-create', component: ContractCreateComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class FuramaRoutingModule {
}
