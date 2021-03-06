import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerRoutingModule } from './buyer-routing.module';
import { BuyerComponent } from './buyer.component';
import { ViewAllComponent } from './view-all.component';
import { BuyerService } from './buyer.service';
import { RaisePOComponent } from './raise-po.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [BuyerComponent
  ,ViewAllComponent, RaisePOComponent],
  imports: [
    CommonModule,
    BuyerRoutingModule,
    HttpClientModule,FormsModule
  ],
  exports:[
    BuyerComponent,ViewAllComponent,RaisePOComponent
  ],
  providers: [BuyerService]
})
export class BuyerModule { }
