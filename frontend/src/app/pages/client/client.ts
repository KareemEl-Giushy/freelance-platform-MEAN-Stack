import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-client',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './client.html',
  styleUrl: './client.css'
})
export class Client {

}
