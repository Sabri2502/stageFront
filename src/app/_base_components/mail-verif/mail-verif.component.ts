import {Component, OnInit} from '@angular/core';
import {UserService} from "../../_services/user.service";

@Component({
  selector: 'app-mail-verif',
  templateUrl: './mail-verif.component.html',
  styleUrls: ['./mail-verif.component.scss']
})
export class MailVerifComponent implements OnInit{
  message!: string;
  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    const button = document.querySelector("#myButton");

    // @ts-ignore
    button.addEventListener("click", () => {
      // @ts-ignore
      button.dispatchEvent(new MouseEvent("click"));
    });

    // @ts-ignore
    button.click();
    const urlSearchParams = new URLSearchParams(window.location.search)
    const token = urlSearchParams.get("token")
    // @ts-ignore
    this.userService.verifyEmail(token).subscribe(

      (response)=>{
        console.log(response)
        // @ts-ignore
        this.message=response
      },
      (error)=>{
        this.message=error;

      }
    )

  }



}
