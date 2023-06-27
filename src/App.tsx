import React from 'react';
import './App.css'
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom'

import { MainWrapper } from './components/mainwrapper';

type TParams = { id: string };

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <MainWrapper />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
