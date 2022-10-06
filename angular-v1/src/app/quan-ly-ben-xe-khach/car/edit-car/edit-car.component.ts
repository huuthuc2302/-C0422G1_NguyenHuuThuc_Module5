import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DiemDen} from '../../model/diem-den';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CarService} from '../../service/car.service';
import {DiemDenService} from '../../service/diem-den.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {
  carForm: FormGroup;
  id: number;
  diemDens: DiemDen[] = [];

  // validationMessages = {
  //   bienSoXe: [
  //     {type: 'required', message: 'Vui lòng nhập Biển số xe'}
  //   ],
  //   loaiXe: [
  //     {type: 'required', message: 'Vui lòng nhập Loại xe'}
  //   ],
  //   tenNhaXe: [
  //     {type: 'required', message: 'Vui lòng nhập Tên nhà xe'}
  //   ],
  //   soDienThoaiNhaXe: [
  //     {type: 'required', message: 'Vui lòng nhập Số điện thoại nhà xe'}
  //   ],
  //   emailNhaXe: [
  //     {type: 'required', message: 'Vui lòng nhập Email'}
  //   ]
  // };

  constructor(private carService: CarService,
              private diemDenService: DiemDenService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getCar(this.id);
    });
  }

  ngOnInit(): void {
    this.getAllDiemDen();
    // this.carForm = new FormGroup({
    //   bienSoXe: new FormControl('', [
    //     Validators.required
    //   ]),
    //   loaiXe: new FormControl('', [
    //     Validators.required
    //   ]),
    //   tenNhaXe: new FormControl('', [
    //     Validators.required
    //   ]),
    //   soDienThoaiNhaXe: new FormControl('', [
    //     Validators.required
    //   ]),
    //   emailNhaXe: new FormControl('', [
    //     Validators.required
    //   ])
    // });
    // this.carForm.patchValue({facilityFree: NaN});
  }

  getCar(id: number) {
    return this.carService.findById(id).subscribe(car => {
      this.carForm = new FormGroup({
        bienSoXe: new FormControl(car.bienSoXe),
        loaiXe: new FormControl(car.loaiXe),
        tenNhaXe: new FormControl(car.tenNhaXe),
        soDienThoaiNhaXe: new FormControl(car.soDienThoaiNhaXe),
        emailNhaXe: new FormControl(car.emailNhaXe),
        diemDi: new FormControl(car.diemDi),
        diemDen: new FormControl(car.diemDen.id),
        gioDi: new FormControl(car.gioDi),
        gioDen: new FormControl(car.gioDen)
      });
    });
  }

  editCar(id: number) {
    let diemDen: DiemDen;
    const car = this.carForm.value;
    console.log(this.carForm.value);
    this.diemDenService.findById(this.carForm.value.diemDen).subscribe(n => {
      diemDen = n;
      car.diemDen = diemDen;
      this.carService.editCar(id, car).subscribe(() => {
        Swal.fire('Cập Nhật', 'Thành Công', 'success');
        this.router.navigateByUrl('car/list');
      });
    });

    car.diemDen = {
      id: car.diemDen
    };
  }

  getAllDiemDen() {
    this.diemDenService.getAllDiemDen().subscribe(diemDens => {
      this.diemDens = diemDens;
    });
  }
}
