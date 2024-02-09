import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { StartFrameworkComponent } from './start-framework/start-framework.component';

const routes: Routes = [
  {path: "" , redirectTo: "startFrameWork" , pathMatch:"full"},
  {path : "ABOUT" , component : AboutComponent},
  {path : "PORTFOLIO" , component : PortfolioComponent},
  {path : "CONTACT" , component : ContactComponent},
  {path : "startFrameWork" , component : StartFrameworkComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
