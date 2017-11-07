import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherGalleryComponent } from './weather-gallery.component';

describe('WeatherGalleryComponent', () => {
  let component: WeatherGalleryComponent;
  let fixture: ComponentFixture<WeatherGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherGalleryComponent ]
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
