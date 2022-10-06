import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CarCompany} from "../../model/bus-station/car-company";
import {CarService} from "../../service/bus-station/car.service";
import {CarCompanyService} from "../../service/bus-station/car-company.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {

  carForm: FormGroup;
  carCompanys: CarCompany[] = [];

  constructor(private carService: CarService,
              private carCompanyService: CarCompanyService,
              private router: Router) {
    this.carForm = new FormGroup({
      garageName: new FormControl(),
      garagePhone: new FormControl(),
      garageEmail: new FormControl(),
      carCompany: new FormControl()
    });
  }

  ngOnInit(): void {
    this.getAllCarCompany();
    console.log(this.carCompanys);
  }

  getAllCarCompany() {
    this.carCompanyService.getAllCarCompany().subscribe(carCompanys => {
      this.carCompanys = carCompanys;
    });
  }

  save() {
    let carCompany: CarCompany;
    const car = this.carForm.value;
    console.log(this.carForm.value);
    this.carCompanyService.findById(this.carForm.value.carCompany).subscribe(n => {
      carCompany = n;
      car.carCompany = carCompany;
      this.carService.saveCar(car).subscribe(() => {
        Swal.fire('Thêm Mới', 'Thành Công', 'success');
        this.router.navigateByUrl('car/list');
      }, e => console.log(e));
    });

    car.carCompany = {
      id: car.carCompany
    };
  }

}
