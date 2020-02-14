import { Router, ActivatedRoute } from '@angular/router';
import { ComicService } from './../comic.service';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { trigger, style, transition, state, animate } from '@angular/animations';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss'],
animations: [
    trigger('simpleFadeAnimation', [
      transition(':enter', [
        style({opacity: 0}),
        animate(600)
      ]),
      // transition(':leave',
      //   animate(600, style({opacity: 0})))
    ])
  ]
})
export class ImageViewerComponent implements OnInit {



  _pages: any[];



  @Input()
  public set pages(pages: any[]) {
    // console.log(pages);
    this._pages = pages;
    this.runInit();
  }



  set currentImage(currentImage: string) {

    this._currentImage = currentImage;
  }

  _currentImage: string;
  currentPage: any;

  @Input() lang: string;

  @Input() ep: string;

  @Input() ctr: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  runInit(): void {
    this.currentPage = this.route.snapshot.params['page'] ? 1 * this.route.snapshot.params['page'] - 1 : '0';
    this.currentImage = './assets/comic/' + this._pages[this.currentPage];
  }

  prevPage(): void {

    const numOfPages = this._pages.length - 1;
    const prevPage = 1 * Number(this.currentPage) - 1;
    if (prevPage < 0) {
      this.currentImage = './assets/comic/' + this._pages[numOfPages];
      this.currentPage = '' + numOfPages;
    } else {
      this.currentImage = './assets/comic/' + this._pages[prevPage];
      this.currentPage = '' + prevPage;
    }

    this.router.navigate(['/the-adventures-of-billy-meier', this.lang, this.ep, this.ctr, 1 + parseInt(this.currentPage)]);
  }

  nextPage(): void {

    const numOfPages = this._pages.length - 1;
    const nextPage = 1 + 1 * Number(this.currentPage);
    if (nextPage > numOfPages) {
      this.currentImage = './assets/comic/' + this._pages[0];
      this.currentPage = '0';
    } else {
      this.currentImage = './assets/comic/' + this._pages[nextPage];
      this.currentPage = '' + nextPage;
    }
    // console.log(this.currentImage);
    // "[ '/the-adventures-of-billy-meier', language.value , 'ep1','contact-report', '1']"
    this.router.navigate(['/the-adventures-of-billy-meier', this.lang, this.ep, this.ctr, 1 + parseInt(this.currentPage)]);
  }


  ngOnInit() {
    this.runInit();
    // this.pages = this.comicService.getPages();
  }

}
