import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, Http, Response, ResponseOptions, Headers} from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import {
  youTubeServiceInjectables, YouTubeSearchComponent, SearchBox,
  SearchResultComponent
} from './components/YouTubeSearchComponent';
import {SimpleHTTPComponent} from "./components/SimpleHTTPComponent";

@NgModule({
  declarations: [
    AppComponent,
    SimpleHTTPComponent,YouTubeSearchComponent,SearchBox,SearchResultComponent],
   // MoreHTTPRequests,

  //  SearchBox,
  //  SearchResultComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [youTubeServiceInjectables, YouTubeSearchComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

class HttpAppModule {

}
class MyFooComponent {
  constructor(public http: Http) {
  }
  mameRequest(): void {

  }
}
