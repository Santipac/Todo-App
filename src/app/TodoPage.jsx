import { Box } from '@chakra-ui/react';
import { Header, TodoForm, TodoList } from './components/';

export const TodoPage = () => {
  return (
    <Box
      minHeight="100vh"
      _light={{ bgColor: '#22afcb' }}
      _dark={{ bgColor: '#1b263b' }}
      margin="auto"
      className="animate__animated animate__fadeIn animate__faster"
    >
      <Box display="flex" flexDirection="column" alignItems="center" px="4">
        <Header />
        <TodoForm />
        <TodoList />
      </Box>
    </Box>
  );
};
