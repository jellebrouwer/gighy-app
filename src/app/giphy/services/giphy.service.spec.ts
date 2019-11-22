import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../../environments/environment';

import { GiphyService } from './giphy.service';

describe('GiphyService', () => {

  let injector: TestBed;
  let service: GiphyService;
  let httpMock: HttpTestingController;

  const url = `${environment.giphyApiUrl}/search?api_key=${environment.giphyApiKey}&q=puppies`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        GiphyService
      ]
    });
    injector = getTestBed();
    service = injector.get(GiphyService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => httpMock.verify());


  describe('search()', () => {
    it('should return gifs', () => {

      service.search({ q: 'puppies' })
        .subscribe(
          res => {
            expect(res.data.length).toBe(2);
          }
        );

      const req = httpMock.expectOne(url);

      expect(req.request.method).toEqual('GET');

      req.flush({
        data: [{}, {}]
      });

    });

    it('should return a messge on network error', () => {
      const errorMessage = 'simulated network error';

      service.search({ q: 'puppies' })
        .subscribe(
          () => fail('should have failed with the network error'),
          (error: string) => {
            expect(error).toEqual(errorMessage, 'message');
          }
        );

      const req = httpMock.expectOne(url);

      req.flush(errorMessage, { status: 500, statusText: 'Server error' });
    });

  });
});
