import {
    Box,
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
} from '@chakra-ui/react'

import { FC } from 'react'

type StepData = {
    index: number,
    count: number
}

export const UserFormStepper: FC<StepData> = ({ index, count }) => {
    const steps = [
        { title: "Identification" },
        { title: "Metrics" },
        { title: "Final" }
    ]
    const { activeStep } = useSteps({
        index: index,
        count: count
    })
    return (
        <Box
            w='2xl'
            ml='20'
            mt='10'
        >
            <Stepper
                px='10'
                bg='green.100'
                py='5'
                border='1px solid green'
                borderRadius='full'
                colorScheme='green'
                index={activeStep}
            >
                {steps.map((step, index) => (
                    <Step key={index}>
                        <StepIndicator>
                            <StepStatus
                                complete={<StepIcon />}
                                incomplete={<StepNumber />}
                                active={<StepNumber />}
                            />
                        </StepIndicator>
                        <Box>
                            <StepTitle>{step.title}</StepTitle>
                        </Box>
                        <StepSeparator />
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}
