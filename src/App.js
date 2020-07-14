import React from 'react';

import Header from './components/header/header.component';
import Product from './components/product/product.component';
import Discount from './components/discount/discount.component';
import SpecialOffert from './components/special-offer/specialOffer.component';

import LastSteps from './components/lastSteps/lastSteps.component';

import Footer from './components/footer/footer.component';


import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Product />
      <SpecialOffert />
      <div className='steps'> 
        <Discount  />

        <LastSteps />
        
      </div>

      
      
    </div>
  );
}

export default App;
