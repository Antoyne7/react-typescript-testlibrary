import React from 'react'
import './CheckMark.scss'

import tick from '../../assets/tick.svg'

function CheckMark({checked = false}) {
    return (
        <div className={`CheckMark ${checked ? 'checked' : ''}`}>
            {checked ? <img src={tick} alt={tick}/> : ''}
        </div>
    )
}

export default CheckMark
