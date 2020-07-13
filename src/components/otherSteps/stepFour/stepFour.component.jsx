import React from 'react'

import './stepFour.style.css';

const StepFour = () => {
    return ( 
        <div className="step-four">
            <h2>Step 4: Shihpping Details</h2>
            <form action="">
                <select name="" id="">
                    <option value="Dominican Republic"> Dominican Republic</option>
                </select>
                <div className="city">
                    <label htmlFor="">Town/City</label>
                    <input className='input-text' type="text"/>
                </div>
                <div className="street">
                    <label htmlFor="">Street & House Number</label>
                    <input className='input-text' type="text"/>
                </div>
                <div className="postal-code">
                    <label htmlFor="">Zip/Postal Code</label>
                    <input className='input-text' type="text"/>
                </div>
            </form>
        </div>
    );
}
 
export default StepFour;