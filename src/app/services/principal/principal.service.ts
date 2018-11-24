import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthenticationService } from '../Authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {
  constructor(private db: AngularFireDatabase, private auth: AuthenticationService) {}

  addMensagem(mensagem: string, urlImagem?: string) {
    const msg = {
      mensagem: mensagem,
      time: new Date().getTime(),
      uid: this.auth.currenUser.uid,
      nome: this.auth.currenUser.displayName,
      foto: this.auth.currenUser.photoURL,
      urlImagem: urlImagem ? urlImagem : null
    };

    return this.db.database.ref('mensagens').push(msg);
  }

  listarMensagens() {
    return this.db.list('mensagens', ref => ref.limitToLast(20)).valueChanges();
  }
}
