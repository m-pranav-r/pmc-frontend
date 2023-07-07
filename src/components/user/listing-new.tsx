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
    Center,
    Fade,
    Spinner,
} from '@chakra-ui/react'

import {
    FC,
    useEffect,
    useRef,
    useState
} from "react"

import { ActionFunction, Form, useNavigate } from 'react-router-dom'

import { UserFormStepper } from './listing-new-stepper'
import { FirstForm } from './listing-new-form-1'


export const UserListingDialog: FC = () => {
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

export const formAction: ActionFunction = async ({ request, params }) => {
    const data = await request.formData()
    console.log(data)
    return null
}

export const UserListingForm: FC = () => {
    const [focusOnFirst, setFocusOnFirst] = useState(true)
    const [isProcessing, setIsProcessing] = useState(false)
    const navigate = useNavigate()
    return (
        <Box>
            <UserFormStepper index={1} count={3} />
            <Fade in={isProcessing}>
                <Center>
                    <Spinner />
                </Center>
            </Fade>
            <FirstForm focus={focusOnFirst} nextCallback={() => {
                setFocusOnFirst(false)
                setIsProcessing(true)
                setTimeout(() => {
                    setFocusOnFirst(true)
                    setIsProcessing(false)
                }, 3000)
            }} />
        </Box >
    );
}