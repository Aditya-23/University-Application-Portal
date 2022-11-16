import {Student} from "../models/index.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import config from "config";

export const saveStudent = async (studentObjToCreate) => {
    try {
        const saltForHash = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(studentObjToCreate.password, saltForHash);
        const newStudent = Student(studentObjToCreate);
        newStudent.password = hashedPassword;
        await newStudent.save();
        const payload = {
            userId: newStudent.id
        }
        const token = jsonwebtoken.sign(payload, config.get("jwtSecret"), {expiresIn: 1800});//creating jwt
        const studentObjCreated = {
            name: newStudent.name,
            email: newStudent.email,
            phone: newStudent.phone,
            education: newStudent.education,
            experience: newStudent.experience,
            greScore: newStudent.greScore,
            toeflScore: newStudent.toeflScore,
            ieltsScore: newStudent.ieltsScore,
            governmentId: newStudent.governmentId,
        }
        const savedStudentObj = {
            token,
            ...studentObjCreated
        };
        return savedStudentObj;
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