import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../../core/services/user';
import { Service } from '../../../core/services/service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-post',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './post.html',
  styleUrl: './post.css'
})
export class Post {
  addPostForm: FormGroup;

  userID: string = ''

  image: any;

  constructor(private fb: FormBuilder, private _userService: User, private _serviceService: Service, private router: Router) {
    let controls = {
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      categories: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required, Validators.minLength(4)]),
      salary: new FormControl('', [Validators.required, Validators.min(10)]),
      description: new FormControl('', [Validators.required, Validators.minLength(4)]),
    }

    this.addPostForm = fb.group(controls)

  }

  ngOnInit() {
    this.userID = this._userService.getUserIdFromToken()!;
  }

  selectImage(e: any) {
    this.image = e.target.files[0]
  }

  save():void {

    if(!this.image) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please add an Image!",
      });

      return;
    }

    const fd = new FormData();

    fd.append('name', this.addPostForm.value.name);
    fd.append('categories', this.addPostForm.value.categories);
    fd.append('location', this.addPostForm.value.location);
    fd.append('salary', this.addPostForm.value.salary);
    fd.append('description', this.addPostForm.value.description);

    fd.append('image', this.image);

    fd.append('idUser', this.userID);

    this._serviceService.createService(fd).subscribe({
      next: (res: any) => {
        Swal.fire({
          title: "Good job!",
          text: "You added a post successfully",
          icon: "success"
        });

        this.addPostForm.reset()
      },
      error: (err) => {
        console.log(err)
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: err.message
        });
      }
    });

  }
}
