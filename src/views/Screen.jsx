import { Box } from '@chakra-ui/react';
import React from 'react';
import { FormTodo } from '../components/FormTodo';
import { Header } from '../components/Header';
import { TodoList } from '../components/TodoList';

export const Screen = () => {
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
    >
      <Box display="flex" flexDirection="column" alignItems="center" p="4">
        <Header />
        <FormTodo />
        <TodoList />
      </Box>
    </Box>
  );
};
