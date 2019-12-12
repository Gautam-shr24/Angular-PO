import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http:HttpClient) { }

  url="http://localhost:1234/PurchaseOrderMiddle";

  getAllPOs():Observable<any>
  {
    return this.http.get<any[]>(this.url+'/viewPOS');
  }

}
