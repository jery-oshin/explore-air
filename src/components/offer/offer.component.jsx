import React from 'react'

import { ReactComponent as Icon } from './truc.svg';

import './offer.style.css';

const Offer = () => {
    return ( 
        <div className='offer'>
            <h6>SPECIAL OFFER:</h6>
            <p>Get Explore AIR now at the special promo price of</p>
            <div className="price">
                <p>RD$ 5 761 RD $11 522</p>
            </div>
            <div className="save"> SAVE 50% </div>
            <div className='card'>
                <div className='freeShipping'>
                    <Icon className='icon' />
                    <p> FREE SHIPPING </p>
                </div>
                <p>on All Today's Order !</p>
            </div>
        </div>
     );
}
 
export default Offer;