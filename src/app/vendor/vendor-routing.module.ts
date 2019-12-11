import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorComponent } from './vendor.component';
import { ViewAllProductsComponent } from './view-all-products.component';
import { AddQuantityComponent } from './add-quantity.component';


const routes: Routes = [
  {path:'vendorPage',component:VendorComponent},
  {path:'viewProducts',component:ViewAllProductsComponent},
  {path:'addQuantity',component:AddQuantityComponent}

  



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
