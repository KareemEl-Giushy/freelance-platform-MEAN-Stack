import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { User } from '../../core/services/user';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  constructor(public _userService: User) {}
}
