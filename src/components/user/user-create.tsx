import {
    Box,
    Button,
    Center,
    FormControl,
    FormLabel,
    HStack,
    Image,
    Input,
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    VStack,
    useSteps
} from "@chakra-ui/react"
import { Form } from 'react-router-dom'
import { FC, useRef, useState } from "react"

const steps = [
    { title: 'First', description: 'Contact Info' },
    { title: 'Second', description: 'Date & Time' },
    { title: 'Third', description: 'Select Rooms' },
]


const FormStepper: FC = () => {
    const { activeStep } = useSteps({
        index: 1,
        count: steps.length,
    })
    return (
        <Center>
            <Box
                position='fixed'
                bgColor='#222233'
                border='1px solid #333344'
                ml='100%'

            >
                <Stepper
                    index={activeStep}
                    colorScheme='whiteAlpha'
                    h='70vh'
                    orientation="vertical"
                >
                    {steps.map((step, index) => (
                        <Step key={index}
                        //color='white'
                        >
                            <StepIndicator>
                                <StepStatus
                                    complete={<StepIcon />}
                                    incomplete={<StepNumber />}
                                    active={<StepNumber />}
                                />
                            </StepIndicator>

                            <Box
                                flexShrink='0'
                            >
                                <StepTitle
                                >{step.title}</StepTitle>
                                <StepDescription>{step.description}</StepDescription>
                            </Box>

                            <StepSeparator />
                        </Step>
                    ))}
                </Stepper>
            </Box>
        </Center >
    )
}

export const UserCreateForm: FC = () => {
    const [imgURL, setImgURL] = useState('')
    const baseImgInpRef = useRef<HTMLInputElement>(null)
    const setImgFromURL = () => {
        setImgURL(baseImgInpRef.current?.value ?? '')
    }
    return (
        <Box
            minW='100vw'
            minH='100vh'
            bgColor='#111122'
            pt='10vh'
        >
            <HStack>
                <Box
                    w='100%'
                    h='100%'
                >
                    <Center>
                        <Box
                            border='2px solid black'
                            minW='50vw'
                        >
                            <Box
                            >
                                <Form
                                    method='post'
                                >
                                    <FormControl>
                                        <Box>
                                            <Box
                                                mx='5%'
                                            >
                                                <Input
                                                    name='basename'
                                                    placeholder='Base Name'
                                                    size='lg'
                                                    isRequired
                                                />
                                                <Box
                                                    pt='2vh'
                                                >
                                                    <HStack
                                                        justify='space-between'
                                                    >
                                                        <FormLabel
                                                            ml='5%'
                                                        >
                                                            Listed Owner Name
                                                        </FormLabel>
                                                        <Input
                                                            name='ownername'
                                                            placeholder='...'
                                                            size='md'
                                                            maxW='45%'
                                                            mr='5%'
                                                            isRequired
                                                        />
                                                    </HStack>
                                                </Box>
                                                <Box
                                                    pt='2vh'
                                                >
                                                    <HStack
                                                        justify='space-between'
                                                    >
                                                        <FormLabel
                                                            ml='5%'
                                                        >
                                                            Base Picture URL
                                                        </FormLabel>
                                                        <Input
                                                            name='ownername'
                                                            placeholder='...'
                                                            size='md'
                                                            maxW='45%'
                                                            mr='5%'
                                                            isRequired
                                                            ref={baseImgInpRef}
                                                        />
                                                        <Button
                                                            onClick={setImgFromURL}
                                                        >Test</Button>
                                                    </HStack>
                                                    <Center
                                                        py='3vh'
                                                    >
                                                        <Image
                                                            src={imgURL}
                                                            w='10vw'
                                                            h='10vh'
                                                        />
                                                    </Center>
                                                </Box>
                                                <Center
                                                    ml='60%'
                                                    mb='10%'
                                                >
                                                    <Button
                                                        onClick={() => {

                                                        }}
                                                    >
                                                        Move to next
                                                    </Button>
                                                </Center>
                                            </Box>
                                        </Box>
                                    </FormControl>
                                </Form>
                            </Box>
                        </Box>
                    </Center>
                </Box>
            </HStack>
        </Box>
    )
}