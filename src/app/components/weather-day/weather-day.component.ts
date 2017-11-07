import { Component, Input, OnInit } from '@angular/core';
import { ModelForecastDay } from '../../models/forecast/day';
import * as moment from 'moment';

@Component({
  selector: 'app-weather-day',
  templateUrl: './weather-day.component.html',
  styleUrls: ['./weather-day.component.scss']
})
export class WeatherDayComponent implements OnInit {
  showHours: boolean;

  @Input() day: ModelForecastDay;

  get tmpAverage(): number {
    let totalTmp = 0;
    this.day.entries.forEach(hour => {
      totalTmp += hour.main.temp;
    });

    return Math.round(totalTmp / this.day.entries.length);
  }

  get weatherDescription(): string {
    if (this.day.entries.length > 0 && this.day.entries[0].weather[0]) {
      return this.day.entries[0].weather[0].description;
    }
  }

  get date(): string {
    return moment(this.day.entries[0].dt_txt).format('l');
  }

  constructor() { }

  ngOnInit() {
  }

}
