import './App.css';
import React from "react";
import {Link, Route, Routes} from 'react-router-dom';
import {Home} from './components/Home.js';
import RegistrationView from "./views/RegistrationView";
import LoginView from "./views/LoginView";

//import {Fetcher} from './Network.js';

function App() {
    return <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/registration">Registration</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
        <Routes>
            <Route path='/login' element={<LoginView />} />
            <Route path='/registration' element={<RegistrationView />} />
            <Route path='/' element={<Home />} />
        </Routes>
    </>;

    //return <><Fetcher/></>;
}

export default App;
