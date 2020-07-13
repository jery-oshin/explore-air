import React from 'react';

import './stepOne.style.css';

import bestseller from './bestseller.png'; 

const StepOne = () => {
    return ( 
        <div className='step-one'>
            <h2>Stem 1: Choose The Number of Items </h2>
            <div className='step-one-subtitle'>
                <h3>Article</h3>
                <h3>Total Price</h3>
            </div>
            <form className='step-one-form' action="">
                <div className='choose'>
                    <img className='bestseller' src={bestseller} alt=""/>
                    <input className='step-one-input' type="radio" />
                    <div className="choose-info">
                        <div className="articles">
                            <p className="title">Buy 3 Explore AIR, GET 2</p>
                            <p className="title">FREE (3 458 RD$/each)</p>
                        </div>

                        <div className="price">
                            <p className="prive-before">17 291 RD$</p>
                        </div>
                    </div>
                </div>

                <div className='choose'>
                    <input className='step-one-input' type="radio" />
                    <div className="choose-info">
                        <div className="articles">
                            <p className="title">Buy 3 Explore AIR, GET 2</p>
                            <p className="title">FREE (3 458 RD$/each)</p>
                        </div>

                        <div className="price">
                            <p className="prive-before">17 291 RD$</p>
                        </div>
                    </div>
                </div>

                <div className='choose'>
                    <input className='step-one-input' type="radio" />
                    <div className="choose-info">
                        <div className="articles">
                            <p className="title">Buy 3 Explore AIR, GET 2</p>
                            <p className="title">FREE (3 458 RD$/each)</p>
                        </div>

                        <div className="price">
                            <p className="prive-before">17 291 RD$</p>
                        </div>
                    </div>
                </div>

                <div className='choose'>
                    <input className='step-one-input' type="radio" />
                    <div className="choose-info">
                        <div className="articles">
                            <p className="title">Buy 3 Explore AIR, GET 2</p>
                            <p className="title">FREE (3 458 RD$/each)</p>
                        </div>

                        <div className="price">
                            <p className="prive-before">17 291 RD$</p>
                        </div>
                    </div>
                </div>

            </form>
        </div>
     );
}
 
export default StepOne;