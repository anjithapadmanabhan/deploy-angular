import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { User } from '../user';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
public data:any;
public error:any;
registerdata1={name:'',email:'',phone:'',password:''};
//registerdata1= new User('jinu','jinu78@gmail.com','892124574','147');
  constructor(private registers:RegisterService,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
  }

onsubmit()
{
// console.log(this.registerdata1);
this.registers.getdata1(this.registerdata1).subscribe(
  data=>{
    if(data.result=="8"||data.result=="9")
    {
      this.toastr.warning("Already Registered");
    }
    else
    {
    console.log('success',data);
    this.toastr.success("sucessfully registered");
    
  this.router.navigate(['login'])
    }
  },

  error=>console.log('Error',error)
  
),
this.toastr.warning("regisration failed");

}
}
