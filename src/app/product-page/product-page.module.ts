import { ProductPageComponent } from './product-page.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { HighlightFilterDirective } from './highlight-filter.directive';
import { SortPipe } from '../pipes/sort.pipe';
import { FilterPipe } from '../pipes/filter.pipe';
import { ProductDetailsModule } from '../product-details/product-details.module';
import { ProductsService } from '../products.service';


@NgModule({
  declarations: [
    ProductPageComponent,
    HighlightFilterDirective,
    FilterPipe,
    SortPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule,
    ProductDetailsModule,
    FormsModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [ProductsService]

})
export class ProductPageModule { }
