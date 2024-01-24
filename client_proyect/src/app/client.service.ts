import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get('http://localhost:8080/api/clients')
  }

  create(client: any) {
    return this.http.post('http://localhost:8080/api/clients', client)
  }
  
}
