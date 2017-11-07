import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherHourComponent } from './weather-hour.component';

describe('WeatherHourComponent', () => {
  let component: WeatherHourComponent;
  let fixture: ComponentFixture<WeatherHourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherHourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
