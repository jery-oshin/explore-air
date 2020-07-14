import React from 'react'

import './stepTwo.style.css';

const StepTwo = () => {
    return ( 
        <div className='step-two'>
            <h2 className='step-title'>Stem 2: Contact Information </h2>
            <form className='step-two-form'>
                <div className="gender">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="gender" id="Mr" value="Mr"/>
                        <label class="form-check-label" for="Mr">
                            Mr
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="gender" id="Mrs" value="Mrs"/>
                        <label class="form-check-label" for="Mrs">
                            Mr
                        </label>
                    </div>
                </div>
                <div className="personal-information">
                    <div class="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Last Name" aria-label="Last-Name" aria-describedby="basic-addon1"/>
                    </div>
                    <div class="input-group mb-3">
                        <input type="text" className="form-control" placeholder="First Name" aria-label="First Name" aria-describedby="basic-addon1"/>
                    </div>
                    
                    <div class="form-group">
                        <input type="email" className="form-control" placeholder='Email Address' id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">country</button>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                    <div role="separator" class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Separated link</a>
                                </div>
                            </div>
                            <input type="text" class="form-control" placeholder='(829) 312 9631' aria-label="Text input with dropdown button" pattern='^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$'/>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
 
export default StepTwo;