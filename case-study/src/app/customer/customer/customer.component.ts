import {Component, OnInit} from '@angular/core';
import {Customer} from '../../module/customer';
import {CustomerService} from '../customer.service';


declare let threeDotForCustomer: any;

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private customerService: CustomerService) {
  }
  customers: Customer[] = [];
  customerDelete = {} as Customer;

  // deleteCustomer(customerDelete: Customer) {
  //   const check = this.customerService.findById(customerDelete.customerId) === undefined;
  //   if (check) {
  //     alert('can not found');
  //   } else {
  //     this.customerService.delete(customerDelete);
  //     this.ngOnInit();
  //   }
  // }
  p: string | number;

  ngOnInit(): void {
    this.getAll();
    // tslint:disable-next-line:no-unused-expression
    new threeDotForCustomer();
  }

  getAll() {
    this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
    });
  }
}
