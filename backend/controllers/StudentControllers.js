import Student from "../models/student.js";
import { deleteStudentById, getStudentById, saveStudent, updateStudentById, loginService } from "../services/StudentServices.js";
import { setResponse, setRequestError, setServerError} from "./utils.js";




const registerStudent = async (req, res) => {
    try {
        var studentObj = req.body;
        const isStudentPresent = await Student.exists({email: studentObj.email});
        if(isStudentPresent){
            return setRequestError({msg: "Student already exists!"}, res);
        }
        const savedStudent = await saveStudent(studentObj);
        return setResponse(savedStudent, res);
    } catch (error) {
        console.log(error)
        return setServerError({msg: "Internal server error"}, res);
    }
}

const getStudent = async (req, res) => {
    try {
        const studentObj = await getStudentById(req.userId);
        if(studentObj){
            return setResponse(studentObj, res);
        }
        return setRequestError({msg: "Student does not exist!"}, res); 
    } catch (error) {
        console.log(error)
        return setRequestError({msg: "Internal server error"}, res); 
    }
}

const updateStudent = async (req, res) => {
    try {
        const currentStudent = req.body;
        const isStudentPresent = await Student.findById(req.params.id).select("_id");
        if(isStudentPresent._id.toString() != req.userId){ // added this to make sure that students can only update thier own profile
            return setRequestError({msg: "Not authorized"}, res);  
        }
        if(!isStudentPresent){
            return setRequestError({msg: "Student does not exist!"}, res); 
        }
        const updatedStudent = await updateStudentById(req.params.id, currentStudent);
        if(updatedStudent){
            return setResponse(updatedStudent, res);
        }
        return setRequestError({msg: "Could not update the student!"}, res); 
    } catch (error) {
        console.log(error)
        return setRequestError({msg: "Internal server error"}, res); 
    }
}

const deleteStudent = async (req, res) => {
    try {
        const isStudentPresent = await Student.findById(req.params.id).select("_id");
        if(isStudentPresent._id.toString() != req.userId){ // added this to make sure that students can only delete thier own profile
            return setRequestError({msg: "Not authorized"}, res);  
        }
        const deletedOj = await deleteStudentById(req.params.id);
        return setResponse(deletedOj, res);
    } catch (error) {
        console.log(error)
        return setRequestError({msg: "Internal server error"}, res); 
    }
}

const loginStudent = async (req, res) => {
    try {
        const {email, password} = req.body;
        const studentObj = await loginService(email, password);
        if(!studentObj){
            return setRequestError({msg: "Incorrect credentials!"}, res); 
        }
        return setResponse(studentObj, res);

    } catch (error) {
        console.log(error);
        return setRequestError({msg: "Internal server error"}, res); 
    }
}

export {
    registerStudent,
    getStudent,
    updateStudent,
    deleteStudent,
    loginStudent,
}