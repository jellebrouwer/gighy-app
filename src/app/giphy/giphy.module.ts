import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { GiphyComponent } from './/giphy.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { GifComponent } from './components/gif/gif.component';

@NgModule({
  declarations: [
    GiphyComponent,
    UserInputComponent,
    GifComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
  ],
  exports: [
    GiphyComponent,
  ]
})
export class GiphyModule { }
