import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom';
import reactDom from 'react-dom'
import HomeScreen from '../components/HomeScreen';
import Signin from '../components/Signin';
import Signup from '../components/Signup';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useSelector, useDispatch } from 'react-redux'
import { userlogged } from '../redux/userStore/userAction';
import CategoryNav from '../components/CategoryNav';
import ProductDetailsScreen from '../components/Products.jsx/ProductDetailsScreen';
import ProductScreen from '../components/ProductScreen';
import CategoryProductScreen from '../components/Products.jsx/CategoryProductScreen';

function RoutesHome() {

    const { userActive } = useSelector(state => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(userlogged())
    }, [])

    return (
        <div>
            <Router>
                <Header />
                <CategoryNav />
                <main>
                    <Routes>

                        <Route path="/" element={<HomeScreen />} />
                        <Route path='/product/:id' element={<ProductDetailsScreen />} />

                        <Route path='/catProduct/:category/' element={<CategoryProductScreen />} />
                        <Route path="/signin" element={userActive ? <Navigate to="/" /> : <Signin />} />
                        <Route path="/signup" element={userActive ? <Navigate to="/" /> : <Signup />} />


                    </Routes>
                </main>
                <Footer />
            </Router>

        </div>
    )
}


export default RoutesHome
