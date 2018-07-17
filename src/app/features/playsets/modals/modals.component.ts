import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import { ModalComponent } from '../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {
  pageTitle: string;

  constructor(private activatedRoute: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((dataObject) => {
      this.pageTitle = dataObject.pageTitle;
    });
  }

  openModal() {
    this.dialog.open(ModalComponent);
  }
}
