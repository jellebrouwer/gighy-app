import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { GiphyComponent } from './giphy.component';
import { GiphyService } from './services/giphy.service';
import { IGiphyServerResponse, IGif } from './interfaces/giphy.interface';
import { of } from 'rxjs';

describe('GiphyComponent', () => {
  let component: GiphyComponent;
  let fixture: ComponentFixture<GiphyComponent>;
  let searchSpy: jasmine.Spy;
  const giphyService = jasmine.createSpyObj('GiphyService', ['search']);
  const serverResponse: IGiphyServerResponse<IGif> = {
    data: [{
      images: {
        fixed_width: {
          url: 'https://giphy.com/some-gif-a',
          width: '100',
          height: '100'
        }
      }
    },
    {
      images: {
        fixed_width: {
          url: 'https://giphy.com/some-gif-a',
          width: '100',
          height: '100'
        }
      }
    }],
    pagination: {
      total_count: 2,
      count: 2,
      offset: 0
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GiphyComponent],
      imports: [HttpClientModule],
      providers: [
        {
          provide: GiphyService,
          useValue: giphyService,
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyComponent);
    component = fixture.componentInstance;
  });

  describe('ngOnInit()', () => {
    it('should call giphyService.search() with puppies by default', fakeAsync(() => {
      searchSpy = giphyService.search.and.returnValue(of(serverResponse));
      tick();
      fixture.detectChanges();
      tick();
      fixture.detectChanges();
      expect(searchSpy).toHaveBeenCalledWith({
        q: 'puppies',
        limit: 12,
        offset: 0
      });
    }));

    it('should load the returned GIFs', fakeAsync(() => {
      searchSpy = giphyService.search.and.returnValue(of(serverResponse));
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const gifElements = compiled.querySelectorAll('app-gif');
      expect(gifElements.length).toBe(2);
    }));
  });

  describe('handleSearch()', () => {
    it('should call giphyService.search() with the search input', () => {
      searchSpy = giphyService.search.and.returnValue(of([]));
      component.handleSearch('kittens');
      fixture.detectChanges();
      expect(searchSpy).toHaveBeenCalledWith({
        q: 'kittens',
        limit: 12,
        offset: 0
      });
    });
  });

});
