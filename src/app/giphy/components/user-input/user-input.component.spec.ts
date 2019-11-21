import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { UserInputComponent } from './user-input.component';
import { ForbiddenValidatorDirective } from '../../../shared/directives/forbidden-words-validator.directive';

describe('UserInputComponent', () => {
  let component: UserInputComponent;
  let fixture: ComponentFixture<UserInputComponent>;
  let form;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserInputComponent,
        ForbiddenValidatorDirective
      ],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInputComponent);
    component = fixture.componentInstance;
    form = component.searchForm;

  });

  describe('on submit', () => {
    it('should emit the submited text', () => {
      component.searchInput = 'morning';

      const compiled = fixture.debugElement.nativeElement;
      const buttonElement = compiled.querySelector('button');

      component.search
        .subscribe((emittedSearchText) => {
          expect(emittedSearchText).toBe('morning');
        });

      buttonElement.click();
    });
  });

  describe('on typing a forbidden word', () => {
    it('should emit "oh my god"', () => {
      component.searchInput = 'fuck';
      fixture.detectChanges();
      component.search
        .subscribe((emittedSearchText) => {
          expect(emittedSearchText).toBe('oh my god');
        });
    });
  });

});
