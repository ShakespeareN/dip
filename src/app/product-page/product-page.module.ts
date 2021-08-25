import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { ProductDetailsComponent } from '../product-details/product-details.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule
  ]
})
export class ProductPageModule { }
