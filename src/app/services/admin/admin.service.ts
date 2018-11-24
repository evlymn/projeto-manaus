import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthenticationService } from '../Authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private db: AngularFireDatabase, private auth: AuthenticationService) {
    this.auth.authState.subscribe(user => {
      if (user) {
        this.habilitarDesabilitarImagens();
        this.habilitarDesabilitarForm();
        this.autoSignOut();
      }
    });
  }

  public imagemHabilitada: boolean;
  public formHabilitado: boolean;

  private habilitarDesabilitarImagens() {
    this.db
      .object('admin/mensagens/imagens')
      .valueChanges()
      .subscribe(s => (this.imagemHabilitada = s as boolean));
  }

  private habilitarDesabilitarForm() {
    this.db
      .object('admin/mensagens/form')
      .valueChanges()
      .subscribe(s => (this.formHabilitado = s as boolean));
  }

  private autoSignOut() {
    this.db
      .object('admin/sistema/signout')
      .valueChanges()
      .subscribe(s => {
        console.log(s);
        if (s) {
          this.auth.signOut();
        }
      });
  }
}
