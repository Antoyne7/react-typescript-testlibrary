import React, {useContext} from 'react'
import './StepsList.scss'

import StepsContext from "../../../contexts/StepsContext";

import StepsCard from "../StepsCard/StepsCard";
import {Step} from "../../../pages/Steps/Steps";

type StepsListProps = Readonly<{
  isAllowedToSeeStep: Function
}>

const StepsList: React.FC<StepsListProps> = ({isAllowedToSeeStep}) => {

    const { steps }: {steps: Step[]} = useContext(StepsContext)

    const renderSteps = (): JSX.Element[] => {
        const lastIndex = steps.length - 1
        return steps.map((step: Step, index: number) => {
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
