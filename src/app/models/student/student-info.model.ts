export class StudentInfo {
    rollNumber: string;
    name: string;
    age: string;
    gender: string;
    classNumber: number;  // todo
    section: string;
    sports: Array<string>;

    static validator(info): boolean {
        const studentInfo = new StudentInfo;
        if (util.isNotNull(info.rollNumber) &&
            util.isNotNull(info.name) &&
            util.isNotNull(info.age) &&
            util.isNotNull(info.gender) &&
            util.isNotNull(info.class) &&
            util.isNotNull(info.section)) {
            return true;
        }
        else { false }

    }
}

// todo 
export class util {
    static isNotNull(obj) {
        if (obj !== undefined && obj !== null) {
            return true
        } else {
            return false;
        }


    }
} 