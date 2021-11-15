import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import reactDom from 'react-dom'
import HomeScreen from '../components/HomeScreen';
import Signin from '../components/Signin';
import Signup from '../components/Signup';
import Header from '../components/Header';
import Footer from '../components/Footer';


function RoutesHome() {
    return (
        <div>
        <Router>
            <Header/>
                <main>
            <Routes>

                <Route path="/"  element={<HomeScreen/>}/>
                <Route path="/signin"  element={<Signin/>}/>
                <Route path="/signup"  element={<Signup/>}/>
            </Routes>
                </main>
        <Footer/>
        </Router>

        </div>
    )
}


export default RoutesHome
