import { ModelForecastWeather } from './weather';
import { ModelForecastClouds } from './clouds';
import { ModelForecastWind } from './wind';
import { ModelForecastRain } from './rain';
import { ModelForecastSnow } from './snow';
import { ModelForecastMain } from './main';

export class ModelForecastEntry {
  dt: number;
  dt_txt: string;
  main: ModelForecastMain;
  weather: ModelForecastWeather;
  clouds: ModelForecastClouds;
  wind: ModelForecastWind;
  rain: ModelForecastRain;
  snow: ModelForecastSnow;
}
