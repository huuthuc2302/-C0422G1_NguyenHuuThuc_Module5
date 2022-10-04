import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CustomerService} from "../../service/customer.service";
import {CustomerType} from "../../model/customer-type";
import {CustomerTypeService} from "../../service/customer-type.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  customerForm: FormGroup;
  id: number;
  customerTypes: CustomerType[] = [];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getCustomer(this.id);
    });
  }

  ngOnInit(): void {
    this.getAllCustomerType();
  }

  getCustomer(id: number) {
    return this.customerService.findById(id).subscribe(customer => {
      this.customerForm = new FormGroup({
        customerName: new FormControl(customer.customerName),
        dayOfBirth: new FormControl(customer.dayOfBirth),
        idCard: new FormControl(customer.idCard),
        customerPhone: new FormControl(customer.customerPhone),
        customerEmail: new FormControl(customer.customerEmail),
        customerAddress: new FormControl(customer.customerAddress),
        customerType: new FormControl(customer.customerType.id)
      });
    });
  }

  editCustomer(id: number) {
    let customerType: CustomerType;
    const customer = this.customerForm.value;
    console.log(this.customerForm.value);
    this.customerTypeService.findById(this.customerForm.value.customerType).subscribe(n => {
      customerType = n;
      customer.customerType = customerType;
      this.customerService.editCustomer(id, customer).subscribe(() => {
        Swal.fire('Tiêu đề', 'Cập nhật thành công', 'success');
        this.router.navigateByUrl('customer/list');
      });
    });

    customer.customerType = {
      id: customer.customerType
    };
  }

  getAllCustomerType() {
    this.customerTypeService.getAllCustomerType().subscribe(customerTypes => {
      this.customerTypes = customerTypes;
    });
  }
}
