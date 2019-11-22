import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
  });

  describe('totalCount > (ofsset + itemsPerPage)', () => {
    beforeEach(() => {
      component.ngOnChanges({
        totalCount: { currentValue: 100 },
        offset: { currentValue: 0 },
        itemsPerPage: { currentValue: 12 },
      });
      fixture.detectChanges();
    });

    it('should show the next button', () => {
      const compiled = fixture.debugElement.nativeElement;
      const buttons = compiled.querySelectorAll('.button');
      expect(buttons[0].textContent).toEqual('Next');
    });
  });

  describe('offset >= itemsPerPage', () => {
    beforeEach(() => {
      component.ngOnChanges({
        totalCount: { currentValue: 100 },
        offset: { currentValue: 13 },
        itemsPerPage: { currentValue: 12 },
      });
      fixture.detectChanges();
    });

    it('should show the previous button', () => {
      const compiled = fixture.debugElement.nativeElement;
      const buttons = compiled.querySelectorAll('.button');
      expect(buttons[0].textContent).toEqual('Previous');
    });
  });

});
