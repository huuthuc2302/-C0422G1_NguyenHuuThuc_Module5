import { Component, OnInit } from '@angular/core';
import {Facility} from "../../model/facility/facility";
import {FacilityType} from "../../model/facility/facility-type";
import {RentType} from "../../model/facility/rent-type";
import {FacilityService} from "../../service/facility/facility.service";
import {FacilityTypeService} from "../../service/facility/facility-type.service";
import {RentTypeService} from "../../service/facility/rent-type.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-display-facility',
  templateUrl: './display-facility.component.html',
  styleUrls: ['./display-facility.component.css']
})
export class DisplayFacilityComponent implements OnInit {

  deleteId: number;
  deleteName: string;
  facilityList:Facility[] = [];
  facilityTypeList:FacilityType[] = [];
  rentTypeList: RentType[] = []
  p: number = 1;

  constructor(private facilityService:FacilityService,
              private facilityTypeService:FacilityTypeService,
              private rentTypeService:RentTypeService) { }

  ngOnInit(): void {
    this.getListAllFacilityType();
    this.getListAllFacility();
    this.getListAllRentType();
  }

  getListAllFacility(){
    this.facilityService.getAllFacility().subscribe(facility => this.facilityList = facility);
  }

  getListAllFacilityType(){
    this.facilityTypeList = this.facilityTypeService.getAllFacilityType();
  }

  getListAllRentType(){
    this.rentTypeList = this.rentTypeService.getAllRentType();
  }

  deleteFacility(temp: Facility) {
    this.deleteId = temp.id;
    this.deleteName = temp.name;
  }

  delete(idDelete: any) {
    this.facilityService.deleteFacility(idDelete).subscribe(() =>{
      Swal.fire('Tiêu đề', 'Xoá thông tin thành công', 'success');
      this.getListAllFacility();
    });
  }

}
