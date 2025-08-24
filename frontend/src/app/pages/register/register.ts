import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../core/services/user';

@Component({
  selector: 'app-register',
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  registerForm: FormGroup;

  constructor (private fb: FormBuilder, private _userService: User, private router: Router){
    let controls = {
      firstname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    }

    this.registerForm = fb.group(controls);
  }

  createAccount() {
    // console.log(this.registerForm.value)
    this._userService.register(this.registerForm.value).subscribe({
      next: (res) => {
        console.log(res)
        this.router.navigate(['login'])
      }
    })
  }
}
