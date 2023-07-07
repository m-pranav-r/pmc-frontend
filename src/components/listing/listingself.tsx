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
    Stack,
    Heading,
} from '@chakra-ui/react'

import {
    FC,
    useEffect,
    useRef
} from "react"

import { Form, useSubmit } from 'react-router-dom'

import { UserFormStepper } from './listingstepper'

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
    const submit = useSubmit()
    return (
        <Box>
            <UserFormStepper index={1} count={3} />
            <Center>
                <Stack>
                    <Form
                        onChange={e => submit(e.currentTarget)}
                    >
                        <Box
                            mt='80px'
                            bg='red.100'
                            border='1px solid red'
                            borderRadius='lg'
                            boxSize='xl'
                            w='1200px'
                        >
                            <Heading
                            >
                                Form Area 1
                            </Heading>


                        </Box>
                        <Box>
                            <Heading>
                                Form Area 2
                            </Heading>
                        </Box>
                        <Box>
                            <Heading>
                                Form Area 3
                            </Heading>
                        </Box>
                    </Form>
                </Stack>
            </Center>
        </Box>
    );
}