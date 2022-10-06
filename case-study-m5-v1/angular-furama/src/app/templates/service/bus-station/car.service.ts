import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Car} from "../../model/bus-station/car";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) {
  }

  getAllCar(): Observable<Car[]> {
    return this.http.get<Car[]>(API_URL + 'cars');
  }

  saveCar(car): Observable<Car>{
    return this.http.post<Car>(API_URL + 'cars', car);
  }

  findById(id: number): Observable<Car> {
    return this.http.get<Car>(`${API_URL}cars/${id}`);
  }

  editCar(id: number, car: Car): Observable<Car> {
    return this.http.patch<Car>(`${API_URL}cars/${id}`, car);
  }

  deleteCar(id: number): Observable<Car> {
    return this.http.delete<Car>(`${API_URL}cars/${id}`);
  }

  searchCar(garageName: string, carType: string): Observable<Car[]> {
    return this.http.get<Car[]>(`${API_URL}cars?licensePlates_like=${garageName}&carType_like=${carType}`);
  }

}
