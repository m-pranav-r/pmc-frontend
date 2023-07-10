import { CheckIcon } from "@chakra-ui/icons";
import {
    Box,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    VStack,
    Heading,
    Image,
    Text,
    HStack,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    ModalFooter,
    Button,
    AspectRatio,
    Card,
    CardHeader,
    Stack,
    CardBody,
    StackDivider
} from "@chakra-ui/react";
import { FC, useContext, useEffect } from "react";
import { ListingProps, ListingContext } from "./listing";

type ListingModalProps = {
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void,
}

export const ListingModal: FC<ListingModalProps> = ({ isOpen, onOpen, onClose }) => {
    const listingData: ListingProps = useContext(ListingContext)
    useEffect(() => {

    })
    return (
        <Box
        >
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                size='5xl'
            >
                <ModalOverlay
                />
                <ModalContent
                >

                    <ModalCloseButton />
                    <ModalBody
                        pt='10vh'
                    >
                        <Box
                        //minH='200vh'
                        >
                            <VStack
                                spacing='5vh'
                            >
                                <Box
                                >
                                    <Heading
                                        size='3xl'
                                    >{listingData.name}</Heading>
                                </Box>
                                <HStack
                                    w='100%'
                                    justifyContent='end'
                                    spacing='3vw'
                                >
                                    <Image
                                        src={listingData.imageid}
                                        borderRadius='md'
                                        shadow='lg'
                                        boxSize='md'
                                        fit='cover'
                                    />
                                    <VStack
                                        align='start'
                                        spacing='3vh'
                                    >
                                        <HStack>
                                            <Heading
                                                size='md'
                                            >Commanded by:</Heading>
                                            <Text
                                                fontSize='2xl'
                                                fontWeight='bold'
                                            >{listingData.owner}</Text>
                                        </HStack>
                                        <HStack
                                            align='start'
                                            spacing='3vw'
                                        >
                                            <Stat>
                                                <StatLabel>Base Strength</StatLabel>
                                                <StatNumber>👤  {listingData.strength}</StatNumber>
                                                <StatHelpText>
                                                    <StatArrow type='increase' />
                                                    Latest fetch : 10/07
                                                </StatHelpText>
                                            </Stat>
                                            <Stat>
                                                <StatLabel>Successful Dep Ratio</StatLabel>
                                                <StatNumber>
                                                    <CheckIcon />  {0.67}
                                                </StatNumber>
                                                <StatHelpText>
                                                    <StatArrow type='decrease' />
                                                    Total: {listingData.reviews}
                                                </StatHelpText>
                                            </Stat>
                                        </HStack>
                                        <Box>
                                            <Text>
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas neque numquam perspiciatis ullam iusto, dolor eos tempora praesentium in vitae animi explicabo natus vel tenetur magni porro fugit sequi quam!
                                            </Text>
                                        </Box>
                                    </VStack>
                                </HStack>
                                <Box

                                >
                                    <Heading

                                    >Accolades</Heading>
                                    <HStack
                                    >
                                        <Box>
                                            <Card
                                                bgColor='green.200'
                                                color="black"
                                            >
                                                <CardHeader>
                                                    <Heading
                                                        size='md'
                                                    >
                                                        Reviews
                                                    </Heading>
                                                </CardHeader>
                                                <CardBody
                                                >
                                                    <Stack
                                                        divider={<StackDivider />}
                                                    >
                                                        <Box>
                                                            <Text
                                                                pt='2'
                                                            >
                                                                Test Review : Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, deleniti.
                                                            </Text>
                                                        </Box>
                                                        <Box>
                                                            <Text
                                                                pt='2'
                                                            >
                                                                Test Review : Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, deleniti.
                                                            </Text>
                                                        </Box>
                                                        <Box>
                                                            <Text
                                                                pt='2'
                                                            >
                                                                Test Review : Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, deleniti.
                                                            </Text>
                                                        </Box>
                                                    </Stack>
                                                </CardBody>
                                            </Card>
                                        </Box>
                                        <Box
                                            boxSize='xl'
                                        >
                                        </Box>
                                    </HStack>
                                </Box>
                            </VStack>

                        </Box>
                    </ModalBody>
                    <ModalFooter>
                        <HStack>
                            <Button
                                //onClick={onClose}
                                colorScheme="yellow"
                            >Add To List</Button>
                            <Button
                                //onClick={onClose}
                                colorScheme="green"
                            >Send Bid</Button>
                        </HStack>
                    </ModalFooter>
                </ModalContent>
            </Modal >
        </Box >
    );
}