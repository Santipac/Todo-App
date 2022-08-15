import { Box, Heading } from '@chakra-ui/react';

import { FormTodo } from './components/FormTodo';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      bg={'#caf0f8'}
    >
      <Heading as="h1" my="16">
        TODO APP w/Redux
      </Heading>

      <FormTodo />
      <TodoList />
    </Box>
  );
}

export default App;
