import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DisplayCustomerComponent} from "./templates/customer/display-customer/display-customer.component";
import {CreateCustomerComponent} from "./templates/customer/create-customer/create-customer.component";
import {EditCustomerComponent} from "./templates/customer/edit-customer/edit-customer.component";
import {DisplayFacilityComponent} from "./templates/facility/display-facility/display-facility.component";
import {CreateFacilityComponent} from "./templates/facility/create-facility/create-facility.component";
import {EditFacilityComponent} from "./templates/facility/edit-facility/edit-facility.component";
import {HomePageComponent} from "./templates/home-page/home-page.component";

const routes: Routes = [

  {path: '', component: HomePageComponent},

  {path: 'customer/list', component: DisplayCustomerComponent},
  {path: 'customer/create', component: CreateCustomerComponent},
  {path: 'customer/edit/:id', component: EditCustomerComponent},

  {path: 'facility', component: DisplayFacilityComponent},
  {path: 'facility/create', component: CreateFacilityComponent},
  {path: 'facility/update/:id', component: EditFacilityComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
