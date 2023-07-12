import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchbarComponent } from './audiodex/searchbar/searchbar.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './app/header/header.component';
import { FooterComponent } from './app/footer/footer.component';
import { AudiodexComponent } from './audiodex/audiodex.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TheWinstonCupComponent } from './the-winston-cup/the-winston-cup.component';
import { HotubanlistComponent } from './the-winston-cup/hotubanlist/hotubanlist.component';
@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    HeaderComponent,
    FooterComponent,
    AudiodexComponent,
    HomeComponent,
    TheWinstonCupComponent,
    HotubanlistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'HIMediaHub/', component: HomeComponent},
      {path: 'HIMediaHub/audiodex', component: AudiodexComponent},
      {path: 'HIMediaHub/thewinstoncup', component: TheWinstonCupComponent},
      {path: 'HIMediaHub/hotubanlist', component: HotubanlistComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
