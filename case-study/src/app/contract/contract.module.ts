import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import {ContractComponent} from './contract/contract.component';
import {ContractCreateComponent} from './contract-create/contract-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ContractComponent,
    ContractCreateComponent,
  ],
  imports: [
    CommonModule,
    ContractRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContractModule { }
