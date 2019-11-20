import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { GiphyComponent } from './/giphy.component';
import { GridComponent } from './components/grid/grid.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { PaginationComponent } from './components/pagination/pagination.component';
// import { ForbiddenWordsDirective } from './directives/forbidden-words.directive';
import { ForbiddenValidatorDirective } from './directives/forbidden-words-validator.directive';

@NgModule({
  declarations: [
    GiphyComponent,
    GridComponent,
    UserInputComponent,
    PaginationComponent,
    // ForbiddenWordsDirective,
    ForbiddenValidatorDirective,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [
    GiphyComponent,
  ]
})
export class GiphyModule { }
