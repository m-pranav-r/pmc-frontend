import { StarIcon } from "@chakra-ui/icons";
import { Box, Heading, Image } from "@chakra-ui/react";
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
        <Box border='1px' borderRadius='lg' maxW='sm'>
            <Image src={imageid} />
            <Box>{name}</Box>
            <Box>{strength}</Box>
            {Array(5).fill('').map((_, i) =>
                <StarIcon key={i} color={i < rating ? 'teal.500' : 'gray.300'} />
            )}
            <Box>Owner: {owner}</Box>
        </Box>
    );
}