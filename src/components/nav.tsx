import { Button, Heading, Wrap, WrapItem } from "@chakra-ui/react";
import { FC } from "react"
import { useNavigate } from "react-router-dom";

export const NavBar: FC = () => {
    const navigate = useNavigate()
    const links = ['Home', 'Listings', 'Your Listing', 'Account']
    return (
        <div className="nav">
            <Heading>PMC Market</Heading>
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
                        <WrapItem>
                            <Button
                                colorScheme="orange"
                                variant="solid"
                                onClick={() => navigate(name)}
                            >
                                /{name}
                            </Button>
                        </WrapItem>
                    );
                })}
            </Wrap>
        </div>
    );
}