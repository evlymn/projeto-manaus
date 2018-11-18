import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private db: AngularFireDatabase) {}

  setUser(uid: string, additionalUserInfo: any) {
    return this.db.database.ref('usuarios').child(uid).set(additionalUserInfo);
  }
}
