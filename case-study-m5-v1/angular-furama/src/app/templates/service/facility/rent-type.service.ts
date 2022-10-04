import { Injectable } from '@angular/core';
import {RentType} from "../../model/facility/rent-type";

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {

  rentTypeList: RentType[] = [];

  constructor() {
    this.rentTypeList.push({
      id: 1,
      name: 'Year'
    }, {
      id: 2,
      name: 'Month'
    }, {
      id: 3,
      name: 'Day'
    }, {
      id: 4,
      name: 'Hour'
    });
  }

  getAllRentType(){
    return this.rentTypeList;
  }

}
