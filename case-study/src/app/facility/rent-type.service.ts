import { Injectable } from '@angular/core';
import {RentType} from '../module/rent-type';

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {
  private rentTypes: RentType[] = [
    {
      id: 1,
      rentType: 'hour'
    },
    {
      id: 2,
      rentType: 'day'
    },
    {
      id: 3,
      rentType: 'month'
    },
    {
      id: 4,
      rentType: 'year'
    }
  ];

  public getAllRentType() {
    return this.rentTypes;
  }
  constructor() { }
}
