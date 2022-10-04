import {Component, OnInit} from '@angular/core';
import {Customer} from "../../model/customer";
import {CustomerService} from "../../service/customer.service";
import {Router} from "@angular/router";
import Swal from 'sweetalert2';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-display-customer',
  templateUrl: './display-customer.component.html',
  styleUrls: ['./display-customer.component.css']
})
export class DisplayCustomerComponent implements OnInit {

  deleteId: number;
  deleteName: string;
  customers: Customer[] = [];
  p: number = 1;
  searchForm: FormGroup;
  constructor(private customerService: CustomerService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.getAllCustomer();
  }


  getAllCustomer() {
    this.customerService.getAllCustomer().subscribe(customers => {
      this.customers = customers;
    });
  }

  deleteCustomer(temp: Customer) {
    this.deleteId = temp.id;
    this.deleteName = temp.customerName;
  }

  delete(idDelete: any) {
    this.customerService.deleteCustomer(idDelete).subscribe(() => {
      this.getAllCustomer()
      Swal.fire('Tiêu đề', 'Xoá thành công', 'success');
    });
  }

  searchCustomer() {
    this.customerService.searchCustomer(this.searchForm.value.nameSearch, this.searchForm.value.searchIdCard).subscribe(data => {
      this.customers = data;
      console.log(data);
    }, error => {
    }, () => {
    })
  }

}
