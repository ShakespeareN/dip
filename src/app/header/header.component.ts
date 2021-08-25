import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  redirectTo(uri: string) {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate([uri]));
  }
  // goToProductPage(gender: string){
  //   this.redirectTo(`/product-page/${gender}`);
  //   // this.router.navigate([`/product-page/${gender}`]);
  // }
  // goToHomePage(){
  //   this.router.navigate(['']);
  // }
  // logOut(): void {
  //   localStorage.removeItem('isLoggedIn');
  //   this.router.navigate(['/login-page']);
  //   this.correctPath = false;
  // }
  // logIn():void{
  //   this.router.navigate(['/login-page']);
  // }
  // signUp():void{
  //   this.router.navigate(['/signup-page']);
  // }
}
