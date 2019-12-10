import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {

  constructor(private http:HttpClient) { }
  url="http://localhost:1234/PurchaseOrderMiddle/viewAllProducts";

  getAllProducts():Observable<any>
  {
    return this.http.get(this.url);
  }

}
