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

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    CategoryListComponent,
    CategoryCreateComponent,
    CategoryEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
