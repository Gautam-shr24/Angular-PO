import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyerRoutingModule } from './buyer-routing.module';
import { BuyerComponent } from './buyer.component';


@NgModule({
  declarations: [BuyerComponent],
  imports: [
    CommonModule,
    BuyerRoutingModule
  ],
  exports:[
    BuyerComponent
  ]
})
export class BuyerModule { }
