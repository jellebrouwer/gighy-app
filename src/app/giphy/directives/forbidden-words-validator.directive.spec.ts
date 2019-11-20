import { Component, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { ForbiddenValidatorDirective } from './forbidden-words-validator.directive';
import { DebugContext } from '@angular/core/src/view';

@Component({
  template: `
    <form>
      <input name="search" [ngModel]="searchText" [appForbiddenWords]="swearWords" />
    </form>
  `
})
class TestComponent {
  public searchText: string;
  public swearWords: string[] = ['fuck'];
}

describe('ForbiddenWordsValidatorDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let debug: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        TestComponent,
        ForbiddenValidatorDirective
      ]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    debug = fixture.debugElement;
  });

  describe('an agry user is talking', () => {
    it('should throw a validation error', async () => {
      component.searchText = 'fuck';
      fixture.detectChanges();
      await fixture.whenStable();

      const form: NgForm = debug.children[0].injector.get(NgForm);
      const control = form.control.get('search');
      expect(control.hasError('forbiddenWords')).toBe(true);
    });
  });

  describe('a sweet user is taling', () => {
    it('should not throw a validation error', async () => {
      component.searchText = 'puppies';
      fixture.detectChanges();
      await fixture.whenStable();

      const form: NgForm = debug.children[0].injector.get(NgForm);
      const control = form.control.get('search');
      expect(control.hasError('forbiddenWords')).toBe(false);
    });
  });

});
