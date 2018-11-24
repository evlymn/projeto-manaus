import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { Ng2ImgMaxModule } from 'ng2-img-max';
import { StorageService } from './services/storage/storage.service';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AdminService } from './services/admin/admin.service';
import { MaterialModule } from './material-modules';

@NgModule({
  declarations: [AppComponent, LoginComponent, PrincipalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    MomentModule,
    Ng2ImgMaxModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [AuthenticationService, LoginService, PrincipalService, StorageService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule {}
