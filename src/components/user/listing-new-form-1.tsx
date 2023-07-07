import {
    Button,
    Box,
    Center,
    Stack,
    Heading,
    Input,
    FormLabel,
    FormControl,
    HStack,
    NumberInput,
    NumberInputField,
    Checkbox,
    SlideFade,
} from '@chakra-ui/react'

import { Form } from 'react-router-dom';

import { FC } from 'react';


type FirstFormProps = {
    focus: boolean,
    nextCallback: Function
}

export const FirstForm: FC<FirstFormProps> = ({ focus, nextCallback }) => {
    return (
        <SlideFade in={focus} unmountOnExit={true}>
            <Center>
                <Stack>
                    <Form
                        method='post'
                    >
                        <FormControl>
                            <Box
                                mt='80px'
                                bg='red.50'
                                border='1px solid red'
                                borderRadius='lg'
                                boxSize='xl'
                                w='1200px'
                            >
                                <Heading>
                                    Form Area 1
                                </Heading>
                                <HStack
                                    mt='20px'
                                    alignItems='center'
                                    justifyContent='space-between'
                                >
                                    <FormLabel>tempname</FormLabel>
                                    <Input type='text' name='basename' placeholder='placeholder' maxW='50%'></Input>
                                </HStack>
                                <HStack
                                    mt='20px'
                                    alignItems='center'
                                    justifyContent='space-between'
                                >
                                    <FormLabel>Base Ident number</FormLabel>
                                    <NumberInput name='base ident'>
                                        <NumberInputField />
                                    </NumberInput>
                                </HStack>
                                <HStack
                                    mt='20px'
                                    alignItems='center'
                                    justifyContent='space-between'
                                >
                                    <FormLabel
                                        mr='20'
                                    >owner name</FormLabel>
                                    <Input type='text' name='owner' placeholder='placeholder' maxW='50%'></Input>
                                </HStack>
                                <HStack
                                    mt='20px'
                                    alignItems='center'
                                    justifyContent='space-between'
                                >
                                    <FormLabel>Base loc details</FormLabel>
                                    <HStack>
                                        <NumberInput name='base-xloc'>
                                            <NumberInputField />
                                        </NumberInput>
                                        <NumberInput name='base-yloc'>
                                            <NumberInputField />
                                        </NumberInput>
                                    </HStack>
                                </HStack>
                                <HStack
                                    mt='20px'
                                    alignItems='center'
                                    justifyContent='space-evenly'
                                >
                                    <FormLabel>is base</FormLabel>
                                    <Checkbox>Yess</Checkbox>
                                </HStack>
                                <Center>
                                    <Button type="submit">Submit</Button>
                                    <Button onClick={() => nextCallback()}>Next</Button>
                                </Center>
                            </Box>
                        </FormControl>
                    </Form>
                </Stack>
            </Center>
        </SlideFade>
    );
}