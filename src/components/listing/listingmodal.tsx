import {
    CheckIcon,
    StarIcon
} from "@chakra-ui/icons";
import {
    Box,
    Modal,
    ModalOverlay,
    ModalContent,
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
    Card,
    CardHeader,
    Stack,
    CardBody,
    StackDivider,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper
} from "@chakra-ui/react";
import { FC, useContext, useEffect, useRef, useState } from "react";
import { ListingProps, ListingContext } from "./listing";

type ListingModalProps = {
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void,
}

type RatingBoxMetrics = {
    ratings: Array<number>
}

type RatingBarMetrics = {
    pos: number
}

type GMapStatisImageType = {
    center: Array<number>,
    zoom: number,
    sizeX: number,
    sizeY: number,
    maptype: string
}

const RatingBox: FC<RatingBoxMetrics> = ({ ratings }) => {
    return (
        <VStack
            spacing='0.5vh'
        >
            <HStack>
                <HStack
                    spacing='0.25vh'
                >
                    <Text>5</Text>
                    <StarIcon />
                </HStack>
                <RatingBar pos={ratings[0]} />
            </HStack>
            <HStack>
                <HStack
                    spacing='0.25vh'
                >
                    <Text>4</Text>
                    <StarIcon />
                </HStack>
                <RatingBar pos={ratings[1]} />
            </HStack>
            <HStack>
                <HStack
                    spacing='0.25vh'
                >
                    <Text>3</Text>
                    <StarIcon />
                </HStack>
                <RatingBar pos={ratings[2]} />
            </HStack>
            <HStack>
                <HStack
                    spacing='0.25vh'
                >
                    <Text>2</Text>
                    <StarIcon />
                </HStack>
                <RatingBar pos={ratings[3]} />
            </HStack>
            <HStack>
                <HStack
                    spacing='0.25vh'
                >
                    <Text>1</Text>
                    <StarIcon />
                </HStack>
                <RatingBar pos={ratings[4]} />
            </HStack>
        </VStack>
    )
}

const RatingBar: FC<RatingBarMetrics> = ({ pos }) => {
    return (
        <Box
            border='1px solid gray'
            borderRadius='lg'
            h='2vh'
            w='6vw'
        >
            <Box
                borderRadius='lg'
                //w='70%'
                w={`${pos * 100}%`}
                h='2vh'
                bgColor='#ffd800'
            >
            </Box>
        </Box >
    )
}

const GMapStaticImage: FC<GMapStatisImageType> = ({ center, zoom, sizeX, sizeY, maptype }) => {
    const [imageURL, setImageURL] = useState('')
    const fetchImage = async () => {
        const requestString = `https://maps.googleapis.com/maps/api/staticmap?` +
            `center=${center[0]},${center[1]}&` +
            `zoom=${zoom}&` +
            `size=${sizeX}x${sizeY}&` +
            `maptype=${maptype}&` +
            `key=${process.env.REACT_APP_GMAPS_API_KEY}`
        const response = await fetch(requestString)
        const image = await response.blob()
        const imageURL = URL.createObjectURL(image)
        setImageURL(imageURL)
    }
    useEffect(() => {
        fetchImage()
    }, [])
    return (
        <Image
            placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAADGCAMAAAAqo6adAAAALVBMVEXQ0NDw8PDU1NTW1tbv7+/b29vY2Njd3d3R0dHr6+vo6Oji4uLm5ubz8/Pj4+OXsBnXAAAE2klEQVR4nO2d23arMAxE65AGkjbn/z/3hHq1pYkvkixhC2keC+nSHo2BYHDe3kzr1LuAznJ+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+22rjX6bLZVJtYUPxl3/nEO73EM63eeGraF+R+efrg/xb9/DBWdSOIvJPW/qombewnUTjn5/h1wx8Mpe2i0j880vzvwy4cRe3gyj8afyHFBpA4L9k6B8J0HcUJPCfs/whTPwVygrP/1HAD1eBEkWF5y/hh3ARqFFSaP7swS9K2yEQzX8t9/+u7EoYy7+Ujn4r/7tImWLC8k/l+AdtXwSw/KkrX80HAHZ+ZWdALH/x7G+A33r/32vHP2Xfgv34j1P1/K/sAhh9/Xer9F+iSEGh+SsHAGXDn/D9rzwAtN0AwPMXvwAqu/oj3f8pfQNUNxdEKPiUpb/rmwOgNCx3A/T+j708cZECmz4HaMQnzv9MiZOAwvC/kef/ls9n+qu2M18U+YA93bbzv2dlt71+1HDCWubP6zoOzrcPnb1f1XjCXh7iKaST1F2wMMv5bcv5bcv5bcv5bcv5bcv5bcv5bcv5bWtM/v3uKQ3Jf9lvGnVE/nV+aa/HKAbkj9NrOxkwHv/37OI+Q2A4/t/J1V0SMBr/dm55DwMG4/87tb7DEBiL//nJAvkEDMX/+mCFuAEj8aeeK5EeAgPxpx+rEU7AOPy5p4pkDRiGf8rgCw+BUfjzL9XKJmAQ/hK+qAFj8OfDLz0EhuAvd1/UgBH46/hyBgzAXwu/qAH9+SHdlzOgOz8UX8iA3vyw8MsZ0Jkf3n0hA/ry4/AlDOjKjwm/kAHM/Kh/h+2+hAG8/DPmUp2Cz24AK//6ahy4Pnz4JQzg5I9vBgITQOs+uwGM/N9LA4AMoHaf2wA+/t/3QgH1teCzGsDGv30ttpoAevi5DeDi/7suRsWAtu6zGsDE//xGZLG+dnw+A3j4X98JLySgNfysBrDwpxaFyRrA0X0+Azj4068DZ+rjwmcygIE/tyBCMgE84eczoJ0/vyJSwgC+7jMZ0MxfWg/lpT5efI7lJlr/Q3k5yKcEcOMzJKCRv7Yc2B8D+PHbDWjjr64Gtq1PAr95CDR9vLIW6pd+EiCD35qAFv7qWnhbA6TwGw1o4K+Hf1OfHH7bEKB/FhL+qIssflMC6L//gKlPFj+c6QZQ+aHhj/VVFg1sF7mNxA/Cw7+TqAng+/2LvqIOAcb1rzqL1knW37/oK1ICCPzjhT+KNATw/EOGP4qymOGB8ClDgH39667CDwEk/3tvwpqw/cTtP3T4o5AJQPEP3/2AHgIYfg34ATkEEDsrCH8UJgFwfiXdD7ghAObXg/8wAN5V6J5qwh8FNgC4o6burwIPARi/Nnz4EADtpiz8UTADIHvp6/4q2BAA8OvEBw6B+j4qwx8FMKC6i9burwIMgRq/ZnzIEKjsoDj8UTUDytt1d39VLQHFzfrxqwaUtqoPf1TRgMLGI3R/VTEB+W1HwS8bkN10kPBH5Q3IbTlO91flE5DZcCz8ggHpvx8q/FEZA5J/Plr3V2USkPrrfD+i0rfFU/yn5Yg6JQPQe/2D3nJ+23J+23J+23J+23J+23J+23J+23J+2zr9B+K1Q1EvhtkdAAAAAElFTkSuQmCC"
            src={imageURL}
            borderRadius='md'
            shadow='xl'
        />
    );
}

export const ListingModal: FC<ListingModalProps> = ({ isOpen, onOpen, onClose }) => {
    const listingData: ListingProps = useContext(ListingContext)
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
                        >
                            <VStack
                                spacing='5vh'
                                divider={<StackDivider />}
                            >
                                <VStack>
                                    <Box
                                        pb='2vh'
                                    >
                                        <Heading
                                            size='3xl'
                                        >{listingData.name}</Heading>
                                    </Box>

                                    <HStack
                                        w='70%'
                                        justifyContent='end'
                                        spacing='3vw'
                                    >
                                        <Image
                                            src={listingData.imageid}
                                            borderRadius='md'
                                            shadow='lg'
                                            boxSize='sm'
                                            fit='cover'
                                        />
                                        <VStack
                                            spacing='2vh'
                                            minW='40%'
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
                                </VStack>
                                <VStack>
                                    <Heading
                                        pb='3vh'
                                    >
                                        Location Data
                                    </Heading>
                                    <HStack
                                        w='45vw'
                                        justify='space-evenly'
                                        align='center'
                                    >
                                        <Box>
                                            <GMapStaticImage center={[51.477222, 0]} zoom={14} sizeX={400} sizeY={400} maptype={'satellite'} />
                                        </Box>
                                        <Box>
                                            <VStack
                                                h='45vh'
                                                justify='space-between'
                                            >
                                                <GMapStaticImage center={[51.477222, 0]} zoom={14} sizeX={200} sizeY={200} maptype={'terrain'} />
                                                <GMapStaticImage center={[51.477222, 0]} zoom={5} sizeX={200} sizeY={200} maptype={'roadmap'} />
                                            </VStack>
                                        </Box>
                                    </HStack>
                                    <Box>
                                        <HStack>
                                            <Heading
                                                size='sm'
                                            >
                                                Geographic Location
                                            </Heading>
                                            <Text>
                                                51.477222, 0
                                            </Text>
                                        </HStack>
                                    </Box>
                                </VStack>
                                <Box
                                >
                                    <VStack>
                                        <Heading
                                            pb='3vh'
                                        >Reviews</Heading>
                                        <HStack
                                            align='start'
                                            justifyContent='space-around'
                                        >
                                            <Box
                                                w='40%'
                                            >
                                                <Card
                                                    bgColor='green.300'
                                                    color="white"
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
                                            >
                                                <VStack
                                                    align='start'
                                                    w='17rem'
                                                >
                                                    <Heading>Total Ratings</Heading>
                                                    <RatingBox ratings={[0.75, 0.25, 0.35, 0.60, 0.20]} />
                                                </VStack>

                                            </Box>
                                        </HStack>
                                    </VStack>
                                </Box>
                                <Box
                                >
                                    <VStack>
                                        <Heading
                                            pb='3vh'
                                        >Pricing</Heading>
                                        <HStack
                                            w='25vw'
                                            justify='space-evenly'
                                            align='center'
                                            spacing='3vw'
                                        >

                                            <Box
                                            >
                                                <Stat
                                                >
                                                    <StatLabel>
                                                        <Text
                                                            color='gray'
                                                        >
                                                            Asking Price
                                                        </Text>
                                                    </StatLabel>
                                                    <StatNumber
                                                    >
                                                        <Heading>
                                                            $9999 Million
                                                        </Heading>
                                                    </StatNumber>
                                                    <StatHelpText>
                                                        <StatArrow type='increase' />
                                                        Prev: $8728 Million
                                                    </StatHelpText>
                                                </Stat>
                                            </Box>
                                            <Box>
                                                <VStack
                                                    align='start'
                                                    justify='space-evenly'
                                                    h='10vh'
                                                >
                                                    <Heading
                                                        size='sm'
                                                    >Your Bid:</Heading>
                                                    <HStack
                                                        justify='space-between'
                                                        w='25vh'
                                                    >
                                                        <NumberInput
                                                            defaultValue={9999}
                                                            min={100}
                                                            max={9999}
                                                            step={100}
                                                        >
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                        </NumberInput>
                                                        <Button
                                                            size='lg'
                                                            colorScheme='whatsapp'
                                                        >
                                                            Send Bid
                                                        </Button>
                                                    </HStack>
                                                </VStack>
                                            </Box>
                                        </HStack>
                                    </VStack>
                                </Box>
                            </VStack>

                        </Box>
                    </ModalBody>
                    <ModalFooter>
                        <HStack>
                            <Button
                                colorScheme="yellow"
                            >Add To List</Button>
                        </HStack>
                    </ModalFooter>
                </ModalContent>
            </Modal >
        </Box >
    );
}