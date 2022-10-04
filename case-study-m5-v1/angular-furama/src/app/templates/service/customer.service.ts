import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/customer";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  getAllCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(API_URL + 'customers');
  }

  saveCustomer(customer): Observable<Customer>{
    return this.http.post<Customer>(API_URL + 'customers', customer);
  }

  findById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${API_URL}customers/${id}`);
  }

  editCustomer(id: number, customer: Customer): Observable<Customer> {
    return this.http.patch<Customer>(`${API_URL}customers/${id}`, customer);
  }

  deleteCustomer(id: number): Observable<Customer> {
    return this.http.delete<Customer>(`${API_URL}customers/${id}`);
  }

  searchCustomer(nameCustomer: string, idCard: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${API_URL}customers?name_like=${nameCustomer}&idCard_like=${idCard}`);
  }

}
