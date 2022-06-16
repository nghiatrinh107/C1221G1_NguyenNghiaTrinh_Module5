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
import {CustomerDetailComponent} from './customer/customer-detail/customer-detail.component';
import {CustomerEditComponent} from './customer/customer-edit/customer-edit.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {
    path: 'facility',
    loadChildren: () => import('./facility/facility.module').then(module => module.FacilityModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then(module => module.CustomerModule)
  },
  {
    path: 'contract',
    loadChildren: () => import('./contract/contract.module').then(module => module.ContractModule)
  },
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
