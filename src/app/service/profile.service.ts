import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  search: any;

  constructor(private http: HttpClient) { }
  find(name) {
    return this.http.get('https://api.github.com/users/' + name + '?access_token=60a8aa241ca3343e4bc0a621d8e98ce65b9b9a9b');

  }
}
