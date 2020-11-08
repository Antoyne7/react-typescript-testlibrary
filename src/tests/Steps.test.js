import {render, screen, fireEvent, getByRole, getByText } from '@testing-library/react';
import App from '../App';
import React from "react";

test('Render Steps page', () => {
    render(<App/>);
    const title = screen.getByRole('heading', {name: 'Training'});
    expect(title).toBeInTheDocument();
});

test('Render StepsList component', () => {
    render(<App/>);
    const stepsList = document.querySelector('.StepsList')
    expect(stepsList).toBeInTheDocument();
});

test('Render StepsViewer component', () => {
    render(<App/>);
    const stepsViewer = document.querySelector('.StepsViewer')
    expect(stepsViewer).toBeInTheDocument();

    const validateButton = getByRole(stepsViewer, 'button', {name: 'This step is already validated'});
    expect(validateButton).toBeInTheDocument();

    const activeStepName = getByText(stepsViewer,/Constitution du dossier/i)
    expect(activeStepName).toBeInTheDocument();

    const notValidatedStepCard = screen.getByText('Accompagnement psychologique')
    fireEvent.click(notValidatedStepCard)
    expect(validateButton).toContainHTML('Validate this step')
    expect(activeStepName).toContainHTML('Accompagnement psychologique');
});

test('Render StepsCard component and CheckMark', () => {
    render(<App />)

    const steps = document.querySelectorAll('.StepsCard')

    const validatedStep = steps[0]
    expect(validatedStep).toBeDefined()
    const validatedStepTitle = getByRole(validatedStep, 'heading', { name: 'Constitution du dossier'})
    expect(validatedStepTitle).toBeInTheDocument()
    const validatedStepDuration = getByText(validatedStep, '2 minutes')
    expect(validatedStepDuration).toBeInTheDocument()

    const validatedCheckMark = validatedStep.querySelector('.CheckMark .check')
    expect(validatedCheckMark).toBeInTheDocument()
    expect(validatedCheckMark).not.toBeEmptyDOMElement()

    const notValidatedStep = steps[1]
    expect(notValidatedStep).toBeDefined()
    const notValidatedStepTitle = getByRole(notValidatedStep, 'heading', { name: 'Accompagnement psychologique'})
    expect(notValidatedStepTitle).toBeInTheDocument()
    const notValidatedStepDuration = getByText(notValidatedStep, '5 minutes')
    expect(notValidatedStepDuration).toBeInTheDocument()

    const notValidatedCheckMark = notValidatedStep.querySelector('.CheckMark .check')
    expect(notValidatedCheckMark).toBeInTheDocument()
    expect(notValidatedCheckMark).toBeEmptyDOMElement()
})


