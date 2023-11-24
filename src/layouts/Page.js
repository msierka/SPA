import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';
import ProductsPage from '../pages/ProductsPage';
import  AdminPage from '../pages/AdminPage';
import ErrorPage from '../pages/ErrorPage';
import LoginPage from '../pages/LoginPage';
import ProductListPage from '../pages/ProductListPage';
const Page = () => {
    return ( 
        <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/produkty' element={<ProductListPage />} />
        <Route path='/produkty/:id' element={<ProductsPage />} />
        <Route path='/kontakt' element={<ContactPage />} />
        <Route path='/panel-admin' element={<AdminPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
     );
}
 
export default Page;
