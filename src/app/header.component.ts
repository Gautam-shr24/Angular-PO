import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  flag: boolean;
  logged: string;
  user: any;

  constructor(private router:Router) { }

  ngOnInit() {

    var obj = JSON.parse(sessionStorage.getItem("uObj"));
    this.user = obj;
    console.log(obj);
    
    
    if (obj === null) {
      this.flag = false;
    }
    else {
      this.flag = true;
      if (obj.role == 'Buyer') {
        this.logged = 'buyer';
      }
      else if (obj.role == 'Seller') {
        this.logged = 'seller';
      }
      else if (obj.role == 'Vendor') {
        this.logged = 'vendor';
      }
    }

  }

  logout() {
    this.flag =false;
    this.logged = undefined;
    sessionStorage.clear();
    this.router.navigate(['./login']);
  }

}
