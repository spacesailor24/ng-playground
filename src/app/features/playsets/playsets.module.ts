import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modules
import { SharedModule } from '../../shared/shared.module';
import { PlaysetsRoutingModule } from './playsets-routing.module';

// Components
import { ModalsComponent } from './modals/modals.component';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { WysiwygComponent } from './wysiwyg/wysiwyg.component';
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
