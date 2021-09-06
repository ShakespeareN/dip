import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IUser } from '../interface/iUser';
import { ProductsService } from '../products.service';
import { IUserInfo } from '../interface/iUserInfo';
import { Router } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  public user: IUser = {
    username: '',
    password: '',
  };
  userInfo: IUserInfo;
  hide = true;
  notValidUser: boolean = false;

  constructor(
    private productService: ProductsService,
    private router: Router
  ) {}
  ngOnInit(): void {

  }

  async logIn() {
    await this.productService.getUser(this.user.username).then((data) => {
      this.userInfo = data;
    });
    if (this.userInfo[0] === undefined) {
      console.log('nema ga');
      this.notValidUser = true;
      localStorage.setItem('isLoggedIn', 'false');
      localStorage.setItem('username','');
    } else {
      console.log(this.userInfo[0].address);
      if (this.userInfo[0].password === this.user.password) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username',this.userInfo[0].username);
        this.notValidUser = false;
        this.redirectTo('/start');
        console.log(this.userInfo[0].password);
      }else{
        this.notValidUser = true;
        localStorage.setItem('isLoggedIn', 'false');
        localStorage.setItem('username','');
      }
    }
  }
  redirectTo(uri: string) {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate([uri]));
  }
}
