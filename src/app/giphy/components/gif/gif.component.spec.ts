import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GifComponent } from './gif.component';
import { IGif } from '../../interfaces/giphy.interface';

describe('GifComponent', () => {
  let component: GifComponent;
  let fixture: ComponentFixture<GifComponent>;
  const gif: IGif = {
    images: {
      fixed_width: {
        url: 'https://giphy.com/some-gif-a',
        width: '100',
        height: '100'
      }
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GifComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifComponent);
    component = fixture.componentInstance;
    component.gif = gif;
    fixture.detectChanges();
  });

  it('should show a GIF', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.gif')).toBeDefined();
  });
});
