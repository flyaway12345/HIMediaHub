import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './app/header/header.component';
import { FooterComponent } from './app/footer/footer.component';
import { Error404Component } from './app/error404/error404.component';


import { LinksComponent } from './modules/links/links.component';
import { DiscordComponent } from './modules/links/discord/discord.component';
import { SocialsComponent } from './modules/links/socials/socials.component';

import { AudiodexUiComponent } from './modules/audiodex/audiodex-ui/audiodex-ui.component';

import { TheWinstonCupComponent } from './modules/the-winston-cup/the-winston-cup.component';
import { HotubanlistComponent } from './modules/the-winston-cup/hotubanlist/hotubanlist.component';

import { WatchboxComponent } from './modules/watchbox/watchbox.component';
import { LiveComponent } from './modules/watchbox/live/live.component';
import { VideosComponent } from './modules/watchbox/videos/videos.component';

import { GamesComponent } from './games/games.component';
import { GameSelectComponent } from './games/game-select/game-select.component';
import { KittenCannonComponent } from './games/game-select/kitten-cannon/kitten-cannon.component';
import { AgeOfWarComponent } from './games/game-select/age-of-war/age-of-war.component';
import { Bloonstd4Component } from './games/game-select/bloonstd4/bloonstd4.component';

import { RecipesComponent } from './modules/recipes/recipes.component';
import { AppDirectoryComponent } from './modules/app-directory.component';



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
    AppDirectoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '' ,component: WatchboxComponent},
      {path: 'HIMediaHub', component: WatchboxComponent},
      {path: 'links', component: LinksComponent},
      {path: 'thewinstoncup', component: TheWinstonCupComponent},
      {path: 'hotubanlist', component: HotubanlistComponent},
      {path: 'watchbox', component: WatchboxComponent},
      {path: 'appDir', component: AppDirectoryComponent},
      {path: 'games', component: GamesComponent, children: [
        {path: '', component: GameSelectComponent},
        {path: 'gameSelect', component: GameSelectComponent},
        {path: 'bloonstd4', component: Bloonstd4Component},
        {path: 'ageOfWar', component: AgeOfWarComponent},
        {path: 'kittenCannon', component: KittenCannonComponent},
      ]},
      {path: 'audiodex', component: AudiodexUiComponent},
      {path: 'cookbook', component: RecipesComponent},
      {path: '**' ,component: Error404Component}
    ]),
  ],
  exports: [
    LiveComponent,
    DiscordComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
