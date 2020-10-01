import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private route: Router
  ) { }

  // use cognito expression here
  get isLoggedIn() {
    return true;
  }

  /**
   * Gets Cognito user whether is admin
   */
  get isAdmin() {
    return true;
  }

  /**
   * Gets CognitoUser whether is event manager
   */
  get isEventManager() {
    // if !EventManager
    // this.router.navigate(['forbidden']);
    return true;
  }
}
