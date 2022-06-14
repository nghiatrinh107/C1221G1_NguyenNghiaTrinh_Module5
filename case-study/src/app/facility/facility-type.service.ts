import { Injectable } from '@angular/core';
import {FacilityType} from '../module/facility-type';

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {
  private facilityTypes: FacilityType[] = [
    {
      id: 1,
      facilityType: 'Room'
    },
    {
      id: 2,
      facilityType: 'House'
    },
    {
      id: 3,
      facilityType: 'Villa'
    }
  ];

  public getAllFacilityType() {
    return this.facilityTypes;
  }

  constructor() { }
}
