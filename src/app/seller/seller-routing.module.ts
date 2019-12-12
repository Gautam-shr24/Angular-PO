import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewPOComponent } from './view-po.component';


const routes: Routes = [
  {path:'viewPO',component:ViewPOComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
