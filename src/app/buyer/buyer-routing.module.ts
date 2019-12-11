import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaisePOComponent } from './raise-po.component';
import { BuyerComponent } from './buyer.component';


const routes: Routes = [
  {path:'buyerPage',component:BuyerComponent},
  {path:'RaisePo',component:RaisePOComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerRoutingModule { }
