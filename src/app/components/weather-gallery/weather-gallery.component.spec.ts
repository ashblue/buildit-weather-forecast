import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherGalleryComponent } from './weather-gallery.component';
import { WeatherDayComponent } from '../weather-day/weather-day.component';
import { WeatherHourComponent } from '../weather-hour/weather-hour.component';

describe('WeatherGalleryComponent', () => {
  let component: WeatherGalleryComponent;
  let fixture: ComponentFixture<WeatherGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WeatherGalleryComponent,
        WeatherDayComponent,
        WeatherHourComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
