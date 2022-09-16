import { Box } from '@chakra-ui/react';
import { TodoForm } from '../components';

export const EditPage = () => {
  <Box
    w="100%"
    minHeight="100vh"
    _light={{
      bgGradient: 'linear(to-r, #0d8ced 0%, #69daf1 90.1%)',
    }}
    _dark={{
      bgGradient: 'linear(to-r, #1b263b 10.9%, #0b327c 87.1%)',
    }}
    display="flex"
    flexDirection="column"
    alignItems="center"
  >
    <TodoForm />
  </Box>;
};
