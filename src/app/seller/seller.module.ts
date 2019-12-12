import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { SellerComponent } from './seller.component';
import { ViewPOComponent } from './view-po.component';
import { SellerService } from './seller.service';


@NgModule({
  declarations: [SellerComponent, ViewPOComponent],
  imports: [
    CommonModule,
    SellerRoutingModule
  ],
  exports :[
    SellerComponent
  ],
  providers:[
    SellerService
  ]
})
export class SellerModule { }
