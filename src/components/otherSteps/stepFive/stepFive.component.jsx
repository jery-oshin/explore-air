import React from 'react'

import './stepFive.style.css';

const StepFive = () => {
    return ( 
        <div className='step-five'>
            <h2>Step 5: Payment Details</h2>
            <div className="payment-details">
                <div className="card-number">
                    <label htmlFor="">Card Number</label>
                    <input className='input-text' type="text"/>
                </div>
                <div className="date">
                    <label htmlFor="">MM / YYYY</label>
                    <input className='input-text' type="text"/>
                </div>
                <div className="security-code">
                    <label htmlFor="">Security Code</label>
                    <input className='input-text' type="text"/>
                </div>
            </div>
        </div>
    );
}
 
export default StepFive;