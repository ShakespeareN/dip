import { CartPageComponent } from './cart-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CheckoutComponent } from './checkout/checkout.component';



@NgModule({
  declarations: [CartPageComponent, CheckoutComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CartModule { }
