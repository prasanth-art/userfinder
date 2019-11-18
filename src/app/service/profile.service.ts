import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  search: any;
  constructor(private http: HttpClient) { }
  find(name) {
    return this.http.get('https://api.github.com/users/' + name );

  }
}
