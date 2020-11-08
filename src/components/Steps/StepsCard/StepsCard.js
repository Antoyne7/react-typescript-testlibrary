import React, {useContext} from 'react'
import './StepsCard.scss'

import CheckMark from "../../CheckMark/CheckMark";
import StepsContext from "../../../contexts/StepsContext";

const StepsCard = ({step, isLastStep, isDisabled = false}) => {

    const {activeStep, onChange} = useContext(StepsContext)

    return (
        <div onClick={() => onChange(step.id)}
             className={`StepsCard 
                ${isDisabled ? 'disabled' : ''}
                ${activeStep.id === step.id ? 'active-step' : ''}`}>
            <div className={"check-container"}>
                <CheckMark isChecked={step.validated} isLastStep={isLastStep}/>
            </div>
            <div className={"card-info"}>
                <h3>{step.name}</h3>
                <p>{step.duration} minutes</p>
            </div>
        </div>
    )

}

export default StepsCard
