import { formatCurrency } from '@angular/common';
import { NgForm} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../login.service';
import { Luser } from '../luser';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
item:any;
seusid:any;
  constructor(private router:Router,private loginsu:LoginService,private toastr:ToastrService) { }
data:any={email:'',password:''};
  ngOnInit(): void {
    var sid=localStorage.getItem('userDetails');
    console.log('sid',sid);
    this.seusid=sid;
   
  }

onsubmit()
{
console.log(this.data);

this.loginsu.loginuser(this.data).subscribe(
  res=>{
   this.item=res;
    console.log(res)


    if(res.result==0)
    {
    console.log('val',res.user_details.id);
    localStorage.setItem('userDetails',res.user_details.id);
    let lostorage=localStorage.getItem('userDeatils');
    console.log(lostorage);
      this.toastr.success("Login successfully");
      this.router.navigate(['view']);
    }
    else
    {
      this.toastr.warning("login Failed");
      console.log("failed");
    }
  },
  err=>{
    console.log(err);
  });
}

gotoregister()
{
 
  this.router.navigate(['register']);
}
}
