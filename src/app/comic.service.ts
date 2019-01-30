import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import * as COMIC from '../app/comic.json';



@Injectable({
  providedIn: 'root'
})
export class ComicService {

  comic: any[] = [];
  languages: any[] = [];



  constructor(private http: Http) {
      this.comic.push(COMIC.comics);
      this.languages.push(COMIC.languages);
      console.log(COMIC);
  }

  getComic() {
     return this.comic;
  }

  getLanguages() {
    return this.languages;
  }

  getEpisodes(lang: string): any {

    return this.comic[0][lang]['episode-list'];
  }

  getPages(lang: string, ep: string): any {
    return this.comic[0][lang]['episodes'][ep];
  }

}
