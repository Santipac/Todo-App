import { useSelector } from 'react-redux/es/exports';

import { Box, Grid } from '@chakra-ui/react';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  const tasks = useSelector(state => state.todos);

  return (
    <Box mt="10" w={{ base: '100%', md: '70%', lg: '45%' }}>
      <Grid gap="4" w="100%">
        {tasks.map(task => (
          <TodoItem key={task.id} {...task} />
        ))}
      </Grid>
    </Box>
  );
};
