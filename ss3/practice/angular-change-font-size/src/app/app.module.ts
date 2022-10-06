import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontSizeComponent } from './font-size/font-size.component';
import {FormsModule} from "@angular/forms";
import { AngularShowPetInfoComponent } from './angular-show-pet-info/angular-show-pet-info.component';
import { AngularUsingBootstrapComponent } from './angular-using-bootstrap/angular-using-bootstrap.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeComponent,
    AngularShowPetInfoComponent,
    AngularUsingBootstrapComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
