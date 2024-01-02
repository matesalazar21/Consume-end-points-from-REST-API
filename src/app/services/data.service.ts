import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getUsers() {
    //metodo
    return this.http.get('https://jsonplaceholder.typicode.com/users'); //utilizando el metodo GET obtenemos el listado de usuarios de mi Data service
  }
}
