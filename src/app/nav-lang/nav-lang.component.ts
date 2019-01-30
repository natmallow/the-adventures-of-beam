import { ComicService } from './../comic.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-lang',
  templateUrl: './nav-lang.component.html',
  styleUrls: ['./nav-lang.component.scss']
})
export class NavLangComponent implements OnInit {

  @Input() languages: any[];

  constructor(private comicService: ComicService) { }

  ngOnInit() {
    // TRIGGERS THE AUTO RELOAD
    this.languages = [...this.languages[0]];
    // this.comicService.getLanguages();
    console.log(this.languages[0], 'nav-triggered');
  }

}
