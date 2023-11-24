// Header.js
import React from 'react';
import '../styles/Header.css'
import { Route, Routes } from 'react-router-dom';
import img1 from '../images/header1.jpg';
import img2 from '../images/header2.jpg';
import img3 from '../images/header3.jpg';

const Home = () => <img src={img1} alt="img1" />;
const Produkty = () => <img src={img2} alt="img2" />;
const Kontakt = () => <img src={img3} alt="img3" />;
const PanelAdmin = () => <img src={img1} alt="img1" />;
const AdminPanel = () => <img src={img1} alt="img1" />;

const Header = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produkty" element={<Produkty />} />
      <Route path="/kontakt" element={<Kontakt />} />
      <Route path="/panel-admin" element={<PanelAdmin />} />
      <Route path="/login" element={<AdminPanel />} />
    </Routes>
  );
};

export default Header;
