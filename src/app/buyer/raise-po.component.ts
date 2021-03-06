import { Component, OnInit } from '@angular/core';
import { BuyerService } from './buyer.service';
import { FormGroup,FormControl } from '@angular/forms';
import { Product } from '../models/Product';

@Component({
  selector: 'app-raise-po',
  templateUrl: './raise-po.component.html',
  styleUrls: ['./raise-po.component.css']
})
export class RaisePOComponent implements OnInit {
  public pro:number;
  public quantity:number;

  public productArray:Product[];

  ngOnInit() {
      this.buyerService.getAllProducts().subscribe(data=>
      this.productArray=data);
  }
 
  constructor(private buyerService:BuyerService) { }
  
  fetchProductName(pId:number){
    for(let product of this.productArray){
      if(product.productId==pId){
        return product.productName;
      }

    }
   
  }

  
  productsArrToDisplay:Product[]=[];
 
   onAdd(){
    let obj=new Product();
    obj.isSelected=false;
    obj.productId=this.pro;
    obj.productName=this.fetchProductName(this.pro);
    obj.quantity=this.quantity;

    
    this.productsArrToDisplay.push(obj);
  

  }
  deleteRow(){
    this.productsArrToDisplay = this.productsArrToDisplay.filter(item => item.isSelected! === false);
  }


  RaisePo(){

   // console.log(sessionStorage.getItem("uObj"));
    let obj=JSON.parse(sessionStorage.getItem("uObj"));  
    let uId=obj.userId;
    console.log( this.productsArrToDisplay+" "+uId);
    this.buyerService.raisePoForm(this.productsArrToDisplay,uId).
    subscribe(data => console.log("Value Added" +this.productsArrToDisplay));
    alert("Purchase Order Raised");
    window.location.reload(true);
  }
}
