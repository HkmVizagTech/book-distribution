import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { keyframes } from '@emotion/react'
import Register from './Register';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Register/>
    </ChakraProvider>
  );
}

export default App;
