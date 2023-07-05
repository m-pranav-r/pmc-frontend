import { FC, useState } from "react";
import { basesData as initBasesData } from "../../data/tempbase";
import {
    Box,
    Wrap,
    WrapItem,
    Flex,
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
    Checkbox,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Listing } from "./listing"

export const BaseWrapper: FC = () => {
    const [filterProps, setFilterProps] = useState({
        ratingThreshold: 0,
        strengthMin: 0,
        strengthMax: 100,
        commander: ''
    })
    const basesData = initBasesData.
        filter(
            base => base.strength >= filterProps.strengthMin && base.strength <= filterProps.strengthMax
        )
    return (
        <Flex
            flexDirection='row'>
            <Box
                flexBasis='20%'>
                <Box>Filter By...</Box>
                <Box>Base Strength:</Box>
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
                <Box>
                    <Box>Base Owner:</Box>
                    {initBasesData.map(base => base.owner).map(owner =>
                        <Checkbox>
                            {owner}
                        </Checkbox>
                    )}
                </Box>
                <Box>
                    Base Ratings:
                </Box>
            </Box>
            <Wrap>
                {
                    basesData.map(base =>
                        <WrapItem>
                            <Listing {...base} id={base.id} />
                        </WrapItem>
                    )
                }
            </Wrap>
        </Flex>
    );
}