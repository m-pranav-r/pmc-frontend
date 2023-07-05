import { StarIcon } from "@chakra-ui/icons";
import {
    Box,
    Fade,
    Flex,
    Heading,
    Image,
    Text
} from "@chakra-ui/react";
import { FC } from "react"

type ListingProps = {
    id: number,
    name: string,
    strength: number,
    rating: number,
    imageid: string,
    owner: string
}

export const Listing: FC<ListingProps> = ({ id, name, strength, rating, imageid, owner }) => {
    return (
        <Fade
            in={true}
        >
            <Box
                border='2px solid black'
                borderRadius='lg'
                maxW='lg'
                p='5%'
            >
                <Flex>
                    <Box>
                        <Box
                            boxSize='lg'
                        >
                            <Image
                                src={imageid}
                                borderRadius='10px'
                                alt={'img ' + id}
                                shadow='2xl'
                            />
                        </Box>
                        <Heading>{name}</Heading>
                        <Box>{strength}</Box>
                        {Array(5).fill('').map((_, i) =>
                            <StarIcon key={i} color={i < rating ? 'teal.500' : 'gray.300'} />
                        )}
                    </Box>
                    <Box>
                        <Heading size='sm'>Owner: {owner}</Heading>
                        <Text
                        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatibus quasi earum aliquid in harum ipsam repudiandae. Temporibus necessitatibus excepturi hic maxime dicta cum dolore quod incidunt architecto laboriosam? Cupiditate sit minima perferendis consectetur ratione repellendus vitae eaque nam aperiam?</Text>
                    </Box>
                </Flex>
            </Box>
        </Fade>
    );
}