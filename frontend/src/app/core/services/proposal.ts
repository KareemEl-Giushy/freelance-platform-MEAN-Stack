import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Proposal {
  private _url = 'http://127.0.0.1:3000/proposal/'

  constructor (private http: HttpClient) { }

  getProposalByServiceId(id: string) {
    return this.http.get(this._url + id)
  }

  getProposalsByUserId(id: string) {
    return this.http.get(this._url + 'u/' + id)
  }

  createProposal(proposal: any) {
    return this.http.post(this._url, proposal)
  }

  acceptProposal(id: string) {
    return this.http.put(this._url + id, null)
  }

  deleteProposal(id: string) {
    return this.http.delete(this._url + id)
  }
}
