import { Injectable } from '@angular/core';
import {FacilityType} from '../module/facility-type';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomerType} from '../module/customer-type';
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {
  // private facilityTypes: FacilityType[] = [
  //   {
  //     id: 1,
  //     facilityType: 'Room'
  //   },
  //   {
  //     id: 2,
  //     facilityType: 'House'
  //   },
  //   {
  //     id: 3,
  //     facilityType: 'Villa'
  //   }
  // ];
  constructor(private http: HttpClient) { }
  getAll(): Observable<FacilityType[]> {
    return this.http.get<FacilityType[]>(API_URL + '/facilityTypes');
  }
}
