import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthenticationService } from '../Authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {
  constructor(private db: AngularFireDatabase, private auth: AuthenticationService) {}

  addMensagem(mensagem: string) {
    const msg = {
      mensagem: mensagem,
      time: new Date().getTime(),
      uid: this.auth.currenUser.uid,
      nome: this.auth.currenUser.displayName,
      foto: this.auth.currenUser.photoURL
    };
    return this.db.database.ref('mensagens').push(msg);
  }
}
