import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { forbiddenWordsValidator } from './forbidden-words.directive';

@Directive({
  selector: '[appForbiddenWords]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true }]
})
export class ForbiddenValidatorDirective implements Validator {

  @Input('appForbiddenWords') forbiddenWords: string[];

  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.forbiddenWords ?
      forbiddenWordsValidator(this.forbiddenWords)(control) :
      null;
  }
}
