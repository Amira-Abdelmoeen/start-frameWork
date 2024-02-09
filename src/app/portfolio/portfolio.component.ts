import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


interface images{
  imgSrc : string ;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
  
  
export class PortfolioComponent  implements OnInit{
  constructor(private titleService:Title) { }
  ngOnInit(): void {
    this.titleService.setTitle("Portfolio")
  }
      isActive:boolean=false
      imgSrc : string = ""
      image : images[] = [
        {imgSrc :"assets/images/images1.png"},
        {imgSrc :"assets/images/images2.png"},
        {imgSrc :"assets/images/images3.png"},
        {imgSrc :"assets/images/images1.png"},
        {imgSrc :"assets/images/images2.png"},
        {imgSrc :"assets/images/images3.png"}
      ]

      showImage(index : number){
        // document.documentElement.querySelector(".photo")?.classList.add("active")
        this.isActive=true
        this.imgSrc = this.image[index].imgSrc
        // document.documentElement.querySelector(".photo > img")?.setAttribute("src" ,this.image[index].imgSrc)

      }
      hideImage(){
        this.isActive=false
        this.imgSrc=""
        // document.documentElement.querySelector(".photo")?.classList.remove("active")
      }
}
