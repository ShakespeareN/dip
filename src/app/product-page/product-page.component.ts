import { Component, OnInit, Renderer2 } from '@angular/core';
import { ProductsService } from '../products.service';
import { IProduct } from '../interface/iproduct';
import { ShopParams } from '../interface/shopParams';
import { ActivatedRoute, Router } from '@angular/router';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  products: IProduct[];
  params = new ShopParams();
  nameCollection: string = 'All';
  SortbyParam = '';
  SortDirection = 'asc';
  genderParam: string = '';

  constructor(
    private productService: ProductsService,
    private basketService: BasketService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('gender') != 'all') {
      this.genderParam = this.route.snapshot.paramMap.get('gender');
    }

    this.getProducts();
  }
  getProducts() {
    this.productService
      .getProducts()
      .subscribe((data) => (this.products = data));
  }

  OnSortDirection() {
    if (this.SortDirection === 'desc') {
      this.SortDirection = 'asc';
    } else {
      this.SortDirection = 'desc';
    }
  }
  onTypeSelected(type: string) {
    this.params.type = type;
  }
  onPriceSelected(price: string) {
    this.params.Price = price;
  }
  onWeatherSelected(weather: string) {
    this.params.weather = weather;
  }
  onColorSelected(color: string) {
    this.params.color = color;
  }

  deleteFilters() {
    this.params.type = '';
    this.params.color = '';
    this.params.Price = '';
    this.params.weather = '';
    this.genderParam = '';
    this.router.navigate([`/product-page/all`]);
  }
  goToDetails(id: number) {
    this.router.navigate([`/product-details/${id}`]);
  }
  addToCart(item: IProduct){
    this.basketService.addItemToBasket(item);
  }
}
