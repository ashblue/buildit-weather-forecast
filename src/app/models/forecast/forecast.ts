import { ModelForecastCity } from './city';
import { ModelForecastEntry } from './entry';

// @TODO Models should support JSON data transformation on creation
export class ModelForecast {
  cod: string;
  message: number;
  cnt: number;
  city: ModelForecastCity;
  list: ModelForecastEntry[];
}
