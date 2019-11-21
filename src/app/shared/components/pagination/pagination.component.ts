import { Component, OnChanges, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnChanges {

  @Input() totalCount: number;
  @Input() itemsPerPage: number;
  @Input() offset: number;
  @Output() pageChange = new EventEmitter<string>();

  public showPrevious = false;
  public showNext = false;

  private cache = {
    totalCount: null,
    itemsPerPage: null,
    offset: null
  };

  ngOnChanges(changes) {
    this.cache.totalCount = changes.totalCount ? changes.totalCount.currentValue : this.cache.totalCount;
    this.cache.itemsPerPage = changes.itemsPerPage ? changes.itemsPerPage.currentValue : this.cache.itemsPerPage;
    this.cache.offset = changes.offset ? changes.offset.currentValue : this.cache.offset;
    this.checkShowButtons();

  }

  public handlePageChange(page) {
    this.pageChange.emit(page);
  }

  private checkShowButtons() {
    this.showNext = this.cache.totalCount > (this.cache.offset + this.cache.itemsPerPage);
    this.showPrevious = this.cache.offset >= this.cache.itemsPerPage;
  }

}
