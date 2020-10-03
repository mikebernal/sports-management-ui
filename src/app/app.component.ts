import { AuthService } from './services/auth/auth.service';
import { Component, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy  {
  title: 'Sports Management System';
  user: CognitoUserInterface | undefined;
  authState: AuthState;
  role;

  constructor(
    private ref: ChangeDetectorRef,
    private auth: AuthService,
    private ngZone: NgZone
  ) { }

  // Check if user has admin rights
  get hasAdminRights() {
   return (this.ngZone.run(() => this.user.signInUserSession.accessToken.payload['cognito:groups'].find(group => group === 'Admin') === 'Admin') ? true : false);
  }

  ngOnInit() {

    console.log('should run in spa routing');

    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      this.ref.detectChanges();

      // Check if user is signedIn
      if (this.ngZone.run(() => this.auth.isLoggedIn(authState, authData))) {
        this.auth.setRole(this.user.signInUserSession.accessToken.payload['cognito:groups']
        .find(group => group === 'Admin') === 'Admin');
      }

      this.ngZone.run(() => this.auth.isLoggedOut(authData));
    });

  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }

}
