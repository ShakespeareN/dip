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
  // sortOptions: object[] = [
  //   // { value: '', viewValue: 'Alphabetical' },
  //   { value: 'type', viewValue: 'Type of products' },
  //   { value: 'price', viewValue: 'Price of products' },
  // ];


  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.productService
    .getProducts().subscribe((data) => (

      this.products = data

      ));
    // if (this.params.type !== 'all'){
    //   this.type=true;
    //   this.products.filter(p => p.type.includes(this.params.type));
    // }
    // if (this.params.Price !== 0){
    //   this.price=true;
    //   this.products.filter(p => p.price.includes(this.params.Price));
    // }
    // if (this.params.sort !== 'name'){
    //   this.sort=true;
    //   this.products.filter(p => p.type.includes(this.params.type));
    // }
    // if (this.params.weather !== 'all'){
    //   this.weather=true;
    //   this.products.filter(p => p.type.includes(this.params.type));
    // }
    // if (this.params.search !== ''){
    //   this.search=true;
    //   this.products.filter(p => p.type.includes(this.params.type));
    // }
    // if (this.params.color !== 'all'){
    //   this.color=true;
    //   this.products.filter(p => p.color.includes(this.params.color));
    // }






    // if (
    //   this.params.type == 'all' &&
    //   this.params.Price == 0 &&
    //   this.params.sort == 'name' &&
    //   this.params.weather == 'all' &&
    //   this.params.color == 'all' &&
    //   this.params.search == ''
    // ) {
    //   this.productService
    //     .getProducts()
    //     .subscribe((data) => (this.products = data));
    // }



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
  //napraviti funkcije koje na prosledjeni niz rade filtriranje

  // onSortSelected(sort: string) {
  //   this.params.sort = sort;
  //   // if ((sort = 'pricelth')) {
  //      this.getProducts();
  //   // }
  // }
  OnSortDirection(){
    if (this.SortDirection === 'desc'){
      this.SortDirection = 'asc';
    }else{
      this.SortDirection = 'desc'
    }
  }
  onTypeSelected(type: string) {
    this.params.type = type;
    // this.shopParams.pageNumber = 1;
    this.getProducts();
  }
  onPriceSelected(price: number) {
    this.params.Price = price;
    // this.shopParams.pageNumber = 1;
    this.getProducts();
  }
  onWeatherSelected(weather: string) {
    this.params.weather = weather;
    // this.shopParams.pageNumber = 1;
    this.getProducts();
  }
  onColorSelected(color: string) {
    this.params.color = color;
    // this.shopParams.pageNumber = 1;
    this.getProducts();
  }
}
