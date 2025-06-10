import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router";
import Register from "./ui/components/auth/Register/Register.jsx";
import Login from "./ui/components/auth/Login/Login.jsx";
import Layout from "./ui/components/layout/Layout/Layout.jsx";
import HomePage from "./ui/pages/HomePage/HomePage.jsx";
import ProtectedRoute from "./ui/routing/ProtectedRoute/ProtectedRoute.jsx";
import CarsPage from "./ui/pages/CarsPage/CarsPage.jsx";
import CarDetails from "./ui/components/cars/CarDetails/CarDetails.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route element={<ProtectedRoute/>}>
                        <Route path="cars" element={<CarsPage/>}/>
                        <Route path="cars/:id" element={<CarDetails/>}/>
                        {/*<Route path="services" element={<ServicePage/>}/>*/}
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;