import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../_models/user';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl='https://localhost:44356/api/';
  private currentUserSource=new ReplaySubject<User>(1);
  currentUser$=this.currentUserSource.asObservable();

  constructor(private http:HttpClient) { }

  login(model:any){
    return this.http.post<User>(this.baseUrl +'account/login',model).pipe( //New Changes
      map((response:User)=>{
        const user=response;
        if(user){
          localStorage.setItem('user',JSON.stringify(user));
          console.log(user);
          this.currentUserSource.next(user);

        }
      })
    )
  }

  register(model:any){
    return this.http.post<User>(this.baseUrl +'account/register',model).pipe(
      map((user:User) => {
        if (user){
          localStorage.setItem('user',JSON.stringify(user));
        //  this.currentUserSource.next(user);

        }
        return user;
      })
    )
  }

  setCurrentUser(user:User){
    this.currentUserSource.next(user);
  }

  logout(){
   window.localStorage.removeItem('user');
    this.currentUserSource.next(null!);
  }
}
