import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from './interface/iproduct';
import { Basket, IBasket, IBasketItem, IBasketTotals } from './interface/iBakset';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private basketSource = new BehaviorSubject<IBasket>(null);
  basket$ = this.basketSource.asObservable();
  private basketTotalSource = new BehaviorSubject<IBasketTotals>(null);
  basketTotal$ = this.basketTotalSource.asObservable();
  total: number=0;
  constructor(private http: HttpClient) { }


  getCurrentBasketValue(){
    return this.basketSource.value;
  }

  addItemToBasket(item: IProduct, quantity = 1){
    const itemToAdd: IBasketItem = this.mapProductItemToBasketItem(
      item,
      quantity
    );

    let basket = this.getCurrentBasketValue();

    if (basket === null){
      basket = this.createBasket();
    }
    this.addOrUpdateItem(basket.items, itemToAdd, quantity);
  }


  mapProductItemToBasketItem(item: IProduct, quantity: number):IBasketItem{
    return{
      id:item.id,
      title: item.title,
      price: item.price,
      photo: item.photo,
      quantity
    };
  }
  createBasket():IBasket{
    const basket = new Basket();
    localStorage.setItem('basket_id', basket.id);
    return basket;
  }
  addOrUpdateItem(items:IBasketItem[], itemToAdd:IBasketItem, quantity: number): IBasketItem[]{
    const index = items.findIndex(i=>i.id === itemToAdd.id);
    let basket = this.getCurrentBasketValue();
    if (basket === null){
      basket = this.createBasket();
    }
    if(index === -1){
      console.log(index);
      itemToAdd.quantity = quantity;
      items.push(itemToAdd);
      basket.items = items;
      console.log(basket.items.length);
      if (basket.items.length >1){
        this.updateBasket(basket);
      }else{
      this.setBasket(basket);
      }
    }else{
      items[index].quantity += quantity;
      basket.items = items;
      this.updateBasket(basket)
    }
    return items;
  }
  updateBasket(basket: IBasket){
    return this.http.put(`http://localhost:3000/basket/${basket.id}`, basket).subscribe(
      (response:IBasket) => {
        this.basketSource.next(response);
        this.calculateTotals();
      },
      (error)=>{
        console.log(error);
      }
    );
  }
  setBasket(basket: IBasket){
    return this.http.post(`http://localhost:3000/basket?id=${basket.id}}`, basket).subscribe(
      (response:IBasket) => {
        this.basketSource.next(response);
        this.calculateTotals();
      },
      (error)=>{
        console.log(error);
      }
    );
  }
  getBasket(id:string){
    return this.http.get("http://localhost:3000/basket?id=" + id).pipe(
      map((basket:IBasket)=>{
        this.basketSource.next(basket);
        this.calculateTotals();
      })
    );
  }
  incrementItemQuantity(item: IBasketItem){
    const basket = this.getCurrentBasketValue();
    const foundItemIndex = basket.items.findIndex((x)=> x.id === item.id);

    basket.items[foundItemIndex].quantity++;
    this.updateBasket(basket);
  }
  decrementItemQuantity(item: IBasketItem){
    const basket = this.getCurrentBasketValue();
    const foundItemIndex = basket.items.findIndex((x)=> x.id === item.id);

    if(basket.items[foundItemIndex].quantity>1){
      basket.items[foundItemIndex].quantity--;
      this.updateBasket(basket);
    }else{
      this.removeItemFromBasket(item);
    }
  }
  removeItemFromBasket(item: IBasketItem){
    const basket = this.getCurrentBasketValue();
    if(basket.items.some(x => x.id === item.id)){
      basket.items = basket.items.filter(i=> i.id != item.id);
      if(basket.items.length > 0){
        this.updateBasket(basket);
      }else{
        this.updateBasket(basket);
      }
    }
  }

  deleteBasket(basket:IBasket){
    return this.http.delete(`http://localhost:3000/basket?id=${basket.id}`).subscribe(
    ()=>{
      this.basketSource.next(null);
      localStorage.removeItem('basket_id');
    },error =>{
      console.log(error);
    })
  }

  calculateTotals(){
    const basket = this.getCurrentBasketValue();
    const subtotal = basket.items.reduce((a,b)=> b.price * b.quantity + a,0);
    this.total = subtotal;
  }

}
