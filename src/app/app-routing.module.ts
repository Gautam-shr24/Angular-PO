import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { BannerComponent } from './banner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterUserComponent } from './auth/register-user/register-user.component';
import { ViewAllComponent } from './buyer/view-all.component';
import { BuyerComponent } from './buyer/buyer.component';
import { VendorComponent } from './vendor/vendor.component';
import { SellerComponent } from './seller/seller.component';



const routes: Routes = [
  {path:'', redirectTo:'/',pathMatch:'full'},
  {path:'register',component:RegisterUserComponent},
   {path:'login',component:LoginComponent},
  
   {path:'viewAll',component:ViewAllComponent},

   {
    path: 'buyerPage',component:BuyerComponent
  },
  {
    path: 'vendorPage',component:VendorComponent
  },
  {
    path: 'sellerPage',component:SellerComponent
  }


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
