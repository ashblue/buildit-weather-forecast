import { Component, Input, OnInit } from '@angular/core';
import { ModelForecastEntry } from '../../models/forecast/entry';
import * as moment from 'moment';

@Component({
  selector: 'app-weather-hour',
  templateUrl: './weather-hour.component.html',
  styleUrls: ['./weather-hour.component.scss']
})
export class WeatherHourComponent implements OnInit {
  @Input() hour: ModelForecastEntry;

  get time(): string {
    return moment(this.hour.dt_txt).format('ha');
  }

  constructor() { }

  ngOnInit() {
    console.log(this.hour);
  }

}
