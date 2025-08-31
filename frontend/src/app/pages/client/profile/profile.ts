import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../../core/services/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  user:any;
  userId: string = '';

  image: any;

  editUserForm: FormGroup;

  constructor(private fb: FormBuilder, private _user: User) {
    let controls = {
      firstname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.minLength(6)]),
    }

    this.editUserForm = fb.group(controls)
  }
  ngOnInit() {
    this.userId = this._user.getUserIdFromToken()!;

    this._user.getUser(this.userId).subscribe({
      next: (res: any) => {
        this.user = res
        this.editUserForm.reset(res);
      }
    })

  }

  selectImage(e: any) {
    this.image = e.target.files[0];
  }

  save() {
    const fd = new FormData();

    fd.append('firstname', this.editUserForm.controls['firstname'].value)
    fd.append('lastname', this.editUserForm.controls['lastname'].value)
    fd.append('email', this.editUserForm.controls['email'].value)

    if(this.editUserForm.value.password) {
      fd.append('password', this.editUserForm.controls['password'].value)
    }

    if(this.image) {
      fd.append('image', this.image);
    }


    this._user.editUser(this.userId, fd).subscribe({
      next: (res: any) => {
        window.location.reload()
      }
    })

  }

}
