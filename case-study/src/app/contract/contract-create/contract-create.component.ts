import { Component, OnInit } from '@angular/core';
import {ContractService} from '../contract.service';
import {Customer} from '../../module/customer';
import {Contract} from '../../module/contract';
import {Facility} from '../../module/facility';
import {CustomerService} from '../../customer/customer.service';
import {FacilityService} from '../../facility/facility.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  contract = {} as Contract;
  customers: Customer[] = [];
  facilities: Facility[] = [];
  contractForm: FormGroup;
  constructor(private contractService: ContractService,
              private customerService: CustomerService,
              private facilityService: FacilityService) { }

  ngOnInit(): void {
    this.customers = this.customerService.getAllCustomer();
    this.facilities = this.facilityService.getAllFacilities();
    this.contractForm = new FormGroup({
      customer: new FormControl(''),
      facility: new FormControl(''),
      startDate: new FormControl(''),
      endDate: new FormControl(''),
      deposit: new FormControl('')
    });
  }
  createContract() {
    if (this.contractForm.valid) {
      this.contract = this.contractForm.value;
      this.contractService.save(this.contract);
      alert('Create Successfully');
      this.ngOnInit();
    }
  }
}
