import { FC, useEffect, useState } from "react";
import { basesData as initBasesData } from "../../data/tempbase";
import {
    Heading,
    Box,
    Wrap,
    WrapItem,
    Flex,
    Stack,
    Spacer,
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
    Checkbox,
    CheckboxGroup,
    IconButton
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Listing } from "./listing"
import { start } from "repl";

export const BaseWrapper: FC = () => {
    const [filterProps, setFilterProps] = useState({
        ratingThreshold: 0,
        strengthMin: 0,
        strengthMax: 100000,
        commanders: new Set()
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
    return (
        <Box
        //bg='green'
        >
            <Flex
                flexDirection='row'
                grow='1'
            >
                <Box
                    flexBasis='20%'
                    //bg='red.100'
                    maxWidth='290px'
                >
                    <Heading
                        size='xl'
                        pt='10px'
                        px='20px'
                    >Filter By...</Heading>
                    <Flex
                        //bg='blue.100'
                        direction='column'
                        h='md'
                        grow='1'
                        pb='100px'
                        px='20px'
                    >
                        <Spacer />
                        <Box
                        >Base Strength:</Box>
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
                        <Box>{filterProps.strengthMin} to {filterProps.strengthMax}</Box>
                        <Spacer />
                        <Box>
                            <Box>Base Owner:</Box>
                            <Stack>
                                <CheckboxGroup
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
                        <Spacer />
                        <Box>
                            Base Ratings:
                        </Box>
                        <Flex>
                            {Array(5).fill('').map((_, i) =>
                                <IconButton
                                    aria-label="ratings-button"
                                    key={i}
                                    //bg='blue.100'
                                    size='lg'
                                    color={i < filterProps.ratingThreshold ? 'teal.500' : 'gray.300'}
                                    onClick={e => setFilterProps({ ...filterProps, ratingThreshold: i + 1 })}
                                    icon={<StarIcon />}
                                />
                            )}
                        </Flex>
                    </Flex>
                </Box>
                <Wrap>
                    {
                        basesData.map(base =>
                            <WrapItem
                                mr='60px'
                            >
                                <Listing {...base} id={base.id} />
                            </WrapItem>
                        )
                    }
                </Wrap>
            </Flex>
        </Box>
    );
}