import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const p = false;

const AdminPage = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          p ? (
            <h3>Panel admina</h3>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
    </Routes>
  );
};

export default AdminPage;
