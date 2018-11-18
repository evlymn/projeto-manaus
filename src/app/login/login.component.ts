import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/Authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthenticationService) {}

  loginGoogle() {
    this.auth.signInWithGoogleAuthProvider().then(credentials => {
        console.log(credentials);
      }).catch(reason => console.error(reason));
  }

  loginGitHub() {
    this.auth.signInWithGithubAuthProvider().then(credentials => {
        console.log(credentials);
      }).catch(reason => console.error(reason));
  }

  ngOnInit() {
     this.auth.signOut();
  }
}
