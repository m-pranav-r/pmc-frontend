import { StarIcon } from "@chakra-ui/icons";
import {
    Box,
    Fade,
    Flex,
    Heading,
    Image,
    Skeleton,
    Stack,
    Text
} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react"

type ListingProps = {
    id: number,
    name: string,
    strength: number,
    rating: number,
    imageid: string,
    owner: string
}

export const Listing: FC<ListingProps> = ({ id, name, strength, rating, imageid, owner }) => {
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
                    border='1px solid black'
                    borderRadius='lg'
                    //maxW='2xl'
                    p='5%'
                >
                    <Flex
                        direction='row'
                    >
                        <Stack
                            border='2px red solid'
                        >
                            <Box
                                boxSize='s'
                            >
                                <Image
                                    src={imageid}
                                    borderRadius='10px'
                                    alt={'img ' + id}
                                    shadow='2xl'
                                />
                            </Box>
                            <Heading
                                size='2xl'
                            >
                                {name}
                            </Heading>
                            <Box>{strength}</Box>
                            <Flex

                            >
                                {Array(5).fill('').map((_, i) =>
                                    <StarIcon key={i} color={i < rating ? 'teal.500' : 'gray.300'} />
                                )}
                            </Flex>
                        </Stack>
                        <Flex
                            direction='column'
                            border='3px solid yellow'
                            maxWidth='50%'
                            alignContent='space-evenly'
                        >
                            <Heading size='xl'>Owner: {owner}</Heading>
                            <Text
                            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatibus quasi earum aliquid in harum ipsam repudiandae. Temporibus necessitatibus excepturi hic maxime dicta cum dolore quod incidunt architecto laboriosam? Cupiditate sit minima perferendis consectetur ratione repellendus vitae eaque nam aperiam?</Text>
                        </Flex>
                    </Flex>
                </Box>
            </Skeleton>
        </Fade>
    );
}