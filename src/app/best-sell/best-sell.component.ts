import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '../interface/iproduct';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-best-sell',
  templateUrl: './best-sell.component.html',
  styleUrls: ['./best-sell.component.scss']
})
export class BestSellComponent implements OnInit {
  products: IProduct[];
  productsBS: IProduct[];
  elements:any;
  constructor(private productService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.showProducts();
  }
  private showProducts():void {
    this.productService.getProducts().subscribe(data => this.products = data.sort((x,y)=>y.sold-x.sold).slice(0, 4));
  //  this.showBestSll();e
  }
  goToDetails(id: any){
    this.router.navigate([`/product-details/${id}`]);
  }
  addToCart(id: any){

  }
//napraviti niz koji ima 5 mesta i popuniti ga sa 5 proizvoda koji su najvise prodavani
//sortirati po prodatoj kolicini pa slice
showBestSell() {
  this.products;
    // this.elements = Object.keys(this.products).sort((a,b)=> this.products[b]-this.products[a])
    // .slice(0,5);
    // this.productsBS = this.elements.map(key=> this.products[key]);
  }
}
