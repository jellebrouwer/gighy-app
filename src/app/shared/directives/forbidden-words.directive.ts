import { AbstractControl, ValidatorFn } from '@angular/forms';

export function forbiddenWordsValidator(words: string[]): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {

    const forbiddenWordIndex = words.findIndex(word => {
      const regEx = new RegExp(word, 'i');
      return regEx.test(control.value);
    });

    return forbiddenWordIndex > -1 ? {
      forbiddenWords: {
        value: words[forbiddenWordIndex]
      }
    } : null;
  };
}
