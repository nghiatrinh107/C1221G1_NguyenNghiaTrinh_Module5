import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Customer} from '../../module/customer';
import {CustomerService} from '../customer.service';


declare let threeDotForCustomer: any;

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  @ViewChild('name') name: ElementRef;
  @ViewChild('phone') phone: ElementRef;
  @ViewChild('type') type: ElementRef;

  constructor(private customerService: CustomerService) {
  }
  customerDelete: string;
  id: number;
  customers: Customer[] = [];
  p: string | number;

  ngOnInit(): void {
    // this.getAll();
    this.customerService.search('', '', '').
    subscribe(customers => this.customers = customers);
    // tslint:disable-next-line:no-unused-expression
    new threeDotForCustomer();
  }

  getAll() {
    this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
    });
  }

  search() {
    console.log(this.name.nativeElement.value);
    console.log(this.phone.nativeElement.value);
    console.log(this.type.nativeElement.value);
    this.customerService.search(this.name.nativeElement.value, this.phone.nativeElement.value, this.type.nativeElement.value).
    subscribe(customers => this.customers = customers, () => {} );
  }

  getCustomer(id: number, name: string) {
    this.customerDelete = name;
    this.id = id;
  }

  deleteCustomer(id: number) {
    this.customerService.delete(id).subscribe(() => {
      this.ngOnInit();
    });
  }
}
