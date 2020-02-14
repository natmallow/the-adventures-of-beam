import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-episodes',
  templateUrl: './nav-episodes.component.html',
  styleUrls: ['./nav-episodes.component.scss']
})
export class NavEpisodesComponent implements OnInit {

  @Input() episodes: any;
  @Input() language: string;
  @Input() lang: string;
  @Input() ctr: string;

  constructor() { }

  ngOnInit() {
    console.log(this.episodes);
  }

}
