import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http:HttpClient) { }

  url="http://localhost:1234/PurchaseOrderMiddle";

  getAllProducts():Observable<Product[]>
  {
    return this.http.get<Product[]>(this.url+'/viewAllProducts');
  }


  addQuantity(productId:number,quantity:number,vendorId:number):Observable<any>{
    return this.http.get<any>(this.url+'/updateProductQuantity?productId='+productId
    +"&&quantity="+quantity+"&&vendorId="+vendorId,{responseType:'text' as 'json'});
  }
}


