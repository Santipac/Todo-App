import { Box, Heading, Link } from '@chakra-ui/react';
import { Link as LinkRouter } from 'react-router-dom';
import React from 'react';

export const Error = () => {
  return (
    <Box
      minHeight="100vh"
      _light={{
        bgGradient: 'linear(to-r, #0d8ced 0%, #69daf1 90.1%)',
      }}
      _dark={{
        bgGradient: 'linear(to-r, #4d1458 10.9%, #3e1566 87.1%)',
      }}
      margin="auto"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <Link as={LinkRouter} to="/" position="absolute" top="0" left="0" p="4">
        Back to Site
      </Link>

      <Heading as="h1" fontWeight="bold">
        Oops! This site doesn't exists.
      </Heading>
      <Heading as="h2" fontWeight="normal">
        Comeback to Home
      </Heading>
    </Box>
  );
};
