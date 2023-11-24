import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductListPage.css'

const products = ["car", "bike", "ball"];
const ProductListPage = () => {
    const list = products.map(produkt =>(
        <li key ={produkt}>
            <Link to={`/produkty/${produkt}`}>{produkt}</Link>
        </li>
    ))
    return ( 
        <div className="products">
            <h2>Lista produktów: </h2>
            <div>
                <ul>
                    {list}
                </ul>
            </div>
        </div>
        
     );
}
 
export default ProductListPage;