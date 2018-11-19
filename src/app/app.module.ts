import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FirebaseConfig } from 'src/environments/firebase.config';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AuthenticationService } from './services/Authentication/authentication.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login/login.service';
import { PrincipalComponent } from './principal/principal.component';
import { PrincipalService } from './services/principal/principal.service';
import { MomentModule } from 'ngx-moment';

@NgModule({
  declarations: [AppComponent, LoginComponent, PrincipalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MomentModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [AuthenticationService, LoginService, PrincipalService],
  bootstrap: [AppComponent]
})
export class AppModule {}
