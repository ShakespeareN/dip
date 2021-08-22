import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToProductPage(gender: string){
    this.router.navigate([`/product-page/${gender}`]);
  }
  // logOut(): void {
  //   localStorage.removeItem('isLoggedIn');
  //   this.router.navigate(['/login-page']);
  //   this.correctPath = false;
  // }
  logIn():void{
    this.router.navigate(['/login-page']);
  }
  signUp():void{
    this.router.navigate(['/signup-page']);
  }
}
