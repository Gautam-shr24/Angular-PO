import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { BuyerModule } from './buyer/buyer.module';
import { VendorModule } from './vendor/vendor.module';
import { SellerModule } from './seller/seller.module';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    ReactiveFormsModule,
    FormsModule,
    BuyerModule,
    VendorModule,
    SellerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
