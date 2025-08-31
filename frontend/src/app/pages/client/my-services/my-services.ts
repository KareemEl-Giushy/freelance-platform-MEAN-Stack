import { Component } from '@angular/core';
import { Service } from '../../../core/services/service';
import { User } from '../../../core/services/user';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-services',
  imports: [CommonModule, RouterModule],
  templateUrl: './my-services.html',
  styleUrl: './my-services.css'
})
export class MyServices {

  services: any;

  constructor(private _service: Service, private _userService: User) { }

  ngOnInit() {
    this._service.getMyServices(this._userService.getUserIdFromToken()!).subscribe({
      next: (res: any) => {
        this.services = res
      }
    })
  }

  delete(id: string) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

      this._service.deleteService(id).subscribe({
        next: (res: any) => {
          this.ngOnInit();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      })

      }
    });
  }

}
