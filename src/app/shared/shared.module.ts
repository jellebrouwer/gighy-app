import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForbiddenValidatorDirective } from './directives/forbidden-words-validator.directive';
import { PaginationComponent } from './components/pagination/pagination.component';
import { GridComponent } from '../shared/components/grid/grid.component';
import { NotificationComponent } from './components/notification/notification.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    ForbiddenValidatorDirective,
    PaginationComponent,
    GridComponent,
    NotificationComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ForbiddenValidatorDirective,
    PaginationComponent,
    GridComponent,
    NotificationComponent,
    LoaderComponent,
  ]
})
export class SharedModule { }
