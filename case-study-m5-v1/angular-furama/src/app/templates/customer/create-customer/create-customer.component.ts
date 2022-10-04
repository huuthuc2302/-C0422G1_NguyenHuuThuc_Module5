import {Component, OnInit} from '@angular/core';
import {CustomerType} from "../../model/customer-type";
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerService} from "../../service/customer.service";
import {CustomerTypeService} from "../../service/customer-type.service";
import {Router} from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customerForm: FormGroup;
  customerTypes: CustomerType[] = [];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router) {
    this.customerForm = new FormGroup({
      customerName: new FormControl(),
      dayOfBirth: new FormControl(),
      idCard: new FormControl(),
      customerPhone: new FormControl(),
      customerEmail: new FormControl(),
      customerAddress: new FormControl(),
      customerType: new FormControl()
    });
  }

  ngOnInit(): void {
    this.getAllCustomerType();
    console.log(this.customerTypes);
  }

  getAllCustomerType() {
    this.customerTypeService.getAllCustomerType().subscribe(customerTypes => {
      this.customerTypes = customerTypes;
    });
  }

  save() {
    let customerType: CustomerType;
    const customer = this.customerForm.value;
    console.log(this.customerForm.value);
    this.customerTypeService.findById(this.customerForm.value.customerType).subscribe(n => {
      customerType = n;
      customer.customerType = customerType;
      this.customerService.saveCustomer(customer).subscribe(() => {
        Swal.fire('Tiêu đề', 'Tạo mới thành công', 'success');
        this.router.navigateByUrl('customer/list');
      }, e => console.log(e));
    });

    customer.customerType = {
      id: customer.customerType
    };
  }
}
