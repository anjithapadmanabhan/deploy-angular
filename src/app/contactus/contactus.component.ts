import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor() { }
contactde={ name:'',email:'',message:''};
  ngOnInit(): void {
  }
onsubmit()
{
  console.log(this.contactde);
  
}

}
