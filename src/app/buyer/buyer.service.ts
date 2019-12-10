import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {

  constructor(private http:HttpClient) { }
  url="http://localhost:1234/PurchaseOrderMiddle/viewAllProducts";

  getAllProducts():Observable<Product[]>
  {
    return this.http.get<Product[]>(this.url);
  }

  getProductNameById(id:number):Observable<Product> {
    return this.http.get<Product>("http://localhost:1234/PurchaseOrderMiddle/getProductNameById?productId="+id);
  }

}
