import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';
import { AppComponent } from './app.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { AppRoutingModule, routingComponents } from "app/app-route.module";
import { NavbarComponent } from "app/components/navbar/navbar.component";
import { HomeComponent } from "app/components/home/home.component";
import { AboutComponent } from "app/components/about/about.component";
import { MapComponent } from "app/components/contact/map/map.component";
import { CarouselComponent } from "app/components/carousel/carousel.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    routingComponents,
    MapComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDP5DlPzJuVFQ7P0uDqqc4LjP6o4Tie8iQ'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
