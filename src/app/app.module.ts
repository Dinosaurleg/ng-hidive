import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';

import { DataServiceService } from './services/data-service';

export const app_providers = [
  DataServiceService,
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    app_providers,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
