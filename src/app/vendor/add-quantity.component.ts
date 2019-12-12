import { Component, OnInit } from '@angular/core';
import { VendorService } from './vendor.service';
import { Product } from '../models/Product';
import { Vendor } from '../models/vendor';

@Component({
  selector: 'app-add-quantity',
  templateUrl: './add-quantity.component.html',
  styleUrls: ['./add-quantity.component.css']
})
export class AddQuantityComponent implements OnInit {

  constructor(private vendorService: VendorService) { }
  public productArray: Product[];

  public productId:number;
  public quantity:number;

  ngOnInit() {

    this.vendorService.getAllProducts().subscribe(data =>
      this.productArray = data);
  }

addQuantToProducts:Vendor[]=[];

  addQuantity(){
    let uObj=JSON.parse(sessionStorage.getItem("uObj"));
    let vendorId=uObj.userId;

    console.log('Vendor Id : '+vendorId);

    console.log(this.productId+" "+this.quantity);
    this.vendorService.addQuantity(this.productId,this.quantity,vendorId).
    subscribe(data => console.log("Quantity Added"));
    alert("Quantity Added");
    
   
    // let obj=new Vendor();
   
    // obj.productId=this.pro;
    // obj.quantity=this.quantity;
    // this.addQuantToProducts.push(obj);
    
  
    
    

  }

}
