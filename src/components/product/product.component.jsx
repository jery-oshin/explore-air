import React from 'react';

import product from './product-3.png'
import Description from '../description/description.component';


import './product.style.css'

const Product = () => {
    return ( 
        <div className='productCard'>
            <img className='product' src={product} alt=""/>
            <Description />
        </div>
    );
}
 
export default Product;