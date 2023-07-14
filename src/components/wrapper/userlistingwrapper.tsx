import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Box,
    Button,
    Center,
    Fade,
    Heading,
    Spinner,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import {
    FC,
    useEffect,
    useState,
    useRef
} from "react";
import { useNavigate } from "react-router";

type ListingAlertProps = {
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void
}

const ListingAlert: FC<ListingAlertProps> = ({ isOpen, onOpen, onClose }) => {
    const cancelRef = useRef<HTMLButtonElement>(null)
    const navigate = useNavigate()
    return (
        <>
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Delete Customer
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure? You can't undo this action afterwards.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme='red' onClick={() => navigate('../new')} ml={3}>
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}

export const UserListingWrapper: FC = () => {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 500)
    }, [])
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box
            w='100vw'
            h='100vh'
        >
            <Fade in={isLoading} unmountOnExit={true}>
                <Center>
                    <Spinner />
                </Center>
            </Fade>
            <ListingAlert isOpen={!isLoading} onOpen={onOpen} onClose={onClose} />
        </Box >
    )
}