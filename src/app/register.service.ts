import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnimationGroupMetadata } from '@angular/animations';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  url='http://students.ateesonline.com/user-registration';
getdata1(user:User){
  var formData=new FormData()
formData.append("name",user.name);
formData.append("email",user.email);
formData.append("phone",user.phone);
formData.append("password",user.password);
  return this.http.post<any>(this.url,formData);
}
}
