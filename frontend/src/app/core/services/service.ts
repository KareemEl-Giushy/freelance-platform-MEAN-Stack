import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service {
  private _url = 'http://127.0.0.1:3000/service/'

  constructor (private http: HttpClient) { }

  getServices() {
    return this.http.get(this._url)
  }

  getServiceById(id: string) {
    return this.http.get(this._url + id)
  }

  getMyServices(id: string) {
    return this.http.get(this._url + 'u/' + id)
  }

  createService(service: any) {
    return this.http.post(this._url + 'create', service)
  }

  deleteService(id: string) {
    return this.http.delete(this._url + id)
  }
}
