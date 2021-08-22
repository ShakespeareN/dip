import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from './interface/iproduct';
import { ShopParams } from './interface/shopParams';
import { filter, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  proba: IProduct[];
  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<IProduct[]>('http://localhost:3000/products');
  }
  // getProductss(shopParams: ShopParams){
  //   let params = new HttpParams();

  //   if (shopParams.type !== 'all'){
  //     return this.http.get<IProduct[]>('http://localhost:3000/products')
  //     .subscribe(data =>
  //        data = data.filter(e=> e.type.includes(shopParams.type))
  //       )
  //     ;
  //   }
  // }
}
