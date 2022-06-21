import {CustomerType} from './customer-type';

export interface Customer {
  customerId: number;
  customerCode: string;
  customerName: string;
  customerGender: number;
  customerBirth: string;
  customerIdCard: string;
  customerAddress: string;
  customerPhone: string;
  customerEmail: string;
  customerType: CustomerType;
}
