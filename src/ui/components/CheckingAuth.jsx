import { Box, Spinner } from '@chakra-ui/react';
import React from 'react';

export const CheckingAuth = () => {
  return (
    <Box
      minHeight="100vh"
      _light={{
        bgGradient: 'linear(to-r, #0d8ced 0%, #69daf1 90.1%)',
      }}
      _dark={{
        bgGradient: 'linear(to-r, #4d1458 10.9%, #3e1566 87.1%)',
      }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      boxShadow="md"
    >
      <Spinner size="xl" color="white" />
    </Box>
  );
};
