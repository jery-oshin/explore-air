import React from 'react'

import './stepFour.style.css';

import paypal from './paypal.svg';
import card from './card.svg';
import visa from './visa.svg';
import mastercard from './mastercard.svg';

const StepFour = (props) => {

    return ( 
        <div className="step-four">
            
            <h2 className='step-title'>Step 4: Payment Method</h2>

            <div className="payment-method">

                <label className="form-check-label payment-card credit-card form-check" for="credit-card">

                    <input className="payment-radio form-check-input" type="radio" name="payment" id="credit-card" value="credit-card" 
                    onChange={ () => props.handleRadioState() }
                    checked={props.radioState}/>

                    <div className="option">
                        <img className='card' src={card} alt=""/>
                        Credit Card
                        
                        {/* <div className="type-of-card">
                            <img src={visa} alt=""/>
                            <img src={mastercard} alt=""/>
                        </div> */}
                    </div>
                    
                </label>
                <label className="payment-card paypal form-check" for="paypal">

                        <input 
                            className="payment-radio form-check-input" 
                            type="radio" 
                            name="payment" 
                            id="paypal" 
                            value="paypal" 

                            onChange={ () => props.handleRadioState() }
                            checked={!props.radioState}
                        />
                        
                        <img src={paypal} alt=''/>
                   
                </label>
            </div>
            
        </div>
     );
}
 
export default StepFour;