import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';

import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { WelcomeComponent } from '../features/welcome/welcome.component';
import { ModalsComponent } from '../features/playsets/modals/modals.component';
import { HeroHeaderComponent } from '../shared/components/hero-header/hero-header.component';

@NgModule({
  declarations: [
    NavbarComponent,
    WelcomeComponent,
    ModalsComponent,
    HeroHeaderComponent,
],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule
  ]
})
export class CoreModule { }
