import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { IProduct } from '../interface/iproduct';
import { ShopParams } from '../interface/shopParams';
import { ProviderAstType } from '@angular/compiler';
import { map } from 'rxjs/operators'
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  products: IProduct[];
  params = new ShopParams();
  nameCollection: string = 'All';
  SortbyParam ='';
  SortDirection = 'asc';

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.productService
    .getProducts().subscribe((data) => (

      this.products = data

      ));


    // if (this.params.type !== 'all') {
    //   this.productService
    //     .getProducts()
    //     .subscribe(
    //       (data) =>
    //         (this.products = data.filter((e) =>
    //           e.type.includes(this.params.type)
    //         ))
    //     );
    // }
  }


  OnSortDirection(){
    if (this.SortDirection === 'desc'){
      this.SortDirection = 'asc';
    }else{
      this.SortDirection = 'desc'
    }
  }
  onTypeSelected(type: string) {
    this.params.type = type;
    // this.getProducts();
  }
  onPriceSelected(price: string) {
    this.params.Price = price;
   // this.getProducts();
  }
  onWeatherSelected(weather: string) {
    this.params.weather = weather;
   // this.getProducts();
  }
  onColorSelected(color: string) {
    this.params.color = color;
   // this.getProducts();
  }
  deleteFilters(){
    this.params.type =''
    this.params.color =''
    this.params.Price =''
    this.params.weather =''
  }
}
