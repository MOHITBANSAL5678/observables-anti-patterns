import { Injectable } from '@angular/core';
import { DataService } from '../core-services/data.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TwoCallsService {

  $subjectEvent = new BehaviorSubject("test");

  constructor(private dataService: DataService) { }

  updateSubject() {
    return this.dataService.get().subscribe(
      res=>{
        this.$subjectEvent.next("single call")
      }
    );
  }


  get(): Observable<any> {
    return this.dataService.get();
  }

}
