import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  constructor(private http:HttpClient) { }

 
  demo:any;
  data:any;
  val:any;
  rss:any
  quantity=0;
  
  ngOnInit(): void {
    console.log('ggggg');
    var session = localStorage.getItem('userDetails');
    console.log('ff',session);
    this.demo = session;
  }
    cartse(pro:any){
      var formData2 = new FormData();
        formData2.append('user_id',pro.demo);
      
        this.http.post('http://students.ateesonline.com/get-cart',formData2)
        .subscribe((res)=>{
          console.log('result',res);
      this.data=res;
       this.val= this.data.cart_items;
      console.log(this.val);

 
      this.rss=this.data.asset_path;
      console.log(this.rss);

      },);
      
  
  }
  removeItem(items:any){
  
  }
  increase(items:any)
  {
  items.quantity++;
  
  }
  decrease(items:any)
  {
    items.quantity=items.quantity-1;
  }

  onsubmit(prdts:any){
      

    var formData3 = new FormData();
    formData3.append('user_id',prdts.demo);
  formData3.append('cart_id',prdts.a)
  console.log(prdts.demo);
  console.log(prdts.a);
  
    this.http.post('http://students.ateesonline.com/delete-item-from-cart',formData3)
    .subscribe((res)=>{
      console.log('result',res);
      
  });

  }

}
