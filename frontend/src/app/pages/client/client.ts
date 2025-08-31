import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { User } from '../../core/services/user';

@Component({
  selector: 'app-client',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './client.html',
  styleUrl: './client.css'
})
export class Client {

  user: any = {image: ''};

  constructor(private router: Router, private _userService: User) {}

  ngOnInit(): void {
      this._userService.getUser(this._userService.getUserIdFromToken()!).subscribe({
        next: (res: any) => {
          this.user = res;
        }
      })
  }

  logout() {
    localStorage.removeItem('_token')
    this.router.navigate(['/'])
  }
}
