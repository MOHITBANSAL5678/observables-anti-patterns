import { Component, OnInit } from '@angular/core';
import { StudentInfoService } from '../../app-core-services/student-info.service';
import { StudentInfoUi, Detail } from '../../models/student/student-info-ui.model';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {
  studentsInfo: any;
  studentInfoUi: StudentInfoUi;
  detail = new Detail();
  hoverDetail = new Detail();
  sports: string;
  show: boolean = false;


  data = [{
    class: 1,
    collaps: false,
    section: [
      {
        sectionName: 'A',
        collaps: false,
        detail: [
          {
            name: "Aman",
            age: "23",
            gender: "M",
            sport: ["cricket", "football"]
          }, {
            name: "Mohit",
            age: "26",
            gender: "M",
            sport: ["cricket"]
          }, {
            name: "Alex",
            age: "30",
            gender: "M",
            sport: ["Basket Ball", "football"]
          }
        ]

      }
    ]
  }, {
    class: 2,
    collaps: false,
    section: [
      {
        collaps: false,
        sectionName: 'B',
        detail: [
          {
            name: "Alex",
            age: "30",
            gender: "M",
            sport: ["Basket Ball", "football"]
          }
        ]

      }
    ]
  }]


  constructor(private readonly studentInfoService: StudentInfoService) { }

  ngOnInit() {
    this.fetchStudentInfo();
  }

  myClick(data) {
    this.show = true;
    this.detail = data;
    this.sports = this.detail.sport.join();
  }

  mouseEnter(data) {
    this.hoverDetail = data;
  }

  fetchStudentInfo() {
    this.studentInfoService.get().subscribe(studentsInfo => {
      this.studentInfoUi = studentsInfo;
    });
  }
}
