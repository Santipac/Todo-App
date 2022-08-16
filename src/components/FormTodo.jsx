import {
  Box,
  Button,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { createTask } from '../store/todos/todosSlice';

export const FormTodo = () => {
  const [inputValue, setInputValue] = useState('');
  const taskList = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue === '') {
      return Swal.fire({
        title: 'Oops! Empty task!',
        text: "You can't add a empty task, please type something",
        icon: 'error',
        confirmButtonText: 'Done!',
        timer: 3000,
      });
    } else if (taskList.find(task => task.name === inputValue)) {
      return Swal.fire({
        title: 'This task already exists',
        text: 'Try typing something different',
        icon: 'error',
        confirmButtonText: 'Done!',
        timer: 3000,
      });
    }

    dispatch(createTask(inputValue));
    setInputValue('');
  };

  return (
    <Box p="4" w={{ base: '100%', md: '70%', lg: '50%' }}>
      <form onSubmit={handleSubmit}>
        <FormControl display="flex">
          <Input
            value={inputValue}
            onChange={onInputChange}
            bg={'#edf6f9'}
            color="black"
            boxShadow="md"
            fontSize={{ base: '0.8rem', sm: '1.1rem' }}
          />

          <Button
            type="submit"
            mx="2"
            bg={'blue.400'}
            fontWeight="normal"
            textColor="white"
            boxShadow="md"
          >
            Add
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};
