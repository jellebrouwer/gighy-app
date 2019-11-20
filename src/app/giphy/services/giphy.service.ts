import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IGiphyServerResponse, IGif } from '../interfaces/giphy.interface';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  constructor(
    private http: HttpClient,
  ) { }

  public search(params): Observable<IGiphyServerResponse<IGif>> {
    return this.http.get<IGiphyServerResponse<IGif>>(`${environment.giphyApiUrl}/search`, {
      params: {
        api_key: environment.giphyApiKey,
        ...params,
      },
    })
      .pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse): Observable<any> {
    return throwError(res.error || 'Server error');
  }

}
