import { Injectable } from '@angular/core';
import { BaseService } from '../models/app/base-service.model';
import { Observable } from 'rxjs';
import { StudentInfo } from '../models/student/student-info.model';
import { DataService } from '../core-services/data.service';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { StudentInfoUi } from '../models/student/student-info-ui.model';

@Injectable()
export class StudentInfoService implements BaseService<StudentInfoUi>{

  constructor(private http: HttpClient) { }


  // get(): Observable<Array<StudentInfo>> {
  //   return this.dataService.get('https://student-management-api-1u3cd4j7s.now.sh/students').pipe(
  //     map((res: any) => {
  //       return this.handleResponse(res);;
  //     }));
  // }

  get(): Observable<StudentInfoUi> {
    let options = {};
    return this.http.get('https://student-management-api-1u3cd4j7s.now.sh/students', options)
      .pipe(
        map((res: any) => {
          return this.handleResponse(res);;
        })
      );
  }

  //todo remove any with StudentInfoUi
  handleResponse(res): any {
    // let studentsInfo: Array<StudentInfo> = [];
    let studentInfoUi: StudentInfoUi;
    // res.forEach(info => {
    // if (StudentInfo.validator(info)) {
    // studentsInfo.push(info);
    //}
    // });
    studentInfoUi = StudentInfoUi.fromStudentInfo(res);
    
    return studentInfoUi;
  }
}
