import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoaderComponent} from "./loader/loader.component";
import {SkeletonImgComponent} from "./skeleton-img/skeleton-img.component";



@NgModule({
  declarations: [
    LoaderComponent,
    SkeletonImgComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    SkeletonImgComponent
  ]
})
export class SharedModule { }
