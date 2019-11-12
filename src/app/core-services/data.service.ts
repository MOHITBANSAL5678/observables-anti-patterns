
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";

import { Observable, throwError } from 'rxjs';
import { retry, map, catchError, observeOn, share, delay } from 'rxjs/operators';
@Injectable()

export class DataService {
  constructor(private http: HttpClient) { }

  cache = new Map()
  getOnce(url: string, params?: any): Observable<Response> {
    if (this.cache.get(url)) {
      //    return  Observable(this.cache.get([url]));
    }
    let options = {};
    this.setHeaders(options);
    return this.http.get(url, options)
      .pipe(
        map((res: Response) => {
          this.cache.set(url, res);
          return res;
        }),
        catchError(this.handleError)
      );
  }

  get(url = "https://reqres.in/api/users?page=2?t=" + new Date().getTime(), params?: any): Observable<any> {
    let options = {};
    this.setHeaders(options);
    return this.http.get(url, options)
      .pipe(
        map((res: any) => {
          return res;
        }),
        delay(400),
        // share(),
        catchError(this.handleError)
      );
  }



  post(url: string, data: any, params?: any): Observable<Response> {
    let options = {};
    this.setHeaders(options);

    return this.http.post(url, data, options)
      .pipe(
        map((res: Response) => {
          return res;
        }),
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('Backend error');
    return throwError(error || 'server error');
  }


  private setHeaders(options: any) {
    options["headers"] = new HttpHeaders()
      .append('authorization', 'tokenKey3534')
  }
}
