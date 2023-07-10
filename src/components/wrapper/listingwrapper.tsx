import { FC, useEffect, useState } from "react";
import { basesData as initBasesData } from "../../data/tempbase";
import {
    Heading,
    Box,
    Wrap,
    Flex,
    Stack,
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
    Checkbox,
    CheckboxGroup,
    IconButton,
    HStack,
    VStack,
    Center,
    StackDivider,
    RadioGroup,
    Radio,
    Divider,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Listing } from "../listing/listing"

export const BaseWrapper: FC = () => {
    const [filterProps, setFilterProps] = useState({
        ratingThreshold: 0,
        strengthMin: 0,
        strengthMax: 100000,
        commanders: new Set(),
        sort: '1'
    })
    useEffect(() => {
        const tempCommanders = filterProps.commanders
        initBasesData.forEach(base => tempCommanders.add(base.owner))
        setFilterProps({ ...filterProps, commanders: tempCommanders })
    }, [])
    const basesData = initBasesData
        .filter(
            base => base.strength >= filterProps.strengthMin && base.strength <= filterProps.strengthMax
        )
        .filter(
            base => filterProps.commanders.has(base.owner)
        )
        .filter(
            base => base.rating >= filterProps.ratingThreshold
        )
        .sort(
            function (a, b) {
                if (filterProps.sort === '1') return b.rating - a.rating
                if (filterProps.sort === '2') return b.strength - a.strength
                return b.reviews - a.reviews

            }
        )
    return (
        <Box
            bg='cyan.100'
        >
            <Flex
                direction="row"
                grow='1'
            >
                <Box
                    bg='cyan.100'
                    minH='100vh'
                    mt='10vh'
                    w='15vw'
                    px={window.innerWidth > 1920 ? '2vw' : '0.5vw'}
                    py='2vh'
                    h='80vh'
                    position='fixed'
                    pl='2vw'
                >
                    <VStack
                        alignItems='start'
                        spacing={window.innerWidth > 1920 ? '4vh' : '2vh'}
                    >
                        <Heading>
                            Filter By...
                        </Heading>
                        <Box
                        >Base Strength:</Box>
                        <Center>

                            <Box
                                px='20px'
                                w='10vw'
                            >
                                <RangeSlider
                                    aria-label={['min', 'max']}
                                    defaultValue={[filterProps.strengthMin, filterProps.strengthMax]}
                                    onChangeEnd={(val) => setFilterProps({ ...filterProps, strengthMin: val[0] * 1000, strengthMax: val[1] * 1000 })}>
                                    <RangeSliderTrack>
                                        <RangeSliderFilledTrack />
                                    </RangeSliderTrack>
                                    <RangeSliderThumb index={0} />
                                    <RangeSliderThumb index={1} />
                                </RangeSlider>
                            </Box>
                        </Center>
                        <Box>{filterProps.strengthMin} to {filterProps.strengthMax}</Box>
                        <Box>
                            <Box>Base Owner:</Box>
                            <Stack>
                                <CheckboxGroup
                                    size='lg'
                                    colorScheme="green"
                                    defaultValue={[...initBasesData.map(base => base.owner)]}
                                >
                                    {[...new Set(initBasesData.map(base => base.owner))].map(commander =>
                                        <Checkbox
                                            value={commander}
                                            onChange={(e) => {
                                                let commanderStandIn = filterProps.commanders
                                                if (e.target.checked) {
                                                    commanderStandIn.add(commander)
                                                    setFilterProps({ ...filterProps, commanders: commanderStandIn })
                                                    return
                                                }
                                                commanderStandIn.delete(commander)
                                                setFilterProps({ ...filterProps, commanders: commanderStandIn })
                                                return
                                            }

                                            }
                                        >
                                            {commander}
                                        </Checkbox>
                                    )}
                                </CheckboxGroup>
                            </Stack>
                        </Box>
                        <Box>
                            Base Ratings:
                        </Box>
                        <HStack
                        >
                            {Array(5).fill('').map((_, i) =>
                                <IconButton
                                    aria-label="ratings-button"
                                    key={i}
                                    //bg='blue.100'
                                    size={window.innerWidth > 1920 ? 'lg' : 'sm'}
                                    color={i < filterProps.ratingThreshold ? 'teal.500' : 'gray.300'}
                                    onClick={e => setFilterProps({ ...filterProps, ratingThreshold: i + 1 })}
                                    icon={<StarIcon />}
                                />
                            )}
                        </HStack>
                        <Divider color='#87a6ac' />
                        <Heading>Sort By...</Heading>
                        <VStack>
                            <RadioGroup
                                value={filterProps.sort}
                                onChange={(e) => setFilterProps({ ...filterProps, sort: e })}
                                size='lg'
                            >
                                <VStack
                                    align='start'
                                >
                                    <Radio value='1'>Ratings</Radio>
                                    <Radio value='2'>Strength</Radio>
                                    <Radio value='3'>Reviews</Radio>
                                </VStack>
                            </RadioGroup>
                        </VStack>
                    </VStack>
                </Box>
                <Box
                    ml='15vw'
                //mb='3vw'
                >
                    <Box
                        bg='#efefef'
                        w='85vw'
                    >
                        <Center
                            py='5vh'
                        >
                            <Heading
                            >
                                Today's Listings
                            </Heading>
                        </Center>
                        <Wrap
                            shouldWrapChildren={true}
                            spacingX={window.innerWidth > 1920 ? '5vw' : '1vw'}
                            pb='2vh'
                        >
                            {
                                basesData.map(base =>
                                    <Listing {...base} id={base.id} />
                                )
                            }
                        </Wrap>
                    </Box>
                </Box>
            </Flex >
        </Box >
    );
}