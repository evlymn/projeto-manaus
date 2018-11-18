import { Component, OnInit } from '@angular/core';
import { PrincipalService } from '../services/principal/principal.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  constructor(private principalService: PrincipalService) {}
  mensagem = '';
  enviar() {
    this.principalService.addMensagem(this.mensagem).then(
      () => {
        this.mensagem = '';
      },
      reason => console.error(reason)
    );
  }
  ngOnInit() {}
}
