import { useDispatch } from 'react-redux/es/exports';
import { deleteTask, itsComplete } from '../store/todos/todosSlice';
import { CheckIcon, DeleteIcon } from '@chakra-ui/icons';
import { Button, GridItem, Input } from '@chakra-ui/react';
import { useState } from 'react';

export const TodoItem = ({ id, name, completed }) => {
  const [inputValue, setInputValue] = useState(name);
  const dispatch = useDispatch();

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  return (
    <>
      <GridItem
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderRadius="md"
        w={{ base: '100%' }}
        p="4"
        _light={!completed ? { bg: 'whiteAlpha.300' } : { bg: 'green.800' }}
        _dark={!completed ? { bg: 'blackAlpha.300' } : { bg: 'green.800' }}
        boxShadow="lg"
        className="animate__animated animate__bounceIn"
      >
        <Input
          fontWeight="semibold"
          backgroundColor="#edf6f9"
          fontSize={{ base: '0.8rem', sm: '1.1rem' }}
          value={inputValue}
          color="black"
          border="2px solid"
          onChange={onInputChange}
          boxShadow="md"
        />

        <Button
          bg="green.400"
          onClick={() => dispatch(itsComplete(id))}
          mx="2"
          boxShadow="md"
        >
          <CheckIcon color="white" />
        </Button>
        <Button
          bg="red.500"
          onClick={() => dispatch(deleteTask(id))}
          boxShadow="md"
        >
          <DeleteIcon color="white" />
        </Button>
      </GridItem>
    </>
  );
};

/*
 */
