import { Component, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  user: CognitoUserInterface | undefined;
  authState: AuthState;

  constructor(private ref: ChangeDetectorRef) { }

  // Check if user has admin rights
  hasAdminRights() {
    // return this.user.signInUserSession.accessToken.payload['cognito:groups'].find(group => group === 'Admin');
    if (this.user.signInUserSession.accessToken.payload['cognito:groups'].find(group => group === 'Admin') === 'Admin') {
      return true;
    }

    return false;
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
      }
    });

  }

}
