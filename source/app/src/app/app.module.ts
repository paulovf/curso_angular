import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GiphySearchManualComponentModule } from './giphy/giphy_search_manual/giphy-search-manual.module';
import {AppRoutingModule} from './app-routing.module';
import {ContatoModule} from './contato/contato.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ContatoModule,
    AppRoutingModule,
    GiphySearchManualComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
