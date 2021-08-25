import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { BestSellComponent } from './best-sell/best-sell.component';
import { ProductsService } from './products.service';
import {  HttpClientModule } from '@angular/common/http';
import { ProductPageComponent } from './product-page/product-page.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductDetailsModule } from './product-details/product-details.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BestSellModule } from './best-sell/best-sell.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    ProductPageComponent,
    FilterPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ProductDetailsModule,
    BestSellModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  exports:[

  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
