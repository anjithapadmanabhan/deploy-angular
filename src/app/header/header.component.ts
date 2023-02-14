import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
// ismenuvisible=true;
  constructor(private route:Router) { }
ngOnInit(): void {
  
}
goto(){
this.route.navigate(['buy']);

}
//   const currentroute=this.route.url;
//  if(currentroute=='/login'){
//    this.ismenuvisible=false;
//  }
//  else{
//    this.ismenuvisible=true;
//  }
}
 


