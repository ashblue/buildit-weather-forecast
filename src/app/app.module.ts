import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './services/weather/weather.service';
import { GeolocationService } from './services/geolocation/geolocation.service';
import { HeaderComponent } from './components/header/header.component';
import { SearchLocationComponent } from './components/search-location/search-location.component';
import { FormsModule } from '@angular/forms';
import { WeatherGalleryComponent } from './components/weather-gallery/weather-gallery.component';
import { WeatherDayComponent } from './components/weather-day/weather-day.component';
import { WeatherHourComponent } from './components/weather-hour/weather-hour.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SearchLocationComponent,
    WeatherGalleryComponent,
    WeatherDayComponent,
    WeatherHourComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    WeatherService,
    GeolocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
