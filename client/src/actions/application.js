import axios from "axios";
import { setAuthToken } from "../utils";
import * as types from "./types";

const applicationFormSave = (applicationForm, files) => async dispatch => {

    const config = {
        headers: {
            'content-type' : 'multipart/form-data',
        }
    };

    try {
        console.log(applicationForm);
        const newFormObj = new FormData();
        newFormObj.append("createdBy", applicationForm.createdBy);
        newFormObj.append("programName", applicationForm.programName);
        newFormObj.append("createdByEmail", applicationForm.createdByEmail);
        newFormObj.append("semIntake", applicationForm.semIntake);
        newFormObj.append("gender", applicationForm.gender);
        newFormObj.append("name", applicationForm.name);
        newFormObj.append("dataOfBirth", applicationForm.dateOfBirth);
        newFormObj.append("applyingTo", applicationForm.applyingTo);
        
        if(files.sop.preview != ""){
            newFormObj.append("sop", files.sop.data);
        }

        if(files.lor1.preview != ""){
            newFormObj.append("lor1", files.lor1.data);
        }

        if(files.lor2.preview != ""){
            newFormObj.append("lor2", files.lor2.data);
        }

        if(files.lor3.preview != ""){
            newFormObj.append("lor3", files.lor3.data);
        }

        if(files.resume.preview != ""){
            newFormObj.append("resume", files.resume.data);
        }
        
        const response = await axios.post("/applications", newFormObj, config);
        console.log(response);
        if(response.status == 200){
            dispatch({
                type: types.APPLICATION_FORM_SAVE_SUCCESS,
                payload: {
                    applicationObj: response.data
                }
            })
        }
        else{
            dispatch({
                type: types.APPLICATION_FORM_SAVE_FAILED,
                payload: {
                    applicationObj: null
                }
            })
        }
    } catch (error) {
        dispatch({
            type: types.APPLICATION_FORM_SAVE_FAILED,
            payload: {
                applicationObj: null
            }
        })
    }
}

export {
    applicationFormSave,
}