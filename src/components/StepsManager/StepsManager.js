import React from 'react'
import './StepsManager.scss'

import CheckMark from "../CheckMark/CheckMark";

function StepsManager() {

    const steps = [
        {
            name: 'Constitution du dossier',
            duration: 2,
            link: '',
            validated: true
        },
        {
            name: 'Accompagnement psychologique',
            duration: 5,
            link: '',
            validated: false
        },
        {
            name: 'Stimulation et déclenchement',
            duration: 5,
            link: '',
            validated: false
        },
        {
            name: 'Ponction et anesthésie',
            duration: 4,
            link: '',
            validated: false
        }
    ]

    const stepCard = (step) => {
        return (
            <div className={"step-card"}>
                <div className={"check-container"}>
                    <CheckMark checked={step.validated} />
                </div>
                <div>
                    <h3>{step.name}</h3>
                    <p>{step.duration} minutes</p>
                </div>
            </div>
        )
    }

    return (
        <div className={"StepsManager"}>
            {steps.map(step => stepCard(step))}
        </div>
    )
}

export default StepsManager
