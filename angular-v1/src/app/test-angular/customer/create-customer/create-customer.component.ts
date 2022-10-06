import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../model/customer-type';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {Router} from '@angular/router';
import Swal from "sweetalert2";
import {Customer} from '../../model/customer';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customerForm: FormGroup;
  customerList: Customer[] = [];
  customerTypeList: CustomerType[] = [];

  validationMessages = {
    name: [
      {type: 'required', message: 'Vui lòng nhập tên'},
      {type: 'pattern', message: 'Vui lòng nhập tên đúng'}
    ],
    dateOfBirth: [
      {type: 'required', message: 'Vui lòng nhập ngày sinh'},
    ],
    phoneNumber: [
      {type: 'required', message: 'Vui lòng nhập số điện thoại'},
      {
        type: 'pattern',
        message: 'Vui lòng nhập số địa thoại đúng định dạng 090xxxxxxx hoặc 091xxxxxxx hoặc (84)+90xxxxxxx hoặc (84)+91xxxxxxx'
      }
    ],
    idCard: [
      {type: 'required', message: 'Vui lòng nhập CMND'},
      {type: 'pattern', message: 'Vui lòng nhập số địa thoại đúng định dạng XXXXXXXXX hoặc XXXXXXXXXXXX (X là số 0-9).'}
    ],
    email: [
      {type: 'required', message: 'Vui lòng nhập email'},
      {type: 'pattern', message: 'Vui lòng nhập email đúng định dạng abcabc@abc.abc'},
    ]
  };


  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerService.getAllCustomerType().subscribe(value => {
      // @ts-ignore
      this.customerTypeList = value.content;
    })
    this.customerForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z]+)*$')
      ]),

      gender: new FormControl(false),

      dateOfBirth: new FormControl('', [
        Validators.required
      ]),

      idCard: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{9,11}')
      ]),

      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(/^([\+84]|[\+091]|[\+090])[0-9]{9,11}$/)
      ]),

      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z0-9]+@[a-z]+\\.[a-z]{2,3}'),
        Validators.minLength(20)
      ]),

      address: new FormControl(),

      customerType: new FormGroup({
        id: new FormControl()
      })
    });
  }

  save() {
    const customer = this.customerForm.value;
      this.customerService.saveCustomer(customer).subscribe(() => {
        this.router.navigateByUrl('customer/api');
        Swal.fire('Tạo Mới', ' Thành Công', 'success');
      }, e => console.log(e));
    }

}
