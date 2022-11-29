import axios from "axios";
import { setAuthToken } from '../utils';
import { IMG_RECEIVED, UNIVERSITY_LOADED, UNIVERSITY_LOADED_FAILED, UNIVERSITY_LOAD_START } from "./types";


export const getUniversityById = (id) => async dispatch => {
    const token = localStorage.getItem('token');
    if(token){
        setAuthToken(token);
    }
    console.log("University action invoked");
    try {
        const response = await axios.get("/universities/" + id)
        dispatch({
            type: UNIVERSITY_LOADED,
            payload: response.data
        })
        const imgResponse = await axios.get("/universities/university-image/" + response.data.image, {responseType: "blob"});
        var imageUrl = URL.createObjectURL(imgResponse.data);
        dispatch({
            type: IMG_RECEIVED,
            payload: imageUrl
        })
    } catch (error) {
        console.log(error);
        dispatch({
            type: UNIVERSITY_LOADED_FAILED,
            payload: null
        })
    }
}

export const startUniversityLoad = (id) => async dispatch => {
    dispatch({
        type: UNIVERSITY_LOAD_START,
        payload: id
    })
}