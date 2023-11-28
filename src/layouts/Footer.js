// Footer.js
import React from 'react';
import { Routes, Route, Outlet, Link, useParams } from 'react-router-dom';

const Home = () => (
  <p>Jesteś na stronie głównej</p>
);

const Products = () => {
  const { page } = useParams();
  return (
    <p>Jesteś na stronie {page}</p>
  );
};

const Footer = () => (
  <div>
    <h2>Stopka</h2>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/produkty/:page' element={<Products />} />
    </Routes>
  </div>
);

export default Footer;
