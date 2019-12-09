import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AuthService } from './auth.service';
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [LoginComponent, RegisterUserComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,FormsModule,
    HttpClientModule  ],
  exports:[
    LoginComponent,RegisterUserComponent],

    providers: [AuthService]
})
export class AuthModule { }
