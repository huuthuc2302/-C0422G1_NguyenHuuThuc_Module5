import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {ListWordComponent} from "./ss7/exersice/angular-dictionary/dictionary/list-word/list-word.component";
// import {DictionaryDetailComponent} from "./ss7/exersice/angular-dictionary/dictionary/dictionary-detail/dictionary-detail.component";
import {ProductListComponent} from "./ss7/practice/angular-product/product/product-list/product-list.component";
import {ProductCreateComponent} from "./ss7/practice/angular-product/product/product-create/product-create.component";
import {ProductEditComponent} from "./ss7/practice/angular-product/product/product-edit/product-edit.component";
import {ProductDeleteComponent} from "./ss7/practice/angular-product/product/product-delete/product-delete.component";
import {CategoryListComponent} from "./ss7/practice/angular-product/category/category-list/category-list.component";
import {CategoryCreateComponent} from "./ss7/practice/angular-product/category/category-create/category-create.component";
import {CategoryEditComponent} from "./ss7/practice/angular-product/category/category-edit/category-edit.component";
import {CategoryDeleteComponent} from "./ss7/practice/angular-product/category/category-delete/category-delete.component";
// import {TimelinesComponent} from "./ss7/practice/angular-timelines-app/timelines/timelines.component";
// import {YoutubePlaylistComponent} from "./ss7/practice/angular-product-management/youtube-playlist/youtube-playlist.component";
// import {YoutubePlayerComponent} from "./ss7/practice/angular-product-management/youtube-player/youtube-player.component";


const routes: Routes = [
  {
    // path: 'timelines',
    // component: TimelinesComponent
    // path: 'youtube',
    // component: YoutubePlaylistComponent,
    // children: [{
    //   path: ':id',
    //   component: YoutubePlayerComponent
    // }]
    path: 'product/list',
    component: ProductListComponent
  }, {
    path: 'product/create',
    component: ProductCreateComponent
  }, {
    path: 'product/edit/:id',
    component: ProductEditComponent
  }, {
    path: 'product/delete/:id',
    component: ProductDeleteComponent
  //   path: 'dictionary/list', component: ListWordComponent
  // }, {
  // path: 'dictionary/detail/:txt', component: DictionaryDetailComponent
  }, {
    path: 'category/list',
    component: CategoryListComponent
  },
  {
    path: 'category/create',
    component: CategoryCreateComponent
  },
  {
    path: 'category/edit/:id',
    component: CategoryEditComponent
  },
  {
    path: 'category/delete/:id',
    component: CategoryDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
