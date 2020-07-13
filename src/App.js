import React from 'react';

import Header from './components/header/header.component';
import Product from './components/product/product.component';
import Offer from './components/offer/offer.component';
import Discount from './components/discount/discount.component';
import SpecialOffert from './components/special-offer/specialOffer.component';
import Off from './components/off/off.component';

import StepThree from './components/otherSteps/stepThree/stepThree.component';
import StepFour from './components/otherSteps/stepFour/stepFour.component';
import StepFive from './components/otherSteps/stepFive/stepFive.component';


import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Product />
      <SpecialOffert />
      {/* <Offer /> */}
      <Discount />
      {/* <Off /> */}
      <StepThree />
      <StepFour />
      <StepFive />
          
    </div>
  );
}

export default App;
