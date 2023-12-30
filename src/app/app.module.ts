import { NgModule, SecurityContext } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './app/header/header.component';
import { FooterComponent } from './app/footer/footer.component';
import { Error404Component } from './app/error404/error404.component';


import { LinksComponent } from './modules/links/links.component';
import { DiscordComponent } from './modules/links/discord/discord.component';
import { SocialsComponent } from './modules/links/socials/socials.component';

import { AudiodexUiComponent } from './modules/podcasts/audiodex/audiodex-ui/audiodex-ui.component';

import { TheWinstonCupComponent } from './modules/the-winston-cup/the-winston-cup.component';
import { HotubanlistComponent } from './modules/the-winston-cup/hotubanlist/hotubanlist.component';

import { WatchboxComponent } from './modules/watchbox/watchbox.component';
import { LiveComponent } from './modules/watchbox/live/live.component';
import { VideosComponent } from './modules/watchbox/videos/videos.component';

import { GamesComponent } from './modules/games/games.component';
import { GameSelectComponent } from './modules/games/game-select/game-select.component';
import { KittenCannonComponent } from './modules/games/game-select/kitten-cannon/kitten-cannon.component';
import { AgeOfWarComponent } from './modules/games/game-select/age-of-war/age-of-war.component';
import { Bloonstd4Component } from './modules/games/game-select/bloonstd4/bloonstd4.component';

import { AppDirectoryComponent } from './modules/app-directory.component';
import { HallofshameComponent } from './modules/hallofshame/hallofshame.component';
import { DonateComponent } from './modules/donate/donate.component';
import { RecipesComponent } from './modules/recipes/recipes.component';

import { MorningCoffeeComponent } from './modules/morning-coffee/morning-coffee.component';
import { NewsfeedNewsComponent } from './modules/morning-coffee/newsfeed-news/newsfeed-news.component';
import { NewsfeedGamingComponent } from './modules/morning-coffee/newsfeed-gaming/newsfeed-gaming.component';

import { PodcastsComponent } from './modules/podcasts/podcasts.component';
import { AudiodexPlayerComponent } from './modules/podcasts/audiodex/audiodex-player/audiodex-player.component';
import { ICSUUYTMTComponent } from './modules/podcasts/icsuuytmt/icsuuytmt.component';
import { HimediatvNewsUpdateComponent } from './modules/podcasts/himediatv-news-update/himediatv-news-update.component';
import { SoundboardComponent } from './modules/soundboard/soundboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownModule, MarkdownService } from 'ngx-markdown'; 
import { CommonModule } from '@angular/common';
import { BlogComponent } from './modules/blog/blog.component';
import { BookComponent } from './modules/book/book.component';

import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LinksComponent,
    TheWinstonCupComponent,
    HotubanlistComponent,
    WatchboxComponent,
    Error404Component,
    GamesComponent,
    Bloonstd4Component,
    LiveComponent,
    VideosComponent,
    GameSelectComponent,
    KittenCannonComponent,
    AgeOfWarComponent,
    DiscordComponent,
    SocialsComponent,
    RecipesComponent,
    AppDirectoryComponent,
    HallofshameComponent,
    DonateComponent,
    ICSUUYTMTComponent,
    MorningCoffeeComponent,
    NewsfeedNewsComponent,
    NewsfeedGamingComponent,
    HimediatvNewsUpdateComponent,
    PodcastsComponent,
    AudiodexPlayerComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MarkdownModule.forRoot(),
    RouterModule.forRoot([
      {path: '' ,component: LinksComponent},
      {path: 'blog' ,component: BlogComponent},
      {path: 'book' ,component: BookComponent},
      {path: 'HIMediaHub', component: WatchboxComponent},
      {path: 'links', component: LinksComponent},
      {path: 'donate', component: DonateComponent},
      {path: 'thewinstoncup', component: TheWinstonCupComponent},
      {path: 'hotubanlist', component: HotubanlistComponent},
      {path: 'live', component: WatchboxComponent},
      {path: 'appDir', component: AppDirectoryComponent},
      {path: 'hallofshame', component: HallofshameComponent},
      {path: 'games', component: GamesComponent, children: [
        {path: '', component: GameSelectComponent},
        {path: 'gameSelect', component: GameSelectComponent},
        {path: 'bloonstd4', component: Bloonstd4Component},
        {path: 'ageOfWar', component: AgeOfWarComponent},
        {path: 'kittenCannon', component: KittenCannonComponent},
      ]},
      {path: 'morning-coffee', component: MorningCoffeeComponent,children: [
        {path: 'news-feed', component: NewsfeedNewsComponent},
        {path: 'audio-feed', component: HimediatvNewsUpdateComponent},
      ]},
      {path: 'audiodex', component: AudiodexUiComponent},
      {path: 'ICSUUYTMT', component: ICSUUYTMTComponent},
      {path: 'podcasts', component: PodcastsComponent},
      {path: 'cookbook', component: RecipesComponent},
      {path: 'soundboard', component: SoundboardComponent},
      {path: '**' ,component: Error404Component}
    ]),
    BrowserAnimationsModule,
    CommonModule
  ],
  exports: [
    LiveComponent,
    DiscordComponent,
    AudiodexPlayerComponent,
    HimediatvNewsUpdateComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
