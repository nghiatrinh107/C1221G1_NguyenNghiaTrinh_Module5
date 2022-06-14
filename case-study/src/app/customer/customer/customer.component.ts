import {Component, OnInit} from '@angular/core';
import {customers} from '../../data/customer';
import {Customer} from '../../module/customer';
import {CustomerService} from '../customer.service';


declare let threeDotForCustomer: any;

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.customers = this.customerService.getAllCustomer();
    // tslint:disable-next-line:no-unused-expression
    new threeDotForCustomer();
  }

}
