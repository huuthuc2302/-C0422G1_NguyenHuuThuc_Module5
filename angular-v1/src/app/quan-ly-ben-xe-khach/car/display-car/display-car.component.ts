import { Component, OnInit } from '@angular/core';
import {Car} from '../../model/car';
import {CarService} from '../../service/car.service';
import {Router} from '@angular/router';
import Swal from "sweetalert2";

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
  carDetail: Car = {};

  constructor(private carService: CarService,
              private route: Router) { }

  ngOnInit(): void {
    this.getAllCar();
  }

  getAllCar() {
    this.carService.getAllCar().subscribe(cars => {
      this.cars = cars;
    });
  }

  deleteCar(temp: Car) {
    this.deleteId = temp.id;
    this.deleteName = temp.bienSoXe;
  }

  delete(idDelete: any) {
    this.carService.deleteCar(idDelete).subscribe(() => {
      this.getAllCar()
      Swal.fire('Đã Xoá', 'Thành Công', 'success');
    });
  }
}
