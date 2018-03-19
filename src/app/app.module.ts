import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { MainPageComponent } from './main-page/main-page.component';

import { TweetsService } from './tweets.service';
import { UserService } from './user.service';

import { RouterModule, Routes } from '@angular/router';
import { TweetListComponent } from './tweet-list/tweet-list.component';
import { TweetComponent } from './tweet/tweet.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { HashtagComponent } from './hashtag/hashtag.component';
import { UserComponent } from './user/user.component';

const appRoutes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'hashtag/:hashtag', component: HashtagComponent },
  { path: 'user/:username', component: UserComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    MainPageComponent,
    TweetListComponent,
    TweetComponent,
    SearchbarComponent,
    HashtagComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ TweetsService, UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
