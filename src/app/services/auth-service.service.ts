import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'; 
import { Observable } from 'rxjs'



@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: Http) { }

  handleError(e){ //e comes magically and is whatever the error is.
    console.log(e)
    return Observable.throw(e.json().message)
  }






}
