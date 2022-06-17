import { Injectable } from '@angular/core';
import {RentType} from '../module/rent-type';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {CustomerType} from '../module/customer-type';
import {FacilityType} from '../module/facility-type';
import {HttpClient} from '@angular/common/http';
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class RentTypeService {
  // private rentTypes: RentType[] = [
  //   {
  //     id: 1,
  //     rentType: 'hour'
  //   },
  //   {
  //     id: 2,
  //     rentType: 'day'
  //   },
  //   {
  //     id: 3,
  //     rentType: 'month'
  //   },
  //   {
  //     id: 4,
  //     rentType: 'year'
  //   }
  // ];
  constructor(private http: HttpClient) { }
  getAll(): Observable<RentType[]> {
    return this.http.get<RentType[]>(API_URL + '/rentTypes');
  }
}
