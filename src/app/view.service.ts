import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ViewService {

  constructor(private http:HttpClient) { }
  getdata(){
    let url="http://students.ateesonline.com/menu/";
return this.http.get<any>(url);
  }
}
