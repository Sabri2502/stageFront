import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../_services/user.service";
import {User} from "../../models/user";
import {Router} from "@angular/router";
import {DatePipe} from "@angular/common";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormBuilder, FormGroup, NgForm} from "@angular/forms";
import * as tt from "@tomtom-international/web-sdk-maps";

import Swal from "sweetalert2";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [DatePipe],

})
export class ProfileComponent implements OnInit,AfterViewInit{
  user!: User;

  //map
  longitude:number ;
  latitude:number ;
  map : tt.Map;
  //map
  constructor(private http:HttpClient,private userService: UserService, private router: Router,
              private fb: FormBuilder,
            ) {
  }

  ngAfterViewInit(): void {

    }
  public  redirect(root:any){
    this.router.navigate([root]);
  }
  loading = true;

  private fileToUpload: File | null = null;
  //TODO add condition for empty file on upload
  private shopFiles: File[]  = [];
  files : FileList;
  addShopForm: FormGroup;

  message!:string;
  created = true;
  not_created = true;
  authToken !: string;
  phoneNumber : string =''
  adresse : string =''
  ngOnInit(): void {
    this.addShopForm = this.fb.group({
      name: '',
      mail: '',
      adresse: '',
      phoneNumber: '',
    });


    if(localStorage.getItem('currentUser')===null)
    {
      this.router.navigate(['/login'])
    }
    this.user=this.userService.getCurrentUser()
    // @ts-ignore
    this.authToken = localStorage.getItem("currentUser")
    console.log(this.user)
  }

  onFileSelected(event: any): void {
    console.log(event.target.files)
    this.fileToUpload = event.target.files.items
  }
  getLatLng(event){
    console.log('we are in parent component');
    console.log(event);
  //  this.latLng = event;
  }
  uploadFiles():void
  {
    console.log("begining upload!")
    if (!this.shopFiles) {
      return;
    }

    const formData = new FormData();
    // @ts-ignore
    formData.append('file', this.shopFiles);
    formData.append("adresse"
      , new Blob([JSON.stringify(this.adresse)], {type:"application/json"}));

    formData.append('phoneNumber', this.phoneNumber)

    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.authToken}`);

    console.log(this.authToken)
    console.log(this.shopFiles)
    for (let file of this.shopFiles)
    {
      if (!this.isImageFile(file))
      {
        this.message = "unsupported file type!"
        this.created = false;
      }
    }



      this.http.post("http://localhost:8085/shop/add",formData, {headers}).subscribe(() => {

        this.message = "shop picture added successfully! "
        this.created=false;

        window.location.reload();
      }, error => {
        this.created=false;
        this.message = "shop picture added successfully! "
      });
    }



  onFilesSelected(event: any): void {
    console.log("files",event.target.files)
    this.files = event.target.files//.items//(0);
  }
  onUpload(): void {
    console.log("begining upload!")
    if (!this.fileToUpload) {
      return;
    }


    const formData = new FormData();
    formData.append('file', this.fileToUpload);

    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.authToken}`);

    console.log(this.authToken)
    if (!this.isImageFile(this.fileToUpload))
    {
      this.message = "unsupported file type!"
      this.created = false;
    }
    if (this.isImageFile(this.fileToUpload))
    {
      this.http.post("http://localhost:8085/profile/picture/update",formData, {headers}).subscribe(() => {

        this.loading = true;
        this.message = "profile picture added successfully! "
        this.created=false;

        window.location.reload();
      }, error => {
        this.loading = true;
        this.created=false;
        this.message = "profile picture added successfully! "
      });
    }

  }
  isImageFile(file: File): boolean {
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
    const fileName = file.name.toLowerCase();
    return allowedExtensions.some(ext => fileName.endsWith(ext));
  }





}
