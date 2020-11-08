import React, {useContext} from 'react'
import './StepsList.scss'

import StepsContext from "../../../contexts/StepsContext";

import StepsCard from "../StepsCard/StepsCard";

const StepsList = ({isAllowedToSeeStep}) => {

    const { steps } = useContext(StepsContext)

    const renderSteps = () => {
        const lastIndex = steps.length - 1
        return steps.map((step, index) => {
            return (
                <StepsCard
                    key={step.id}
                    step={step}
                    isLastStep={index >= lastIndex}
                    isDisabled={!isAllowedToSeeStep(step.id)}
                />
            )
        })
    }

    return (
        <div className={"StepsList"}>
            {renderSteps()}
        </div>
    )
}

export default StepsList
