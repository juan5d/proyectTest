import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InterfaceData, User } from '../models/data.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  _url = "https://reqres.in/api/users/"
  constructor(private http: HttpClient) { }

  getData() {
    let head = new HttpHeaders().set('Type-content', 'aplication/json');

    return this.http.get<InterfaceData>(this._url, {
      headers: head
    });

  }

  postData(user: User): Observable<User> {
    return this.http.post<User>(this._url, user);
  }

  putData(user: User): Observable<User> {
    return this.http.put<User>(this._url, user);
  }
  deleteData(id : string): Observable<{}> {
    return this.http.delete(this._url+id);
  }
}
