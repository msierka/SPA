import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';
import ProductsPage from '../pages/ProductsPage';
import  AdminPage from '../pages/AdminPage';
import ErrorPage from '../pages/ErrorPage';

const Page = () => {
    return ( 
        <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/produkty' element={<ProductsPage />} />
        <Route path='/kontakt' element={<ContactPage />} />
        <Route path='/panel-admin' element={<AdminPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
     );
}
 
export default Page;
