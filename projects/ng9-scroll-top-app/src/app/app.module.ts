import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ScrollToTopModule } from 'projects/ng9-scroll-top/src/public-api';
// import { ScrollToTopModule } from 'ng9-scroll-top';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ScrollToTopModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
