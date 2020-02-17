import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavLangComponent } from './nav-lang/nav-lang.component';
import { NavEpisodesComponent } from './nav-episodes/nav-episodes.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { HttpClientModule } from '@angular/common/http';
import { ContainerComponent } from './container/container.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavLangComponent,
    NavEpisodesComponent,
    ImageViewerComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule, // <-- here
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
