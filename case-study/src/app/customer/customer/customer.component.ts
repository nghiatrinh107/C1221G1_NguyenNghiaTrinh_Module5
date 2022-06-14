import {Component, OnInit} from '@angular/core';
import {customers} from '../../data/customer';


declare let threeDotForCustomer: any;

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers = customers;

  constructor() {
  }

  ngOnInit(): void {
    // tslint:disable-next-line:no-unused-expression
    new threeDotForCustomer();
  }

}
