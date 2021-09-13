import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cart } from '../../interface/Cart';
import { BasketService } from '../../basket.service';
import { Router } from '@angular/router';
import { IUserInfo } from '../../interface/iUserInfo';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  addForm: FormGroup;
  public cart: Cart = new Cart;
  notValid:boolean = true;
  constructor(
     private _snackBar: MatSnackBar,
     private productService:ProductsService,
     private router: Router
     ) { }

     ngOnInit(): void {
      this.isLoggedIn();
    }

    isLoggedIn(){
      if(JSON.parse(localStorage.getItem('isLoggedIn'))){
        this.productsCart();
        this.notValid = false;
      }else{
        this.notValid = true;
      }
    }
    async productsCart(){
      let user:IUserInfo;
      await this.productService.getUser(localStorage.getItem("username")).then(
        data=>{
          user=data;
        }
      );
      this.cart.name = user[0].username;
      this.cart.address = user[0].address;
      this.cart.phone = user[0].phone;
    }
    confirmOrder(){
      if(this.cart.name === '' || this.cart.address ==='' || this.cart.phone ===''){
        this.openSnackBar("The required fields are empty.");
      }else{
        localStorage.removeItem('basket_id');
        this.openSnackBar("Your order has been recorded.");
        this.redirectTo('/start');
      }
    }
    redirectTo(uri: string) {
      this.router
        .navigateByUrl('/', { skipLocationChange: true })
        .then(() => this.router.navigate([uri]));
    }

   openSnackBar(message: string) {
    this._snackBar.open(message, 'OK', {
      duration: 3000
    });
  }

}
