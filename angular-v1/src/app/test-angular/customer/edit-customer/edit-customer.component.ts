import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../model/customer-type';
import {CustomerService} from '../../service/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import Swal from 'sweetalert2';
import {Customer} from '../../model/customer';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  customer: Customer;
  customerUpdateForm: FormGroup;
  id: number;
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
      {type: 'pattern', message: 'Vui lòng nhập email đúng định dạng abcabc@abc.abc'}
    ]
  };

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerService.getAllCustomerType().subscribe(value => {
      this.customerTypeList = value;
    });

    this.customerForm();
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getCustomer(this.id);
    });
  }

  getCustomer(id: number) {
    return this.customerService.findByIdCustomer(id).subscribe(customer => {
      this.customerForm();
      this.customerUpdateForm.patchValue(customer);
      this.customerUpdateForm.patchValue({customerType: customer.customerType.id});
    });
  }

  customerForm() {
    this.customerUpdateForm = new FormGroup({
      id: new FormControl(),
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
        Validators.pattern('[a-z0-9]+@[a-z]+\\.[a-z]{2,3}')
      ]),
      address: new FormControl(),
      customerType: new FormGroup({
        id: new FormControl()
      })
    });
  }

  updateSubmit(id) {
    const customer = this.customerUpdateForm.value;
    this.customerService.editCustomer(id, customer).subscribe(() => {
      this.router.navigateByUrl('customer/api');
      Swal.fire('Tiêu đề', 'Cập nhật thành công', 'success');
    }, e => console.log(e));
  }

}
