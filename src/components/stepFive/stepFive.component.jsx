import React from 'react'

import './stepFive.style.css';

const StepFive = () => {
    return ( 
        <div className='step-five'>
            <h2 className='step-title'>Step 5: Payment Details</h2>
            <div className="payment-details">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Card Number" aria-label="Card-Number" aria-describedby="basic-addon1"/>
                </div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="MM / YYYY" aria-label="MM-YYYY" aria-describedby="basic-addon1" pattern="^((0[1-9])|(1[0-2]))\/((2009)|(20[1-2][0-9]))$"/>
                </div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Security Code" aria-label="Security-Code" aria-describedby="basic-addon1"/>
                </div>
            </div>
        </div>
    );
}
 
export default StepFive;