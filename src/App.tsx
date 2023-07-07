import React from 'react';
import './App.css'
import { ChakraProvider } from '@chakra-ui/react';

import { MainWrapper } from './components/wrapper/mainwrapper';

function App() {
  return (
    <ChakraProvider>
      <MainWrapper />
    </ChakraProvider>
  );
}

export default App;
