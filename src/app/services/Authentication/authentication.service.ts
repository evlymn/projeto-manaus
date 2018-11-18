import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private angularFireAuth: AngularFireAuth, private router: Router) {
    this.onAuthStateChanged();
  }

  private onAuthStateChanged() {
    this.angularFireAuth.auth.onAuthStateChanged(user => {
      if (user) {
      //  this.router.navigate(['autenticado']);
      } else {
      //  this.router.navigate(['nao_autenticado']);
      }
    });
  }

  public get currenUser(): firebase.User {
    return this.angularFireAuth.auth.currentUser;
  }

  signInWithGoogleAuthProvider(): Promise<firebase.auth.UserCredential> {
    return this.angularFireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  signInWithFacebookAuthProvider(): Promise<firebase.auth.UserCredential> {
    return this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  signInWithGithubAuthProvider(): Promise<firebase.auth.UserCredential> {
    return this.angularFireAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
  }

  signInWithTwitterAuthProvider(): Promise<firebase.auth.UserCredential> {
    return this.angularFireAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
  }

  signOut() {
    return this.angularFireAuth.auth.signOut();
  }
}
