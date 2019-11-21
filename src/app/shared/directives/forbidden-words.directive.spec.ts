import { forbiddenWordsValidator } from './forbidden-words.directive';
import { FormControl } from '@angular/forms';

describe('ForbiddenWordsDirective', () => {

  describe('word is in forbidden word array', () => {
    it('should return a forbiddenWords error', () => {
      const fn = forbiddenWordsValidator(['fuck']);
      const validationErrors = fn(new FormControl('fuck'));
      expect(validationErrors.forbiddenWords).toEqual({
        value: 'fuck'
      });
    });
  });

  describe('word is not in forbidden word array', () => {
    it('should return null', () => {
      const fn = forbiddenWordsValidator(['fuck']);
      const validationErrors = fn(new FormControl('puppies'));
      expect(validationErrors).toEqual(null);
    });
  });

});
