import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { BannerComponent } from './banner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterUserComponent } from './auth/register-user/register-user.component';
import { BuyerModule } from './buyer/buyer.module';
import { BuyerComponent } from './buyer/buyer.component';



const routes: Routes = [
  {path:'', redirectTo:'/',pathMatch:'full'},
  {path:'register',component:RegisterUserComponent},
   {path:'login',component:LoginComponent},
   {path:'buyerPage',component:BuyerComponent}


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
