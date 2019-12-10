import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { BannerComponent } from './banner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterUserComponent } from './auth/register-user/register-user.component';
import { BuyerComponent } from './buyer/buyer.component';
import { ViewAllComponent } from './buyer/view-all.component';



const routes: Routes = [
  {path:'', redirectTo:'/',pathMatch:'full'},
  {path:'register',component:RegisterUserComponent},
   {path:'login',component:LoginComponent},
   {path:'buyerPage',component:BuyerComponent},
   {path:'viewAll',component:ViewAllComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[
  HeaderComponent,
  FooterComponent,
  BannerComponent,
  PageNotFoundComponent

];
