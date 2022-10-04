import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';
import { HomePageComponent } from './templates/home-page/home-page.component';
import { DisplayFacilityComponent } from './templates/facility/display-facility/display-facility.component';
import { CreateFacilityComponent } from './templates/facility/create-facility/create-facility.component';
import { EditFacilityComponent } from './templates/facility/edit-facility/edit-facility.component';
import { DisplayCustomerComponent } from './templates/customer/display-customer/display-customer.component';
import { CreateCustomerComponent } from './templates/customer/create-customer/create-customer.component';
import { EditCustomerComponent } from './templates/customer/edit-customer/edit-customer.component';
import { DisplayContractComponent } from './templates/contract/display-contract/display-contract.component';
import { CreateContractComponent } from './templates/contract/create-contract/create-contract.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    DisplayFacilityComponent,
    CreateFacilityComponent,
    EditFacilityComponent,
    DisplayCustomerComponent,
    CreateCustomerComponent,
    EditCustomerComponent,
    DisplayContractComponent,
    CreateContractComponent
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
