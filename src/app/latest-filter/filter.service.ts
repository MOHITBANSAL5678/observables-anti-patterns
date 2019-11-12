import { Injectable } from '@angular/core';
import { DataService } from '../core-services/data.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  switchMapConnector;
  constructor(private dataservice: DataService) {
    this.switchMapConnector = this.dataservice.get().pipe(
      switchMap(res => res)
    );
  }
}
