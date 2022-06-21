import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CustomerService} from '../customer.service';
import {CustomerTypeService} from '../customer-type.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../module/customer-type';


@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerTypes: CustomerType[] = [];
  customerForm: FormGroup;
  id: number;
  constructor(private activatedRoute: ActivatedRoute,
              private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private route: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getCustomer(this.id);
    });
  }

  ngOnInit(): void {
    this.getAllCustomerTypes();
  }

  getCustomer(customerId: number) {
    return this.customerService.findById(customerId).subscribe(customer => {
      this.customerForm = new FormGroup({
        customerName: new FormControl(customer.customerName, [Validators.required]),
        customerCode: new FormControl(customer.customerCode, [Validators.required, Validators.pattern('^KH-\\d{4}$')]),
        customerBirth: new FormControl(customer.customerBirth,
          [Validators.required, Validators.pattern('^\\d{4}-\\d{2}-\\d{2}$')]),
        customerIdCard: new FormControl(customer.customerIdCard,
          [Validators.required, Validators.pattern('^(([1-9]\\d{8})|([1-9]\\d{11}))$')]),
        customerPhone: new FormControl(customer.customerPhone,
          [Validators.required, Validators.pattern('^(091|090|\\(84\\)90|\\(84\\)91)\\d{7}$')]),
        customerEmail: new FormControl(customer.customerEmail, [Validators.required, Validators.email]),
        customerAddress: new FormControl(customer.customerAddress, [Validators.required]),
        customerType: new FormControl(customer.customerType, [Validators.required]),
        customerGender: new FormControl(customer.customerGender, [Validators.required])
      });
    });
  }

  updateCustomer(id: number) {
    if (this.customerForm.valid) {
      const customer = this.customerForm.value;
      console.log(customer);
      this.customerService.update(id, customer).subscribe(() => {
        alert('Cập nhật thành công');
        this.route.navigate(['/customer/list']);
        }
      );
    }
  }

  compareFn(t1, t2): boolean {
    return t1 && t2 ? t1.id === t2.id : t1 === t2;
  }

  getAllCustomerTypes() {
    this.customerTypeService.getAll().subscribe(customerTypes => {
      this.customerTypes = customerTypes;
    });
  }
}
