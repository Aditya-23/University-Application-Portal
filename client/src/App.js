import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import store from "./store";
import Landing from './components/Landing';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from './components/Layout';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import { loadUser } from './actions/auth';
import { useEffect } from 'react';
import { setAuthToken } from './utils';

if (localStorage.token) {
    setAuthToken(localStorage.token)
}

function App() {

    useEffect(() => {
        store.dispatch(loadUser());
    }, [])

    return (
        <Provider store={store}>
            <Navbar/>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={< Landing />}/>
                    <Route exact path='/login' element={< Login />}/>
                    <Route exact path='/register' element={< Register />}/>
                    <Route exact path='/dashboard' element={< Dashboard />}/>
                </Routes>
            </BrowserRouter>
        </Provider>

    );
}

export default App;
