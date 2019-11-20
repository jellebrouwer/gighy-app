import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss']
})
export class UserInputComponent implements OnInit {

  @Output() search = new EventEmitter<string>();
  public searchInput;

  constructor() { }

  ngOnInit() {
  }

  public onSubmit() {
    this.search.emit(this.searchInput);
  }

}
