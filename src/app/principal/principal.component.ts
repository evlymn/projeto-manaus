import { Component, OnInit } from '@angular/core';
import { PrincipalService } from '../services/principal/principal.service';
import { AuthenticationService } from '../services/Authentication/authentication.service';
import { Ng2ImgMaxService } from 'ng2-img-max';
import { StorageService } from '../services/storage/storage.service';
import 'moment/locale/pt-br';
import { AdminService } from '../services/admin/admin.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  constructor(
    private principalService: PrincipalService,
    private auth: AuthenticationService,
    private ng2ImgMax: Ng2ImgMaxService,
    private storage: StorageService,
    public admin: AdminService,
    private snackbar: MatSnackBar
  ) {
    this.auth.authState.subscribe(user => {
      if (user) {
        this.listarMensagens();
      }
    });
  }
  uploadedImage: any;
  mensagens: any;
  mensagem = '';
  fileName = '';
  changingImage = false;
  srcButtom: any = 'assets/imagens/foto.svg';

  onImageChange(event) {
    const snack = this.snackbar.open('Processando a imagem');
    this.changingImage = true;
    const image = event.target.files[0];
    this.ng2ImgMax.compressImage(image, 0.25).subscribe(
      result => {
        this.uploadedImage = new File([result], result.name);
        this.storage.getBase64(image).then(image64 => {
          this.srcButtom = image64;
        });
        this.fileName = result.name;
        this.changingImage = false;
        snack.dismiss();
      },
      () => {
        snack.dismiss();
        this.snackbar.open('Ocorreu um erro ao processar a imagem', 'ok');
      }
    );
  }

  enviar() {
    if (!this.changingImage) {
      if (this.uploadedImage) {
        const snack = this.snackbar.open('Enviando...');
        const path = 'imagens/' + this.auth.currenUser.uid + '/' + this.fileName;
        const task = this.storage.upload(path, this.uploadedImage);
        task.percentageChanges().subscribe(perc => console.log(perc.toFixed(0)));
        task.then(taskSnapshot => {
          this.srcButtom = 'assets/imagens/foto.svg';
          this.uploadedImage = null;
          snack.dismiss();
          taskSnapshot.ref.getDownloadURL().then(downloadURL => this.addMensagem(this.mensagem, downloadURL));
        });
      } else if (this.mensagem.trim().length > 0) {
        this.addMensagem(this.mensagem);
      }
    }
  }

  addMensagem(mensagem: string, urlImagem?: string) {
    this.principalService
      .addMensagem(mensagem, urlImagem)
      .then(() => (this.mensagem = ''), reason => console.error(reason));
  }
  listarMensagens() {
    this.mensagens = this.principalService.listarMensagens();
  }

  ngOnInit() {}
}
