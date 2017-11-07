import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { GeolocationService } from '../../services/geolocation/geolocation.service';
import { WeatherService } from '../../services/weather/weather.service';
import { WeatherGalleryComponent } from '../../components/weather-gallery/weather-gallery.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SearchLocationComponent } from '../../components/search-location/search-location.component';
import { WeatherDayComponent } from '../../components/weather-day/weather-day.component';
import { WeatherHourComponent } from '../../components/weather-hour/weather-hour.component';
import { HttpClientModule } from '@angular/common/http';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        FormsModule
      ],
      declarations: [
        HomeComponent,
        HeaderComponent,
        SearchLocationComponent,
        WeatherGalleryComponent,
        WeatherDayComponent,
        WeatherHourComponent
      ],
      providers: [
        GeolocationService,
        WeatherService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
