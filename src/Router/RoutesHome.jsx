import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link,useNavigate, Navigate } from 'react-router-dom';
import reactDom from 'react-dom'
import HomeScreen from '../components/HomeScreen';
import Signin from '../components/Signin';
import Signup from '../components/Signup';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {useSelector,useDispatch} from 'react-redux'
import { userlogged } from '../redux/userStore/userAction';

function RoutesHome() {
    
    const {userActive} = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(()=>{
dispatch(userlogged())
    },[])
    
    return (
        <div>
        <Router>
            <Header/>
                <main>
            <Routes>

                <Route path="/"  element={<HomeScreen/>}/>
    
                    <Route path="/signin"  element={userActive?<Navigate to="/" />:<Signin/>}/>
                    <Route path="/signup"  element={userActive?<Navigate to="/" />:<Signup/>}/>
                
                
            </Routes>
                </main>
        <Footer/>
        </Router>

        </div>
    )
}


export default RoutesHome
