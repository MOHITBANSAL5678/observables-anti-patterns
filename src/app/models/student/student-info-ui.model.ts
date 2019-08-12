import { StudentInfo } from './student-info.model';

export class Detail {
    name: string;
    age: string;
    gender: string;
    sport: Array<string>
}
class section {
    section: string;
    details: Array<Detail>;
}
export class StudentInfoUi {
    classNumber: Number;
    sections: Array<section>;

    //todo remove any
    static fromStudentInfo(studentsInfo): any {
        let studentInfoUi: StudentInfoUi = new StudentInfoUi();
        let className = new Map();

        studentsInfo.forEach(info => {
            if (className.get(info.class)) {
                if (className.get(info.class).get(info.section)) {
                    const detail: Detail = this.getDetail(info);
                    className.get(info.class).get(info.section).push(detail);
                } else {
                    const detail: Detail = this.getDetail(info);
                    className.get(info.class).set(info.section, [new Detail()]);
                    className.get(info.class).get(info.section).push(detail);
                }
            } else {
                className.set(info.class, new Map());
                const detail: Detail = this.getDetail(info);
                className.get(info.class).set(info.section, [new Detail()]);
                className.get(info.class).get(info.section).push(detail);
            }
        });

        let names: any = []

        let studentsInfosUi: Array<StudentInfoUi>;

        className.forEach((classsingle) => {
            let studentsInfoUi: StudentInfoUi = new StudentInfoUi();

            studentsInfoUi.classNumber = className.get(className);

            classsingle.forEach(element => {
                let sections: section = new section();
                names.push(element[1])
            });
        });
        return names;

    }

    static getDetail(info) {
        let detail: Detail = new Detail();
        detail.name = info.name;
        detail.age = info.age;
        detail.gender = info.gender;
        detail.sport = info.sports;
        return detail;
    }

}
