import { ComicService } from './../comic.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  public title = 'Welcome to the adventues of Billy Meier comic!';
  languages: any[] = [];
  episodes: any[] = [];
  pages: any[] = [];

  ep = 'ep1';
  lang = 'en';
  page = '1';
  ctr = 'contact';

  constructor(private route: ActivatedRoute, private comicService: ComicService) {

  }

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.ep = this.route.snapshot.params['ep'];
    this.lang = this.route.snapshot.params['lang'];

    this.setLanguages();
    this.setEpisodes();
    this.setPages();

    this.route.params.subscribe(
      (params) => {
       this.ep =  params['ep'];
       this.lang =  params['lang'];
       this.ctr = params['contact'];
       this.page = params['page'];
       this.setEpisodes();
       this.setPages();
    }
    );
  }

  setLanguages(): void {
    this.languages = this.comicService.getLanguages();
  }

  setEpisodes(lang: string = 'en'): void {
    this.episodes = this.comicService.getEpisodes(this.lang);
  }

  setPages(): void {
    this.pages = this.comicService.getPages(this.lang, this.ep);
  }

}
