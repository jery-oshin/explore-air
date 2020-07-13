import React from 'react';
import logo from './logo.png';
import './header.style.css';

const Header = () => {
    return ( 
        <div className='image'>

            <img className='headerImage' src={logo}/>
        </div>
    );
}
 
export default Header;