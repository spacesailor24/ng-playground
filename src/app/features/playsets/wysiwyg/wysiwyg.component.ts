import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wysiwyg',
  templateUrl: './wysiwyg.component.html',
  styleUrls: ['./wysiwyg.component.css']
})
export class WysiwygComponent implements OnInit {
  pageTitle: string;
  updatedPageTitle = '';
  text: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((dataObject) => {
      this.pageTitle = dataObject.pageTitle;
    });
  }

  wysiwygUpdated(e) {
    this.updatedPageTitle = e.htmlValue === null ? this.pageTitle : e.htmlValue;
  }
}
