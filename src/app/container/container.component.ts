import { ComicService } from './../comic.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

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

  currentEpisode: string;
  language: string;

  constructor(private route: ActivatedRoute, private comicService: ComicService) {

  }

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
   // this.route.snapshot.params['ep'];
    this.setLanguages();
    this.setEpisodes();
    this.setPages();
    this.route.params.subscribe(
      (params) => {
       this.language =  params['lang'];
       this.setEpisodes(params['lang']);
       this.setPages(params['lang'], params['ep']);
    }
    );
  }

  setLanguages(): void {
    this.languages = this.comicService.getLanguages();
  }

  setEpisodes(lang: string = 'en'): void {
    this.episodes = this.comicService.getEpisodes(lang);
  }

  setPages(lang: string = 'en', ep: string = 'ep1'): void {
    this.pages = this.comicService.getPages(lang, ep);
  }
}
