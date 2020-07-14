import React, {useState} from 'react'

import StepFive from '../stepFive/stepFive.component';
import StepFour from '../stepFour/stepFour.component';
import StepThree from '../stepThree/stepThree.component';
import SendMeButton from '../submit/submit.component';

import Footer from '../footer/footer.component';

import './lastSteps.style.css';


const LastSteps = () => {

    const [check, setCheck ] = useState(true);

    const showStepFive = () => {
        setCheck(!check);
    }

    return ( 
        <div className='last-steps'>
            <StepThree />
            <StepFour 
                handleRadioState={showStepFive}
                radioState={check}
            />
            {check === true ? <StepFive /> : null}
            <SendMeButton />
            <Footer />
        </div>
     );
}
 
export default LastSteps;