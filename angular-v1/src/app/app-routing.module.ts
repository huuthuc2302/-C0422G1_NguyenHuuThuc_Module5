import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './angular-product-management/product/product-list/product-list.component';
import {ProductCreateComponent} from './angular-product-management/product/product-create/product-create.component';
import {ProductEditComponent} from './angular-product-management/product/product-edit/product-edit.component';
import {CategoryListComponent} from './angular-product-management/category/category-list/category-list.component';
import {CategoryCreateComponent} from './angular-product-management/category/category-create/category-create.component';
import {CategoryEditComponent} from './angular-product-management/category/category-edit/category-edit.component';
import {DisplayCustomerComponent} from './test-angular/customer/display-customer/display-customer.component';
import {CreateCustomerComponent} from './test-angular/customer/create-customer/create-customer.component';
import {EditCustomerComponent} from './test-angular/customer/edit-customer/edit-customer.component';
import {HomePageComponent} from './local-web/home-page/home-page.component';
import {DisplayCarComponent} from './quan-ly-ben-xe-khach/car/display-car/display-car.component';
import {EditCarComponent} from './quan-ly-ben-xe-khach/car/edit-car/edit-car.component';


const routes: Routes = [

  {path: 'product/create', component: ProductCreateComponent},
  {path: 'product/update/:id', component: ProductEditComponent},
  {path: 'category/list', component: CategoryListComponent},
  {path: 'category/create', component: CategoryCreateComponent},
  {path: 'category/update/:id', component: CategoryEditComponent},

  {path: '', component: HomePageComponent},
  {path: 'customer/api', component: DisplayCustomerComponent},
  {path: 'customer/api/add', component: CreateCustomerComponent},
  {path: 'customer/api/update/:id', component: EditCustomerComponent},

  {path: 'car/list', component: DisplayCarComponent},
  {path: 'car/edit/:id', component: EditCarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
