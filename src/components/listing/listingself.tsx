import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    useDisclosure,
    Button,
    Box,
} from '@chakra-ui/react'

import {
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
import { FC, useEffect, useRef } from "react"
export const UserListing: FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const ldr = useRef<HTMLButtonElement>(null)
    useEffect(() => {
        setTimeout(onOpen, 3000)
    }, [])
    return (
        <Box>
            <AlertDialog
                isOpen={isOpen}
                onClose={onClose}
                leastDestructiveRef={ldr}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            You have yet to make a listing!
                        </AlertDialogHeader>
                        <AlertDialogBody>
                            List your base on here to market to potential buyers!
                        </AlertDialogBody>
                        <AlertDialogFooter>
                            <Button ref={ldr} bg='green.100'>Create</Button>
                            <Button>Return to Listings</Button>
                            <AlertDialogCloseButton />
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </Box>
    );
}

export const UserListingForm: FC = () => {
    const steps = [
        { title: "Identification" },
        { title: "Metrics" },
        { title: "Final" }
    ]
    const { activeStep } = useSteps({
        index: 1,
        count: 3
    })
    return (
        <Box>
            <Stepper index={activeStep}>
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