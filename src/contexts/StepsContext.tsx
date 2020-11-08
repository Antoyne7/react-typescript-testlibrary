import React from 'react'
import {Step} from '../pages/Steps/Steps'

export type StepContext = {
    steps: Step[],
    activeStep: Step,
    validateStep: Function,
    onChange: Function
}

const stepsContext: StepContext = {
    steps: [],
    activeStep: {
        id: 0,
        name: '',
        duration: 0,
        validated: true
    },
    validateStep: () => {
    },
    onChange: () => {
    }
}

export default React.createContext(stepsContext)
