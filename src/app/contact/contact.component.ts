import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor() { }

  user : {[key: string]: boolean} = {name : false , email : false , age : false , password : false }

  showLabel(event: any) {
    let input = event.target
    let id : string = input.getAttribute("id")
    if (input.value.length == 1) {
      this.user[id]= true
    } else if (input.value.length == 0) {
      this.user[id]= false
    }
  }

}
