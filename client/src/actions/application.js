import axios from "axios";
import { setAuthToken } from "../utils";
import * as types from "./types";

//status can be "saved" or submitted
// pass id if the application is being saved for the second time or third time
// id is not necessary if the application is being submitted or saved for the first time
const applicationFormSave = (applicationForm, files, status, id="638994e4788586ff44d24834") => async dispatch => {

    const config = {
        headers: {
            'content-type' : 'multipart/form-data',
        }
    };

    try {
        // console.log(applicationForm);
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
        newFormObj.append("status", status);
        // id == null means the application is not yet created and this is the first time the use is trying to
        // create an application
        if(id == null){
            const response = await axios.post("/applications", newFormObj, config);
            if(response.status == 200){
                dispatch({
                    type: types.APPLICATION_FORM_SAVE_SUCCESS,
                    payload: {
                        applicationObj: response.data
                    }
                });
                dispatch({
                    type: types.SET_ALERT,
                    payload: {
                        msg: `Application ${status} successfully!`,
                        alertType: "success"
                    }
                });
            }
        }
        //id != null means the application is already created and the use is updating it or submitting it
        else{
            const response = await axios.put("/applications/" + id, newFormObj, config);
            if(response.status == 200){
                dispatch({
                    type: types.APPLICATION_FORM_SAVE_SUCCESS,
                    payload: {
                        applicationObj: response.data
                    }
                });
                dispatch({
                    type: types.SET_ALERT,
                    payload: {
                        msg: `Application ${status} successfully!`,
                        alertType: "success"
                    }
                });
            }
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