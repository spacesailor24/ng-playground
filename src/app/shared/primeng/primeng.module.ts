import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogModule } from 'primeng/dialog';
import { EditorModule } from 'primeng/editor';
import { FileUploadModule, ProgressBarModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    DialogModule,
    EditorModule,
    FileUploadModule,
    ProgressBarModule
  ],
  exports: [
    DialogModule,
    EditorModule,
    FileUploadModule,
    ProgressBarModule
  ]
})
export class PrimengModule {}
