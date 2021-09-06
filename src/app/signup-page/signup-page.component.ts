import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {
  addForm: FormGroup;
  messageText: string='';
  constructor(
    private productService: ProductsService,
     private formBuilder: FormBuilder,
     private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.initForm();
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
        this.openSnackBar(false);
      }else{
        this.productService.postUser(this.addForm.value).subscribe();
        this.openSnackBar(true);
      }
    })

   }
   openSnackBar(valid: boolean)
   {
    if(valid){
      this.messageText= "Successfully created user";
    }else{
      this.messageText="User with that username already exists";
    }
    this._snackBar.open(this.messageText, 'OK', {
      duration: 3000
    });
  }
}
