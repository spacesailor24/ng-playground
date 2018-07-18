import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModalsComponent } from './modals/modals.component';
import { WysiwygComponent } from './wysiwyg/wysiwyg.component';
import { FileuploaderComponent } from './fileuploader/fileuploader.component';

const playsetsRoutes: Routes = [
  {
    path: 'modals',
    component: ModalsComponent,
    data: { pageTitle: 'Welcome to Modals!' }
  },
  {
    path: 'wysiwyg',
    component: WysiwygComponent,
    data: { pageTitle: 'Welcome to the Wysiwyg!' }
  },
  {
    path: 'fileuploader',
    component: FileuploaderComponent,
    data: { pageTitle: 'Welcome to the FileUploader!' }
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(playsetsRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class PlaysetsRoutingModule {}
