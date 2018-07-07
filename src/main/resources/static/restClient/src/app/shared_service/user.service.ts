import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/observable/throw';
import{ User } from '../user';

//import { map, catchError } from "rxjs/operators";
//import { Observable, of, throwError} from "rxjs"

//import { map, filter, catchError, mergeMap } from 'rxjs/operators';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl:string='http://localhost:8080/api';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers})
  private user:User;
  constructor(private _http:Http) { }

  getUsers(){
    return this._http.get(this.baseUrl + '/users', this.options).pipe(map((response:Response)=>response.json()), 
      catchError(this.errorHandler));
  }

  getUser(id:Number){
    return this._http.get(this.baseUrl + '/user/' + id, this.options).pipe(map((response:Response)=>response.json()), 
      catchError(this.errorHandler));
  }

  deleteUser(id:Number){
    return this._http.delete(this.baseUrl + '/user/' + id, this.options).pipe(map((response:Response)=>response.json()), 
      catchError(this.errorHandler));
  }

  createUser(user:User){
    return this._http.post(this.baseUrl + '/users', JSON.stringify(user), this.options).pipe(map((response:Response)=>response.json()), 
      catchError(this.errorHandler));
  }

  updateUser(user:User){
    return this._http.put(this.baseUrl + '/users', JSON.stringify(user), this.options).pipe(map((response:Response)=>response.json()), 
      catchError(this.errorHandler));
  }

  errorHandler(error:Response){
    return throwError(error || "SERVER ERROR");
  }

  setter(user:User){
    this.user = user;
  }

  getter(){
    return this.user;
  }
}
