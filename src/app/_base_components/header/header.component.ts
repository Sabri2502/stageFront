import {Component, OnInit} from '@angular/core';
import {UserService} from "../../_services/user.service";
import {User} from "../../models/user";
import jwt_decode from "jwt-decode";






@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  user!:User;
  constructor(private userService:UserService){
    this.user=this.userService.getCurrentUser();
  }

  ngOnInit(): void {

    console.log("hrkzlejr");
    console.log(this.user.id);

  }


}
