import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  constructor(private titleService:Title) { }
  ngOnInit(): void {
    this.titleService.setTitle("Contact")
  }

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
