import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { AngularColorPickerAppComponent } from './angular-color-picker-app/angular-color-picker-app.component';

import { ArticleComponent } from './hackernews-app/article/article.component';
import { LikeComponent } from './hackernews-app/like/like.component';
import { NavbarComponent } from './hackernews-app/navbar/navbar.component';
import { FooterComponent } from './hackernews-app/footer/footer.component';
import { NameCardComponent } from './ss5/practice/angular-name-card/name-card/name-card.component';
import { ProgressBarComponent } from './ss5/practice/angular-progress-bar/progress-bar/progress-bar.component';
import { RatingBarComponent } from './ss5/exercise/angular-rating-bar/rating-bar/rating-bar.component';
import { CountdownTimerComponent } from './ss5/exercise/angular-countdown-timer-app/countdown-timer/countdown-timer.component';
import { TodoComponent } from './ss6/practice/angular-name-card/todo/todo.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegisterComponent } from './ss6/exercise/angular-register-form/register/register.component';
import { LoginComponent } from './ss6/exercise/angular-login/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    AngularColorPickerAppComponent,
    ArticleComponent,
    LikeComponent,
    NavbarComponent,
    FooterComponent,
    NameCardComponent,
    ProgressBarComponent,
    RatingBarComponent,
    CountdownTimerComponent,
    TodoComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
