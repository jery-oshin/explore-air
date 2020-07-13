import React, { useState} from 'react'

import './stepThree.style.css';

import logo from './logo.png';
import product from './product-3.png';
import paypal from './paypal.svg';

const StepThree = () => {
    const [ checked, setChecked ] = useState(false);
    return ( 
        <div className="step-three">
            <div className="step-three-header">
                <div className="selection-qualifies">
                    <div className="image">
                        <img src={logo} alt=""/>
                    </div>
                    <p>This selection qualifies for</p>
                    <h3>FREE SHIPPING</h3>
                </div>
                <div className="explore-air-image">
                    <img src={product} alt=""/>
                </div>
            </div>

            <h2>Step 3: Payment Method</h2>

            <div className="payment-method">
                <div className="crdit-card-method">
                    <input type="radio" checked={checked} onClick={() => setChecked(!checked)}/>
                    <p>Credit Card</p>
                </div>
                <div className="paypal-method">
                    <input type="radio" checked={checked}/>
                    <img src={paypal} alt=""/>
                </div>
            </div>
            
        </div>
     );
}
 
export default StepThree;