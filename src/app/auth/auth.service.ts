import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  addUser(personObj:any):Observable<any>
  {
    
    return this.http.post<any>("http://localhost:1234/PurchaseOrderMiddle/user",personObj,
    {responseType:'text' as 'json'});
    

  }

  validateUser(userEmail:any,userPass:any):Observable<any>{
    console.log(userEmail+" "+userPass+"Yooooo");
    return this.http.post<any>("http://localhost:1234/PurchaseOrderMiddle/uservalidate?userEmail="+
    userEmail+"&&userPass="+userPass,null);
  }


}
