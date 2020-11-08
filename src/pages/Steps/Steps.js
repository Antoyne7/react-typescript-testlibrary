import React, {useState} from 'react'

import StepsList from "../../components/Steps/StepsList/StepsList";
import StepsViewer from "../../components/Steps/StepsViewer/StepsViewer";
import StepsContext from "../../contexts/StepsContext";

const stepsList = [
    {
        id: 1,
        name: 'Constitution du dossier',
        duration: 2,
        validated: true
    },
    {
        id: 2,
        name: 'Accompagnement psychologique',
        duration: 5,
        validated: false
    },
    {
        id: 3,
        name: 'Stimulation et déclenchement',
        duration: 5,
        validated: false
    },
    {
        id: 4,
        name: 'Ponction et anesthésie',
        duration: 4,
        validated: false
    }
]

const Steps = () => {

    const [stepsState, updateStepsState] = useState({
        steps: stepsList,
        activeStep: stepsList[0]
    })

    const validateStep = (id) => {
        updateStepsState(prevState => {
            const newState = {...prevState}
            const index = newState.steps.findIndex(step => step.id === id)
            newState.steps[index].validated = true
            return newState
        })
    }

    const onChange = (id) => {
        if (isAllowedToSeeStep(id)) {
            updateStepsState(prevState => {
                const newState = {...prevState}
                const index = newState.steps.findIndex(step => step.id === id)
                newState.activeStep = newState.steps[index]
                return newState
            })
        }
    }

    const stepsContext = {
        steps: stepsState.steps,
        activeStep: stepsState.activeStep,
        validateStep,
        onChange
    }

    const isAllowedToSeeStep = (id) => {
        const steps = stepsState.steps
        const index = steps.findIndex(step => step.id === id)

        if (typeof index !== "number" ||
            index < 0 ||
            index > steps.length - 1) {
            return false
        }

        // If the step is already validated
        if (steps[index].validated === true) {
            return true
        }

        // If it's the first step
        if (index === 0) {
            return true
        }

        // If step before is validated
        if (index >= 1 && steps[index - 1].validated === true) {
            return true
        }

        return false
    }


    return (
        <StepsContext.Provider value={stepsContext}>
            <div className="App">
                <h2 className="training-title">Training</h2>
                <div className={"container"}>
                    <div style={{width: '35%'}}>
                        <StepsList isAllowedToSeeStep={isAllowedToSeeStep}/>
                    </div>
                    <StepsViewer/>
                </div>
            </div>
        </StepsContext.Provider>
    )
}

export default Steps
