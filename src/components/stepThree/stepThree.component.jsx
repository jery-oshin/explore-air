import React from 'react'

import './stepThree.style.css';

import logo from './logo.png';
import product from './product-3.png';

const StepThree = () => {
    return ( 
        <div className="step-four">
            <div className="step-four-header">
                <div className="selection-qualifies">
                    <img className='step-four-logo' src={logo} alt=""/>
                    <div className="free-shipping">
                        <p>This selection qualifies for</p>
                        <p>FREE SHIPPING</p>

                    </div>
                </div>
                <div className="explore-air-image">
                    <img src={product} alt=""/>
                </div>
            </div>
            <h2 className='step-title'>Step 3: Shihpping Details</h2>
            <form action="">
            <div class="input-group mb-3">
                <select class="custom-select" id="inputGroupSelect01">
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                </div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Town/City" aria-label="Town/City" aria-describedby="basic-addon1"/>
                </div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Street & House Number" aria-label="Street-House-Number" aria-describedby="basic-addon1"/>
                </div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Zip / Postal Code" aria-label="Zip-Postal-Code" aria-describedby="basic-addon1"/>
                </div>
            </form>
        </div>
    );
}
 
export default StepThree;