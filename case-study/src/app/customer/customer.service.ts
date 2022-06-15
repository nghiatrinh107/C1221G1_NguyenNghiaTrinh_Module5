import {Injectable} from '@angular/core';
import {Customer} from '../module/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customers: Customer[] = [
    {
      customerId: 1,
      customerCode: 'KH-0001',
      customerName: 'Nguyễn Thị Hào',
      dateOfBirth: '1970-11-07',
      gender: 0,
      idCard: '643431213',
      phone: '0905423362',
      email: 'thihao07@gmail.com',
      address: '23 Nguyễn Hoàng, Đà Nẵng',
      customerType: {
        id: 5,
        name: 'Member'
      }
    },
    {
      customerId: 2,
      customerCode: 'KH-0002',
      customerName: 'Phạm Xuân Diệu',
      dateOfBirth: '1992-08-08',
      gender: 1,
      idCard: '865342123',
      phone: '0954333333',
      email: 'xuandieu92@gmail.com',
      address: 'K77/22 Thái Phiên, Quảng Trị',
      customerType: {
        id: 3,
        name: 'Gold'
      }
    },
    {
      customerId: 3,
      customerCode: 'KH-0003',
      customerName: 'Trương Đình Nghệ',
      dateOfBirth: '1990-02-27',
      gender: 1,
      idCard: '488645199',
      phone: '0373213122',
      email: 'nghenhan2702@gmail.com',
      address: 'K323/12 Ông Ích Khiêm, Vinh',
      customerType: {
        id: 1,
        name: 'Diamond'
      }
    },
    {
      customerId: 4,
      customerCode: 'KH-0004',
      customerName: 'Dương Văn Quan',
      dateOfBirth: '1981-07-08',
      gender: 1,
      idCard: '543432111',
      phone: '0490039241',
      email: 'duongquan@gmail.com',
      address: 'K453/12 Lê Lợi, Đà Nẵng',
      customerType: {
        id: 1,
        name: 'Diamond'
      }
    },
    {
      customerId: 5,
      customerCode: 'KH-0005',
      customerName: 'Hoàng Trần Nhi Nhi',
      dateOfBirth: '1995-12-09',
      gender: 0,
      idCard: '795453345',
      phone: '0312345678',
      email: 'nhinhi123@gmail.com',
      address: '224 Lý Thái Tổ, Gia Lai',
      customerType: {
        id: 4,
        name: 'Silver'
      }
    },
    {
      customerId: 6,
      customerCode: 'KH-0006',
      customerName: 'Tôn Nữ Mộc Châu',
      dateOfBirth: '2005-12-06',
      gender: 0,
      idCard: '732434215',
      phone: '0988888844',
      email: 'tonnuchau@gmail.com',
      address: '37 Yên Thế, Đà Nẵng',
      customerType: {
        id: 4,
        name: 'Silver'
      }
    },
    {
      customerId: 7,
      customerCode: 'KH-0007',
      customerName: 'Nguyễn Mỹ Kim',
      dateOfBirth: '1984-04-08',
      gender: 0,
      idCard: '856453123',
      phone: '0912345698',
      email: 'kimcuong84@gmail.com',
      address: 'K123/45 Lê Lợi, Hồ Chí Minh',
      customerType: {
        id: 1,
        name: 'Diamond'
      }
    },
    {
      customerId: 8,
      customerCode: 'KH-0008',
      customerName: 'Nguyễn Thị Hào',
      dateOfBirth: '1999-04-08',
      gender: 0,
      idCard: '965656433',
      phone: '0763212345',
      email: 'haohao99@gmail.com',
      address: '55 Nguyễn Văn Linh, Kon Tum',
      customerType: {
        id: 3,
        name: 'Gold'
      }
    },
    {
      customerId: 9,
      customerCode: 'KH-0009',
      customerName: 'Trần Đại Danh',
      dateOfBirth: '1994-07-01',
      gender: 1,
      idCard: '432341235',
      phone: '0643343433',
      email: 'danhhai99@gmail.com',
      address: '24 Lý Thường Kiệt, Quảng Ngãi',
      customerType: {
        id: 1,
        name: 'Diamond'
      }
    },
    {
      customerId: 10,
      customerCode: 'KH-0010',
      customerName: 'Nguyễn Tâm Đắc',
      dateOfBirth: '1989-07-01',
      gender: 1,
      idCard: '344343432',
      phone: '0987654321',
      email: 'dactam@gmail.com',
      address: '22 Ngô Quyền, Đà Nẵng',
      customerType: {
        id: 2,
        name: 'Platinium'
      }
    }
  ];

  constructor() {
  }

  public getAllCustomer(): Customer[] {
    return this.customers;
  }

  public findById(id: number): Customer {
    return this.customers.find(customer => customer.customerId === id);
  }

  public save(customer: Customer): void {
    console.log(customer);
    if (customer.customerId === undefined) {
      customer.customerId = this.customers.length + 1;
      this.customers.push(customer);
    }
  }

  public update(id: number, customer: Customer) {
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].customerId === id) {
        console.log(customer);
        this.customers[i] = customer;
      }
    }
  }

  public delete(customer: Customer) {
    this.customers = this.customers.filter(element => {
      return element.customerId !== customer.customerId;
    });
  }
}
