import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) { }

  searchUserById(userId: number): Observable<any> {
    return this.http.get<any>(`https://reqres.in/api/users/${userId}`);
  }
}
