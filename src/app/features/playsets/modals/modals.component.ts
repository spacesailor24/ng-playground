import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {
  pageTitle: string;
  display = false;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((dataObject) => {
      this.pageTitle = dataObject.pageTitle;
    });
  }

  showDialog() {
    this.display = true;
  }

  onDialogClose(event) {
    this.display = event;
  }
}
