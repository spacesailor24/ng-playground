import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogModule } from 'primeng/dialog';
import { EditorModule } from 'primeng/editor';

@NgModule({
  imports: [
    CommonModule,
    DialogModule,
    EditorModule
  ],
  declarations: [],
  exports: [
    DialogModule,
    EditorModule
  ]
})
export class PrimengModule { }
