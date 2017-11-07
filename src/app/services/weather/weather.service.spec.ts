import { TestBed, inject, async } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('WeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        WeatherService
      ]
    });
  });

  it('should be created', inject([WeatherService], (service: WeatherService) => {
    expect(service).toBeTruthy();
  }));

  describe('is query a zip code', () => {
    it('allows a standard USA zip code', () => {
      const result = WeatherService.stringIsZipCode('80203');
      expect(result).toBeTruthy();
    });

    it('allows a fully formatted zip code with a dash', () => {
      const result = WeatherService.stringIsZipCode('80203-1234');
      expect(result).toBeTruthy();
    });

    it('rejects zip codes less than 4 digits', () => {
      const result = WeatherService.stringIsZipCode('1234');
      expect(result).toBeFalsy();
    });

    it('does not allow undefined', () => {
      const result = WeatherService.stringIsZipCode(undefined);
      expect(result).toBeFalsy();
    });

    it('does not allow null', () => {
      const result = WeatherService.stringIsZipCode(null);
      expect(result).toBeFalsy();
    });

    it('does not allow letters', () => {
      const result = WeatherService.stringIsZipCode('1asdf');
      expect(result).toBeFalsy();
    });
  });

  describe('is query a city', () => {
    it('allows a standard city name', () => {
      const result = WeatherService.stringIsCity('Denver');
      expect(result).toBeTruthy();
    });

    it('does not allow undefined', () => {
      const result = WeatherService.stringIsCity(undefined);
      expect(result).toBeFalsy();
    });

    it('does not allow null', () => {
      const result = WeatherService.stringIsCity(null);
      expect(result).toBeFalsy();
    });

    it('does not allow numbers', () => {
      const result = WeatherService.stringIsCity('80203');
      expect(result).toBeFalsy();
    });
  });

  describe('get weather by zip code', () => {
    it('gives a result with a valid zip code', async(inject(
      [WeatherService, HttpTestingController],
      (service: WeatherService, backend: HttpTestingController) => {
        service.getDailyForecastByZip('80203')
          .then(res => {
            expect(res).toBeTruthy();
          });

        const req = backend.expectOne({method: 'get'}, 'Get forecast by zip');
        expect(req.request.url).toContain('forecast');

        req.flush({});
        backend.verify();
      }))
    );

    it('errors on an invalid zip code', inject(
      [WeatherService, HttpTestingController],
      (service: WeatherService, backend: HttpTestingController) => {
        service.getDailyForecastByZip('asdf')
          .catch(res => {
            expect(res).toBeTruthy();
          });
      })
    );

    it('errors on HTTP failure', async(inject(
      [WeatherService, HttpTestingController],
      (service: WeatherService, backend: HttpTestingController) => {
        service.getDailyForecastByZip('80203')
          .catch(res => {
            expect(res).toBeTruthy();
          });

        const req = backend.expectOne({method: 'get'}, 'Get forecast by zip');
        expect(req.request.url).toContain('forecast');

        req.flush({}, {status: 401, statusText: 'Not found'});
        backend.verify();
      }))
    );
  });

  describe('get weather by city', () => {
    it('gives a result with a valid city', async(inject(
      [WeatherService, HttpTestingController],
      (service: WeatherService, backend: HttpTestingController) => {
        service.getDailyForecastByCity('Denver')
          .then(res => {
            expect(res).toBeTruthy();
          });

        const req = backend.expectOne({method: 'get'}, 'Get forecast by city');
        expect(req.request.url).toContain('forecast');

        req.flush({});
        backend.verify();
      }))
    );

    it('errors with on an invalid city', inject(
      [WeatherService, HttpTestingController],
      (service: WeatherService, backend: HttpTestingController) => {
        service.getDailyForecastByCity('12345')
          .catch(res => {
            expect(res).toBeTruthy();
          });
      })
    );

    it('errors on HTTP failure', async(inject(
      [WeatherService, HttpTestingController],
      (service: WeatherService, backend: HttpTestingController) => {
        service.getDailyForecastByCity('Denver')
          .catch(res => {
            expect(res).toBeTruthy();
          });

        const req = backend.expectOne({method: 'get'}, 'Get forecast by city');
        expect(req.request.url).toContain('forecast');

        req.flush({}, {status: 401, statusText: 'Not found'});
        backend.verify();
      }))
    );
  });

  describe('get weather by longitude and latitude', () => {
    it('gives a result with valid coordinates', async(inject(
      [WeatherService, HttpTestingController],
      (service: WeatherService, backend: HttpTestingController) => {
        service.getDailyForecastByCoordinates(111, 111)
          .then(res => {
            expect(res).toBeTruthy();
          });

        const req = backend.expectOne({method: 'get'}, 'Get forecast by coodinates');
        expect(req.request.url).toContain('forecast');

        req.flush({});
        backend.verify();
      }))
    );

    it('errors on missing longitude', inject(
      [WeatherService, HttpTestingController],
      (service: WeatherService, backend: HttpTestingController) => {
        service.getDailyForecastByCoordinates(111, null)
          .catch(res => {
            expect(res).toBeTruthy();
          });
      })
    );

    it('errors on missing latitude', inject(
      [WeatherService, HttpTestingController],
      (service: WeatherService, backend: HttpTestingController) => {
        service.getDailyForecastByCoordinates(null, 111)
          .catch(res => {
            expect(res).toBeTruthy();
          });
      })
    );

    it('errors on HTTP failure', async(inject(
      [WeatherService, HttpTestingController],
      (service: WeatherService, backend: HttpTestingController) => {
        service.getDailyForecastByCoordinates(111, 111)
          .catch(res => {
            expect(res).toBeTruthy();
          });

        const req = backend.expectOne({method: 'get'}, 'Get forecast by zip');
        expect(req.request.url).toContain('forecast');

        req.flush({}, {status: 401, statusText: 'Not found'});
        backend.verify();
      }))
    );
  });
});
