import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {customerTypes} from '../../data/customerType';
import {CustomerTypeService} from '../customer-type.service';
import {CustomerService} from '../customer.service';
import {Customer} from '../../module/customer';
import {CustomerType} from '../../module/customer-type';



@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})


export class CustomerCreateComponent implements OnInit {
  customer = {} as Customer;
  customerTypes: CustomerType[] = [];
  customerForm: FormGroup;
  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService) {
  }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      customerName: new FormControl('', [Validators.required]),
      customerCode: new FormControl('', [Validators.required, Validators.pattern('^KH-\\d{4}$')]),
      dateOfBirth: new FormControl('', [Validators.required, Validators.pattern('^\\d{4}-\\d{2}-\\d{2}$')]),
      idCard: new FormControl('', [Validators.required, Validators.pattern('^(([1-9]\\d{8})|([1-9]\\d{11}))$')]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^(091|090|\\(84\\)90|\\(84\\)91)\\d{7}$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required]),
      customerType: new FormControl('', [Validators.required]),
      gender: new FormControl(-1, [Validators.required])
    });
  }

  createCustomer() {
    if (this.customerForm.valid) {
      this.customer = this.customerForm.value;
      this.customerService.save(this.customer);
      this.customerForm.reset();
    }
  }
}
