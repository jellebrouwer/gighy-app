import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { GiphyService } from './services/giphy.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.scss']
})
export class GiphyComponent implements OnInit {

  public gifs$;
  public error;

  constructor(
    private giphyService: GiphyService,
  ) { }

  ngOnInit() {
    this.getGifs();
  }

  public handleSearch(searchInput) {
    this.getGifs(searchInput);
  }

  private getGifs(searchInput: string = 'puppies') {
    this.gifs$ = this.giphyService.search({
      q: searchInput,
      limit: 12,
    })
      .pipe(
        catchError((error) => {
          this.error = error;
          return of(null);
        })
      );
  }

}
