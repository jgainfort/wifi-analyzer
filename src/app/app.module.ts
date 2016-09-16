import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components';
import { WifiStatsService } from './shared';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  providers: [ WifiStatsService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
