import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './app/header/header.component';
import { FooterComponent } from './app/footer/footer.component';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TheWinstonCupComponent } from './the-winston-cup/the-winston-cup.component';
import { HotubanlistComponent } from './the-winston-cup/hotubanlist/hotubanlist.component';
import { WatchboxComponent } from './watchbox/watchbox.component';

import { Error404Component } from './app/error404/error404.component';
import { GamesComponent } from './games/games.component';
import { Bloonstd4Component } from './games/bloonstd4/bloonstd4.component';
import { LiveComponent } from './watchbox/live/live.component';
import { VideosComponent } from './watchbox/videos/videos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TheWinstonCupComponent,
    HotubanlistComponent,
    WatchboxComponent,
    Error404Component,
    GamesComponent,
    Bloonstd4Component,
    LiveComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '' ,component: HomeComponent},
      {path: 'HIMediaHub', component: HomeComponent},
      {path: 'thewinstoncup', component: TheWinstonCupComponent},
      {path: 'hotubanlist', component: HotubanlistComponent},
      {path: 'watchbox', component: WatchboxComponent},
      {path: 'games', component: GamesComponent},
      {path: '**' ,component: Error404Component}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
