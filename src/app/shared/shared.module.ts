import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { PrimengModule } from './primeng/primeng.module';

// Pipes
import { SafeHTMLPipe } from './pipes/safe-html.pipe';

// Components
import { HeroHeaderComponent } from './components/hero-header/hero-header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    HeroHeaderComponent,
    SafeHTMLPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    PrimengModule
  ],
  exports: [
    NavbarComponent,
    HeroHeaderComponent,
    PrimengModule,
    SafeHTMLPipe
  ]
})
export class SharedModule { }
