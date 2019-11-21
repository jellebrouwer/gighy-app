import { Component, OnInit } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { GiphyService } from './services/giphy.service';
import { IGiphyServerResponse, IGif } from './interfaces/giphy.interface';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.scss']
})
export class GiphyComponent implements OnInit {

  public gifs$: Observable<IGiphyServerResponse<IGif>>;
  public error: string;

  // Pagination
  public totalCount: number;
  public limit = 12;
  public offset = 0;

  // Cache search input
  private searchInput = 'puppies';

  constructor(
    private giphyService: GiphyService,
  ) { }

  ngOnInit() {
    this.getGifs();
  }

  public handleSearch(searchInput) {
    this.searchInput = searchInput;
    this.getGifs();
  }

  public handlePageChange(pageChange) {
    if (pageChange === 'next') {
      this.offset += this.limit;
    } else {
      this.offset -= this.limit;
    }
    this.getGifs();
  }

  private getGifs() {
    this.gifs$ = this.giphyService.search({
      q: this.searchInput,
      limit: this.limit,
      offset: this.offset
    })
      .pipe(
        tap(res => {
          this.totalCount = res.pagination.total_count;
        }),
        catchError((error) => {
          console.log(error);
          setTimeout(() => this.error = error);
          return of(null);
        })
      );
  }

}
