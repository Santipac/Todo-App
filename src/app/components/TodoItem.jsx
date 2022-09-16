import { useDispatch } from 'react-redux/es/exports';
import { FiEdit, FiCheck, FiTrash } from 'react-icons/fi';
import { checkerTask } from '../../store/todos/todosSlice';
import { CheckIcon, DeleteIcon } from '@chakra-ui/icons';
import { Button, GridItem, Input } from '@chakra-ui/react';
import { useState } from 'react';
import {
  startCheckingTasks,
  startDeletingTask,
} from '../../store/todos/thunks';
import { Link } from 'react-router-dom';

export const TodoItem = ({ id, name, completed }) => {
  const [inputValue, setInputValue] = useState(name);
  const dispatch = useDispatch();

  const onCompleted = () => {
    dispatch(startCheckingTasks(id, completed));
    dispatch(checkerTask(id));
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
          readOnly
          boxShadow="md"
        />

        <Button
          as={Link}
          to={`/edit-task/${id}`}
          bgColor="#edf6f9"
          color="black"
          ml="2"
          boxShadow="md"
          _hover={{}}
        >
          <FiEdit size="25px" />
        </Button>

        <Button
          bg="green.400"
          onClick={() => onCompleted()}
          mx="2"
          boxShadow="md"
          _hover={{}}
        >
          <CheckIcon color="white" />
        </Button>
        <Button
          bg="red.500"
          onClick={() => dispatch(startDeletingTask(id))}
          boxShadow="md"
          _hover={{}}
        >
          <DeleteIcon color="white" />
        </Button>
      </GridItem>
    </>
  );
};

/*
 */
