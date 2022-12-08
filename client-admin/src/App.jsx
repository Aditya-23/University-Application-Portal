import {useEffect} from "react";
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import FaceRecognition from "./FaceRecognition";
import UniversityAdmin from "./UniversityAdmin";
function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<FaceRecognition/>} />
                <Route exact path="/university-admin" element={<UniversityAdmin/>} />
            </Routes>
        </BrowserRouter>

    );
}

export default App;