import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import store from "./store";
import Landing from './components/Landing';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './components/Login';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import {loadUser} from './actions/auth';
import {useEffect} from 'react';
import {setAuthToken} from './utils';
import PrivateRoute from './components/PrivateRoute';
import Registration from './components/Registration';

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
            <br></br>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={< Landing />}/>
                    <Route exact path='/login' element={< Login />}/>
                    <Route exact path='/register' element={< Registration />}/>
                    <Route
                        exact
                        path='/dashboard'
                        element={< PrivateRoute > < Dashboard /> </PrivateRoute>}/>
                </Routes>
            </BrowserRouter>
        </Provider>

    );
}

export default App;
