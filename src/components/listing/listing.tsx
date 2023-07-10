import { ArrowForwardIcon, CheckIcon, StarIcon } from "@chakra-ui/icons";
import {
    Badge,
    Box,
    Button,
    Fade,
    HStack,
    Heading,
    Image,
    Skeleton,
    StackDivider,
    Stat,
    StatLabel,
    StatNumber,
    Text,
    VStack,
    useDisclosure
} from "@chakra-ui/react";
import { FC, useEffect, createContext, useState } from "react"
import { ListingModal } from "./listingmodal";

export type ListingProps = {
    id: number,
    name: string,
    strength: number,
    rating: number,
    imageid: string,
    owner: string,
    remarks: Array<string>,
    reviews: number
}

export const ListingContext = createContext<ListingProps>({
    id: 0,
    name: '',
    strength: 0,
    rating: 0,
    imageid: '',
    owner: '',
    remarks: [],
    reviews: 0
})

export const Listing: FC<ListingProps> = ({ id, name, strength, rating, imageid, owner, remarks, reviews }) => {
    const [isLoaded, setLoaded] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    useEffect(() => {
        setTimeout(() => setLoaded(true), 1500)
    })
    return (
        <Box>
            <Fade
                in={true}
            >
                <Skeleton isLoaded={isLoaded}>
                    <Box
                        bgColor='white'
                        shadow='2xl'
                        borderRadius='lg'
                        maxW={window.innerWidth > 1920 ? '5xl' : '3xl'}
                        py='10vh'
                        px='2vw'
                    >
                        <HStack
                            divider={<StackDivider />}
                        >
                            <VStack>
                                <Heading
                                    mt='20px'
                                    size='md'
                                >{owner}</Heading>
                                <Image
                                    src={imageid}
                                    shadow='md'
                                    borderRadius='xl'
                                    fit='cover'
                                    boxSize='sm'
                                />
                                <HStack>
                                    <Badge
                                        colorScheme={rating >= 4.00 ? 'teal' : rating >= 2.00 ? 'yellow' : 'red'}
                                        fontSize='md'
                                    >
                                        <HStack>
                                            <StarIcon />
                                            <Box>{rating}</Box>
                                        </HStack>
                                    </Badge>
                                    <Badge
                                        colorScheme='linkedin'
                                        fontSize='md'
                                    >👤 : {strength}</Badge>
                                </HStack>
                            </VStack>
                            <VStack
                                minW='xs'
                                boxSize='md'
                                pl='20px'
                                justify='space-evenly'
                            >
                                <Heading
                                //noOfLines={1}
                                >{name}</Heading>
                                <HStack
                                    spacing='30px'
                                >
                                    {remarks.map(remark =>
                                        <Badge
                                            color='white'
                                            bgColor='black'
                                            borderRadius='md'
                                            fontSize='md'
                                        >
                                            {remark}
                                        </Badge>
                                    )}
                                </HStack>
                                <Text
                                    fontSize='md'
                                >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, expedita esse ipsum quisquam voluptatem sed consequuntur explicabo unde natus reiciendis voluptate eos, laborum eligendi rerum, cum odit! Dolor, omnis dolores!</Text>
                                <Box>
                                    <Stat>
                                        <StatLabel>Price</StatLabel>
                                        <StatNumber>$9999 Mil</StatNumber>
                                    </Stat>
                                </Box>
                                <HStack>
                                    <Button
                                        colorScheme='green'
                                    >
                                        <HStack
                                            align='end'
                                        >
                                            <CheckIcon />
                                            <Text>
                                                {reviews} Deployments
                                            </Text>
                                        </HStack>
                                    </Button>
                                    <Button
                                        onClick={onOpen}
                                    >
                                        <HStack
                                            align='end'
                                        >
                                            <Text>
                                                Details
                                            </Text>
                                            <ArrowForwardIcon />
                                        </HStack>
                                    </Button>
                                </HStack>
                            </VStack>
                        </HStack>
                    </Box>
                </Skeleton >
            </Fade >
            <ListingContext.Provider value={{ id, name, strength, rating, imageid, owner, remarks, reviews }}>
                <ListingModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
            </ListingContext.Provider>
        </Box>
    );
}