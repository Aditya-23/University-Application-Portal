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

export const updateStudentById = (id, studentObj) => {
    try {
        const newStudentObj = Student.findByIdAndUpdate(id, studentObj, {new: true});
        return newStudentObj;
    } catch (error) {
        console.log(error);
    }
}
 
export const deleteStudentById = (id) => {
    try {
        const deletedOj = Student.findByIdAndDelete(id);
        return deletedOj;
    } catch (error) {
        console.log(error);
    }
}