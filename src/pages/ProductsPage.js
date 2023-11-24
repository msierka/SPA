// Importuj potrzebne rzeczy
import React from 'react';
import { useParams } from 'react-router-dom';

// Komponent ProductsPage
const ProductsPage = () => {
  // Użyj hooka useParams do pobrania wartości parametru id
  const { id } = useParams();

  return (
    <div>
      <h2>Strona produktu</h2>
      <h1>{id}</h1>
    </div>
  );
};

export default ProductsPage;
