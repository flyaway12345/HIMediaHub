import { Routes } from '@angular/router';
import { Error404Component } from './app/error404/error404.component';
import { AppDirectoryComponent } from './modules/app-directory.component';
import { BlogComponent } from './modules/blog/blog.component';
import { DonateComponent } from './modules/donate/donate.component';
import { AgeOfWarComponent } from './modules/games/game-select/age-of-war/age-of-war.component';
import { Bloonstd4Component } from './modules/games/game-select/bloonstd4/bloonstd4.component';
import { GameSelectComponent } from './modules/games/game-select/game-select.component';
import { KittenCannonComponent } from './modules/games/game-select/kitten-cannon/kitten-cannon.component';
import { GamesComponent } from './modules/games/games.component';
import { HallofshameComponent } from './modules/hallofshame/hallofshame.component';
import { DiscordComponent } from '../app/app/header/discord/discord.component';
import { LinksComponent } from './modules/links/links.component';
import { MerchComponent } from './modules/merch/merch.component';
import { MorningCoffeeComponent } from './modules/morning-coffee/morning-coffee.component';
import { NewsfeedNewsComponent } from './modules/morning-coffee/newsfeed-news/newsfeed-news.component';
import { AudiodexUiComponent } from './modules/podcasts/audiodex/audiodex-ui/audiodex-ui.component';
import { HimediatvNewsUpdateComponent } from './modules/podcasts/himediatv-news-update/himediatv-news-update.component';
import { HISoapboxComponent } from './modules/podcasts/hisoapbox/hisoapbox.component';
import { ICSUUYTMTComponent } from './modules/podcasts/icsuuytmt/icsuuytmt.component';
import { NerdNewsComponent } from './modules/podcasts/nerd-news/nerdnews.component';
import { PodcastsComponent } from './modules/podcasts/podcasts.component';
import { ThePaldeckFilesComponent } from './modules/podcasts/the-paldeck-files/thepaldeckfiles.component';
import { TheRundownComponent } from './modules/podcasts/the-rundown/therundown.component';
import { WinstonMasterDuelRoundtableComponent } from './modules/podcasts/wmdroundtable/wmdroundtable.component';
import { PPCxTRRComponent } from './modules/ppcxtrr/ppcxtrr.component';
import { RecipesComponent } from './modules/recipes/recipes.component';
import { SoundboardComponent } from './modules/soundboard/soundboard.component';
import { LiveMenuComponent } from './modules/watchbox/live-menu/live-menu.component';
import { HotubanlistComponent } from './modules/the-winston-cup/hotubanlist/hotubanlist.component';
import { TheWinstonCupComponent } from './modules/the-winston-cup/the-winston-cup.component';
import { WatchboxComponent } from './modules/watchbox/watchbox.component';
import { CrownLeaderboardComponent } from './modules/crown-leaderboard/crown-leaderboard.component';
import { CommandsComponent } from './modules/watchbox/live-menu/interaction-menu/commands/commands.component';
import { DefaultCommandsComponent } from './modules/watchbox/live-menu/interaction-menu/commands/default-commands/default-commands.component';
import { SoundAlertsComponent } from './modules/watchbox/live-menu/interaction-menu/commands/sound-alerts/sound-alerts.component';

export const routes: Routes = [
    {path: '' ,component: LinksComponent},
{path: 'blog' ,component: BlogComponent},
{path: 'HIMediaHub', component: WatchboxComponent},
{path: 'links', component: LinksComponent},
{path: 'donate', component: DonateComponent},
{path: 'tip', component: DonateComponent},
{path: 'thewinstoncup', component: TheWinstonCupComponent},
{path: 'twc', component: TheWinstonCupComponent},
{path: 'hotubanlist', component: HotubanlistComponent},
{path: 'banlist', component: HotubanlistComponent},
{path: 'leaderboard', component: CrownLeaderboardComponent},
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
{path: 'ppcxtrr', component: PPCxTRRComponent},
{path: 'merch', component: MerchComponent},
{path: 'live-menu', component: LiveMenuComponent},
{path: 'nerdnews', component: NerdNewsComponent},
{path: 'hisoapbox', component: HISoapboxComponent},
{path: 'thepaldeckfiles', component: ThePaldeckFilesComponent},
{path: 'therundown', component: TheRundownComponent},
{path: 'wmdroundtable', component: WinstonMasterDuelRoundtableComponent},
{path: 'discord', component: DiscordComponent},
{path: 'subathon', component: WatchboxComponent},
{path: 'crowns', component: CrownLeaderboardComponent},
{path: 'default-commands', component: DefaultCommandsComponent},
{path: 'sound-alerts', component: SoundAlertsComponent},
{path: '**' ,component: Error404Component}
];
