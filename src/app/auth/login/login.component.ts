import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router,private authService:AuthService ) { }

  loginForm = this.fb.group({

    userEmail:['',[Validators.required]],
    userPass:['',[Validators.required,Validators.maxLength(8)]]
  }
  )
  ngOnInit() {
  }

  get userEmail()
  {
    return this.loginForm.get("userEmail");
  }

  get userPassword()
  {
    return this.loginForm.get("userPass");
  }




onSubmitValidate()
{
  
  console.log(this.loginForm.value.userEmail,this.loginForm.value.userPass);
  this.authService.validateUser(this.loginForm.value.userEmail,this.loginForm.value.userPass).subscribe(
    data=>{
      
      alert(data);
      if(data == 'Seller'){
      this.router.navigate(['./']);
      }
      else if(data=='Buyer'){
        this.router.navigate(['./buyerPage']);
      }
      else if(data=='Vendor'){
        this.router.navigate(['./']);
      }
      else
      {
        alert(" invalid!");
        this.router.navigate(['./']);
     }
     
    },
    error=>{
      alert("Email or Password is incorrect");
    }
  );
  }
}

