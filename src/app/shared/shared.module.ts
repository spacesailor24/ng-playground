import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { environment } from '../../environments/environment';

// Modules
import { PrimengModule } from './primeng/primeng.module';

// Pipes
import { SafeHTMLPipe } from './pipes/safe-html.pipe';

// Components
import { HeroHeaderComponent } from './components/hero-header/hero-header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';

@NgModule({
  declarations: [
    NavbarComponent,
    HeroHeaderComponent,
    SafeHTMLPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    PrimengModule,
    AngularFireModule.initializeApp({
      apiKey: environment.firebaseAPIKey,
      // authDomain: "<your-auth-domain>",
      storageBucket: environment.firebaseStorageURL,
      projectId: environment.firebaseProjectID,
    }),
    AngularFireStorageModule
  ],
  exports: [
    NavbarComponent,
    HeroHeaderComponent,
    PrimengModule,
    SafeHTMLPipe,
    AngularFireStorageModule
  ]
})
export class SharedModule { }
