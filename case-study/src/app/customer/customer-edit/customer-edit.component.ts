import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CustomerService} from '../customer.service';
import {CustomerTypeService} from '../customer-type.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../module/customer-type';
import {Customer} from '../../module/customer';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customer = {} as Customer;
  customerTypes: CustomerType[] = [];
  customerForm: FormGroup;
  customerId: number;

  constructor(private activatedRoute: ActivatedRoute,
              private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private route: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.customerId = +paramMap.get('customerId');
      const customer = this.getCustomer(this.customerId);
      this.customerTypes = this.customerTypeService.getAllCustomerType();
      this.customerForm = new FormGroup({
        customerId: new FormControl(customer.customerId),
        customerName: new FormControl(customer.customerName, [Validators.required]),
        customerCode: new FormControl(customer.customerCode, [Validators.required, Validators.pattern('^KH-\\d{4}$')]),
        dateOfBirth: new FormControl(customer.dateOfBirth, [Validators.required, Validators.pattern('^\\d{4}-\\d{2}-\\d{2}$')]),
        idCard: new FormControl(customer.idCard, [Validators.required, Validators.pattern('^(([1-9]\\d{8})|([1-9]\\d{11}))$')]),
        phone: new FormControl(customer.phone, [Validators.required, Validators.pattern('^(091|090|\\(84\\)90|\\(84\\)91)\\d{7}$')]),
        email: new FormControl(customer.email, [Validators.required, Validators.email]),
        address: new FormControl(customer.address, [Validators.required]),
        customerType: new FormControl(customer.customerType, [Validators.required]),
        gender: new FormControl(customer.gender, [Validators.required])
      });
    });
  }

  ngOnInit(): void {
  }
  getCustomer(customerId: number) {
    console.log(this.customerService.findById(customerId));
    return this.customerService.findById(customerId);
  }

  updateCustomer(customerId: number) {
    if (this.customerForm.valid) {
      this.customer = this.customerForm.value;
      console.log(this.customer);
      this.customerService.update(customerId, this.customer);
      this.route.navigate(['/customer/list']);
    }
  }
}
