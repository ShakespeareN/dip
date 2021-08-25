import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { IProduct } from '../interface/iproduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct;
  public id: number;
  constructor(private router: Router, private route: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.productService.getOneProduct(this.id).
    subscribe(
      (productsData)=>{
      this.product =  productsData
    });
  }
  // redirectTo(uri: string) {
  //   this.router
  //     .navigateByUrl('/', { skipLocationChange: true })
  //     .then(() => this.router.navigate([uri]));
  // }

}
