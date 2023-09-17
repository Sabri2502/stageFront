import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './_base_components/login/login.component';
import { RegisterComponent } from './_base_components/register/register.component';
import {HomeComponent} from "./_base_components/home/home.component";
import {ProfileComponent} from "./_base_components/profile/profile.component";
import {MailVerifComponent} from "./_base_components/mail-verif/mail-verif.component";



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'mail-verif', component: MailVerifComponent },




];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
