import React, { useState } from 'react'

import StepsList from "../../components/Steps/StepsList/StepsList";
import StepsViewer from "../../components/Steps/StepsViewer/StepsViewer";
import StepsContext, {StepContext} from "../../contexts/StepsContext";

export type Step = Readonly<{
    id: number,
    name: string,
    duration: number,
    validated: boolean
}>

type StepState = Readonly<{
    steps: Step[],
    activeStep: Step
}>

const stepsList: Step[] = [
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

const Steps: React.FC = () => {

    const [stepsState, updateStepsState]: [StepState, Function] = useState({
        steps: stepsList,
        activeStep: stepsList[0]
    })

    const validateStep = (id: number): void => {
        updateStepsState((prevState: StepState) => {
            const updatedSteps = prevState.steps.map((step: Step) => {
                if (step.id === id) {
                    return {
                        ...step,
                        validated: true
                    }
                }
                return step
            })
            return { ...prevState, steps: updatedSteps }
        })
        if (stepsState.activeStep.id === id) {
            onChange(id)
        }
    }

    const onChange = (id: number): void => {
        if (isAllowedToSeeStep(id)) {
            updateStepsState((prevState: StepState) => {
                const index = prevState.steps.findIndex(step => step.id === id)
                const activeStep = prevState.steps[index]
                return { ...prevState, activeStep }
            })
        }
    }

    const stepsContext: StepContext = {
        steps: stepsState.steps,
        activeStep: stepsState.activeStep,
        validateStep,
        onChange
    }

    const isAllowedToSeeStep = (id: number): boolean => {
        const steps = stepsState.steps
        const index = steps.findIndex(step => step.id === id)

        if (index < 0 || index > steps.length - 1) {
            return false
        }

        // If the step is already validated
        if (steps[index].validated) {
            return true
        }

        // If it's the first step
        if (index === 0) {
            return true
        }

        // If step before is validated
        if (index >= 1 && steps[index - 1].validated) {
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
