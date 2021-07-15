import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map,tap } from 'rxjs/operators';

import { IUser } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
private _url = "https://randomuser.me/api/?results=100&nat=us";
private _instanceId: number;

private users = [];

  constructor(private http:HttpClient) {
    this._instanceId = Math.random();
    console.log('%cUsersService.constructor', 'background-color:DarkSlateGray;color:white;', this._instanceId)
    
  }

  getUsers(): Observable<any> {
    console.log('>>', this._instanceId);
    if(this.users.length === 0) {
      return this.http.get(this._url)
        .pipe(
          map(e => {
            console.log('UsersService.getUsers', typeof e, e);
            let u = (e as any).results.map(el => {
              el.name['full'] = `${el.name.first} ${el.name.last}`;
              return el;
            });
            this.users = u;
            return u;
          })
        );
    } else {
      return of( this.users );
    } 
  }
}

// https://randomuser.me/api/?results=1&nat=us
// https://api.github.com/search/issues?q=repo:angular/components&sort=${sort}&order=${order}&page=${page + 1}