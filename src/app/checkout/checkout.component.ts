import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  addForm: FormGroup;

  constructor(
    private productService: ProductsService,
     private formBuilder: FormBuilder,
     private _snackBar: MatSnackBar) { }
  // private localStorageService: LocalStorageService, private authService: AuthService, private router: Router
  ngOnInit(): void {
    this.initForm();
    // this.router.navigate(['/customers']);
  }
  private initForm(): void {
    this.addForm = this.formBuilder.group({
      name: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      dateofbirth: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),

    });
  }
  SignUp(): void {

    this.productService.getAllUsers().subscribe((data) =>{
      const isCreated = data.some(e => e.username == this.addForm.value.username )

      if (isCreated){
        console.log("User sa tim username-om vec postoji!");
        this.openSnackBar();
      }else{
        this.productService.postUser(this.addForm.value).subscribe();
      }
    })

   }
   openSnackBar() {
    this._snackBar.open('Fields not filled', 'OK', {
      duration: 3000
    });
  }

}
