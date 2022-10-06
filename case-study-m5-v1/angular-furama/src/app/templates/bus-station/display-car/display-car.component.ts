import { Component, OnInit } from '@angular/core';
import {Car} from "../../model/bus-station/car";
import {FormControl, FormGroup} from "@angular/forms";
import {CarService} from "../../service/bus-station/car.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";
import {CarCompany} from "../../model/bus-station/car-company";

@Component({
  selector: 'app-display-car',
  templateUrl: './display-car.component.html',
  styleUrls: ['./display-car.component.css']
})
export class DisplayCarComponent implements OnInit {

  deleteId: number;
  deleteName: string;
  cars: Car[] = [];
  p: number = 1;
  searchForm: FormGroup;

  constructor(private carService: CarService,
              private route: Router) { }

  ngOnInit(): void {
    this.getAllCar();
    this.searchForm = new FormGroup({
      garageNameSearch: new FormControl(''),
      carTypeSearch: new FormControl('')
    });
    this.searchForm.patchValue({id: 0});
  }

  getAllCar() {
    this.carService.getAllCar().subscribe(cars => {
      this.cars = cars;
    });
  }

  deleteCar(temp: Car) {
    this.deleteId = temp.id;
    this.deleteName = temp.garageName;
  }

  delete(idDelete: any) {
    this.carService.deleteCar(idDelete).subscribe(() => {
      this.getAllCar()
      Swal.fire('Đã Xoá', 'Thành Công', 'success');
    });
  }

  searchCar() {
    this.carService.searchCar(this.searchForm.value.garageNameSearch, this.searchForm.value.carTypeSearch).subscribe(data => {
      this.cars = data;
      console.log(data);
    }, error => {
    }, () => {
    })
  }

}
