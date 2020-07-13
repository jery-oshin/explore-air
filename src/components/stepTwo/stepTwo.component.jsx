import React from 'react'

import './stepTwo.style.css';

const StepTwo = () => {
    return ( 
        <div className='step-two'>
            <h2>Stem 2: Contact Information </h2>
            <form className='step-two-form'>
                <div className="gender">
                    <div className="input mr">
                        <input className='' type="radio"/>
                        <label className="label">Mr</label>
                    </div>
                    <div className="input mrs">
                        <input className='' type="radio"/>
                        <label className="label">Mrs</label>
                    </div>
                </div>
                <div className="personal-information">
                    <div className="name">
                        <div className="input last-name">
                            <label className="label">Last Name</label>
                            <input className='input-text' type="text"/>
                        </div>
                        <div className="input first-name">
                            <label className="label">First Name</label>
                            <input className='input-text' type="text"/>
                        </div>
                    </div>
                    <div className="input email">
                        <label className="label">Email</label>
                        <input className='input-text' type="text"/>
                    </div>
                    <div className="input telephone">
                        <label className="label">Telephone</label>
                        <input className='input-text' type="text"/>
                    </div>
                </div>
            </form>
        </div>
    );
}
 
export default StepTwo;