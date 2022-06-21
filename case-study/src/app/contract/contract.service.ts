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
      customerBirth: '1970-11-07',
      customerGender: 0,
      customerIdCard: '643431213',
      customerPhone: '0905423362',
      customerEmail: 'thihao07@gmail.com',
      customerAddress: '23 Nguyễn Hoàng, Đà Nẵng',
      customerType: {
        customerTypeId: 5,
        customerTypeName: 'Member'
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
      customerBirth: '1990-02-27',
      customerGender: 1,
      customerIdCard: '488645199',
      customerPhone: '0373213122',
      customerEmail: 'nghenhan2702@gmail.com',
      customerAddress: 'K323/12 Ông Ích Khiêm, Vinh',
      customerType: {
        customerTypeId: 1,
        customerTypeName: 'Diamond'
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
      customerBirth: '1995-12-09',
      customerGender: 0,
      customerIdCard: '795453345',
      customerPhone: '0312345678',
      customerEmail: 'nhinhi123@gmail.com',
      customerAddress: '224 Lý Thái Tổ, Gia Lai',
      customerType: {
        customerTypeId: 4,
        customerTypeName: 'Silver'
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
      customerBirth: '1999-04-08',
      customerGender: 0,
      customerIdCard: '965656433',
      customerPhone: '0763212345',
      customerEmail: 'haohao99@gmail.com',
      customerAddress: '55 Nguyễn Văn Linh, Kon Tum',
      customerType: {
        customerTypeId: 3,
        customerTypeName: 'Gold'
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
      customerBirth: '1994-07-01',
      customerGender: 1,
      customerIdCard: '432341235',
      customerPhone: '0643343433',
      customerEmail: 'danhhai99@gmail.com',
      customerAddress: '24 Lý Thường Kiệt, Quảng Ngãi',
      customerType: {
        customerTypeId: 1,
        customerTypeName: 'Diamond'
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
