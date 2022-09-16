import { Box } from '@chakra-ui/react';
import React from 'react';
import Image from '../../assets/wave_background.png';
export const AuthLayout = ({ children }) => {
  return (
    <Box
      minHeight="100vh"
      width="100%"
      _light={{ bgColor: '#69daf1' }}
      _dark={{ bgColor: '#1b263b' }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      boxShadow="md"
      className="animate__animated animate__fadeIn animate__faster"
    >
      <Box
        bg="white"
        p="4"
        minWidth={{ base: '15rem', sm: '25rem', md: '30rem' }}
        borderRadius="md"
        display="flex"
        flexDirection="column"
      >
        {children}
      </Box>
    </Box>
  );
};
//
