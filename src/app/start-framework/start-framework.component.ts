import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-start-framework',
  templateUrl: './start-framework.component.html',
  styleUrls: ['./start-framework.component.css']
})
export class StartFrameworkComponent implements OnInit {
  constructor(private titleService: Title) { }
  ngOnInit(): void {
    this.titleService.setTitle("Home")
  }
}
