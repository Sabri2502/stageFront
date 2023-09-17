import { Component } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { NgForm } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import jwt_decode from 'jwt-decode';
import { User } from 'src/app/models/user';
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  created = true;
  not_created = true;
  message!: string;
  user !: User;

  constructor(private userService:UserService, private router: Router){}
  login(loginForm: NgForm){
    this.userService.login(loginForm.value).subscribe(
      (response)=>{

        this.message=response;

        if (this.message.startsWith('ey'))
        {
          localStorage.setItem('currentUser',this.message);
          this.router.navigate(['/profile']);
        }
        this.created=false;
        this.not_created=true;

      },
      (error)=>{
        console.log(error);
        this.not_created=false;
        this.message=error;
        this.created=true;
      }

    );
  }



}


