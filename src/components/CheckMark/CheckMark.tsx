import React from 'react'
import './CheckMark.scss'

import tick from '../../assets/tick.svg'

type CheckMarkProps = Readonly<{
    isChecked: boolean,
    isLastStep: boolean
}>

const CheckMark: React.FC<CheckMarkProps> = ({isChecked = false, isLastStep = false}) => {
    return (
        <div className={"CheckMark"}>
            <div className={`check ${isChecked ? 'checked' : ''}`}>
                {isChecked ? <img src={tick} alt={tick}/> : ''}
            </div>
            {!isLastStep && <div className={"check-line"}/>}
        </div>
    )
}

export default CheckMark
