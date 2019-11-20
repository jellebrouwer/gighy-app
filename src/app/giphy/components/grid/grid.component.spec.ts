import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridComponent } from './grid.component';
import { IGif } from '../../interfaces/giphy.interface';

describe('GridComponent', () => {
  const gifs: IGif[] = [
    {
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
          url: 'https://giphy.com/some-gif-b',
          width: '100',
          height: '100'
        }
      },
    },
  ];
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GridComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    component.gifs = gifs;
    fixture.detectChanges();
  });

  it('should generate a grid', () => {
    expect(component).toBeTruthy();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('li').length).toEqual(gifs.length);
  });
});
