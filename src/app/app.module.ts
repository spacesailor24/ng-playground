import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { ModalsComponent } from './modules/home/pages/modals/modals.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { CustomStandardModalComponent } from './shared/components/custom-standard-modal/custom-standard-modal.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'modals', component: ModalsComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalsComponent,
    NavbarComponent,
    CustomStandardModalComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // debugging purposes only
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
