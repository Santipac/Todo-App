import { Box } from '@chakra-ui/react';
import { Header, TodoForm, TodoList } from '../components';

export const TodoPage = () => {
  return (
    <Box
      minHeight="100vh"
      _light={{
        bgGradient: 'linear(to-r, #0d8ced 0%, #69daf1 90.1%)',
      }}
      _dark={{
        bgGradient: 'linear(to-r, #1b263b 10.9%, #0b327c 87.1%)',
      }}
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
