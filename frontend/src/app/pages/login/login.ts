import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../core/services/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private _userService: User, private router: Router){
    let controls = {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    }
    this.loginForm = fb.group(controls);
  }

  login() {
    this._userService.login(this.loginForm.value).subscribe({
      next: (res: any) => {
        console.log(res)
        localStorage.setItem('_token', res.token);
        this.router.navigate(['/client'])
      },
      error: (err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Wrong Username or password!",
          // footer: '<a href="#">Why do I have this issue?</a>'
        });
      }
    })
  }
}
