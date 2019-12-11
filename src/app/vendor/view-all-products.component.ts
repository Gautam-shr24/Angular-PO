import { Component, OnInit } from '@angular/core';
import { VendorService } from './vendor.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent implements OnInit {

  constructor(private vendorService:VendorService) { }

  public productArray:Product[];
  ngOnInit() {
    this.vendorService.getAllProducts().subscribe(data=>
      this.productArray=data);
  }

}
