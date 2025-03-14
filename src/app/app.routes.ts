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
import { NewsFeedComponent } from './modules/morning-coffee/newsfeed.component';
import { NewsfeedNewsComponent } from './modules/morning-coffee/newsfeed-news/newsfeed-news.component';
import { AudiodexUiComponent } from './modules/podcasts/audiodex/audiodex-ui/audiodex-ui.component';
import { HISoapboxComponent } from './modules/podcasts/hisoapbox/hisoapbox.component';
import { ICSUUYTMTComponent } from './modules/podcasts/icsuuytmt/icsuuytmt.component';
import { HIMediaHeadlinesComponent } from './modules/podcasts/himediaheadlines/himediaheadlines.component';
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
import { TrovoComponent } from './app/header/live/live-mobile/trovo/trovo.component';
import { YoutubeComponent } from './app/header/live/live-mobile/youtube/youtube.component';
import { KickComponent } from './app/header/live/live-mobile/kick/kick.component';
import { TwitchComponent } from './app/header/live/live-mobile/twitch/twitch.component';
import { StreamCalenderComponent } from './modules/watchbox/live-menu/stream-calender/stream-calender.component';
import { NewsfeedGamingComponent } from './modules/morning-coffee/newsfeed-gaming/newsfeed-gaming.component';
import { GoodbyeComponent } from './modules/goodbye/goodbye.component';
import { WhosThatPokemonComponent } from './modules/whos-that-pokemon/whos-that-pokemon.component';
import { PerksComponent } from './modules/donate/perks/perks.component';
import { PaymentComponent } from './modules/donate/payment/payment.component';
import { StaticPagesComponent } from './modules/static-pages/static-pages.component';
import { BrbComponent } from './modules/static-pages/brb/brb.component';
import { EndingSoonComponent } from './modules/static-pages/ending-soon/ending-soon.component';
import { StartingSoonComponent } from './modules/static-pages/starting-soon/starting-soon.component';
import { MbeIndexComponent } from './modules/MBE index/mbe-index.component';


export const routes: Routes = [
    {path: '' ,component: LinksComponent},
{path: 'blog' ,component: BlogComponent},
{path: 'HIMediaHub', component: WatchboxComponent},
{path: 'links', component: LinksComponent},
{path: 'donate', component: PaymentComponent},
{path: 'tip', component: PaymentComponent},
{path: 'perk', component: PerksComponent},
{path: 'perks', component: PerksComponent},
{path: 'sub', component: PerksComponent},
{path: 'pay', component: PaymentComponent},
{path: 'payment', component: PaymentComponent},
{path: 'payments', component: PaymentComponent},
{path: 'makeapayment', component: PaymentComponent},
{path: 'subscription', component: PerksComponent},
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
{path: 'newsfeed', component: NewsFeedComponent,children: [
  {path: 'news-rss', component: NewsfeedNewsComponent},
  {path: 'gaming-rss', component: NewsfeedGamingComponent},
]},
{path: 'morning-coffee', redirectTo: '/newsfeed', pathMatch:'full'},
{path: 'audiodex', component: AudiodexUiComponent},
{path: 'ICSUUYTMT', component: ICSUUYTMTComponent},
{path: 'icsuuytmt', component: ICSUUYTMTComponent},
{path: 'podcast', component: PodcastsComponent},
{path: 'podcasts', component: PodcastsComponent},
{path: 'cookbook', component: RecipesComponent},
{path: 'soundboard', component: SoundboardComponent},
{path: 'ppcxtrr', component: PPCxTRRComponent},
{path: 'merch', component: MerchComponent},
{path: 'live-menu', component: LiveMenuComponent},
{path: 'nerdnews', component: HIMediaHeadlinesComponent},
{path: 'himediaheadlines', component: HIMediaHeadlinesComponent},
{path: 'hisoapbox', component: HISoapboxComponent},
{path: 'thepaldeckfiles', component: ThePaldeckFilesComponent},
{path: 'therundown', component: TheRundownComponent},
{path: 'wmdroundtable', component: WinstonMasterDuelRoundtableComponent},
{path: 'discord', component: DiscordComponent},
{path: 'subathon', component: WatchboxComponent},
{path: 'crowns', component: CrownLeaderboardComponent},
{path: 'default-commands', component: DefaultCommandsComponent},
{path: 'sound-alerts', component: SoundAlertsComponent},
{path: 'HIMediaTVNewsUpdate', component: HIMediaHeadlinesComponent},
{path: 'latenightnews', component: HIMediaHeadlinesComponent},
{path: 'LNN', component: HIMediaHeadlinesComponent},
{path: 'lnn', component: HIMediaHeadlinesComponent},
{path: 'commands', component: CommandsComponent},
{path: 'trovo', component: TrovoComponent},
{path: 'youtube', component: YoutubeComponent},
{path: 'kick', component: KickComponent},
{path: 'twitch', component: TwitchComponent},
{path: 'schedule', component: StreamCalenderComponent},
{path: 'calendar', component: StreamCalenderComponent},
{path: 'goodbye', component: GoodbyeComponent},
{path: 'whosthatpokemon', component: WhosThatPokemonComponent},
{path: 'mbe', component: MbeIndexComponent},
{path: 'static-pages', component: StaticPagesComponent, children: [
  {path: '', component: StaticPagesComponent},
  {path: 'brb', component: BrbComponent},
  {path: 'starting-soon', component: StartingSoonComponent},
  {path: 'ending-soon', component: EndingSoonComponent}
]},
{path: '**' ,component: Error404Component}
];
