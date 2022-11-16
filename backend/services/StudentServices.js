import { Student } from "../models/index.js";

export const saveStudent = (studentObj) => {
    try {
        const savedStudent = Student(studentObj);
        return savedStudent.save();
    } catch (error) {
        console.log(error);
    }
}