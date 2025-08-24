import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class User {
  private _url = 'http://127.0.0.1:3000/user/';

  constructor (private http: HttpClient) { }

  register(user: any) {
    return this.http.post(this._url + 'register', user)
  }

  login(user: any) {
    return this.http.post(this._url + 'login', user)
  }

  getUser(id: string) {
    return this.http.get(this._url + id)
  }

  editUser(id: string, userData: any) {
    return this.http.put(this._url + id, userData)
  }

  isLoggedIn(): boolean {
    let token = localStorage.getItem('_token');

    if(token) {
      return true;
    }

    return false;
  }

  getUserIdFromToken(): string | null {
    let token = localStorage.getItem('_token');

    if(token){
      return JSON.parse(window.atob(token.split('.')[1])).id;
    }

    return null
  }
}
