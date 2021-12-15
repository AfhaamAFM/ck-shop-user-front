import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import HomeScreen from '../components/HomeScreen';
import Signin from '../components/Signin';
import Signup from '../components/Signup';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useSelector, useDispatch } from 'react-redux'
import { userlogged } from '../redux/userStore/userAction';

import CategoryProductScreen from '../components/Products.jsx/CategoryProductScreen';
import SubcategoryProductScreen from '../components/Products.jsx/SubcategoryProductScreen';
import SearchProductScreen from '../components/Products.jsx/SearchProductScreen';
import CartScreen from '../components/Cart/CartScreen';
import ProductVIewPage from '../components/Products.jsx/ProductVIewPage';
import CategoryHeader from '../components/CategoryHeader';
import CheckoutPaymentScreen from '../components/CheckoutPaymentScreen';
import UserProfileScreen from '../components/UserProfile/UserProfileScreen';
import PlaceOrderScreen from '../components/PlaceOrderScreen';

function RoutesHome() {

    const { userActive } = useSelector(state => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(userlogged())
    }, [dispatch])

    return (
        <div>
            <Router>
                <Header />
                <CategoryHeader/>
                {/* <CategoryNav /> */}
                <main>
                    <Routes>

                        <Route path="/" element={<HomeScreen />} />
                        <Route path='/product/:id' element={<ProductVIewPage />} />
                        <Route path='/checkoutPay' element={<CheckoutPaymentScreen />} />
                        {userActive&&<Route path='/userProfile' element={<UserProfileScreen />} />}

                        <Route path='/catProduct/:category/' element={<CategoryProductScreen />} />
                        <Route path='/catProduct/:category/:subCat' element={<SubcategoryProductScreen/>} />
                        <Route path='/searchProduct/:word' element={<SearchProductScreen/>} />
                        <Route path="/signin" element={userActive ? <Navigate to="/" /> : <Signin />} />
                        <Route path="/signup" element={userActive ? <Navigate to="/" /> : <Signup />} />
                        <Route path='/cart'   element= { <CartScreen/> }/>
                        <Route path='/placeOrder'   element= { <PlaceOrderScreen/> }/>


                    </Routes>
                </main>
                <Footer />
            </Router>

        </div>
    )
}


export default RoutesHome
