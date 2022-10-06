import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-display-customer',
  templateUrl: './display-customer.component.html',
  styleUrls: ['./display-customer.component.css']
})
export class DisplayCustomerComponent implements OnInit {

  deleteId: number;
  deleteName: string;
  customerList: Customer[] = [];
  page: number = 0;
  totalPage: number;
  name: string = '';
  customerDetail: Customer = {};

  constructor(private customerService: CustomerService) {

  }

  ngOnInit(): void {
    this.getAllCustomer();
    this.searchAndListCustomer();
  }

  getAllCustomer() {
    this.customerService.getAllCustomer().subscribe(customers => {
      this.customerList = customers;
    });
  }

  deleteCustomer(temp: Customer) {
    this.deleteId = temp.id;
    this.deleteName = temp.name;
  }

  delete(idDelete: number) {
    this.customerService.deleteCustomer(idDelete).subscribe(() => {
      Swal.fire('Tiêu đề', 'Xoá thành công', 'success');
      this.searchAndListCustomer();
    });
  }

  getDetailModal(customers: Customer) {
    this.customerDetail = customers;
  }

  searchAndListCustomer() {
    this.page = 0;
    return this.customerService.findByName(this.name, this.page).subscribe(cus => {
      // @ts-ignore
      this.customerList = cus.content;
      // @ts-ignore
      this.totalPage = cus.totalPages;
      console.log(this.totalPage);
    });
  }

  previous() {
    this.page = this.page - 1;
    return this.customerService.findByName(this.name, this.page).subscribe(cus => {
      // @ts-ignore
      this.customerList = cus.content;
      // @ts-ignore
      this.totalPage = cus.totalPages;
    });
  }

  next() {
    this.page = this.page + 1;
    return this.customerService.findByName(this.name, this.page).subscribe(cus => {
      // @ts-ignore
      this.customerList = cus.content;
      // @ts-ignore
      this.totalPage = cus.totalPages;
    });
  }

}
