import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(private fb:FormBuilder,private authService:AuthService,private router:Router) { }

  registerForm = this.fb.group({

    userName:['',[Validators.required]],
    userEmail:['',[Validators.required]],
    userPhone:[''],
    userAddress:[''],
    userPass:['',[Validators.required,Validators.maxLength(8)]]
    });

  ngOnInit() {
  }

  get userEmail()
  {
    return this.registerForm.get("userEmail");
  }

  get userPass()
  {
    return this.registerForm.get("userPass");
    
  }

  get userName()
  {
    return this.registerForm.get("userName");
  }


  onSubmit(){
    console.log(this.registerForm.value);
    this.authService.addUser(this.registerForm.value).subscribe(
      data  => {
        console.log("POST Request is successful ", data);
        },
        error  => {
        
        console.log("Error", error);
        
        }
      );
      //location.reload();
      this.router.navigate(['login']);
  }

  
}
