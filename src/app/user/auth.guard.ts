import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { SnackbarNotificationService } from './../services/snackbar-notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private angularFireAuth: AngularFireAuth, private snackbar: SnackbarNotificationService) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
    const user = await this.angularFireAuth.currentUser;
    const isLoggedIn = !!user;
     
    if (!isLoggedIn) {
      this.snackbar.authError();
    }
    return isLoggedIn;
  }
  
}
