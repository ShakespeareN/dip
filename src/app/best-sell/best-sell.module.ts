import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProductsService } from '../products.service';
import { BestSellComponent } from './best-sell.component';



@NgModule({
  declarations: [BestSellComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    BestSellComponent
  ],
  providers:[ProductsService]
})
export class BestSellModule { }
