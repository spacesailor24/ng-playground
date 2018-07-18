import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaysetsRoutingModule } from './playsets-routing.module';

import { ModalsComponent } from './modals/modals.component';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { WysiwygComponent } from './wysiwyg/wysiwyg.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileuploaderComponent } from './fileuploader/fileuploader.component';

@NgModule({
  declarations: [
    ModalsComponent,
    ModalComponent,
    WysiwygComponent,
    FileuploaderComponent,
  ],
  imports: [
    CommonModule,
    PlaysetsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PlaysetsModule {}
