import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {DiemDen} from '../model/diem-den';
import {HttpClient} from '@angular/common/http';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class DiemDenService {

  constructor(private http: HttpClient) {
  }

  getAllDiemDen(): Observable<any> {
    return this.http.get(API_URL + 'diemDens');
  }

  findById(id: number): Observable<DiemDen> {
    return this.http.get<DiemDen>(`${API_URL}diemDens/${id}`);
  }

}
