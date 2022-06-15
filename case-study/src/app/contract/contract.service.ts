import { Injectable } from '@angular/core';
import {Contract} from '../module/contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
private contracts: Contract[] = [
  {
    id: 1,
    startDate: '2022-12-12',
    endDate: '2022-12-12',
    deposit: 0,
    customer: {
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
    facility: {
      id: 1,
      name: 'Ocean suite',
      image: 'assets/img/bg-img/60.jpg',
      rentType: {
        id: 2,
        rentType: 'Day'
      },
      facilityType: {
        id: 1,
        facilityType: 'Room'
      },
      rentalFee: 200,
      floorSquare: 85.8
    },
  },
  {
    id: 2,
    startDate: '2022-12-12',
    endDate: '2022-12-12',
    deposit: 180,
    customer: {
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
    facility: {
      id: 4,
      name: 'Pool Villa',
      image: 'assets/img/bg-img/63.jpg',
      rentType: {
        id: 2,
        rentType: 'Day'
      },
      facilityType: {
        id: 3,
        facilityType: 'Villa'
      },
      rentalFee: 200,
      floorSquare: 85.8,
      numberFloor: 3,
      poolSquare: 50
    },
  },
  {
    id: 3,
    startDate: '2022-12-12',
    endDate: '2022-12-08',
    deposit: 0,
    customer: {
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
    facility: {
      id: 6,
      name: 'Ocean studio suite',
      image: 'assets/img/bg-img/65.jpg',
      rentType: {
        id: 2,
        rentType: 'Day'
      },
      facilityType: {
        id: 1,
        facilityType: 'Room'
      },
      rentalFee: 220,
      floorSquare: 85.8
    },
  },
  {
    id: 4,
    startDate: '2022-11-11',
    endDate: '2020-11-11',
    deposit: 100,
    customer: {
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
    facility: {
      id: 3,
      name: 'Garden deluxe',
      image: 'assets/img/bg-img/62.jpg',
      rentType: {
        id: 2,
        rentType: 'Day'
      },
      facilityType: {
        id: 2,
        facilityType: 'House'
      },
      rentalFee: 360,
      floorSquare: 85.8,
      numberFloor: 3
    },
  },
  {
    id: 5,
    startDate: '2022-12-12',
    endDate: '2022-12-12',
    deposit: 0,
    customer: {
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
    facility: {
      id: 4,
      name: 'Pool Villa',
      image: 'assets/img/bg-img/63.jpg',
      rentType: {
        id: 2,
        rentType: 'Day'
      },
      facilityType: {
        id: 3,
        facilityType: 'Villa'
      },
      rentalFee: 200,
      floorSquare: 85.8,
      numberFloor: 3,
      poolSquare: 50
    },
  },
];
  constructor() { }
  public getAllContract(): Contract[] {
    return this.contracts;
  }
  public findById(id: number): Contract {
    return this.contracts.find(contract => contract.id === id);
  }
  public save(contract: Contract): void {
    if (contract.id === undefined) {
      contract.id = this.contracts.length + 1;
      this.contracts.push(contract);
    }
  }
}
