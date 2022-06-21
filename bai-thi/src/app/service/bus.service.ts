import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Bus} from "../module/bus";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class BusService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Bus[]> {
    return this.http.get<Bus[]>(API_URL + '/busRest/list');
  }
  save(bus): Observable<Bus> {
    return this.http.post<Bus>(API_URL + '/busRest/create', bus);
  }

  findById(id: number): Observable<Bus> {
    return this.http.get<Bus>(`${API_URL}/busRest/list/${id}`);
  }

  update(id: number, bus: Bus): Observable<Bus> {
    return this.http.patch<Bus>(`${API_URL}/busRest/update/${id}`, bus);
  }

  delete(id: number): Observable<Bus> {
    return this.http.delete<Bus>(`${API_URL}/busRest/delete/${id}`);
  }

  search(value: any, value2: any) {
    return this.http.get<Bus[]>(`${API_URL}/busRest/list?name=${value}`);
  }
}
