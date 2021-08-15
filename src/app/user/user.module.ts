import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { GoogleSigninDirective } from './google-signin.directive';



@NgModule({
  declarations: [GoogleSigninDirective],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
