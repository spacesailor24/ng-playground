import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DialogModule } from 'primeng/dialog';

// Modules
import { CoreRoutingModule } from './core-routing.module';

// Components
import { WelcomeComponent } from '../features/welcome/welcome.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    WelcomeComponent,
],
  imports: [
    CommonModule,
    CoreRoutingModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class CoreModule { }
