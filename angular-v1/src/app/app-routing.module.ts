import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './angular-product-management/product/product-list/product-list.component';
import {ProductCreateComponent} from './angular-product-management/product/product-create/product-create.component';
import {ProductEditComponent} from './angular-product-management/product/product-edit/product-edit.component';
import {CategoryListComponent} from './angular-product-management/category/category-list/category-list.component';
import {CategoryCreateComponent} from './angular-product-management/category/category-create/category-create.component';
import {CategoryEditComponent} from './angular-product-management/category/category-edit/category-edit.component';


const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  }, {
    path: 'product/create',
    component: ProductCreateComponent
  }, {
    path: 'product/update/:id',
    component: ProductEditComponent
  }, {
    path: 'category/list',
    component: CategoryListComponent
  }, {
    path: 'category/create',
    component: CategoryCreateComponent
  }, {
    path: 'category/update/:id',
    component: CategoryEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
