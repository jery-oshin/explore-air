import React from 'react'

import './discount.style.css';

import discount from './discount.png';

import StepOne from '../stepOne/stepOne.component';
import StepTwo from '../stepTwo/stepTwo.component';

const Discount = () => {
    return ( 
        <div className='card-discount'>
            <div className="image-discount">
                <img src={discount} alt="" align='left'/>
            </div>
            <div className="description-discount">

                <p>Your 50 % Discount Code has been applied </p>
                <p>ATTENTION, This Code Expires In : 0:00</p>
                <p> Do not browse away from this page! </p>
                <p>Free Delivery Available Today! </p>
            </div>
            <StepOne />
            <StepTwo />
        </div>
     );
}
 
export default Discount;