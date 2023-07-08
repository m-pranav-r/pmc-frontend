import { ArrowForwardIcon, StarIcon } from "@chakra-ui/icons";
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
    Text,
    VStack
} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react"

type ListingProps = {
    id: number,
    name: string,
    strength: number,
    rating: number,
    imageid: string,
    owner: string,
    remarks: Array<string>
}

export const Listing: FC<ListingProps> = ({ id, name, strength, rating, imageid, owner, remarks }) => {
    const [isLoaded, setLoaded] = useState(false)
    useEffect(() => {
        setTimeout(() => setLoaded(true), 1500)
    })
    return (
        <Fade
            in={true}
        >
            <Skeleton isLoaded={isLoaded}>
                <Box
                    borderColor='black.100'
                    shadow='xl'
                    borderRadius='lg'
                    maxW='3xl'
                    p='5%'
                    minH='sm'
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
                                >
                                    <HStack>
                                        <StarIcon />
                                        <Box>{rating}</Box>
                                    </HStack>
                                </Badge>
                                <Text>•</Text>
                                <Box>Base Strength: {strength}</Box>
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
                                    >
                                        {remark}
                                    </Badge>
                                )}
                            </HStack>
                            <Text
                                fontSize='md'
                            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, expedita esse ipsum quisquam voluptatem sed consequuntur explicabo unde natus reiciendis voluptate eos, laborum eligendi rerum, cum odit! Dolor, omnis dolores!</Text>
                            <Button
                            >
                                <HStack
                                    align='end'
                                >
                                    <Text>
                                        Know More
                                    </Text>
                                    <ArrowForwardIcon />
                                </HStack>
                            </Button>
                        </VStack>
                    </HStack>
                </Box>
            </Skeleton >
        </Fade >
    );
}