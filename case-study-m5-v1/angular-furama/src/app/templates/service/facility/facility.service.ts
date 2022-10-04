import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {Facility} from "../../model/facility/facility";
import {FacilityTypeService} from "./facility-type.service";
import {RentTypeService} from "./rent-type.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  facilityList: Facility[] = [];

  constructor(private facilityType: FacilityTypeService,
              private rentType: RentTypeService,
              private httpClient: HttpClient) {
  }

  getAllFacility(): Observable<Facility[]> {
    return this.httpClient.get<Facility[]>(API_URL + 'facility');
  }

  saveFacility(facility: Facility) {
    this.setValueFacility(facility);
    return this.httpClient.post<Facility>(`${API_URL}facility`, facility);
  }

  getByIdFacility(id: number): Observable<Facility> {
    return this.httpClient.get<Facility>(`${API_URL}facility/${id}`);
  }

  editFacility(id: number, facility: Facility) {
    this.setValueFacility(facility);
    return this.httpClient.put<Facility>(`${API_URL}facility/${id}`, facility);
  }

  deleteFacility(id) {
    return this.httpClient.delete<Facility>(`${API_URL}facility/${id}`);
  }

  setValueFacility(facility: Facility) {
    for (const item of this.facilityType.facilityTypeList) {
      if (facility.facilityType === item.id) {
        facility.facilityType = item;
      }
    }
    for (const item of this.rentType.rentTypeList) {
      if (facility.rentType === item.id) {
        facility.rentType = item;
      }
    }
    if (facility.facilityType.id === 1) {
      facility.facilityFree = null;
    } else if (facility.facilityType.id === 2) {
      facility.poolArea = 0;
      facility.facilityFree = null;
    } else if (facility.facilityType.id === 3) {
      facility.standardRoom = null;
      facility.descriptionOtherConvenience = null;
      facility.numberOfFloors = 0;
      facility.poolArea = 0;
    }
  }
}
