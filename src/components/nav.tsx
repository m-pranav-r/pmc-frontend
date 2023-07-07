import {
    Box,
    Heading,
    Text,
    Wrap,
    WrapItem,
    Link
} from "@chakra-ui/react";
import { FC } from "react"
import {
    Link as RouterLink
} from "react-router-dom";

export const NavBar: FC = () => {
    const links = ['Home', 'Listings', 'Your Listing', 'Account']
    return (
        <Box
            bg='gray'
            display='flex'
            alignItems='center'
            justifyContent='end'
            py='20px'
            px='30px'
        >
            <Heading
                size='2xl'
                mr='55%'
            >PMC Market</Heading>
            <Wrap
                spacing='30px'
                justify='right'
                className="nav-item"
            >
                <WrapItem >
                </WrapItem>
                {links.map(link => {
                    const name = link.split(" ").slice(-1)[0].toLowerCase()
                    return (
                        <Link as={RouterLink} to={name}>
                            {name}
                        </Link>
                    );
                })}
            </Wrap>
        </Box >
    );
}