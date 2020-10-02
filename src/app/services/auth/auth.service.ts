import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: CognitoUserInterface | undefined;
  authState: AuthState;
  role;

  constructor(
    private router: Router
  ) { }

  isLoggedIn(as, ad) {
    if (as === AuthState.SignedIn) {
      console.log('user successfully signed in!');
      console.log('user data: ', ad);
      console.log('authState: ', as);
      return true;
    }
  }

  isLoggedOut(ad) {
    if (!ad) {
      console.log('user is not signed in...it works');
      this.router.navigate(['']);
      return true;
    }
  }

  setRole(val: boolean) {
    if (!val) {
      this.role = 'EventManager';
    } else {
      this.role = 'Admin';
    }

    console.log('role has been set to : ' + this.getRole());

    return this.role;
  }

  getRole() {
    console.log('auth service role: ' + this.role);
    return this.role;
  }

}
