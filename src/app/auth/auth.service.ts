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
  // body: HttpParams = new HttpParams();
  //   this.body.append('grant_type', 'password');
  //   this.body = this.body.append('username', userName);
  //   this.body = this.body.append('password', password);




  validateUser(userEmail:any,userPass:any):Observable<any>{
    console.log(userEmail+" "+userPass+"Yooooo");
    return this.http.post<any>("http://localhost:1234/PurchaseOrderMiddle/uservalidate?userEmail="+userEmail+"&&userPass="+userPass,null,{responseType: 'text' as 'json'});
  }


}
