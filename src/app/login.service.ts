import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Luser } from './luser';
import { User } from './user';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  login_url = ' http://students.ateesonline.com/user-login';
  constructor(private http:HttpClient) { }
loginuser(user:Luser)
{
  var formData = new FormData();
  formData.append("email",user.email);
  formData.append("password",user.password);



   return this.http.post<any>(this.login_url,formData);
  
}
}
