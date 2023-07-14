import {
    Box,
    Heading,
    Link,
    Button,
    HStack
} from "@chakra-ui/react";
import { FC } from "react"
import {
    Link as RouterLink
} from "react-router-dom";

export const NavBar: FC = () => {
    const links = ['Home', 'Listings', 'Your Listing', 'Account']
    return (
        <Box
            color='white'
            bgColor='black'
            p='15px'
            position='fixed'
            w='100vw'
            zIndex='1991'
        >
            <HStack
                justify='space-around'
            >
                <Heading>TEST LOGO</Heading>
                <HStack
                    spacing='20px'
                >
                    {links.map(link => {
                        const name = link.split(" ").slice(-1)[0].toLowerCase()
                        return (
                            <Button>
                                <Link
                                    as={RouterLink}
                                    to={name}
                                    p='10px'

                                >
                                    {name}
                                </Link>
                            </Button>
                        );
                    })}
                </HStack>
            </HStack>
        </Box>
    )
}