import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RentType} from "../../model/facility/rent-type";
import {FacilityType} from "../../model/facility/facility-type";
import {RentTypeService} from "../../service/facility/rent-type.service";
import {FacilityTypeService} from "../../service/facility/facility-type.service";
import {FacilityService} from "../../service/facility/facility.service";
import {Router} from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-facility',
  templateUrl: './create-facility.component.html',
  styleUrls: ['./create-facility.component.css']
})
export class CreateFacilityComponent implements OnInit {

  facilityForm: FormGroup;
  rentTypeList: RentType[] = [];
  facilityTypeList: FacilityType[] = [];
  facilityTypeId = '0: 1';

  validationMessages = {
    name: [
      {type: 'required', message: 'Vui lòng nhập Tên'}
    ],
    area: [
      {type: 'required', message: 'Vui lòng nhập Diện Tích'}
    ],
    cost: [
      {type: 'required', message: 'Vui lòng nhập Phí Thuê'}
    ],
    maxPeople: [
      {type: 'required', message: 'Vui lòng nhập Số Người Tối Đa'}
    ],
    standardRoom: [
      {type: 'required', message: 'Vui lòng nhập Loại Phòng'}
    ],
    descriptionOtherConvenience: [
      {type: 'required', message: 'Vui lòng nhập Mô Tả'}
    ],
    poolArea: [
      {type: 'required', message: 'Vui lòng nhập Diện Tích Hồ Bơi'}
    ],
    numberOfFloors: [
      {type: 'required', message: 'Vui lòng nhập Số Tầng'}
    ],
    facilityFree: [
      {type: 'required', message: 'Vui lòng nhập Dịch Vụ Miễn Phí'}
    ]
  };

  constructor(private rentType: RentTypeService,
              private facilityType: FacilityTypeService,
              private facility: FacilityService,
              private router: Router) {
    this.rentTypeList = rentType.rentTypeList;
    this.facilityTypeList = facilityType.facilityTypeList;
  }

  ngOnInit(): void {
    this.facilityForm = new FormGroup({
      name: new FormControl('', [
        Validators.required
      ]),
      area: new FormControl('', [
        Validators.required
      ]),
      cost: new FormControl('', [
        Validators.required
      ]),
      maxPeople: new FormControl('', [
        Validators.required
      ]),
      standardRoom: new FormControl('', [
        Validators.required
      ]),
      descriptionOtherConvenience: new FormControl('', [
        Validators.required
      ]),
      poolArea: new FormControl('', [
        Validators.required
      ]),
      numberOfFloors: new FormControl('', [
        Validators.required
      ]),
      facilityFree: new FormControl('', [
        Validators.required
      ]),
      rentType: new FormControl(1),
      facilityType: new FormControl(1),
    });
    this.facilityForm.patchValue({facilityFree: NaN});
  }

  submit() {
    const facility = this.facilityForm.value;
    this.facility.saveFacility(facility).subscribe(() => {
      this.router.navigateByUrl('/facility');
      Swal.fire('Tiêu đề', 'Thêm mới thông tin thành công', 'success');
    });
  }

  selFacility(event) {
    this.facilityTypeId = event.target.value;
    if (this.facilityTypeId === '0: 1') {
      this.facilityForm.patchValue({facilityFree: NaN});
    } else if (this.facilityTypeId === '1: 2') {
      this.facilityForm.patchValue({poolArea: 0});
      this.facilityForm.patchValue({facilityFree: NaN});
    } else if (this.facilityTypeId === '2: 3') {
      this.facilityForm.patchValue({poolArea: 0});
      this.facilityForm.patchValue({numberOfFloors: 0});
      this.facilityForm.patchValue({descriptionOtherConvenience: NaN});
      this.facilityForm.patchValue({standardRoom: NaN});
    }
  }
}
