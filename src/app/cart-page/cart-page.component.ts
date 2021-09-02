import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IBasket, IBasketItem } from '../interface/iBakset';
import { BasketService } from '../basket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  basket$: Observable<IBasket>;
  total: number=0;
  constructor(private basketService: BasketService, private router:Router) { }

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
    this.total = this.basketService.total;
  }
  removeBasketItem(item: IBasketItem){
    this.basketService.removeItemFromBasket(item);
    this.total -=(item.price*item.quantity);
  }
  incrementBasketQuantity(item: IBasketItem){
    this.basketService.incrementItemQuantity(item);
    this.total +=item.price;
  }
  decrementBasketQuantity(item: IBasketItem){
    this.basketService.decrementItemQuantity(item);
    this.total -=item.price;
  }
  redirectTo(uri: string) {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate([uri]));
  }
}
