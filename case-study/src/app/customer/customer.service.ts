import {Injectable} from '@angular/core';
import {Customer} from '../module/customer';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = `${environment.apiUrl}`;
const API_URL_JAVA = `${environment.apiUrlJava}`;
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(API_URL_JAVA + '/customerRest/list');
  }
  save(customer): Observable<Customer> {
    return this.http.post<Customer>(API_URL + '/customers', customer);
  }

  findById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${API_URL}/customers/${id}`);
  }

  update(id: number, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${API_URL}/customers/${id}`, customer);
  }

  delete(id: number): Observable<Customer> {
    return this.http.delete<Customer>(`${API_URL}/customers/${id}`);
  }

  search(value: any, value2: any, value3: any): Observable<Customer[]> {
    // tslint:disable-next-line:max-line-length
    return this.http.get<Customer[]>(`${API_URL}/customers?customerName_like=${value}&phone_like=${value2}&customerType.name_like=${value3}`);
  }
}
