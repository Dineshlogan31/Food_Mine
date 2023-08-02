import { Injectable } from '@angular/core';
import { User } from '../shared/models/User';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { HttpClient } from '@angular/common/http';
import { LOGIN_URL } from '../shared/constants/url';
import { ToastrService } from 'ngx-toastr';

const USER_KEY='User'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject=new BehaviorSubject<User>(this.getUserFromLocalStorage())
  public userObservable:Observable<User>

  constructor(private http:HttpClient,public toastrService:ToastrService) {
    this.userObservable=this.userSubject.asObservable()
   }

   login(user:IUserLogin):Observable<User>
   {
    return this.http.post<User>(LOGIN_URL,user).pipe(
      tap({
        next:(user)=>{
          this.setUserToLocalStorage(user)
   this.userSubject.next(user);
   this.toastrService.success(
    `Welcome ${user.name}!`,
    `Login Successful`
   )
        },
        error:(errorResponse)=>{
          console.log(errorResponse);
          
          this.toastrService.error(errorResponse.error,`Login Failed`)
        }
      })
    )
   }

   logout()
   {
    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY);
    window.location.reload;
   }

   setUserToLocalStorage(user:User)
   {
      localStorage.setItem(USER_KEY,JSON.stringify(user))
   }

   getUserFromLocalStorage():User
   {
      const storageUser=localStorage.getItem(USER_KEY)

      if(storageUser) return JSON.parse(storageUser)
      return new User()
   }
}
