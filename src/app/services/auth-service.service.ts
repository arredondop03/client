import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  handleError(e) { // e comes magically and is whatever the error is.
    console.log(e);
    return throwError(e.json().message);
  }

  signup(user) {
    return this.http.post(`http://localhost:3000/api/signup`, user, {withCredentials: true});
      // .pipe(map(res => res.json()), catchError(this.handleError));
  }

  login(user) {
    return this.http.post(`http://localhost:3000/api/login`, user, {withCredentials: true});
    // .pipe(map(res => res.json()), catchError(this.handleError));
  }

  logout() {
    return this.http.post(`http://localhost:3000/api/logout`, {withCredentials: true})
      .pipe(map((res) => {
        return JSON.parse((<any>res)._body);
      })
      , catchError(this.handleError));
  }
}
