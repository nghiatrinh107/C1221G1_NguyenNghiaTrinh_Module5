import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerComponent } from './customer/customer/customer.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { FacilityComponent } from './facility/facility/facility.component';
import { FacilityCreateComponent } from './facility/facility-create/facility-create.component';
import { FacilityEditComponent } from './facility/facility-edit/facility-edit.component';
import { ContractComponent } from './contract/contract/contract.component';
import { ContractCreateComponent } from './contract/contract-create/contract-create.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import {FuramaRoutingModule} from './furama-routing.module';
import { ModalComponent } from './modal/modal.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FuramaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
