import { Component, Input, OnInit } from '@angular/core';
import { ModelForecast } from '../../models/forecast/forecast';
import { ModelForecastDay } from '../../models/forecast/day';

@Component({
  selector: 'app-weather-gallery',
  templateUrl: './weather-gallery.component.html',
  styleUrls: ['./weather-gallery.component.scss']
})
export class WeatherGalleryComponent implements OnInit {
  @Input() forecast: ModelForecast;
  @Input() forecastDays: ModelForecastDay[];

  constructor() { }

  ngOnInit() {
  }
}
