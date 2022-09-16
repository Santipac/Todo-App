import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { Field, Formik } from 'formik';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { startNewTask, startUpdatingTasks } from '../../store/todos';

export const TodoForm = () => {
  const [inputValue, setInputValue] = useState('');
  const taskList = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue === '') return;

    if (params.id) {
      dispatch(startUpdatingTasks({ id: params.id, name: inputValue }));
      navigate('/');
    } else {
      dispatch(startNewTask(inputValue));
      setInputValue('');
    }
  };

  useEffect(() => {
    if (params.id) {
      const taskFound = taskList.find(task => task.id === params.id);
      setInputValue(taskFound.name);
    }
  }, []);

  return (
    <Box p="2" w={{ base: '100%', md: '70%', lg: '50%' }}>
      <Formik
        initialValues={{
          name: '',
        }}
        onSubmit={({ name }, { resetForm }) => {
          if (name === '') return;

          if (params.id) {
            dispatch(startUpdatingTasks({ id: params.id, name }));
            navigate('/');
          } else {
            dispatch(startNewTask(name));
            resetForm();
          }
        }}
      >
        {({ values, errors, handleSubmit, handleBlur }) => (
          <form onSubmit={handleSubmit}>
            <FormControl isInvalid={!!errors.name}>
              <InputGroup size="md">
                <Field
                  pr="4.5rem"
                  as={Input}
                  name="name"
                  bg={'#edf6f9'}
                  value={values.name}
                  placeholder="Comprar pan"
                  _placeholder={{ color: 'blackAlpha.600' }}
                  color="black"
                  boxShadow="md"
                  fontSize={{ base: '0.8rem', sm: '1.1rem' }}
                  onBlur={handleBlur}
                  validate={value => {
                    let error;
                    if (!value) {
                      error = 'Por favor ingrese al menos 1 carácter';
                    }
                    return error;
                  }}
                />
                <Button
                  type="submit"
                  mx="2"
                  bg={'blue.400'}
                  fontWeight="normal"
                  textColor="white"
                  boxShadow="md"
                  _hover={{}}
                >
                  Crear
                </Button>
              </InputGroup>
              <FormErrorMessage>{errors.name}</FormErrorMessage>
            </FormControl>
          </form>
        )}
      </Formik>
    </Box>
  );
};

{
  /* 

               */
}
