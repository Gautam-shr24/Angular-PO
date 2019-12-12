import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { VendorComponent } from './vendor.component';
import { ViewAllProductsComponent } from './view-all-products.component';
import { VendorService } from './vendor.service';
import {HttpClientModule} from '@angular/common/http';
import { AddQuantityComponent } from './add-quantity.component'
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [VendorComponent, ViewAllProductsComponent, AddQuantityComponent],
  imports: [
    CommonModule,
    VendorRoutingModule,
    HttpClientModule,FormsModule
  ],
  exports:[
    VendorComponent,ViewAllProductsComponent,AddQuantityComponent
  ],
  providers:[VendorService]
})
export class VendorModule { }
