import { Student } from "../models/index.js";

export const saveStudent = (studentObj) => {
    try {
        const savedStudent = Student(studentObj);
        return savedStudent.save();
    } catch (error) {
        console.log(error);
    }
}

export const getStudentById = (id) => {
    try {
        const studentObj = Student.findById(id);
        return studentObj;
    } catch (error) {
        console.log(error);
    }
}