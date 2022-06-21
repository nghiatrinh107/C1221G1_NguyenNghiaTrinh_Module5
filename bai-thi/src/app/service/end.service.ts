import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {End} from "../module/end";
import {HttpClient} from "@angular/common/http";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class EndService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<End[]> {
    return this.http.get<End[]>(API_URL + '/ends');
  }
}
