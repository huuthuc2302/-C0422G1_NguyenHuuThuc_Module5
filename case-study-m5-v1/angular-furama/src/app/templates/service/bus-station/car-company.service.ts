import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CarCompany} from "../../model/bus-station/car-company";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CarCompanyService {

  constructor(private http: HttpClient) {
  }

  getAllCarCompany(): Observable<any> {
    return this.http.get(API_URL + 'carCompanys');
  }

  findById(id: number): Observable<CarCompany> {
    return this.http.get<CarCompany>(`${API_URL}carCompanys/${id}`);
  }

}
