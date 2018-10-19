import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';

const MY_Routes: Routes = [
  { path: 'games/:_id', component: GamesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(MY_Routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
