import { Component, OnInit } from '@angular/core';
import { PrincipalService } from '../services/principal/principal.service';
import { AuthenticationService } from '../services/Authentication/authentication.service';
import 'moment/locale/pt-br';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  constructor(private principalService: PrincipalService, private auth: AuthenticationService) {
    this.auth.authState.subscribe(user => {
      if (user) {
        this.listarMensagens();
      }
    });
  }

  mensagens: any;
  mensagem = '';

  enviar() {
    this.principalService.addMensagem(this.mensagem).then(
      () => {
        this.mensagem = '';
      },
      reason => console.error(reason)
    );
  }
  listarMensagens() {
    this.mensagens = this.principalService.listarMensagens();
  }
  ngOnInit() {}
}
