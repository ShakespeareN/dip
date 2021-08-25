import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailsComponent } from './product-details.component';
import { BestSellComponent } from '../best-sell/best-sell.component';
import { BestSellModule } from '../best-sell/best-sell.module';



@NgModule({
  declarations: [
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    BestSellModule
  ]
})
export class ProductDetailsModule { }
