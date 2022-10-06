import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomerType} from "../model/customer-type";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  constructor(private http: HttpClient) {
  }

  getAllCustomerType(): Observable<any> {
    return this.http.get(API_URL + 'customerTypes');
  }

  findById(id: number): Observable<CustomerType> {
    return this.http.get<CustomerType>(`${API_URL}customerTypes/${id}`);
  }

}
