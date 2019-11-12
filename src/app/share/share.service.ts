import { Injectable } from '@angular/core';
import { DataService } from '../core-services/data.service';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  shareConnector$;
  constructor(private dataService: DataService) {
    this.shareConnector$ = this.dataService.get().pipe(
      share()
    );

  }

  // get(): Observable<any> {
  //   return this.dataService.get();
  // }

}
