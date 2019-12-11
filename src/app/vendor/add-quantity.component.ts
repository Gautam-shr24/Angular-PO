import { Component, OnInit } from '@angular/core';
import { VendorService } from './vendor.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-add-quantity',
  templateUrl: './add-quantity.component.html',
  styleUrls: ['./add-quantity.component.css']
})
export class AddQuantityComponent implements OnInit {

  constructor(private vendorService: VendorService) { }
  public productArray: Product[];

  ngOnInit() {

    this.vendorService.getAllProducts().subscribe(data =>
      this.productArray = data);
  }

  addQuantity(){
    

  }

}
