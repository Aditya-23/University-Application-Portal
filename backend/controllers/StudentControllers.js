import Student from "../models/student.js";
import { deleteStudentById, getStudentById, saveStudent, updateStudentById } from "../services/StudentServices.js";

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
        console.log(error)
        return res.status(500).json({msg: "Internal server error"});
    }
}

const getStudent = async (req, res) => {
    try {
        const studentObj = await getStudentById(req.params.id);
        if(studentObj){
            return res.status(200).json(studentObj);
        }
        return res.status(500).json({msg: "Student does not exist!"});
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg: "Internal server error"});
    }
}

const updateStudent = async (req, res) => {
    try {
        const currentStudent = req.body;
        const isStudentPresent = await Student.exists({_id: req.params.id});
        if(!isStudentPresent){
            return res.status(500).json({msg: "Student does not exist!"});
        }
        const updatedStudent = await updateStudentById(req.params.id, currentStudent);
        if(updatedStudent){
            return res.status(200).json(updatedStudent);
        }
        return res.status(500).json({msg: "Could not update the student!"});
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg: "Internal server error"});
    }
}

const deleteStudent = async (req, res) => {
    try {
        const isStudentPresent = await Student.exists({_id: req.params.id});
        if(!isStudentPresent){
            return res.status(500).json({msg: "Student does not exist!"});
        }
        const deletedOj = await deleteStudentById(req.params.id);
        return res.status(200).json(deletedOj);
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg: "Internal server error"});
    }
}
export {
    post,
    getStudent,
    updateStudent,
    deleteStudent,
}