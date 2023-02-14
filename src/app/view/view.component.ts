import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewService } from '../view.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  data:any
  rs1:any
  demo:any;
  ngOnInit(): void {
    console.log('ggggg');
    var session = localStorage.getItem('userDetails');
    console.log('ff',session);
    this.demo = session;
  }
  constructor(private http:HttpClient,private views:ViewService,private router:Router) { 

 
this.views.getdata().subscribe(res=>{
  console.log(res);
  this.data=res.menu;
  console.log(this.data);
 this.rs1=res.asset_path;
console.log(this.rs1);

  },);
}
onsubmit(products:any)
{
 
var formData1 = new FormData();
formData1.append('user_id',products.demo);
formData1.append('product_id',products.a);
console.log(products.a);
// formData1.append('productid',this.item.id)
this.http.post('http://students.ateesonline.com/add-to-cart',formData1)
.subscribe((result)=>{



console.log("result",result)
});
}}