import { Router, ActivatedRoute } from '@angular/router';
import { ComicService } from './../comic.service';
import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent implements OnInit {



  _pages: any[];

  @Input()
  public set pages(pages: any[]) {
      // console.log(pages);
      this._pages = pages;
  }

  currentImage: string;
  currentPage: string;

  constructor() { }

  runInit(): void {
    this.currentPage = '0';
    this.currentImage = this._pages[0];
  }

  prevPage(): void {
    const numOfPages = this._pages.length - 1;
    const prevPage =  1 * Number( this.currentPage ) - 1;
    if ( prevPage < 0 ) {
      this.currentImage = this._pages[numOfPages];
      this.currentPage = '0';
    } else {
      this.currentImage = this._pages[prevPage];
      this.currentPage = '' + prevPage;
    }

  }

  nextPage(): void {
    const numOfPages = this._pages.length - 1;
    const nextPage = 1 + 1 * Number( this.currentPage );
    if ( nextPage > numOfPages ) {
      this.currentImage = this._pages[0];
      this.currentPage = '0';
    } else {
      this.currentImage = this._pages[nextPage];
      this.currentPage  = '' + nextPage;
    }
    console.log(this.currentImage);
  }


  ngOnInit() {
    this.runInit();
    // this.pages = this.comicService.getPages();
  }

}
