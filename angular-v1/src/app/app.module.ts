import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './angular-product-management/product/product-list/product-list.component';
import { ProductCreateComponent } from './angular-product-management/product/product-create/product-create.component';
import { ProductEditComponent } from './angular-product-management/product/product-edit/product-edit.component';
import { CategoryListComponent } from './angular-product-management/category/category-list/category-list.component';
import { CategoryCreateComponent } from './angular-product-management/category/category-create/category-create.component';
import { CategoryEditComponent } from './angular-product-management/category/category-edit/category-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { CreateCustomerComponent } from './test-angular/customer/create-customer/create-customer.component';
import { DisplayCustomerComponent } from './test-angular/customer/display-customer/display-customer.component';
import { EditCustomerComponent } from './test-angular/customer/edit-customer/edit-customer.component';
import { HeaderComponent } from './local-web/header/header.component';
import { FooterComponent } from './local-web/footer/footer.component';
import { HomePageComponent } from './local-web/home-page/home-page.component';
import { EditCarComponent } from './quan-ly-ben-xe-khach/car/edit-car/edit-car.component';
import { DisplayCarComponent } from './quan-ly-ben-xe-khach/car/display-car/display-car.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    CategoryListComponent,
    CategoryCreateComponent,
    CategoryEditComponent,
    CreateCustomerComponent,
    DisplayCustomerComponent,
    EditCustomerComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    EditCarComponent,
    DisplayCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
