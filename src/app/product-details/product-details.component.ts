import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { IProduct } from '../interface/iproduct';
import { BasketService } from '../basket.service';
import { IBasketItem } from '../interface/iBakset';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct;
  public id: number;
  productQuantity: number = 1;

  constructor(
    private router: Router,
     private route: ActivatedRoute,
      private productService: ProductsService,
      private basketService: BasketService
      ) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getProduct();
  }
  async getProduct(){
    return this.productService.getOneProduct(this.id).
    subscribe(
      (productsData)=>{
      this.product =  productsData
    });
  }
  decrementQuantity(productD: IProduct){
    if(this.productQuantity >1){
      this.productQuantity--;
    }
  }
  incrementQuantity(product: IProduct){
    this.productQuantity++;
  }
  addItemToBasket(){
    this.basketService.addItemToBasket(this.product, this.productQuantity);
  }
  // redirectTo(uri: string) {
  //   this.router
  //     .navigateByUrl('/', { skipLocationChange: true })
  //     .then(() => this.router.navigate([uri]));
  // }

}
