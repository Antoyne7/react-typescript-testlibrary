import React, { useContext } from 'react'
import './StepsViewer.scss'

import StepsContext from "../../../contexts/StepsContext";

const StepsViewer: React.FC = () => {

    const { activeStep, validateStep } = useContext(StepsContext)

    return (
        <div className={"StepsViewer"}>
            <p>
                Actual step: {activeStep.name}
            </p>
            <button onClick={() => validateStep(activeStep.id)} type="button">
                {activeStep.validated ?
                    'This step is already validated' : 'Validate this step'}
            </button>
        </div>
    )
}

export default StepsViewer
