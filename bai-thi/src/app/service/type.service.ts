import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Start} from "../module/start";
import {HttpClient} from "@angular/common/http";
import {Type} from "../module/type";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Type[]> {
    return this.http.get<Type[]>(API_URL + '/busRest/type_list');
  }
}
