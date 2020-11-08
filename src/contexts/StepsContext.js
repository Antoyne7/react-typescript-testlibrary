import React from 'react'

export default React.createContext({
    steps: [],
    activeStep: {},
    validateStep: () => {},
    onChange: () => {}
})
