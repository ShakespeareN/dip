import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interface/iproduct';
import { ProductsService } from '../products.service';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-best-sell',
  templateUrl: './best-sell.component.html',
  styleUrls: ['./best-sell.component.scss']
})
export class BestSellComponent implements OnInit {
  products: IProduct[];
  constructor(private productService: ProductsService) { }
  dataSource;
  ngOnInit(): void {
    this.showProducts();
  }
  private showProducts():void {
    this.productService.getProducts().subscribe(data => this.products = data);
  }
//Dodati polje broj prodatih kolicina za svaki proizvod
}
