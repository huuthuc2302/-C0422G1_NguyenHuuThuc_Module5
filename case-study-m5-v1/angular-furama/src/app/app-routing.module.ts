import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DisplayCustomerComponent} from "./templates/customer/display-customer/display-customer.component";
import {CreateCustomerComponent} from "./templates/customer/create-customer/create-customer.component";
import {EditCustomerComponent} from "./templates/customer/edit-customer/edit-customer.component";
import {DisplayFacilityComponent} from "./templates/facility/display-facility/display-facility.component";
import {CreateFacilityComponent} from "./templates/facility/create-facility/create-facility.component";
import {EditFacilityComponent} from "./templates/facility/edit-facility/edit-facility.component";
import {HomePageComponent} from "./templates/home-page/home-page.component";
import {DisplayCarComponent} from "./templates/bus-station/display-car/display-car.component";
import {CreateCarComponent} from "./templates/bus-station/create-car/create-car.component";
import {EditCarComponent} from "./templates/bus-station/edit-car/edit-car.component";

const routes: Routes = [

  {path: '', component: HomePageComponent},

  {path: 'customer/list', component: DisplayCustomerComponent},
  {path: 'customer/create', component: CreateCustomerComponent},
  {path: 'customer/edit/:id', component: EditCustomerComponent},

  {path: 'facility', component: DisplayFacilityComponent},
  {path: 'facility/create', component: CreateFacilityComponent},
  {path: 'facility/update/:id', component: EditFacilityComponent},

  {path: 'car/list', component: DisplayCarComponent},
  {path: 'car/create', component: CreateCarComponent},
  {path: 'car/edit/:id', component: EditCarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
