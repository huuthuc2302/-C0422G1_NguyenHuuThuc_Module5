import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CarCompany} from "../../model/bus-station/car-company";
import {CarService} from "../../service/bus-station/car.service";
import {CarCompanyService} from "../../service/bus-station/car-company.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {

  carForm: FormGroup;
  id: number;

  carCompanys: CarCompany[] = [];

  constructor(private carService: CarService,
              private carCompanyService: CarCompanyService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getCar(this.id);
    });
  }

  ngOnInit(): void {
    this.getAllCarCompany();
  }

  getCar(id: number) {
    return this.carService.findById(id).subscribe(car => {
      this.carForm = new FormGroup({
        garageName: new FormControl(car.garageName),
        garagePhone: new FormControl(car.garagePhone),
        garageEmail: new FormControl(car.garageEmail),
        carCompany: new FormControl(car.carCompany.id)
      });
    });
  }

  editCar(id: number) {
    let carCompany: CarCompany;
    const car = this.carForm.value;
    console.log(this.carForm.value);
    this.carCompanyService.findById(this.carForm.value.carCompany).subscribe(n => {
      carCompany = n;
      car.carCompany = carCompany;
      this.carService.editCar(id, car).subscribe(() => {
        Swal.fire('Cập Nhật', 'Thành Công', 'success');
        this.router.navigateByUrl('car/list');
      });
    });

    car.carCompany = {
      id: car.carCompany
    };
  }

  getAllCarCompany() {
    this.carCompanyService.getAllCarCompany().subscribe(carCompanys => {
      this.carCompanys = carCompanys;
    });
  }

}
