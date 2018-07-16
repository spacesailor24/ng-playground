import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from '../features/welcome/welcome.component';
import { ModalsComponent } from '../features/playsets/modals/modals.component';

const coreRoutes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    data: { pageTitle: 'Welcome to NgPlayground!' }
  },
  {
    path: 'modals',
    component: ModalsComponent,
    data: { pageTitle: 'Welcome to Modals!' }
  },
  { path: '**', redirectTo: 'welcome' },
];

@NgModule({
  imports: [
    RouterModule.forChild(coreRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class CoreRoutingModule {}
