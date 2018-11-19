import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/Authentication/authentication.service';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthenticationService, private loginService: LoginService) {}

  loginGoogle() {
    this.auth
      .signInWithGoogleAuthProvider()
      .then(credentials => {
        this.setUser(credentials.user.uid, credentials.additionalUserInfo);
      })
      .catch(reason => console.error(reason));
  }

  loginGitHub() {
    this.auth
      .signInWithGithubAuthProvider()
      .then(credentials => {
        this.setUser(credentials.user.uid, credentials.additionalUserInfo);
      })
      .catch(reason => console.error(reason));
  }

  setUser(uid: string, additionalUserInfo: any) {
    console.log(additionalUserInfo);
    this.loginService
      .setUser(uid, additionalUserInfo)
      .then(val => {
        console.log('deu tudo certo', val);
      })
      .catch(reason => console.error('deu tudo errado', reason));
  }

  ngOnInit() {
   // this.auth.signOut();
  }
}
