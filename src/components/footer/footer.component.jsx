import React from 'react'

import security from './security.png'

import './footer.style.css';

const Footer = () => {
    return ( 
        <div className='footer'>
            <p className='note' >Your purchases will appear as "drone720x.com" on your credit card statement.</p>
            <img className='security' src={security} alt=""/>
            <p>Secure 256-bit SSL Encryption</p>
            <div className='footer-nav'>
                <p> <a href="#">Home</a></p>
                <p> <a href="#">Contact Us</a></p>
                <p> <a href="">Terms & Conditions</a></p>
                <p> <a href="">Privacy Policy</a></p>
                <p> <a href="">Affiliate Program</a></p>
                <p> <a href="">COVID-19 Delivery Update</a></p>

            </div>
            <p>Copyright 2018-2020 Hyperstech.</p>
            <p>All Rights Reserved</p>
        </div>
     );
}
 
export default Footer;