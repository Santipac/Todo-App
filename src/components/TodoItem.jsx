import { useDispatch } from 'react-redux/es/exports';
import { deleteTask, editTask, itsComplete } from '../store/todos/todosSlice';
import { CheckIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Button, GridItem, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';
import Swal from 'sweetalert2';

//TODO: Font Size and width elements should be responsive

export const TodoItem = ({ id, name, completed }) => {
  const [inputValue, setInputValue] = useState(name);
  const dispatch = useDispatch();

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(editTask({ id, name: inputValue }));
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Your task has been changed successfully',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      <GridItem
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderRadius="md"
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

        <Button ml="2" onClick={onSubmit} boxShadow="md" _hover={'none'}>
          <EditIcon />
        </Button>

        <Button
          _hover={'none'}
          bg="green.400"
          onClick={() => dispatch(itsComplete(id))}
          mx="2"
          boxShadow="md"
        >
          <CheckIcon color="white" />
        </Button>
        <Button
          _hover={'none'}
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
