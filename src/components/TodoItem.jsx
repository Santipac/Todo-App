import { useDispatch } from 'react-redux/es/exports';
import { deleteTask, itsComplete } from '../store/todos/todosSlice';
import { CheckIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Button, GridItem, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';

export const TodoItem = ({ id, name, completed }) => {
  const dispatch = useDispatch();

  return (
    <>
      <GridItem
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        border="2px solid"
        borderColor="blue.400"
        borderRadius="md"
        p="4"
      >
        <Text fontWeight="bold" as={completed ? 'del' : null}>
          {name}
        </Text>
        <Button ml="4">
          <EditIcon />
        </Button>
        <Button bg="green.400" onClick={() => dispatch(itsComplete(id))} mx="4">
          <CheckIcon color="white" />
        </Button>
        <Button bg="red.500" onClick={() => dispatch(deleteTask(id))}>
          <DeleteIcon color="white" />
        </Button>
      </GridItem>
    </>
  );
};
