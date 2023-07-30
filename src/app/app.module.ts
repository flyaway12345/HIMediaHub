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
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TheWinstonCupComponent,
    HotubanlistComponent,
    WatchboxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      //Prod
      {path: '', component: HomeComponent},
      {path: 'HIMediaHub/', component: HomeComponent},
      {path: 'HIMediaHub/thewinstoncup', component: TheWinstonCupComponent},
      {path: 'HIMediaHub/hotubanlist', component: HotubanlistComponent},
      {path: 'HIMediaHub/watchbox', component: WatchboxComponent},
      //Dev
      // {path: '', component: HomeComponent},
      // {path: 'audiodex', component: AudiodexComponent},
      // {path: 'thewinstoncup', component: TheWinstonCupComponent},
      // {path: 'watchbox', component: WatchboxComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
