// import * as React from "react"
// import {
//   ChakraProvider,
//   Box,
//   Text,
//   Link,
//   VStack,
//   Code,
//   Grid,
//   theme,
// } from "@chakra-ui/react"

// export const App = () => (
//   <ChakraProvider theme={theme}>
//     <Box textAlign="center" fontSize="xl"></Box>
//   </ChakraProvider>
// );

import {
  ChakraProvider,
  Box,
  theme,
  Flex,
  Heading,
  Text,
  VStack,
  Input,
  Button,
} from '@chakra-ui/react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './components/login/LoginForm';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';

export const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Routes>
        <Route path='/' element={<LoginPage />} />

          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />

          
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
};
