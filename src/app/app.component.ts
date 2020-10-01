import { Component, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy  {
  user: CognitoUserInterface | undefined;
  authState: AuthState;

  constructor(
    private ref: ChangeDetectorRef,
    private router: Router,
  ) { }

  // Check if user has admin rights
  get hasAdminRights(): boolean {
   return (this.user.signInUserSession.accessToken.payload['cognito:groups'].find(group => group === 'Admin') === 'Admin') ? true : false;
  }

  ngOnInit() {

    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      this.ref.detectChanges();

      if (authState === AuthState.SignedIn) {
        console.log('user successfully signed in!');
        console.log('user data: ', authData);
        console.log('authState: ', authState);
      }

      if (!authData) {
        console.log('user is not signed in...');
        this.router.navigate(['']);
      }
    });
  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }

}
