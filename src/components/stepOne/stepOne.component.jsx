import React from 'react';

import './stepOne.style.css';

import bestseller from './bestseller.png'; 

const StepOne = () => {
    return ( 
        <div className='step-one'>
            <h2 className='step-title'>Step 1: Choose The Number of Items </h2>
            <div className='step-one-subtitle'>
                <h3>Article</h3>
                <h3>Total Price</h3>
            </div>
            <form className='step-one-form' action="">
                <div className="choose form-check">
                    <img className='bestseller' src={bestseller} alt=""/>
                    <input className="step-one-input form-check-input" type="radio" name="buy-article" id="exampleRadios0" value="option1"/>
                    <div className='articles'>
                        <div className="label">
                            <label className="form-check-label" for="exampleRadios0">
                                Buy 3 Explore AIR, GET 2
                            </label>
                            <label className="form-check-label" for="exampleRadios0">
                                FREE (3 458 RD$/each)
                            </label>
                        </div>
                        
                        <label className="form-check-label" for="exampleRadios0">
                        17 291 RD$
                        </label>
                    </div>
                </div>
                

                <div class="form-check">
                    <input class="form-check-input" type="radio" name="buy-article" id="exampleRadios1" value="option1"/>
                    <div className='articles'>
                        <div className="label">
                            <label className="form-check-label" for="exampleRadios1">
                                Buy 3 Explore AIR, GET 2
                            </label>
                            <label className="form-check-label" for="exampleRadios1">
                                FREE (3 458 RD$/each)
                            </label>
                        </div>
                        
                        <label className="form-check-label" for="exampleRadios1">
                        17 291 RD$
                        </label>
                    </div>
                </div>

                <div class="form-check">
                    <input className="form-check-input" type="radio" name="buy-article" id="exampleRadios2" value="option2"/>
                    <div className='articles'>
                        <div className="label">
                            <label class="form-check-label" for="exampleRadios2">
                                Buy 3 Explore AIR, GET 2
                            </label>
                            <label class="form-check-label" for="exampleRadios2">
                                FREE (3 458 RD$/each)
                            </label>
                        </div>
                        
                        <label class="form-check-label" for="exampleRadios2">
                        17 291 RD$
                        </label>
                    </div>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="radio" name="buy-article" id="exampleRadios3" value="option3"/>
                    <div className='articles'>
                        <div className="label">
                            <label className="form-check-label" for="exampleRadios3">
                                Buy 3 Explore AIR, GET 2
                            </label>
                            <label className="form-check-label" for="exampleRadios3">
                                FREE (3 458 RD$/each)
                            </label>
                        </div>
                        
                        <label className="form-check-label" for="exampleRadios3">
                        17 291 RD$
                        </label>
                    </div>
                </div>

                <div className="form-check">
                    <input class="form-check-input" type="radio" name="buy-article" id="exampleRadios4" value="option4"/>
                    <div className='articles'>
                        <div className="label">
                            <label className="form-check-label" for="exampleRadios4">
                                Buy 3 Explore AIR, GET 2
                            </label>
                            <label className="form-check-label" for="exampleRadios4">
                                FREE (3 458 RD$/each)
                            </label>
                        </div>
                        
                        <label className="form-check-label" for="exampleRadios4">
                        17 291 RD$
                        </label>
                    </div>
                </div>

            </form>
        </div>
     );
}
 
export default StepOne;