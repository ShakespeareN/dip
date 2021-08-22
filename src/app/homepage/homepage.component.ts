import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BestSellComponent } from '../best-sell/best-sell.component';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToProductPage(gender: string){
    this.router.navigate([`/product-page/${gender}`]);
  }
}
