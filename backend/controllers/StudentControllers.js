import Student from "../models/student.js";
import { getStudentById, saveStudent } from "../services/StudentServices.js";

const post = async (req, res) => {
    try {
        const student = req.body;
        const isStudentPresent = await Student.exists({email: student.email});
        if(isStudentPresent){
            return res.status(500).json({msg: "Student already exists!"});
        }
        const savedStudent = await saveStudent(student);
        return res.status(200).json(savedStudent);
    } catch (error) {
        return res.status(500).json({msg: "Internal server error"});
    }
}

const getStudent = async (req, res) => {
    try {
        console.log(req.params.id);
        const studentObj = await getStudentById(req.params.id);
        if(studentObj){
            return res.status(200).json(studentObj);
        }
        return res.status(500).json({msg: "Student does not exist!"});
    } catch (error) {
        return res.status(500).json({msg: "Internal server error"});
    }
}

export {
    post,
    getStudent,
}