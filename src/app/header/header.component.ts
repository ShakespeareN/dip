import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, DoCheck {
  logged: boolean = false;
  loggedIn: string = "isLoggedIn";
  productsCount: number=0;
  constructor(private router: Router, private basketService: BasketService) {}
  ngOnInit(): void {
    this.isLoggedIn()
  }
  ngDoCheck(): void {
    this.isLoggedIn()
    this.addedProductsCart();
  }
  isLoggedIn(){
    if(JSON.parse(localStorage.getItem(this.loggedIn))){
      this.logged = true;
    }else{
      this.logged = false;
    }
  }
  addedProductsCart(){
    this.basketService.getBasket(localStorage.getItem("basket_id"));
    let basket = this.basketService.getCurrentBasketValue();
    if (basket != null){
      this.productsCount = basket.items.length;
    }
  }
  logOut(){
    localStorage.removeItem('isLoggedIn');
    this.redirectTo('/start');
    this.logged = false;
  }
  redirectTo(uri: string) {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate([uri]));
  }
}
