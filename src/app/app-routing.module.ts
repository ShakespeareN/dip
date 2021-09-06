import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutComponent } from './cart-page/checkout/checkout.component';




const routes: Routes = [
{path: '', component: HomepageComponent},
{path: 'product-page/:gender', component: ProductPageComponent},
{path: 'start', component: HomepageComponent},
{path: 'product-details/:id', component: ProductDetailsComponent},
{path: 'login-page', component: LoginPageComponent},
{path: 'signup-page', component: SignupPageComponent},
{path: 'cart-page', component: CartPageComponent},
{path: 'checkout', component: CheckoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
