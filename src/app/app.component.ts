import { Component, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'amplify-angular-auth';
  user: CognitoUserInterface | undefined;
  authState: AuthState;
  isAdmin: string;

  constructor(private ref: ChangeDetectorRef) { }

  // Needs to access DOM props only when needed because of authentication rules
  ngOnInit() {

    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      this.ref.detectChanges();

      if (authState === AuthState.SignedIn) {
        this.isAdmin = this.user.signInUserSession.accessToken.payload['cognito:groups'].find(group => group === 'Admin');
        console.log('user successfully signed in!');
        console.log('user data: ', authData);
        console.log('authState: ', authState);
        console.log('Has Admin rights: ', this.isAdmin);
      }
      if (!authData) {
        console.log('user is not signed in...');
      }
    });

  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }
}
