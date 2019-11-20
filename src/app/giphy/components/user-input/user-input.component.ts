import { Component, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { forbiddenWords } from '../../constants/forbiddenWords.constant';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss']
})
export class UserInputComponent implements AfterViewInit {

  @ViewChild('searchForm') searchForm;
  @Output() search = new EventEmitter<string>();
  public searchInput: string;
  public forbiddenWords: string[] = forbiddenWords;

  public onSubmit() {
    this.search.emit(this.searchInput);
  }

  public ngAfterViewInit() {
    this.watchSwearing();
  }

  private watchSwearing() {
    this.searchForm.control.valueChanges
      .subscribe(() => {
        if (
          this.searchForm.controls.search &&
          this.searchForm.controls.search.errors &&
          this.searchForm.controls.search.errors.forbiddenWords
        ) {
          this.search.emit('oh my god');
        }
      });
  }

}
