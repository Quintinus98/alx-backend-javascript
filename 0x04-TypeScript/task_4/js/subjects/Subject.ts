namespace Subjects {
    export class Subject {
        teacher: Subjects.Teacher
        
        public set setTeacher(teacher : Subjects.Teacher) {
            this.teacher = teacher;
        }  
    }
}