import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from './interface/iproduct';
import { ShopParams } from './interface/shopParams';
import { filter, map } from 'rxjs/operators';
import { IUserInfo } from './interface/iUserInfo';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<IProduct[]>('http://localhost:3000/products');
  }
  getOneProduct(id: number){
    return this.http.get<IProduct>('http://localhost:3000/products/'+ id);
  }
  postUser(user: IUserInfo){
    return this.http.post<IUserInfo>('http://localhost:3000/users', user);
  }
  getAllUsers(){
    return this.http.get<IUserInfo[]>('http://localhost:3000/users');
  }
  async getUser(username:string){
     return await this.http.get<IUserInfo>('http://localhost:3000/users?username='+username).toPromise();
  }
}
