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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductDetailsModule } from './product-details/product-details.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BestSellModule } from './best-sell/best-sell.module';
import { ProductPageModule } from './product-page/product-page.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    LoginPageComponent,
    SignupPageComponent,
    CartPageComponent,
    CheckoutComponent,
    // ProductPageComponent,
    // FilterPipe,
    // SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    // FormsModule,
    // CommonModule,
    ProductDetailsModule,
    BestSellModule,
    ProductPageModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  exports:[

  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
