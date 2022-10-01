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
import { TimelinesComponent } from './ss7/practice/angular-timelines-app/timelines/timelines.component';
import { YoutubePlaylistComponent } from './ss7/practice/angular-product-management/youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './ss7/practice/angular-product-management/youtube-player/youtube-player.component';
import { ProductListComponent } from './ss7/practice/angular-product/product/product-list/product-list.component';
import { ProductCreateComponent } from './ss7/practice/angular-product/product/product-create/product-create.component';
import { DictionaryDetailComponent } from './ss7/exersice/angular-dictionary/dictionary/dictionary-detail/dictionary-detail.component';
import { ListWordComponent } from './ss7/exersice/angular-dictionary/dictionary/list-word/list-word.component';
import { ProductEditComponent } from './ss7/practice/angular-product/product/product-edit/product-edit.component';
import { ProductDeleteComponent } from './ss7/practice/angular-product/product/product-delete/product-delete.component';
import {HttpClientModule} from "@angular/common/http";
import { CategoryCreateComponent } from './ss7/practice/angular-product/category/category-create/category-create.component';
import { CategoryDeleteComponent } from './ss7/practice/angular-product/category/category-delete/category-delete.component';
import { CategoryEditComponent } from './ss7/practice/angular-product/category/category-edit/category-edit.component';
import { CategoryListComponent } from './ss7/practice/angular-product/category/category-list/category-list.component';

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
    LoginComponent,
    TimelinesComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent,
    ProductListComponent,
    ProductCreateComponent,
    DictionaryDetailComponent,
    ListWordComponent,
    ProductEditComponent,
    ProductDeleteComponent,
    CategoryCreateComponent,
    CategoryDeleteComponent,
    CategoryEditComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
